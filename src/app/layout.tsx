import "./globals.css";
import { Roboto } from "next/font/google";
import { headers } from "next/headers";
import BaseLayout from "@/components/common/BaseLayout";

const font = Roboto({ subsets: ["latin"], weight: "400" });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-Br">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={font.className}>
        <BaseLayout>{children}</BaseLayout>
      </body>
    </html>
  );
}

export async function generateMetadata() {
  const headersList = headers();

  const pathname = headersList.get("x-invoke-path") || "";
  const lang = pathname.split("/")[1];
  const path = pathname.split(lang)[1] || "/";
  //   const translation = TRANSLATION_FILES[lang];
  //   const key = PAGE_TITLE[path]

  let pageTitle = "";
  //   if (path && lang && translation && translation[key]) {
  //     pageTitle = ` - ${translation[key]}`
  //   }

  return {
    title: `Bloom Books${pageTitle}`,
  };
}
