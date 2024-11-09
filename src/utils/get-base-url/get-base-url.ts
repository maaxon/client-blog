export const getBaseUrl = (): string => {
  if (process.env.NEXT_PUBLIC_VERCEL_URL) {
    return `https://https://client-blog-tan.vercel.app`;
  }

  return "http://localhost:3000";
};