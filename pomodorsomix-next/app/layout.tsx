import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";

const DESCRIPTION =
  "Pomodorso: A Pomodoro Timer, a Breathing App, and a Word Processor All In One!";

export const metadata: Metadata = {
  metadataBase: new URL("https://pomodorso.vercel.app"),
  title: "Pomodorso",
  description: DESCRIPTION,
  openGraph: {
    title: "Pomodorso",
    description: DESCRIPTION,
    url: "/",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Pomodorso — the bear wakes as your focus session progresses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pomodorso",
    description: DESCRIPTION,
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
