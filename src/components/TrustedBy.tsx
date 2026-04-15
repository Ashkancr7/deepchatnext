"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

// 1. تغییر ساختار دیتا به آبجکت (اسم + لینک)
const clients = [
  { name: "دژپارت", url: "https://dejhpart.com/" },
  { name: "دیفرتو", url: "https://diferto.com/" },
  { name: "چیکاد لیست", url: "https://chikad.online/" },
  { name: "چیکاد کلیک", url: "https://chikad.online/" },
  { name: "لرنیک آکادمی", url: "https://lerniq.online/" },
  { name: "سایت آلند", url: "https://aland.digital/" },
  { name: "پایاسفر", url: "https://payasafar.com/" },
];

export default function TrustedBy() {
  return (
    <section className="py-12 bg-gray-50 dark:bg-slate-900/50 border-y border-gray-100 dark:border-slate-800 overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        
        {/* تیتر بخش */}
        <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-8">
          مورد اعتماد بیش از ۷ کسب‌وکار پیشرو در ایران
        </p>

        {/* انیمیشن اسکرولی */}
        <div className="relative w-full max-w-5xl mx-auto" dir="ltr">
            
            {/* ماسک محو شونده کناره‌ها */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-50 dark:from-slate-900 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-50 dark:from-slate-900 to-transparent z-10 pointer-events-none"></div>
            
            <div className="flex overflow-hidden group">
                {/* لیست اول */}
                <div className="flex shrink-0 animate-loop-scroll items-center min-w-full justify-around">
                    {clients.map((client, i) => (
                        <Link 
                            key={`h1-${i}`} 
                            href={client.url}
                            target="_blank" // باز شدن در تب جدید
                            rel="noopener noreferrer" // امنیت برای لینک خارجی
                            className="mx-4 text-2xl font-black text-slate-500 dark:text-slate-600 whitespace-nowrap cursor-pointer grayscale hover:grayscale-0 hover:text-indigo-600 transition-all duration-300"
                        >
                            {client.name}
                        </Link>
                    ))}
                </div>
                
                {/* لیست دوم (برای لوپ بی نهایت) */}
                <div className="flex shrink-0 animate-loop-scroll items-center min-w-full justify-around" aria-hidden="true">
                      {clients.map((client, i) => (
                        <Link 
                            key={`h2-${i}`} 
                            href={client.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mx-8 text-2xl font-black text-slate-300 dark:text-slate-600 whitespace-nowrap cursor-pointer grayscale hover:grayscale-0 hover:text-indigo-600 transition-all duration-300"
                        >
                            {client.name}
                        </Link>
                    ))}
                </div>
            </div>
        </div>

        {/* لینک به صفحه کامل مشتریان */}
        <div className="mt-8">
            <Link 
              href="/customers" 
              className="inline-flex items-center gap-1 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
            >
              مشاهده نظرات مشتریان
              <ArrowLeft size={16} />
            </Link>
        </div>

      </div>
    </section>
  );
}