// app/layout.tsx
"use client";

import "./globals.css";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import QueryProvider from "../src/providers/QueryProvider";
import ThemeProvider from "../src/providers/ThemeProvider";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { Toaster } from "sonner";

const AUTH_FREE_ROUTES = ["/login"];

function Shell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const hideChrome = AUTH_FREE_ROUTES.includes(pathname);

  if (hideChrome) {
    return <>{children}</>;
  }

  return (
    <>
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-blue-50 text-black dark:bg-gray-900 dark:text-white">
        <ThemeProvider>
          <QueryProvider>
            <Shell>
              {children}
              <Toaster position="top-right" richColors />
            </Shell>
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
