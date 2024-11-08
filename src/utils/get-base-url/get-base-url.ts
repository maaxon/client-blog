export const getBaseUrl = (): string => {
  if (process.env.NEXT_PUBLIC_URL) {
    return `https://${process.env.NEXT_PUBLIC_URL}`;
  }

  return "http://localhost:3000";
};
