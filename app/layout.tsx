import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";
import Navbar from "./components/Navbar";
import GoogleAdsense from "./components/GoogleAdsense";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Savek Blog",
  description: "All about Thai accouting software and tech development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="max-w-2xl mx-auto px-4">{children}</main>
        </ThemeProvider>
      </body>
      <GoogleAdsense pId="1800188805374827" />
    </html>
  );
}
