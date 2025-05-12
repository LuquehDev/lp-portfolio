
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/components/theme-provider";
import { SiteHeader } from "@/components/components/header-component";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "LP Portfolio",
  description: "Front-end portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <SiteHeader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
