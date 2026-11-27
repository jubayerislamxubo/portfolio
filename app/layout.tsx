import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MD JUBAYER ISLAM - Full Stack Web Developer",
  description:
    "Portfolio of MD Jubayer Islam, a passionate Full Stack MERN & Next.js Developer specializing in building modern web applications.",
  keywords: [
    "MD Jubayer Islam",
    "Full Stack Developer",
    "MERN Stack",
    "Next.js Developer",
    "Web Developer Portfolio",
  ],
  authors: [{ name: "MD Jubayer Islam" }],
  verification: {
    google: "2Lwklx0abSZ-v2N-mzf9UMHmorVW9tIBYCZ_l2H8WJo",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const clarityId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID || "zkaddybtdf";

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-100">
        {children}

        {clarityId && (
          <Script
            id="microsoft-clarity"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function(c,l,a,r,i,t,y){
                    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "${clarityId}");
              `,
            }}
          />
        )}
      </body>
    </html>
  );
}