import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Figtree } from "next/font/google";



export const metadata: Metadata = {
  title: 'ZYROXstore: Premium Tech Accessories & Gadgets',
  description: 'Discover innovative tech accessories, smart wearables, and essential gadgets at ZYROXstore. Elevate your everyday with quality and style.',
  keywords: ["ZYROXstore, tech accessories, gadgets, smart wearables, earbuds, phone cases, electronics, shopify store"],
  openGraph: {
    "title": "ZYROXstore: Premium Tech Accessories & Gadgets",
    "description": "Discover innovative tech accessories, smart wearables, and essential gadgets at ZYROXstore. Elevate your everyday with quality and style.",
    "url": "https://www.zyroxstore.com",
    "siteName": "ZYROXstore",
    "images": [
      {
        "url": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EnocOVqmHtsUNOn4fV5IQGT18u/uploaded-1780823818959-w47yt78j.png",
        "alt": "ZYROXstore hero background with logo"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "ZYROXstore: Premium Tech Accessories & Gadgets",
    "description": "Discover innovative tech accessories, smart wearables, and essential gadgets at ZYROXstore. Elevate your everyday with quality and style.",
    "images": [
      "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EnocOVqmHtsUNOn4fV5IQGT18u/uploaded-1780823818959-w47yt78j.png"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"]
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${figtree.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
