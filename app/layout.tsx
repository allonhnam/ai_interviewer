import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Intervue — AI Interview Practice",
  description: "Practice interviews with AI and get focused, actionable feedback.",
  icons: { icon: "/favicon.svg" },
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
