import type { Metadata } from "next";
import "./globals.css";
import "../utils/fontawesome"; // Importa tu configuración de Font Awesome
import { Providers } from "./providers";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Inter, Nerko_One, } from 'next/font/google';


const inter = Inter({ subsets: ["latin"] });
const nerkoOne = Nerko_One({ subsets: ['latin'], weight: '400' });


export const metadata: Metadata = {
  title: "ClauDev",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Nerko+One&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={nerkoOne.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
