# IELTS Imperia

Landing website for the IELTS Imperia Language Academy.
Stack: TanStack Start (React 19) + Vite + Tailwind CSS 4 + Nitro.

## Development

```sh
bun install
cp .env.example .env   # then fill in the values
bun run dev
```

## Environment variables

| Variable             | Where   | Description                                  |
| -------------------- | ------- | -------------------------------------------- |
| `TELEGRAM_BOT_TOKEN` | server  | Bot token from @BotFather (required)         |
| `TELEGRAM_CHAT_ID`   | server  | Chat ID that receives lead form submissions  |

Set the same variables in your hosting provider's dashboard for production.

## Build & deploy

```sh
bun run build
```

Nitro auto-detects the host (Vercel, Netlify, Cloudflare, ...). Locally it
builds a Node server in `.output/` (`node .output/server/index.mjs`).
Override with `NITRO_PRESET=<preset>` if needed.
