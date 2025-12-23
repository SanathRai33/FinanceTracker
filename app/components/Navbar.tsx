"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiHome, FiBarChart2 } from "react-icons/fi";
import { MdOutlineSavings } from "react-icons/md";
import { RiExchangeDollarLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";

const navItems = [
  { label: "Dashboard", href: "/", icon: <FiHome size={16} /> },
  { label: "Add Transaction", href: "/add-transaction", icon: <RiExchangeDollarLine size={16} /> },
  { label: "Transactions", href: "/transactions", icon: <FaRegUser size={16} /> },
  { label: "Analytics", href: "/analytics", icon: <FiBarChart2 size={16} /> },
  { label: "Savings Goals", href: "/goals", icon: <MdOutlineSavings size={16} /> },
  { label: "Debt Tracker", href: "/debt-tracker", icon: <FaRegUser size={16} /> },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b bg-white/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-600 text-white">
            <FiBarChart2 />
          </div>
          <span className="text-sm font-semibold text-slate-800 sm:text-base">
            FinanceTracker
          </span>
        </div>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-4 text-sm text-slate-600 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-medium transition-all hover:bg-blue-50 hover:text-blue-600"
              >
                <span className="text-blue-500">{item.icon}</span>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="border-t bg-white md:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
          >
            <ul className="space-y-1 px-4 py-3 text-sm text-slate-700">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-2 rounded-md px-2 py-2 transition-colors hover:bg-blue-50 hover:text-blue-600"
                    onClick={() => setOpen(false)}
                  >
                    <span className="text-blue-500">{item.icon}</span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
