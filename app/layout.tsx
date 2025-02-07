import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

// const geistMono = geistMono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Birohmatika - IT Solutions",
  description: "Solusi Aplikasi untuk Bisnis Anda",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased`}>{children}</body>
    </html>
  );
}
