import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Freelancer Skill Gap Analyzer",
  description: "Identify skill gaps in your freelancer profile vs the market. Get AI-powered recommendations to win more bookings."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="faa401bd-33e2-4cd3-baf0-c244ebf8c9c4"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
