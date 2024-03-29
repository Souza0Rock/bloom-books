import "./globals.css";
import { Metadata } from "next";
import { Roboto } from "next/font/google";
import BaseLayout from "@/components/common/BaseLayout";

const font = Roboto({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Bloom Books",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-Br">
      <body className={font.className}>
        <BaseLayout>{children}</BaseLayout>
      </body>
    </html>
  );
}
