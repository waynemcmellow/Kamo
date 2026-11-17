
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kamohelo Sebata | Digital Marketer",
  description: "Creative digital marketing portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
