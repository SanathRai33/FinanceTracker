"use client";

import Link from "next/link";
import { FiGithub, FiTwitter, FiLinkedin, FiMail, FiHeart, FiInstagram, FiDollarSign } from "react-icons/fi";
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
      { label: "Security", href: "/security", icon: <MdOutlineSecurity className="inline" /> },
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
    { icon: <FiGithub size={18} />, href: "https://github.com/SanathRai33", label: "GitHub" },
    { icon: <FiInstagram size={18} />, href: "https://www.instagram.com/sannu_rai33/", label: "Instagram" },
    // { icon: <FiTwitter size={18} />, href: "https://twitter.com/SanathRai33", label: "Twitter" },
    { icon: <FiLinkedin size={18} />, href: "https://www.linkedin.com/in/sanath-rai33/", label: "LinkedIn" },
    { icon: <FiMail size={18} />, href: "mailto:support@financetracker.com", label: "Email" },
  ];

  return (
    <footer className="mt-auto border-t bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-sm">
                {/* <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg> */}
                <span className="text-white text-2xl font-semibold text-center justify-center items-center flex h-5 w-5">
                  {/* <FiDollarSign size={18} /> */}
                  ₹
                </span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">FinanceTracker</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Take control of your finances with our all-in-one money management platform.
                </p>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="mt-6">
              <p className="mb-3 text-sm font-medium text-gray-900">Follow us</p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-gray-600 transition-all hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
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
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-900">
              Product
            </h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 transition-colors hover:text-blue-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-900">
              Resources
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 transition-colors hover:text-blue-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support & Legal Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-900">
              Legal
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 transition-colors hover:text-blue-600"
                  >
                    {link.label}
                    {link.icon && <span className="ml-1.5">{link.icon}</span>}
                  </Link>
                </li>
              ))}
            </ul>
            
            <h4 className="mb-4 mt-6 text-sm font-semibold uppercase tracking-wider text-gray-900">
              Support
            </h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 transition-colors hover:text-blue-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-gray-200"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="text-center sm:text-left">
            <p className="text-sm text-gray-600">
              © {year} FinanceTracker. All rights reserved.
            </p>
            <p className="mt-1 text-xs text-gray-500">
              Made with <FiHeart className="inline h-3 w-3 text-red-500" /> for better financial decisions.
            </p>
          </div>

          {/* Language & Currency Selector */}
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-gray-600">Language:</span>
              <select className="rounded-md border border-gray-300 bg-transparent px-2 py-1 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>English</option>
                <option>Español</option>
                <option>Français</option>
                <option>Deutsch</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-600">Currency:</span>
              <select className="rounded-md border border-gray-300 bg-transparent px-2 py-1 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>USD ($)</option>
                <option>EUR (€)</option>
                <option>GBP (£)</option>
                <option>JPY (¥)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Security Badges */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs text-gray-500">
          <div className="flex items-center gap-1.5">
            <div className="h-2 w-2 rounded-full bg-green-500"></div>
            <span>256-bit SSL Encryption</span>
          </div>
          <div className="hidden sm:block">•</div>
          <div className="flex items-center gap-1.5">
            <div className="h-2 w-2 rounded-full bg-green-500"></div>
            <span>GDPR Compliant</span>
          </div>
          <div className="hidden sm:block">•</div>
          <div className="flex items-center gap-1.5">
            <div className="h-2 w-2 rounded-full bg-green-500"></div>
            <span>SOC 2 Certified</span>
          </div>
        </div>
      </div>

      {/* Mobile App Badges */}
      <div className="border-t border-gray-200 bg-gray-50/50">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="text-center sm:text-left">
              <p className="text-sm font-medium text-gray-900">Get the app</p>
              <p className="text-xs text-gray-600">Track your finances on the go</p>
            </div>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.94 3.5H9.06L8 5.44l3.54 2.26 3.46-2.26zM8.92 6.5L5 9.64l3.92 2.5 1.96-3.28zm6.16 0l-1.96 3.28L19 9.64l-3.92-2.5zM5.67 10.5L2 12l3.67 1.5L7.5 12zm12.66 0L16.5 12l1.83 1.5L22 12zM8.92 13.86L5 16.36l3.92 2.5 1.96-3.28zm6.16 0l-1.96 3.28L19 16.36l-3.92-2.5zM5.67 17.5L2 19l3.67 1.5L7.5 19zm12.66 0L16.5 19l1.83 1.5L22 19z" />
                </svg>
                App Store
              </button>
              <button className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 3h18v18H3V3zm4.5 9.75v-1.5h9v1.5h-9zm0 3v-1.5h9v1.5h-9zm0-6v-1.5h9v1.5h-9z" />
                </svg>
                Google Play
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}