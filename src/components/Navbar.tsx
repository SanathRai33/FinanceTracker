"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiMenu,
  FiX,
  FiHome,
  FiBarChart2,
  FiLogOut,
  FiUser,
  FiSettings,
  FiCreditCard,
  FiBell,
  FiMoon,
  FiSun,
} from "react-icons/fi";
import {
  MdOutlineSavings,
  MdOutlineAccountBalance,
  MdOutlineNotifications,
} from "react-icons/md";
import { RiExchangeDollarLine } from "react-icons/ri";
import { IoWalletOutline } from "react-icons/io5";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useCurrentUser, useLogout } from "@/src/hooks/useAuth";
import { useTheme } from "@/src/providers/ThemeProvider";
import Logo from "@/src/assets/images/Logo.png";

const navItems = [
  { label: "Dashboard", href: "/", icon: FiHome },
  { label: "Transactions", href: "/transactions", icon: IoWalletOutline },
  { label: "Analytics", href: "/analytics", icon: FiBarChart2 },
  { label: "Savings Goals", href: "/savings-goals", icon: MdOutlineSavings },
  {
    label: "Debt Tracker",
    href: "/debt-tracker",
    icon: MdOutlineAccountBalance,
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const { theme, toggleTheme } = useTheme();
  const { data: user, isLoading: meLoading } = useCurrentUser();
  const { mutate: logout, isPending: isLoggingOut } = useLogout();

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

  const handleLogout = async () => {
    try {
      await logout();
      router.push("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  // Get user initials for avatar fallback
  const getUserInitials = () => {
    if (!user?.name) return "U";
    return user.name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm dark:bg-gray-800/95 dark:border-gray-700"
            : "bg-white border-b border-gray-100 dark:bg-[#121214] dark:border-gray-700"
        }`}
      >
        <nav className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12">
                <Image
                  src={Logo}
                  alt="FinanceTracker Logo"
                  fill
                  sizes="48px"
                  className="object-contain"
                  priority
                />
              </div>

              <span className="text-lg font-bold text-gray-900 dark:text-white">
                FinanceTracker
              </span>
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
                        ? "bg-white text-blue-700 dark:bg-[#1e1f20] dark:text-blue-300"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
                    }`}
                  >
                    <Icon
                      size={18}
                      className={active ? "text-blue-600 dark:text-blue-400" : "text-gray-500 dark:text-gray-400"}
                    />
                    {item.label}
                  </Link>
                );
              })}
            </div>

            {/* User Profile & Notifications */}
            <div className="items-center hidden gap-4 lg:flex">
              {/* Notifications */}
              <Button
                variant="ghost"
                size="icon"
                className="relative hidden rounded-full md:flex"
              >
                <FiBell size={20} className="text-gray-600" />
                <span className="absolute flex items-center justify-center w-5 h-5 text-xs text-white bg-red-500 rounded-full -top-1 -right-1">
                  3
                </span>
              </Button>

              {/* Profile Dropdown */}
              {/* Mobile user info (only visible on desktop) */}
              <div className="hidden ml-2 lg:block">
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  {user?.name || "Loading..."}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {meLoading ? "Loading..." : user?.email || "Free Plan"}
                </p>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="relative w-10 h-10 p-0 rounded-full hover:bg-gray-100"
                  >
                    <Avatar className="w-10 h-10 border-2 border-white">
                      <AvatarImage src={user?.avatarUrl} alt={user?.name} />
                      <AvatarFallback className="text-white bg-linear-to-br from-blue-500 to-blue-700">
                        {getUserInitials()}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-56 text-black bg-white dark:bg-gray-800 dark:text-white"
                  align="center"
                  forceMount
                >
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">
                        {user?.name || "John Doe"}
                      </p>
                      <p className="text-xs leading-none text-gray-500 dark:text-gray-400">
                        {user?.email || "john.doe@example.com"}
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />

                  <DropdownMenuItem asChild>
                    <Link href="/profile" className="cursor-pointer">
                      <FiUser className="w-4 h-4 mr-2" />
                      <span>Profile</span>
                    </Link>
                  </DropdownMenuItem>

                  <DropdownMenuItem asChild>
                    <Link href="/billing" className="cursor-pointer">
                      <FiCreditCard className="w-4 h-4 mr-2" />
                      <span>Billing</span>
                    </Link>
                  </DropdownMenuItem>

                  <DropdownMenuItem asChild>
                    <Link href="/settings" className="cursor-pointer">
                      <FiSettings className="w-4 h-4 mr-2" />
                      <span>Settings</span>
                    </Link>
                  </DropdownMenuItem>

                  <DropdownMenuItem asChild>
                    <button onClick={toggleTheme} className="w-full text-left cursor-pointer">
                      {theme === "light" ? (
                        <FiMoon className="w-4 h-4 mr-2" />
                      ) : (
                        <FiSun className="w-4 h-4 mr-2" />
                      )}
                      <span>{theme === "light" ? "Dark Mode" : "Light Mode"}</span>
                    </button>
                  </DropdownMenuItem>

                  <DropdownMenuSeparator />

                  <DropdownMenuItem
                    onClick={handleLogout}
                    disabled={isLoggingOut}
                    className="text-red-600 cursor-pointer focus:text-red-600"
                  >
                    <FiLogOut className="w-4 h-4 mr-2" />
                    <span>{isLoggingOut ? "Logging out..." : "Log out"}</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Mobile menu button */}
            <button
              className="inline-flex items-center justify-center p-2 text-gray-700 rounded-lg hover:bg-gray-100 md:hidden"
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
                className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white shadow-xl dark:bg-gray-800 md:hidden"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "tween", duration: 0.3 }}
              >
                <div className="flex items-center justify-between h-16 px-6 border-b border-gray-100 dark:border-gray-700">
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12">
                      <Image
                        src={Logo}
                        alt="FinanceTracker Logo"
                        fill
                        className="object-contain"
                        priority
                      />
                    </div>
                    <span className="text-lg font-bold text-gray-900 dark:text-white">
                      FinanceTracker
                    </span>
                  </div>
                  <button
                    onClick={() => setOpen(false)}
                    className="p-2 rounded-lg hover:bg-gray-100"
                    aria-label="Close menu"
                  >
                    <FiX size={20} className="text-gray-700" />
                  </button>
                </div>

                <div className="h-[calc(100vh-64px)] overflow-y-auto px-6 py-4">
                  {/* User Profile */}
                  <div className="flex items-center gap-3 p-4 mb-6 rounded-xl bg-linear-to-r from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-600">
                    <Avatar className="w-12 h-12 border-2 border-white">
                      <AvatarImage
                        src={user?.avatarUrl || ""}
                        alt={user?.name || "User"}
                      />
                      <AvatarFallback className="text-white bg-linear-to-r from-blue-400 to-blue-600">
                        {getUserInitials()}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">
                        {user?.name || "Loading..."}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {meLoading ? "Loading..." : user?.email || "Free Plan"}
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="ml-auto rounded-full"
                    >
                      <MdOutlineNotifications
                        size={20}
                        className="text-gray-600"
                      />
                      <span className="absolute flex items-center justify-center w-5 h-5 text-xs text-white bg-red-500 rounded-full -top-1 -right-1">
                        3
                      </span>
                    </Button>
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
                              ? "bg-blue-50 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300"
                              : "text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700"
                          }`}
                        >
                          <Icon
                            size={20}
                            className={
                              active ? "text-blue-600 dark:text-blue-400" : "text-gray-500 dark:text-gray-400"
                            }
                          />
                          {item.label}
                          {active && (
                            <div className="w-2 h-2 ml-auto bg-blue-600 rounded-full"></div>
                          )}
                        </Link>
                      );
                    })}
                  </nav>

                  {/* Mobile User Menu */}
                  <div className="pt-6 mt-6 border-t border-gray-100">
                    <div className="space-y-1">
                      <Link
                        href="/profile"
                        className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-700 rounded-xl hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700"
                      >
                        <FiUser size={18} className="text-gray-500" />
                        Profile
                      </Link>
                      <Link
                        href="/settings"
                        className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-700 rounded-xl hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700"
                      >
                        <FiSettings size={18} className="text-gray-500" />
                        Settings
                      </Link>
                      <Link
                        href="/billing"
                        className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-700 rounded-xl hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700"
                      >
                        <FiCreditCard size={18} className="text-gray-500" />
                        Billing
                      </Link>
                    </div>

                    <button
                      onClick={handleLogout}
                      disabled={isLoggingOut}
                      className="flex items-center w-full gap-3 px-4 py-3 mt-4 text-sm font-medium text-red-600 rounded-xl hover:bg-red-50 disabled:opacity-50"
                    >
                      <FiLogOut size={18} />
                      {isLoggingOut ? "Logging out..." : "Log out"}
                    </button>
                  </div>

                  {/* Mobile Footer */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-100 dark:border-gray-700">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Total Balance</p>
                        <p className="text-lg font-bold text-gray-900 dark:text-white">
                          $12,456.78
                        </p>
                      </div>
                      <Button className="bg-blue-600 hover:bg-blue-700">
                        Add Funds
                      </Button>
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
