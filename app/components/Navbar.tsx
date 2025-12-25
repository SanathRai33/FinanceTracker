"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiHome, FiBarChart2 } from "react-icons/fi";
import { MdOutlineSavings, MdOutlineAccountBalance } from "react-icons/md";
import { RiExchangeDollarLine } from "react-icons/ri";
import { IoWalletOutline } from "react-icons/io5";

const navItems = [
  { label: "Dashboard", href: "/", icon: FiHome },
  { label: "Transactions", href: "/transactions", icon: IoWalletOutline },
  { label: "Analytics", href: "/analytics", icon: FiBarChart2 },
  { label: "Savings Goals", href: "/savings-goals", icon: MdOutlineSavings },
  { label: "Debt Tracker", href: "/debt-tracker", icon: MdOutlineAccountBalance },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled 
            ? "bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm" 
            : "bg-white border-b border-gray-100"
        }`}
      >
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-sm">
                {/* <FiBarChart2 size={20} /> */}
                ₹
              </div>
              <span className="text-lg font-bold text-gray-900">FinanceTracker</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
                      active
                        ? "bg-blue-50 text-blue-700"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                  >
                    <Icon 
                      size={18} 
                      className={active ? "text-blue-600" : "text-gray-500"} 
                    />
                    {item.label}
                  </Link>
                );
              })}
            </div>

            {/* User Profile */}
            <div className="hidden md:flex md:items-center">
              <div className="ml-4 flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-400 to-blue-600"></div>
                <div className="hidden lg:block">
                  <p className="text-sm font-medium text-gray-900">John Doe</p>
                  <p className="text-xs text-gray-500">Premium User</p>
                </div>
              </div>
            </div>

            {/* Mobile menu button */}
            <button
              className="inline-flex items-center justify-center rounded-lg p-2 text-gray-700 hover:bg-gray-100 md:hidden"
              onClick={() => setOpen(!open)}
              aria-label="Toggle navigation"
            >
              {open ? (
                <FiX size={24} className="text-gray-700" />
              ) : (
                <FiMenu size={24} className="text-gray-700" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {open && (
            <>
              {/* Backdrop */}
              <motion.div
                className="fixed inset-0 z-40 bg-black/20 md:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setOpen(false)}
              />
              
              {/* Menu Panel */}
              <motion.div
                className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white shadow-xl md:hidden"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "tween", duration: 0.3 }}
              >
                <div className="flex h-16 items-center justify-between border-b border-gray-100 px-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 text-white">
                      <FiBarChart2 size={20} />
                    </div>
                    <span className="text-lg font-bold text-gray-900">FinanceTracker</span>
                  </div>
                  <button
                    onClick={() => setOpen(false)}
                    className="rounded-lg p-2 hover:bg-gray-100"
                    aria-label="Close menu"
                  >
                    <FiX size={20} className="text-gray-700" />
                  </button>
                </div>

                <div className="h-[calc(100vh-64px)] overflow-y-auto px-6 py-4">
                  {/* User Profile */}
                  <div className="mb-6 flex items-center gap-3 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 p-4">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-400 to-blue-600"></div>
                    <div>
                      <p className="font-medium text-gray-900">John Doe</p>
                      <p className="text-sm text-gray-600">Premium User</p>
                    </div>
                  </div>

                  {/* Navigation Links */}
                  <nav className="space-y-1">
                    {navItems.map((item) => {
                      const Icon = item.icon;
                      const active = isActive(item.href);
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={`flex items-center gap-3 rounded-xl px-4 py-3.5 text-sm font-medium transition-colors ${
                            active
                              ? "bg-blue-50 text-blue-700"
                              : "text-gray-700 hover:bg-gray-50"
                          }`}
                        >
                          <Icon 
                            size={20} 
                            className={active ? "text-blue-600" : "text-gray-500"} 
                          />
                          {item.label}
                          {active && (
                            <div className="ml-auto h-2 w-2 rounded-full bg-blue-600"></div>
                          )}
                        </Link>
                      );
                    })}
                  </nav>

                  {/* Mobile Footer */}
                  <div className="absolute bottom-0 left-0 right-0 border-t border-gray-100 p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">Total Balance</p>
                        <p className="text-lg font-bold text-gray-900">$12,456.78</p>
                      </div>
                      <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
                        Add Funds
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}