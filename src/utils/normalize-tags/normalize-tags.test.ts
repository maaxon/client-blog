import { getValidTags, normalizeTag } from "@/utils/normalize-tags/normalize-tags";

describe("normalizeTag", () => {
  it("should convert tag to lowercase and trim whitespace", () => {
    expect(normalizeTag("  ExampleTag  ")).toBe("exampletag");
  });

  it("should handle an empty string", () => {
    expect(normalizeTag("")).toBe("");
  });

  it("should handle a string with only spaces", () => {
    expect(normalizeTag("    ")).toBe("");
  });
});

describe("getValidTags", () => {
  it("should return an array of normalized tags", () => {
    const tags = ["  Tag1  ", "TAg2", "  tag3   "];
    expect(getValidTags(tags)).toEqual(["tag1", "tag2", "tag3"]);
  });

  it("should filter out empty strings", () => {
    const tags = ["  ", "Tag1", "", "Tag2", "  "];
    expect(getValidTags(tags)).toEqual(["tag1", "tag2"]);
  });

  it("should return an empty array for no valid tags", () => {
    const tags = ["  ", "", "    "];
    expect(getValidTags(tags)).toEqual([]);
  });

  it("should handle undefined input", () => {
    expect(getValidTags(undefined)).toEqual([]);
  });
});