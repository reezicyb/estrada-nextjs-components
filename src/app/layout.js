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
  title: "Raiko Estrada Profile",
  description: "Profile Page Assignment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen bg-gradient-to-b from-[#1a1a2e] via-[#2a1f4d] to-[#1a1a2e] text-gray-200 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
