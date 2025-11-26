import type { Metadata } from "next";
import { Cairo, Amiri } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic"],
});

const amiri = Amiri({
  variable: "--font-amiri",
  weight: ["400", "700"],
  subsets: ["arabic"],
});

export const metadata: Metadata = {
  title: "المحامي طارق | مستشار قانوني خبير",
  description: "خدمات قانونية احترافية متخصصة في الدفاع الجنائي، قانون الأسرة، وقانون الشركات.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="scroll-smooth">
      <body
        className={`${cairo.variable} ${amiri.variable} antialiased font-sans bg-gray-900 text-white`}
      >
        {children}
      </body>
    </html>
  );
}
