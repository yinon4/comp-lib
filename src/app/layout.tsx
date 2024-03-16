import type { Metadata } from "next";
import { Noto_Sans_Hebrew } from "next/font/google";

import "./globals.css";

const noto = Noto_Sans_Hebrew({ subsets: ["hebrew"] });

export const metadata: Metadata = {
  title: "Component Library",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" className="dark">
      <body className={noto.className}>{children}</body>
    </html>
  );
}
