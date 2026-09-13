import type { Metadata, Viewport } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "600", "800", "900"],
});

export const metadata: Metadata = {
  title: "Farewell 2026 | Computer Science & Technology - National Polytechnic Institute",
  description: "A cinematic vertical farewell reel for the Batch 2022–2023 of Computer Science & Technology, National Polytechnic Institute.",
  keywords: [
    "Farewell 2026",
    "Computer Science & Technology",
    "National Polytechnic Institute",
    "NPI Farewell",
    "Batch 2023-2026",
  ],
  authors: [{ name: "Department of Computer Science & Technology, NPI" }],
  openGraph: {
    title: "Farewell 2026 | Computer Science & Technology - NPI",
    description: "Experience the cinematic vertical farewell reel for Batch 2023–2026.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#060608",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable} h-full antialiased dark`}>
      <body className="min-h-full bg-[#060608] text-white flex flex-col font-sans select-none">
        {children}
      </body>
    </html>
  );
}

