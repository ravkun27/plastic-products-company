import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PlastiCorp",
  description: "Plastic Products",
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
