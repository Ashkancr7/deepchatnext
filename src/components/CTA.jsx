"use client";

import React from "react";
import { Zap, CornerDownLeft } from "lucide-react";

export default function CTA() {
  return (
    <section
      id="cta"
      className="py-20 bg-white dark:bg-slate-950 transition-colors duration-500 overflow-hidden"
    >
      <div className="w-full px-6 mx-auto max-w-7xl">
        {/* کانتینر اصلی با افکت‌های بصری */}
        <div className="relative rounded-[2.5rem] p-8 sm:p-12 md:p-16 text-center 
                        bg-gradient-to-br from-indigo-600 to-sky-500 
                        dark:from-indigo-700 dark:to-sky-600 
                        shadow-2xl shadow-indigo-500/30 dark:shadow-indigo-500/50 
                        transform hover:scale-[1.01] transition-transform duration-500 ease-in-out">
            
            {/* الگوی پس‌زمینه (برای زیبایی) */}
            <div className="absolute inset-0 opacity-10" 
                 style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34L30 30.932824L24 34V40l6 3.067176L36 40zM36 34L30 30.932824L24 34V40l6 3.067176L36 40zM30 0L24 3.067176V9.20152L30 6.134344L36 9.20152V3.067176L30 0zM30 20L24 23.067176V29.20152L30 26.134344L36 29.20152V23.067176L30 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}
            ></div>

            <div className="relative z-10">
                <div className="inline-flex items-center gap-2 text-xs font-bold px-4 py-2 rounded-full bg-white/20 text-white mb-4">
                    <Zap className="w-4 h-4 fill-white" /> نصب در کمتر از ۵ دقیقه
                </div>

                <h3 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight">
                    همین الان شروع کنید.
                </h3>
                
                <p className="text-xl text-slate-100 mb-8 max-w-3xl mx-auto">
                    پاسخ‌های سریع، دقیق و شبانه‌روزی دیپ‌چت، مشتریان شما را شگفت‌زده خواهد کرد.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    
                    {/* دکمه اصلی (با افکت Glow) */}
                    <a
                        href="/signup"
                        className="group relative inline-flex h-14 items-center justify-center rounded-full bg-white px-8 text-lg font-bold text-indigo-700 transition-all duration-500 shadow-xl hover:shadow-2xl hover:bg-gray-100 
                                   dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
                    >
                        <span className="relative z-10">
                            ساخت حساب رایگان
                        </span>
                    </a>

                    {/* دکمه ثانویه (تست واقعی) */}
                    <a
                        href="https://laptop.deepchatai.ir/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex h-14 items-center justify-center gap-2 rounded-full border border-white/60 px-8 text-lg font-medium text-white transition-all duration-300 hover:bg-white/10 hover:border-white"
                    >
                        <CornerDownLeft className="w-5 h-5 transition-transform group-hover:rotate-12" />
                        تست زنده (Demo)
                    </a>
                </div>

          
            </div>
        </div>
      </div>
    </section>
  );
}