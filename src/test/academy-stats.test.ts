import { describe, expect, it } from "vitest";
import { DICTS } from "@/lib/i18n";

describe("Academy headline statistic", () => {
  it("shows the requested band 8.0 in every supported language", () => {
    for (const lang of ["en", "ru", "uz"] as const) {
      expect(DICTS[lang].stats[1]?.v).toBe(8);
      expect(DICTS[lang].stats[1]?.s).toBe(".0");
    }
  });
});