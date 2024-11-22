import { expect, test } from "@playwright/test";

import { CategoryPage } from "./fixtures/pom/pom";

test("test initial page", async ({page}) => {
  const CategoryPageModel = new CategoryPage(page);
  await CategoryPageModel.getStarted();
  await expect(page.getByTestId("category-title")).toHaveText(CategoryPageModel.initialCategory);
})

test("test category selection", async ({ page }) => {
  const CategoryPageModel = new CategoryPage(page);
  await CategoryPageModel.goto("startup");
  await CategoryPageModel.changeCategory("business");
  await expect(page.getByTestId("category-title")).toHaveText("business")
});

test("test category search", async ({page}) => {
  const CategoryPageModel = new CategoryPage(page);
  await CategoryPageModel.getStarted();
  await CategoryPageModel.searchTag("tttt")
  await expect(page.getByTestId("no-posts")).toBeVisible()
})