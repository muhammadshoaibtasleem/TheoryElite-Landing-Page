import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://theoryelite.com"),
  title: "Theory Elite — Master Business Theory Through Quiz Battles",
  description:
    "The #1 gamified quiz app for business students. 1v1 battles, flashcards, timed quizzes, and daily challenges across multiple business subjects. Download free on iOS.",
  keywords:
    "business quiz app, MBA study, marketing management quiz, finance quiz, quiz battles, exam prep, business student app, flashcards",
  openGraph: {
    title: "Theory Elite — Master Business Theory Through Quiz Battles",
    description:
      "Multiple subjects. Real-time 1v1 battles. Daily challenges. The gamified quiz app that makes studying business addictive.",
    url: "https://theoryelite.com",
    siteName: "Theory Elite",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Theory Elite — Master Business Theory Through Quiz Battles",
    description:
      "Multiple subjects. Real-time 1v1 battles. Daily challenges. The gamified quiz app that makes studying business addictive.",
  },
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MobileApplication",
              name: "Theory Elite: MBA & Business",
              operatingSystem: "iOS",
              applicationCategory: "EducationApplication",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                ratingCount: "100",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {/* Preloader — shows instantly, hides when React hydrates */}
        <div
          id="preloader"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#0A0A14",
            transition: "opacity 0.4s ease",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <img
              src="/app-icon.png"
              alt=""
              width={64}
              height={64}
              style={{
                borderRadius: 16,
                animation: "pulse 1.5s ease-in-out infinite",
              }}
            />
            <p
              style={{
                color: "#94A3B8",
                fontSize: 14,
                marginTop: 16,
                fontFamily: "Inter, system-ui, sans-serif",
              }}
            >
              Loading...
            </p>
          </div>
          <style
            dangerouslySetInnerHTML={{
              __html: `@keyframes pulse{0%,100%{opacity:.6;transform:scale(1)}50%{opacity:1;transform:scale(1.05)}}`,
            }}
          />
        </div>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.addEventListener('load',function(){var p=document.getElementById('preloader');if(p){p.style.opacity='0';setTimeout(function(){p.remove()},400)}})`,
          }}
        />
        {children}
      </body>
    </html>
  );
}
