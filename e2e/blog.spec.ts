import { expect, test } from "@playwright/test";

test("test blog post", async ({ page }) => {
  await page.goto("en/blog");

  const post = page.getByTestId("post-title").first()
  await expect(post).toHaveText("Step-by-step guide to choosing great font pairs")
  await page.getByTestId("post-card").first().click({force:true})

  await expect(page.getByTestId("blog-post-title")).toHaveText("Step-by-step guide to choosing great font pairs");
});