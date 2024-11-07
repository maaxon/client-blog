export const normalizeTag = (tag: string): string =>
  tag
    .toLowerCase()
    .trim()

export const getValidTags = (tags: string[] = []): string[] =>
  tags.filter((tag) => tag.trim() !== "").map(normalizeTag);