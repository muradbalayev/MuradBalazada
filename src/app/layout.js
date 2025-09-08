import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from './providers'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Murad Balazada",
  description: "React developer",
  openGraph: {
    title: "Murad Balazada - Developer for Web, Mobile and Startups",
    url: "https://muradbalazada.com",
    siteName: "Murad Balazada",
    images: [
      {
        url: "/favicon/icon1.png",
        width: 800,
        height: 600,
        alt: "Murad Balazada",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Murad Balazada - Developer for Web, Mobile and Startups",
    images: ["/favicon/icon1.png"],
   },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"
    suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
