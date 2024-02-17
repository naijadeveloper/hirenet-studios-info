import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";

const appFont = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-appfont",
});

export const metadata: Metadata = {
  title: "HireyNet Studios | Information Site",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${appFont.variable} min-h-screen max-w-screen-2xl mx-auto font-appfont antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
