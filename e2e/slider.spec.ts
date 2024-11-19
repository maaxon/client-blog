import { expect, test } from "@playwright/test";

test("test slider next", async ({ page }) => {
  await page.goto("/en/blog");

  await expect(page.getByTestId("post-title").first()).toHaveText("Step-by-step guide to choosing great font pairs");

  await page.getByTestId("next").click();

  await expect(page.getByTestId("post-title").first()).toHaveText("8 Figma design systems that you can download for free today.");

});

test("test slider prev", async ({ page }) => {
  await page.goto("/en/blog");

  await expect(page.getByTestId("post-title").first()).toHaveText("Step-by-step guide to choosing great font pairs");

  await expect(page.getByTestId("prev")).toBeDisabled();
});