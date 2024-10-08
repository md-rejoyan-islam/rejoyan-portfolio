import localFont from "next/font/local";

export const incognito = localFont({
  src: [
    {
      path: "incognito_bold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "incognito_condensed.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "incognito_medium.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "incognito_regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--incognito",
  display: "swap",
});
export const geistSans = localFont({
  src: "GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
export const geistMono = localFont({
  src: "GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
