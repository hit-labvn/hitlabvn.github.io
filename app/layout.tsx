import "./globals.css";
import { Outfit, Work_Sans } from "next/font/google";
import type { ReactNode } from "react";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-outfit",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-work-sans",
});

export const metadata = {
  title: "HITLAB — Software Engineering & Product Development",
  description:
    "HITLAB builds reliable software, scalable platforms, and modern products for ambitious teams.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${workSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
