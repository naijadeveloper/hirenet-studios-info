import type { Metadata } from "next";
import { Poppins as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";

const fontSans = FontSans({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
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
        className={cn(
          "min-h-screen max-w-screen-2xl mx-auto bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <>
          {children}
          <Toaster />
        </>
      </body>
    </html>
  );
}
