import { Header } from "@/components/global/header";
import AnimatedTooltip from "@/components/ui/animated-tooltip";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import localFont from "next/font/local";
import "./globals.css";

const satoshi = localFont({
  src: [
    { path: "./fonts/Satoshi-Black.ttf", weight: "800" },
    { path: "./fonts/Satoshi-Bold.ttf", weight: "700" },
    { path: "./fonts/Satoshi-Medium.ttf", weight: "500" },
    { path: "./fonts/Satoshi-Regular.ttf", weight: "400" },
  ],
  variable: "--font-satoshi",
});

export const metadata: Metadata = {
  title: "Shadcn Pricing Page",
  description:
    "Modern and customizable pricing component built with Shadcn/UI, featuring responsive design, payment frequency toggles, and tiered plans. Perfect for SaaS and subscription-based projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${satoshi.variable} overflow-x-hidden font-main antialiased`}
      >
        <div className="relative">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            disableTransitionOnChange
          >
            <div className="fixed inset-0 z-0 bg-background">
              <div className="h-full w-full bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:35px_35px] opacity-30 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
            </div>
            <div className="relative z-10">
              <div className="container mx-auto h-[100dvh] px-2">
                <Header />
                {children}
                <footer className="fixed bottom-3.5 whitespace-nowrap left-1/2 mx-auto flex -translate-x-1/2 items-center gap-[0.5ch] text-center text-muted-foreground">
                  <span>Crafted by</span>
                  <AnimatedTooltip
                    label="Ayman Echakar"
                    className="font-semibold text-foreground transition-colors duration-300 ease-out"
                    icon={"/icons/ayman-favicon.svg"}
                    href="https://github.com/aymanch-03"
                  />
                </footer>
              </div>
            </div>
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
