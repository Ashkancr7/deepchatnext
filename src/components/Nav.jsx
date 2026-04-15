"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Sun, Moon, ChevronLeft } from "lucide-react";
import BotIcon from "@/components/BotIcon";
import { useTheme } from "@/context/ThemeContext";

const NAV_ITEMS = [
  { href: "/", label: "خانه" },
  { href: "#features", label: "ویژگی‌ها" },
  { href: "#demo", label: "دمو" },
  { href: "#pricing", label: "قیمت" },
  { href: "#faq", label: "سوالات" },
  { href: "/contact", label: "ارتباط با ما" },
  { href: "/about-us", label: " درباره ما" },
  { href: "/customers", label: "مشتریان ما" },
  { href: "/document", label: "مستندات" },



];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // هندل کردن ارور احتمالی کانتکست
  const themeContext = useTheme();
  const theme = themeContext?.theme || 'dark';
  const toggleTheme = themeContext?.toggleTheme || (() => {});

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "py-2" : "py-4"}`}>
        <div className="container mx-auto px-4 md:px-6">
          <div className={`backdrop-blur-lg rounded-2xl border flex items-center justify-between p-3 px-5 transition-all duration-300 ${scrolled ? "bg-white/80 dark:bg-slate-900/90 shadow-lg border-gray-200/50 dark:border-slate-700/50" : "bg-white/60 dark:bg-slate-900/70 border-transparent"}`}>
            
            {/* لوگو */}
            <div className="flex items-center gap-3">
              <Link href="/" className="relative group">
                <div className="absolute inset-0 bg-indigo-500 rounded-full blur opacity-25 group-hover:opacity-40 transition duration-200"></div>
                <BotIcon className="relative w-10 h-10 rounded-full transform group-hover:scale-105 transition duration-200" />
              </Link>
              <span className="text-lg font-bold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent hidden sm:block">
                دیپ‌چت
              </span>
            </div>

            {/* دسکتاپ منو */}
            <nav className="hidden lg:flex items-center gap-6 mx-6">
              {NAV_ITEMS.map((item) => (
                <Link key={item.href} href={item.href} className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors relative group">
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* دکمه‌ها */}
            <div className="flex items-center gap-3">
              <button onClick={toggleTheme} className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 transition-all">
                {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <a href="https://panel.deepchatai.ir/" className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 shadow-lg shadow-indigo-500/20">
                <span>ورود به پنل</span>
                <ChevronLeft className="w-4 h-4" />
              </a>
              <button onClick={() => setOpen(true)} className="lg:hidden p-2 rounded-xl text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-slate-800">
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* موبایل منو */}
      {open && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <aside className="absolute top-0 bottom-0 right-0 w-[85%] max-w-sm bg-white dark:bg-slate-900 shadow-2xl p-6 flex flex-col">
            <div className="flex justify-between mb-8">
              <span className="font-bold text-lg text-slate-900 dark:text-white">دیپ‌چت</span>
              <button onClick={() => setOpen(false)}><X className="w-6 h-6 text-slate-500" /></button>
            </div>
            <nav className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="block p-3 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-indigo-50 dark:hover:bg-slate-800">
                  {item.label}
                </Link>
              ))}
            </nav>
          </aside>
        </div>
      )}
    </>
  );
}