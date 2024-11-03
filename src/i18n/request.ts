import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

import { routing } from "./routing";

const requestConfig: ReturnType<typeof getRequestConfig> = getRequestConfig(
  async ({ requestLocale }) => {
    const locale = await requestLocale;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    if (!locale && !routing.locales.includes(locale as string)) notFound();

    return {
      messages: (await import(`../../messages/${locale}.json`)).default,
    };
  },
);

export default requestConfig;