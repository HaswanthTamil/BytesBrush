// /app/layout.tsx

import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "BytesBrush",
  description: "Meet the team",
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
