import type { Metadata } from "next";
import { Inter } from "next/font/google";

// Domestic imports
import { Providers } from "./providers";
import Header from "@/components/header/header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "UrNotes - Streamlining Task Management, Challenges, and Time Management",
  description:
    "Elevate your productivity with UrNotes — simplifying task management with seamless efficiency and mastering your time effectively.",
  creator: "Al Siam",
  manifest: "/site.webmanifest"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
