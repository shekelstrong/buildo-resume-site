import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Резюме под вакансию — Buildo Resume",
  description: "AI-оптимизация резюме за 60 секунд. ATS-friendly",
  themeColor: "#0EA5E9",
  openGraph: {
    title: "Buildo Resume",
    description: "AI-оптимизация резюме за 60 секунд. ATS-friendly",
    type: "website",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className="dark">
      <body className="bg-bg text-ink antialiased">{children}</body>
    </html>
  )
}
