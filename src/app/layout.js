import { Plus_Jakarta_Sans, Sora } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

export const metadata = {
  title: "Jokoweb — Jasa Pembuatan Website Profesional",
  description:
    "Jasa pembuatan website profesional untuk UMKM dan bisnis lokal. Terjangkau, cepat, dan ada yang merawat setelah selesai.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${plusJakartaSans.variable} ${sora.variable}`}>
        {children}

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1N90L19LMD"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1N90L19LMD');
          `}
        </Script>
      </body>
    </html>
  );
}
