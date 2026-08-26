import type { Metadata } from "next"

import "./globals.css"
import "@/styles/suisse-intl.css"

const themeScript = `(() => {
  const media = window.matchMedia('(prefers-color-scheme: dark)');
  const apply = () => {
    document.documentElement.classList.toggle('dark', media.matches);
    document.documentElement.style.colorScheme = media.matches ? 'dark' : 'light';
  };
  apply();
  media.addEventListener('change', apply);
})();`

export const metadata: Metadata = {
  title: "Paper Tailwind to StyleX",
  description: "Convert Paper’s Tailwind JSX to StyleX with Tailwind tokens.",
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full">{children}</body>
    </html>
  )
}
