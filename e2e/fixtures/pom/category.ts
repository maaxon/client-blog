import { type Locator, type Page } from "@playwright/test";

const locators = {
  header: "category-title",
  searchInput: "search-input",
  categoryLink: "category-link",
};

export class CategoryPage {
  readonly page: Page;
  readonly getStartedHeader: Locator;
  readonly initialCategory: string;
  readonly categoryList: string[];

  constructor(page: Page) {
    this.page = page;
    this.getStartedHeader = this.page.getByTestId(locators.header);
    this.initialCategory = "startup";
    this.categoryList = ["startup", "business", "economy", "technology"];
  }

  async goto(category: string) {
    await this.page.goto(`en/category/${category}`);
  }

  async getStarted() {
    await this.goto(this.initialCategory);
  }

  async changeCategory(category: string) {
    const categoryIdx = this.categoryList.indexOf(category);
    if (categoryIdx === -1) {
      throw new Error(`Category ${category} not found`);
    }
    await this.page.getByTestId(locators.categoryLink).nth(categoryIdx).click({ force: true });
  }

  async searchTag(text: string) {
    await this.page.getByTestId(locators.searchInput).fill(text);
  }
}