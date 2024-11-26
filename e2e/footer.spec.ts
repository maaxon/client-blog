import { expect, test } from "@playwright/test";

test("valid email", async ({ page }) => {
  await page.goto("/en");

  await page.getByTestId("footer-email").fill("test@example.com");

  await expect(page.getByTestId("footer-error")).not.toBeVisible();
});

test("invalid email", async ({ page }) => {
  await page.goto("/en");
  const inputLocator = page.getByTestId("footer-email");
  await inputLocator.fill("example.com");
  await expect(page.getByTestId("footer-error")).toHaveText("Invalid email");
});