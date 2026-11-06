import type { Metadata, Viewport } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  weight: ["400", "600", "700", "800", "900"],
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Лапа — ветеринарная клиника в Минске",
  description:
    "Концепт для портфолио: тёплая ветклиника «Лапа» для кошек, собак и других питомцев. Услуги и цены, врачи, отзывы, запись на приём.",
};

export const viewport: Viewport = {
  themeColor: "#fff7ee",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ru" className={nunito.variable}>
      <body>{children}</body>
    </html>
  );
}
