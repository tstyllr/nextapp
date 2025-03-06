import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI增长精灵",
  description: "复利又增长",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" data-theme="lemonade,coffee">
      <body>
        {children}
      </body>
    </html>
  );
}
