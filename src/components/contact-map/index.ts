import dynamic from "next/dynamic";

export const ContactMap = dynamic(
  async () =>
    (await import("./contact-map")).ContactMap,
  { ssr: false },
);