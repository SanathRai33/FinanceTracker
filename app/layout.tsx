// app/layout.tsx
"use client";

import "./globals.css";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import QueryProvider from "../src/providers/QueryProvider";
import ThemeProvider from "../src/providers/ThemeProvider";
import ErrorBoundary from "../src/components/ErrorBoundary";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { Toaster } from "sonner";
import Head from "next/head";

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
      <Head>
        <title>Finance Tracker - Manage Your Money</title>
        <meta name="description" content="Track your income, expenses, savings goals, and debt with our comprehensive finance management tool." />
        <meta name="keywords" content="finance, money management, budgeting, savings, debt tracking" />
        <meta name="author" content="Finance Tracker Team" />
        <meta property="og:title" content="Finance Tracker - Manage Your Money" />
        <meta property="og:description" content="Track your income, expenses, savings goals, and debt with our comprehensive finance management tool." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body className="flex min-h-screen flex-col bg-blue-50 text-black dark:bg-gray-900 dark:text-white">
        <ErrorBoundary>
          <ThemeProvider>
            <QueryProvider>
              <Shell>
                {children}
                <Toaster position="top-right" richColors />
              </Shell>
            </QueryProvider>
          </ThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
