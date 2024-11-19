import { expect, test } from "@playwright/test";

test("test blog post", async ({ page }) => {
  await page.goto("en/category/startup");

  await expect(page.getByTestId("category-title")).toHaveText("startup")
  await page.getByTestId("category-link").nth(1).click({force:true})
  await expect(page.getByTestId("category-title")).toHaveText("business")

 });