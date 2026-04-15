import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

const vazir = localFont({
  src: [
    {
      path: "../assets/fonts/Vazirmatn-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/Vazirmatn-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
});


/* =========================
   SEO METADATA (ULTIMATE)
========================= */
export const metadata: Metadata = {
  metadataBase: new URL("https://deepchatai.ir"),

  title: {
    default: "DeepChat | چت‌بات فارسی هوشمند برای سایت و کسب‌وکارها",
    template: "%s | DeepChat",
  },

  description:
    "DeepChat یک چت‌ بات فارسی هوشمند با پاسخ‌دهی دقیق، پشتیبانی آنلاین ۲۴ ساعته و دستیار مجازی برای وب‌سایت‌ها و کسب‌وکارهاست.",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    url: "https://deepchatai.ir/",
    title: "DeepChat | چت‌ بات فارسی هوشمند",
    description:
      "چت‌ بات فارسی مبتنی بر هوش مصنوعی برای پاسخ‌دهی خودکار، پشتیبانی آنلاین و افزایش تعامل کاربران.",
    siteName: "DeepChatAI",
    locale: "fa_IR",
    images: [
      {
        url: "https://deepchatai.ir/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "چت‌بات فارسی هوشمند DeepChat",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "DeepChat | چت‌بات فارسی هوشمند",
    description:
      "دستیار هوشمند فارسی برای مکالمه، پاسخ‌دهی دقیق و پشتیبانی آنلاین.",
    images: ["https://deepchatai.ir/og-image.jpg"],
    site: "@DeepChatAI",
  },

  verification: {
    google: "gGOy86LZJ1-mQqiQdnzoSF93v6KOWEbBcgRg8zgnYoA",
  },

  icons: {
    icon: "/BotIcon.png",
    shortcut: "/favicon.ico",
    apple: "/BotIcon.png",
  },

  manifest: "/manifest.json",
};

/* =========================
   ROOT LAYOUT
========================= */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body
        className={`${vazir.className} bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100`}
      >
        {/* =========================
           STRUCTURED DATA (SCHEMA)
        ========================= */}
        <Script
          id="schema-deepchat"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "DeepChat",
              url: "https://deepchatai.ir",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web",
              description:
                "چت‌ بات فارسی هوشمند با پاسخ‌دهی دقیق، پشتیبانی آنلاین ۲۴ ساعته و دستیار مجازی.",
              image: "https://deepchatai.ir/og-image.jpg",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "IRR",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "120",
              },
              publisher: {
                "@type": "Organization",
                name: "DeepChatAI",
                url: "https://deepchatai.ir",
                logo: {
                  "@type": "ImageObject",
                  url: "https://deepchatai.ir/BotIcon.png",
                },
              },
            }),
          }}
        />

        {/* =========================
           APP CONTENT
        ========================= */}
        <ThemeProvider>{children}</ThemeProvider>

        {/* =========================
           CHAT WIDGET ROOT
        ========================= */}
        <div id="widget-root" />

        {/* =========================
           CHAT CONFIG
        ========================= */}
        <Script id="deepchat-config" strategy="afterInteractive">
          {`
            window.DEEPCHAT_CONFIG = {
              siteKey: "a563ef9f-b113-4e11-9db9-76cae3f015f1"
            };
          `}
        </Script>

        {/* =========================
           CHAT SCRIPT
        ========================= */}
        <Script
          src="https://widget.deepchatai.ir/widgetv1.2.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
