// app/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MainHeader from "./MainHeader";
import Footer from "./Footer"; // 👈 tärkeä: default-import

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Wrap Point — demo layout",
  description:
    "Auton yliteippaus, PPF, teippaukset, lasien tummennukset ja pinnoitteet.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fi">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-slate-950 text-slate-50 antialiased`}
      >
        <MainHeader />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
