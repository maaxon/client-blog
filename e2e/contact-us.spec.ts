import { expect, test } from "@playwright/test";

import { InvalidData, ValidData } from "./fixtures/contact-us";

test.describe("Contact Us", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("en/contact-us");
  });

  test("invalid email", async ({ page }) => {
    await page.locator("input[name=email]").first().fill(InvalidData.email);
    await expect(page.getByTestId("email-error")).toBeVisible();
  });

  test("invalid name", async ({ page }) => {
    await page.locator("input[name=name]").first().fill(InvalidData.name);
    await expect(page.getByTestId("name-error")).toBeVisible();
  });

  test("invalid message", async ({ page }) => {
    await page.locator("textarea[name=message]").first().fill(InvalidData.message);
    await expect(page.getByTestId("message-error")).toBeVisible();
  });

  test("valid email", async ({ page }) => {
    await page.locator("input[name=email]").first().fill(ValidData.email);
    await expect(page.getByTestId("email-error")).not.toBeVisible();
  });

  test("valid name", async ({ page }) => {
    await page.locator("input[name=name]").first().fill(ValidData.name);
    await expect(page.getByTestId("name-error")).not.toBeVisible();
  });

  test("valid message", async ({ page }) => {
    await page.locator("textarea[name=message]").first().fill(ValidData.message);
    await expect(page.getByTestId("message-error")).not.toBeVisible();
  });
});