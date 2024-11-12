import Footer from "@/components/shared/Footer";
import ScrollToTopButton from "@/components/shared/ScrollToTopButton";
import Socials from "@/components/shared/Socials";
import { StickyNav } from "@/components/shared/StickyNav";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { Spotlight } from "@/components/ui/spotlight";
import { geistMono, geistSans, incognito } from "./fonts/font";
import "./globals.css";

export const metadata = {
  title: "Rejoyan Islam",
  description:
    "I'm a passionate full stack web developer who loves to build things for the web. I specialize in creating fast, responsive, and accessible websites. I'm always looking for new opportunities to learn and grow as a developer.",
  image: "/rejoyan.jpeg",
  url: "https://rejoyan.vercel.app",
  type: "website",
  siteName: "Rejoyan Islam",
  twitterUsername: "@rejoyan_islam",
  keywords: [
    "Rejoyan Islam",
    "Rejoyan",
    "Islam",
    "web developer",
    "full stack developer",
    "react developer",
    "nextjs developer",
    "portfolio",
    "web developer portfolio",
    "web developer portfolio website",
    "web developer portfolio website template",
    "web developer portfolio website template free",
    "web developer portfolio website template free download",
    "web developer portfolio website template free download html",
    "web developer portfolio website template free download react",
    "web developer portfolio website template free download nextjs",
    "web developer portfolio website template free download reactjs",
    "md rejoyan islam",
    "md rejoyan",
    "rejoyan islam",
    "rejoyan",
    "islam",
    "nodejs developer",
    "expressjs developer",
    "mongodb developer",
  ],
  openGraph: {
    type: "website",
    url: "https://rejoyan.vercel.app",
    title: "Rejoyan Islam",
    description:
      "I'm a passionate full stack web developer who loves to build things for the web. I specialize in creating fast, responsive, and accessible websites. I'm always looking for new opportunities to learn and grow as a developer.",
    siteName: "Rejoyan Islam",
    images: [
      {
        url: "/rejoyan.jpeg",
        width: 1200,
        height: 630,
        alt: "Rejoyan Islam",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${incognito.variable} relative scroll-smooth antialiased text-primary bg-background-secondary overflow-x-hidden`}
        suppressHydrationWarning={true}
      >
        {/* <LoadingWrapper> */}
        <ThemeProvider
          enableSystem
          attribute="class"
          defaultTheme="light"
          themes={[
            "light",
            "dark",
            // "instagram",
            // "facebook",
            // "discord",
            // "netflix",
            // "twilight",
            // "reddit",
          ]}
        >
          <StickyNav />

          <Spotlight
            className="top-40 left-0 md:left-96 md:top-0 z-50  "
            fill="rgba(16, 163, 233, .7)"
          />

          <main className="mx-auto max-container  px-4">{children}</main>
          <Socials direction="col" position="fixed" />
          <ScrollToTopButton />
          <Footer />
        </ThemeProvider>
        {/* </LoadingWrapper> */}
      </body>
    </html>
  );
}
