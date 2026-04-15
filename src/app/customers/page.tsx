"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Star, Quote, Users, Zap, 
  ArrowLeft, TrendingUp 
} from "lucide-react";
import Link from "next/link";

import Nav from "@/components/Nav";

// --- داده‌های نظرات ---
const testimonials = [
  {
    id: 1,
    name: "باسط رستمی",
    role: "مدیرعامل ",
    company: "آلند",
    content: "دیپ‌چت فقط یک چت‌بات نیست؛ یک عضو هوشمند تیم ماست. کاهش زمان انتظار مشتریان از ۱۵ دقیقه به ۳۰ ثانیه باورنکردنی بود.",
    avatar: "B",
    color: "from-pink-500 to-rose-500"
  },
  {
    id: 2,
    name: "امید سلیمی",
    role: "مدیر سایت",
    company: "دژپارت",
    content: "APIهای پایدار و داکیومنت‌های دقیق شما کار تیم فنی ما را راحت کرد. مدل RAG شما حتی اصطلاحات عامیانه کاربران را هم می‌فهمد.",
    avatar: "D",
    color: "from-orange-400 to-amber-500"
  },
  {
    id: 3,
    name: "احسان خواجوی",
    role: "مدیرعامل",
    company: "دیفرتو",
    content: "دیپ‌چت فقط یک چت‌بات نیست دستیار و پشتیبان و یک عضو هوشمند تیم فنی و پشتیبانی ماست. کاهش زمان انتظار مشتریان از چند دقیقه یا حتی ساعت به چند  ثانیه فوق العاده است ."
   ,
    avatar: "A",
    color: "from-blue-500 to-indigo-500"
  },
];

// --- داده‌های مشتریان (همراه با لینک) ---
const logos = [
  { name: "دژپارت", url: "https://dejhpart.com/" },
  { name: "دیفرتو", url: "https://diferto.com/" },
  { name: "چیکاد لیست", url: "https://chikad.online/" },
  { name: "چیکاد کلیک", url: "https://chikad.online/" },
  { name: "لرنیک آکادمی", url: "https://lerniq.online/" },
  { name: "سایت آلند", url: "https://aland.digital/" },
  { name: "پایاسفر", url: "https://payasafar.com/" },
];

export default function CustomersClient() {
  return (
    <div className="bg-white dark:bg-slate-900 text-right overflow-hidden relative min-h-screen flex flex-col" dir="rtl">
      <Nav />
      {/* استایل انیمیشن اختصاصی همین صفحه */}
      <style jsx global>{`
        @keyframes loop-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-100%); } /* حرکت به سمت چپ */
        }
        .animate-loop-scroll {
          animation: loop-scroll 40s linear infinite;
        }
        /* توقف انیمیشن هنگام هاور برای کلیک راحت‌تر */
        .group:hover .animate-loop-scroll {
          animation-play-state: paused; 
        }
      `}</style>

      {/* پس‌زمینه مشبک */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

      <div className="container mx-auto px-4 py-20 md:py-28 max-w-6xl relative z-10 flex-grow">
        
        {/* 1. HERO HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 text-xs font-bold px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 mb-6 border border-indigo-100 dark:border-indigo-800 shadow-sm">
            <Users className="w-4 h-4" />
            جامعه مشتریان DeepChat
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight tracking-tight text-slate-900 dark:text-white">
            قدرت گرفته از 
            <span className="mr-3 relative inline-block">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-l from-indigo-600 to-sky-500">اعتماد شما</span>
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-indigo-200 dark:text-indigo-800 -z-0" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
              </svg>
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            بیش از ۷ کسب‌وکار پیشرو، ارتباط با مشتریان خود را به هوش مصنوعی ما سپرده‌اند.
          </p>
        </motion.div>

        {/* 2. INFINITE LOGO SCROLL (اصلاح شده با لینک) */}
        <div className="mb-24 relative w-full max-w-5xl mx-auto" dir="ltr"> 
            
            {/* ماسک محو شونده */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white dark:from-slate-900 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white dark:from-slate-900 to-transparent z-10 pointer-events-none"></div>
            
            <div className="flex overflow-hidden group">
                {/* لیست اول */}
                <div className="flex shrink-0 animate-loop-scroll items-center min-w-full justify-around">
                    {logos.map((client, i) => (
                        <Link 
                            key={`l1-${i}`} 
                            href={client.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mx-8 text-2xl md:text-3xl font-black text-slate-300 dark:text-slate-600 whitespace-nowrap cursor-pointer hover:text-indigo-500 transition-colors"
                        >
                            {client.name}
                        </Link>
                    ))}
                </div>
                
                {/* لیست دوم (دقیقاً پشت سر اولی) */}
                <div className="flex shrink-0 animate-loop-scroll items-center min-w-full justify-around">
                      {logos.map((client, i) => (
                        <Link 
                            key={`l2-${i}`} 
                            href={client.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mx-8 text-2xl md:text-3xl font-black text-slate-300 dark:text-slate-600 whitespace-nowrap cursor-pointer hover:text-indigo-500 transition-colors"
                        >
                            {client.name}
                        </Link>
                    ))}
                </div>
            </div>
        </div>

        {/* 3. FEATURED CASE STUDY */}
        <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-24 bg-slate-900 text-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl overflow-hidden relative isolate"
        >
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-indigo-600/30 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-sky-500/20 rounded-full blur-[80px]"></div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                <div>
                    <div className="text-indigo-300 font-bold mb-4 flex items-center gap-2">
                        <Zap className="w-5 h-5" />
                        داستان موفقیت ویژه
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug">
                        چگونه <span className="text-sky-400">دژپارت</span> نرخ پاسخ‌دهی خودکار را به ۸۵٪ رساند؟
                    </h2>
                    <p className="text-slate-300 text-lg leading-relaxed mb-8">
                        با پیاده‌سازی مدل اختصاصی DeepChat در طول کمتر از یک ماه این شرکت توانست بدون افزایش نیروی انسانی، پاسخگوی بیشتر از ۱۰۰ سوال حرفه ایی  باشد.
                    </p>
                    <div className="flex gap-8 border-t border-slate-700/50 pt-6">
                        <div>
                            <div className="text-3xl font-bold text-white mb-1">۸۵٪</div>
                            <div className="text-sm text-slate-400">اتوماسیون</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-white mb-1">۳x</div>
                            <div className="text-sm text-slate-400">سرعت پاسخ</div>
                        </div>
                    </div>
                </div>
                
                {/* گرافیک شبیه‌سازی داشبورد */}
                <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-3xl border border-slate-700/50">
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <div className="text-xs text-slate-500 font-mono"></div>
                    </div>
                    <div className="h-40 flex items-end gap-2 px-2">
                        {[30, 45, 35, 50, 60, 85, 95, 100].map((h, i) => (
                            <motion.div 
                                key={i}
                                initial={{ height: "10%" }}
                                whileInView={{ height: `${h}%` }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 + (i * 0.1), duration: 0.8, type: "spring" }}
                                className={`w-full rounded-t-lg ${i > 4 ? 'bg-gradient-to-t from-indigo-500 to-sky-400' : 'bg-slate-700'}`}
                            ></motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>

        {/* 4. TESTIMONIALS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-32">
          {testimonials.map((item, idx) => (
            <TestimonialCard key={item.id} item={item} index={idx} />
          ))}
        </div>

        {/* 5. CTA SECTION */}
        <div className="text-center mb-10">
            <h2 className="text-2xl font-bold mb-6 text-slate-800 dark:text-white">آماده تحول در پشتیبانی هستید؟</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/contact" className="px-8 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-medium hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                    مشاوره رایگان
                </Link>
                <Link href="/signup" className="px-8 py-3 rounded-xl bg-indigo-600 text-white font-bold hover:bg-indigo-700 shadow-lg shadow-indigo-500/30 transition-all flex items-center justify-center gap-2">
                    <TrendingUp size={18} />
                    شروع رایگان
                </Link>
            </div>
        </div>

      </div>
    </div>
  );
}

// --- کامپوننت کارت نظر مشتری ---
function TestimonialCard({ item, index }: { item: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-xl shadow-slate-200/40 dark:shadow-none border border-slate-100 dark:border-slate-800 flex flex-col h-full hover:-translate-y-2 transition-transform duration-300"
    >
      <div className="flex items-center justify-between mb-6">
          <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white font-bold text-xl shadow-md`}>
            {item.avatar}
          </div>
          <Quote className="w-8 h-8 text-slate-200 dark:text-slate-800" />
      </div>

      <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6 flex-grow text-[15px]">
        {item.content}
      </p>

      <div className="pt-4 border-t border-slate-50 dark:border-slate-800/50">
        <h4 className="font-bold text-slate-900 dark:text-white text-sm">{item.name}</h4>
        <div className="flex items-center gap-2 mt-1">
             <span className="text-xs text-slate-500 dark:text-slate-400">{item.role}</span>
             <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
             <span className="text-xs font-medium text-indigo-600 dark:text-indigo-400">{item.company}</span>
        </div>
      </div>
    </motion.div>
  );
}