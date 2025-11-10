import { test, expect } from "@playwright/test";

test("Become a Partner navigates and scrolls to #contact", async ({ page }) => {
  await page.goto("http://localhost:5173/");
  await page.getByRole("link", { name: /become a partner/i }).click();
  await page.waitForURL(/\/partners#contact/);
  const contact = page.locator("#contact");
  await expect(contact).toBeVisible();
  // Ensure element is near top after scroll
  const bbox = await contact.boundingBox();
  expect(bbox?.y ?? 1000).toBeLessThan(120);
});
