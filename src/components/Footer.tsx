"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "@/src/assets/images/Logo.png";
import {
  FiGithub,
  FiTwitter,
  FiLinkedin,
  FiMail,
  FiHeart,
  FiInstagram,
  FiDollarSign,
} from "react-icons/fi";
import { MdOutlineSecurity } from "react-icons/md";

export default function Footer() {
  const year = new Date().getFullYear();

  const footerLinks = {
    product: [
      { label: "Dashboard", href: "/" },
      { label: "Transactions", href: "/transactions" },
      { label: "Analytics", href: "/analytics" },
      { label: "Savings Goals", href: "/savings-goals" },
      { label: "Debt Tracker", href: "/debt-tracker" },
    ],
    resources: [
      { label: "Documentation", href: "/docs" },
      { label: "Blog", href: "/blog" },
      { label: "Guides", href: "/guides" },
      { label: "API", href: "/api" },
      { label: "Changelog", href: "/changelog" },
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" },
      { label: "GDPR", href: "/gdpr" },
      {
        label: "Security",
        href: "/security",
        icon: <MdOutlineSecurity className="inline" />,
      },
    ],
    support: [
      { label: "Help Center", href: "/support" },
      { label: "Contact Us", href: "/contact" },
      { label: "Status", href: "/status" },
      { label: "Community", href: "/community" },
      { label: "FAQ", href: "/faq" },
    ],
  };

  const socialLinks = [
    {
      icon: <FiGithub size={18} />,
      href: "https://github.com/SanathRai33",
      label: "GitHub",
    },
    {
      icon: <FiInstagram size={18} />,
      href: "https://www.instagram.com/sannu_rai33/",
      label: "Instagram",
    },
    // { icon: <FiTwitter size={18} />, href: "https://twitter.com/SanathRai33", label: "Twitter" },
    {
      icon: <FiLinkedin size={18} />,
      href: "https://www.linkedin.com/in/sanath-rai33/",
      label: "LinkedIn",
    },
    {
      icon: <FiMail size={18} />,
      href: "mailto:sanathrai03@gmail.com",
      label: "Email",
    },
  ];

  return (
    <footer className="mt-auto border-t border-gray-200 bg-white/95 dark:bg-gray-800/95 backdrop-blur supports-backdrop-filter:bg-white/60 dark:supports-backdrop-filter:bg-[#1e1f20] dark:border-gray-700">
      {/* Main Footer Content */}
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-12 h-10 text-white shadow-sm rounded-xl">
                {/* <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg> */}
                <div className="relative w-12 h-12">
                  <Image
                    src={Logo}
                    alt="FinanceTracker Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  FinanceTracker
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  Take control of your finances with our all-in-one money
                  management platform.
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <p className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
                Follow us
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 text-gray-600 transition-all border border-gray-200 rounded-lg dark:text-gray-300 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-blue-900/10 dark:hover:border-blue-700 dark:hover:text-blue-400"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-wider text-gray-900 uppercase dark:text-white">
              Product
            </h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-wider text-gray-900 uppercase dark:text-white">
              Resources
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support & Legal Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-wider text-gray-900 uppercase dark:text-white">
              Legal
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-600"
                  >
                    {link.label}
                    {link.icon && <span className="ml-1.5">{link.icon}</span>}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="mt-6 mb-4 text-sm font-semibold tracking-wider text-gray-900 uppercase dark:text-white">
              Support
            </h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-gray-200 dark:border-gray-600"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="text-center sm:text-left">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {year} FinanceTracker. All rights reserved.
            </p>
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
              Made with <FiHeart className="inline w-3 h-3 text-red-500" /> for
              better financial decisions.
            </p>
          </div>

          {/* Language & Currency Selector */}
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-gray-600 dark:text-gray-300">Language:</span>
              <select className="px-2 py-1 text-sm text-gray-700 bg-transparent border border-gray-300 rounded-md dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:bg-black/80">
                <option >English</option>
                <option>Español</option>
                <option>Français</option>
                <option>Deutsch</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-600 dark:text-gray-300">Currency:</span>
              <select className="px-2 py-1 text-sm text-gray-700 bg-transparent border border-gray-300 rounded-md dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:bg-black/80">
                <option>USD ($)</option>
                <option>EUR (€)</option>
                <option>GBP (£)</option>
                <option>JPY (¥)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Security Badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-8 text-xs text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>256-bit SSL Encryption</span>
          </div>
          <div className="hidden sm:block">•</div>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>GDPR Compliant</span>
          </div>
          <div className="hidden sm:block">•</div>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>SOC 2 Certified</span>
          </div>
        </div>
      </div>

      {/* Mobile App Badges */}
      <div className="border-t border-gray-200 bg-gray-50/50 dark:bg-gray-900/90 dark:border-gray-700 backdrop-blur supports-backdrop-filter:bg-gray-50/60 dark:supports-backdrop-filter:bg-gray-900/60">
        <div className="px-4 py-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="text-center sm:text-left">
              <p className="text-sm font-medium text-gray-900 dark:text-gray-100">Get the app</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Track your finances on the go
              </p>
            </div>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 transition-colors bg-white border border-gray-300 rounded-lg hover:bg-gray-50 dark:bg-black dark:border-gray-600 dark:hover:bg-gray-800 dark:text-[#15a8f8]">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/App_Store_%28iOS%2C_2024%29.svg/2048px-App_Store_%28iOS%2C_2024%29.svg.png" alt="App Store" className="w-5 h-5" />
                App Store
              </button>
              <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 transition-colors bg-white border border-gray-300 rounded-lg hover:bg-gray-50 dark:bg-black dark:border-gray-600 dark:hover:bg-gray-800 dark:text-[#15a8f8]">
                <img src="https://logos-world.net/wp-content/uploads/2020/11/Google-Play-Emblem.png" alt="Play Store" className="object-cover w-5 h-5" />
                Google Play
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
