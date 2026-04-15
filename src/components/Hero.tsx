import Link from "next/link";
import { Sparkles, Clock, Globe2, ShieldCheck } from "lucide-react";
import BotIcon from "./BotIcon";
// import dynamic from "next/dynamic";
import DemoChatWidget from "./DemoChatWidget";

// فقط این بخش کلاینت لود می‌شود
// const DemoChatWidget = dynamic(() => import("./DemoChatWidget"), {
//   ssr: false,
// });

export default function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="pt-20 pb-12 bg-white dark:bg-slate-900 text-gray-900 dark:text-slate-100 transition-colors duration-300"
    >
      <div className="w-full px-4 mx-auto md:max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* CONTENT */}
          <div className="text-right">
            <div className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full bg-indigo-600 text-white mb-3 shadow-md">
              <Sparkles className="w-4 h-4" />
              نسخه حرفه‌ای چت‌بات فارسی
            </div>

            {/* H1 — SEO GOLD */}
            <h1
              id="hero-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-6"
            >
              چت‌بات فارسی هوشمند
              <br className="hidden sm:block" />
              برای پشتیبانی آنلاین کسب‌وکارها
              <span className="block mt-4 text-4xl text-transparent bg-clip-text bg-gradient-to-l from-indigo-500 to-sky-500">
                سریع — دقیق — سازگار
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-4 text-lg text-gray-600 dark:text-slate-300 max-w-xl leading-relaxed">
              DeepChat یک دستیار هوشمند فارسی برای پاسخ‌دهی خودکار به مشتریان،
              پشتیبانی ۲۴ ساعته، اتصال به CRM و سفارشی‌سازی کامل برای برند شماست.
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/signup"
                className="px-8 py-4 rounded-full bg-indigo-600 text-white text-center font-bold text-lg shadow-lg hover:bg-indigo-700 transition-all hover:shadow-indigo-500/30"
              >
                شروع رایگان
              </Link>

              <a
                href="#demo"
                className="px-8 py-4 rounded-full border border-gray-300 dark:border-slate-600 text-gray-700 dark:text-slate-200 text-center font-medium hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
              >
                مشاهده دمو
              </a>
            </div>

            {/* TRUST SIGNALS */}
            <ul className="mt-8 flex flex-wrap gap-6 text-sm text-gray-500 dark:text-slate-400 font-medium">
              <li className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-indigo-500" />
                پشتیبانی ۲۴/۷
              </li>
              <li className="flex items-center gap-2">
                <Globe2 className="w-5 h-5 text-indigo-500" />
                پشتیبانی چندزبانه
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-indigo-500" />
                امنیت سازمانی
              </li>
            </ul>
          </div>

          {/* DEMO */}
          <div id="demo">
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-30"></div>

              <div className="relative rounded-2xl border border-gray-200 dark:border-slate-700 shadow-2xl overflow-hidden bg-white dark:bg-slate-800">
                <div className="px-5 py-4 bg-gray-50/80 dark:bg-slate-800/80 border-b border-slate-100 dark:border-slate-700 flex items-center gap-4 backdrop-blur-sm">
                  <div className="relative">
                    <span className="absolute right-0 bottom-0 flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    <BotIcon className="w-10 h-10 text-indigo-600 dark:text-indigo-400 bg-indigo-100 dark:bg-slate-700 rounded-full p-1" />
                  </div>
                  <div>
                    <h2 className="font-bold text-slate-800 dark:text-white">
                      DeepChat
                    </h2>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      پاسخ‌دهی هوشمند در لحظه
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-white dark:bg-slate-900/50">
                  <DemoChatWidget />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
