import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Better Auth Demo",
  description:
    "A secure and modern authentication demonstration using Better Auth",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-serif font-semibold">{children}</body>
    </html>
  );
}
