import "@/styles/globals.scss";

import React from "react";
import type { Metadata } from "next";
import { Inter, Sen } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export const metadata: Metadata = {
  title: "Modsen Client Blog",
  description: "Generated by create next app",
};

const sen = Sen({
  subsets: ["latin"],
  variable: "--font-sen",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string; }>;
}>;


export default async function LocaleLayout({ children, params }: RootLayoutProps) {
  const messages = await getMessages();
  const { locale } = await params;
  return (
    <html lang={locale}>
    <body className={`${sen.variable} ${inter.variable}`}>
    <NextIntlClientProvider messages={messages}>
      <Header/>
      {children}
      <Footer/>
    </NextIntlClientProvider>
    </body>
    </html>
  );
}