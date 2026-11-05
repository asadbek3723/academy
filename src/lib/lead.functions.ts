import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const esc = (s: string) => s.replace(/[&<>]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" })[c]!);

export const sendLead = createServerFn({ method: "POST" })
  .inputValidator((d) =>
    z.object({
      name: z.string().trim().min(1).max(100),
      phone: z.string().trim().min(3).max(40),
      course: z.string().trim().max(100),
      lang: z.string().max(5),
    }).parse(d),
  )
  .handler(async ({ data }) => {
    const token = process.env["TELEGRAM_BOT_TOKEN"];
    const chatId = process.env["TELEGRAM_CHAT_ID"];
    if (!token) throw new Error("TELEGRAM_BOT_TOKEN is not configured");
    if (!chatId) throw new Error("TELEGRAM_CHAT_ID is not configured");
    const text =
      `🔥 <b>New request — IELTS Imperia</b>\n\n` +
      `👤 <b>Name:</b> ${esc(data.name)}\n📞 <b>Phone:</b> ${esc(data.phone)}\n` +
      `📚 <b>Course:</b> ${esc(data.course)}\n🌐 <b>Language:</b> ${esc(data.lang.toUpperCase())}`;
    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text, parse_mode: "HTML" }),
    });
    if (!res.ok) {
      const body = await res.text();
      console.error(`Telegram failed [${res.status}]: ${body}`);
      throw new Error(`Telegram failed [${res.status}]`);
    }
    return { ok: true };
  });
