"use client";

import React from "react";
import {
  MessageSquare,
  Instagram,
  Twitter,
  Linkedin,
  Github,
  Heart,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: "ویژگی‌ها", href: "#features" },
      { name: "قیمت‌گذاری", href: "#pricing" },
      { name: "مستندات API", href: "/document" },
      // { name: "دانلود نسخه دسکتاپ", href: "/download" },
    ],
    company: [
      { name: "درباره ما", href: "/about-us" },
      { name: "تماس با ما", href: "/contact" },
      { name: "قوانین و مقررات", href: "/terms" },
      { name: "حریم خصوصی", href: "/privacy" },
    ],
    social: [
      {
        icon: <Instagram className="w-5 h-5" />,
        href: "https://www.instagram.com/deepchat_ir/",
        label: "Instagram",
      },
      { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
      { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
      { icon: <Github className="w-5 h-5" />, href: "#", label: "Github" },
    ],
  };

  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-gray-200 dark:border-slate-800 transition-colors duration-500">
      <div className="w-full px-6 mx-auto max-w-7xl pt-16 pb-8">
        {/* بخش بالایی: گرید ۴ ستونه */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* ستون ۱: برند و توضیحات (۴ واحد عرض) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400">
              <div className="p-2 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg">
                <MessageSquare className="w-6 h-6" />
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                دیپ‌چت
              </span>
            </div>
            <p className="text-gray-500 dark:text-slate-400 leading-relaxed text-sm">
              دیپ‌چت راهکاری هوشمند برای ارتباط موثر با مشتریان است. با ابزارهای
              ما، پشتیبانی را خودکار کنید و فروش خود را افزایش دهید.
            </p>
            <p className="text-gray-500 dark:text-slate-400 leading-relaxed text-sm">
              آدرس:کردستان-سنندج-دانشگاه کردستان-مرکزرشد دانشکده مهندسی
            </p>
            {/* آیکون‌های سوشال */}
            <div className="flex items-center gap-4">
              {footerLinks.social.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  aria-label={item.label}
                  className="text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors transform hover:-translate-y-1 duration-300"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* ستون ۲: لینک‌های محصول (۲ واحد عرض) */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-6">
              محصول
            </h3>
            <ul className="space-y-4 text-sm text-gray-500 dark:text-slate-400">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ستون ۳: لینک‌های شرکت (۲ واحد عرض) */}
          <div className="lg:col-span-2">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-6">
              شرکت
            </h3>
            <ul className="space-y-4 text-sm text-gray-500 dark:text-slate-400">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ستون ۴: نمادهای اعتماد (۳ واحد عرض) */}
          <div className="lg:col-span-3">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-6">
              مجوزها
            </h3>
            <div className="flex items-center gap-4 bg-gray-50 dark:bg-slate-900 p-4 rounded-2xl border border-gray-100 dark:border-slate-800">
              {/* اینماد */}
               <a
            referrerPolicy="origin"
            target="_blank"
            // rel="noreferrer" // <-- اضافه شد
            href="https://trustseal.enamad.ir/?id=653632&Code=NiMA3M1ykGFb3ETIteBAxCBQmiQKBeVs"
          >
            <img
              referrerPolicy="origin"
              src="https://trustseal.enamad.ir/logo.aspx?id=653632&Code=NiMA3M1ykGFb3ETIteBAxCBQmiQKBeVs"
              alt=""
              style={{ cursor: "pointer" }}
              code="NiMA3M1ykGFb3ETIteBAxCBQmiQKBeVs"
            />
          </a>

              {/* بیت‌پی */}
              <a
                href="https://bitpay.ir/certificate-968807-deepchatai.ir"
                target="_blank"
                rel="noreferrer"
                className="transition-all duration-300 opacity-80 hover:opacity-100 grayscale hover:grayscale-0"
              >
                <img
                  src="https://bitpay.ir/theme/public/images/trusted-logo.svg"
                  alt="BitPay Trusted"
                  className="h-14 w-auto object-contain"
                />
              </a>
            </div>
            <p className="text-xs text-gray-400 mt-3 px-1">
              پرداخت‌ها کاملاً ایمن و تحت نظارت شاپرک انجام می‌شود.
            </p>
          </div>
        </div>

        {/* خط جداکننده */}
        <div className="border-t border-gray-200 dark:border-slate-800 my-8" />

        {/* بخش پایینی: کپی‌رایت */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm text-gray-500 dark:text-slate-500">
          <p>
            © {currentYear} تمامی حقوق برای{" "}
            <span className="text-gray-800 dark:text-slate-300 font-medium">
              دیپ‌چت
            </span>{" "}
            محفوظ است.
          </p>

          {/* <div className="flex items-center gap-1">
            <span>طراحی شده با</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
            <span>در ایران</span>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
