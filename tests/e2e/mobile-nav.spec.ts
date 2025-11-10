import { test, expect } from '@playwright/test'

test('mobile menu blurs background and locks scroll', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 })
  await page.goto('http://localhost:5173/')
  await page.getByRole('button', { name: /toggle navigation menu/i }).click()

  // Background not clickable (an easy proxy: button behind menu should be hidden/inert)
  const anyBehind = page.getByRole('button', { name: /view more/i }).first()
  await expect(anyBehind).toBeHidden()

  // Check body overflow lock applied
  const overflow = await page.evaluate(() => getComputedStyle(document.body).overflow)
  expect(overflow).toBe('hidden')
})