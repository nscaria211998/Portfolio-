import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Nikhil Scaria | Senior Data Scientist & AI/ML Engineer",
  description: "Senior Data Scientist at Alcon specializing in AI/ML, Computer Vision, and Digital Twin technologies for ophthalmology and surgical applications",
  openGraph: {
    title: "Nikhil Scaria | Senior Data Scientist & AI/ML Engineer",
    description: "Senior Data Scientist at Alcon specializing in AI/ML, Computer Vision, and Digital Twin technologies for ophthalmology and surgical applications",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
