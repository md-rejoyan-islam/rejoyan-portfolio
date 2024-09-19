import "./globals.css";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { geistMono, geistSans, incognito } from "./fonts/font";
import { StickyNav } from "@/components/shared/StickyNav";
import Socials from "@/components/shared/Socials";
import Footer from "@/components/shared/Footer";
import ScrollToTopButton from "@/components/shared/ScrollToTopButton";

export const metadata = {
  title: "Rejoyan Islam",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${incognito.variable} relative scroll-smooth antialiased text-primary bg-background-secondary`}
        suppressHydrationWarning={true}
      >
        <ThemeProvider
          enableSystem
          attribute="class"
          defaultTheme="light"
          themes={[
            "light",
            "dark",
            "instagram",
            "facebook",
            "discord",
            "netflix",
            "twilight",
            "reddit",
          ]}
        >
          {/* <Navbar /> */}
          <StickyNav />
          <main className="mx-auto max-container  px-4">{children}</main>
          <Socials direction="col" position="fixed" />
          <ScrollToTopButton />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
