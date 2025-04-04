import type { Metadata } from "next";
import { ThemeProvider } from 'next-themes';
import { Bebas_Neue } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  variable: "--font-bebas-neue",
  display: "swap",
  weight: "400"
});

export const metadata: Metadata = {
  title: "Jian Bing",
  description: "My Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={`${bebasNeue.variable} ${bebasNeue.variable} antialiased`}
      >
        <ThemeProvider forcedTheme="dark" attribute="class">{children}</ThemeProvider>
      </body>
    </html>
  );
}
