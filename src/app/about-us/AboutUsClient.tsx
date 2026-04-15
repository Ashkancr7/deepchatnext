// src/app/about-us/AboutUsClient.tsx
"use client"; // 👈 این خط، خطای Runtime Error را برطرف می‌کند.

import React from "react";
import { motion, Variants } from "framer-motion";
import { 
  Target, Rocket, Users, Send, Linkedin, Instagram, Code, Zap, LucideIcon 
} from "lucide-react";

// --- داده‌ها و انواع ---
interface PillarItem {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const KEY_PILLARS: PillarItem[] = [
  { 
    icon: Target, 
    title: "ماموریت: هوش مصنوعی بومی", 
    desc: "ارائه راهکارهای بومی و فارسی مبتنی بر هوش مصنوعی برای ارتقای کیفیت تعامل کسب‌وکارهای ایرانی با مشتریان خود." 
  },
  { 
    icon: Rocket, 
    title: "چشم‌انداز: پیشرو در حوزه چت‌بات", 
    desc: "تبدیل شدن به معتبرترین پلتفرم چت‌بات هوشمند در خاورمیانه با تکیه بر نوآوری مستمر و زیرساخت‌های مطمئن." 
  },
  { 
    icon: Users, 
    title: "ارزش: شفافیت و پشتیبانی", 
    desc: "تعهد به شفافیت در ارائه خدمات، حفاظت از داده‌های کاربران، و ارائه پشتیبانی فنی مستمر و ۲۴ ساعته." 
  },
];

// --- تنظیمات انیمیشن ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function AboutUsClient() {
  
  // --- منطق تعامل (کلاینت) ---
  const handleSocialClick = (url: string) => {
    // از آنجایی که این یک Client Component است، window تعریف شده است
    window.open(url, '_blank');
  };

  return (
    // motion.main - شروع بخش انیمیشن‌دار 
    <motion.main 
      dir="rtl" 
      className="flex flex-col items-center px-4 py-16 md:py-24"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div variants={itemVariants} className="w-full max-w-6xl">
        
        {/* هدر صفحه */}
        <div className="text-center max-w-3xl mx-auto mb-16 mt-12">
          <h2 className="text-base font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
            ما در مهندسان ارزش‌آفرین‌هیژا چه کسی هستیم؟
          </h2>
          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white leading-tight">
            داستان <span className="text-indigo-600 dark:text-indigo-400">DeepChat</span>: هوش مصنوعی <span className="text-indigo-600 dark:text-indigo-400">چت‌بات بومی</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-slate-400 mt-4">
            ما یک تیم مهندسی هستیم که معتقدیم تعامل هوشمند می‌تواند آینده کسب‌وکارها را تغییر دهد.
          </p>
        </div>

        {/* Pillars (شامل motion.div) */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
          variants={containerVariants}
        >
          {KEY_PILLARS.map((pillar, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-gray-200 dark:border-slate-700 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <pillar.icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400 stroke-2" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{pillar.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-slate-300 text-sm leading-6">{pillar.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* توضیحات (شامل motion.div) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-2xl shadow-indigo-500/10 border border-indigo-100 dark:border-slate-700">
          <motion.div variants={itemVariants}>
            <h2 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-4 flex items-center gap-2">
              <Code className="w-6 h-6" />
              معرفی و تخصص ما
            </h2>
            <p className="text-gray-700 dark:text-slate-200 leading-7 mb-4">
            شرکت مهندسان ارزش‌آفرین هیژا مستقر در دانشگاه کردستان، با هدف ارائه راهکارهای هوشمند مبتنی بر هوش مصنوعی فعالیت خود را آغاز کرده است. تمرکز اصلی ما بر طراحی و توسعه چت‌بات‌های پیشرفته برای نقش‌های پشتیبانی و دستیار آنلاین در وب‌سایت‌ها و پلتفرم‌های دیجیتال است. ما از جدیدترین مدل‌های پردازش زبان طبیعی (NLP) استفاده می‌کنیم تا تجربه تعامل کاربران را هوشمندتر، سریع‌تر و شخصی‌سازی‌شده‌تر کنیم.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">مسیر توسعه DeepChat</h3>
            <p className="text-gray-700 dark:text-slate-200 leading-7">
              مسیر توسعه هیژا بر پایه نوآوری مستمر، بهره‌گیری از ظرفیت‌های دانشگاهی و همکاری با کسب‌وکارها شکل گرفته است. هدف ما گسترش محصولات قابل‌سفارشی‌سازی، ورود به بازارهای گسترده‌تر و ایجاد همکاری‌های صنعتی و سازمانی است.
            </p>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h2 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-4 flex items-center gap-2">
              <Zap className="w-6 h-6" />
              تعهد ما به جامعه دیجیتال
            </h2>
            <div className="space-y-6">
              <div className="p-4 bg-gray-50 dark:bg-slate-700/50 rounded-lg border border-gray-100 dark:border-slate-700">
                <h4 className="font-bold text-gray-900 dark:text-white">امنیت داده‌ها</h4>
                <p className="text-sm text-gray-600 dark:text-slate-400 mt-1">
                  ما امنیت اطلاعات مشتریان و داده‌های آن‌ها را در بالاترین سطح ممکن تضمین می‌کنیم. تمام داده‌ها در سرورهای امن داخلی نگهداری می‌شوند.
                </p>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-slate-700/50 rounded-lg border border-gray-100 dark:border-slate-700">
                <h4 className="font-bold text-gray-900 dark:text-white">نوآوری مستمر</h4>
                <p className="text-sm text-gray-600 dark:text-slate-400 mt-1">
                  تیم توسعه ما به‌طور مداوم در حال به‌روزرسانی مدل‌های هوش مصنوعی و افزودن قابلیت‌های جدید به DeepChat است.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* شبکه‌های اجتماعی (شامل motion.div و تگ‌های <a> بهینه شده) */}
        <motion.div 
          variants={itemVariants} 
          className="border-t border-slate-300 dark:border-slate-700 pt-8 mt-12 max-w-3xl mx-auto text-center"
        >
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            با ما در ارتباط باشید
          </h3>
          <p className="text-gray-600 dark:text-slate-400 mb-6">
            برای دریافت آخرین اخبار و به‌روزرسانی‌ها ما را دنبال کنید.
          </p>
          <div className="flex justify-center items-center gap-6 text-3xl text-gray-700 dark:text-slate-200">
            
            {/* لینک‌های بهینه شده برای سئو */}
            <a 
              href="https://t.me/deepchat_ir" 
              target="_blank" 
              rel="noopener noreferrer nofollow" 
              aria-label="کانال تلگرام DeepChat"
              className="hover:text-indigo-500 transition-transform hover:scale-110"
            >
              <Send className="w-7 h-7" />
            </a>
            
            <a 
              href="https://instagram.com/deepchat_ai" 
              target="_blank" 
              rel="noopener noreferrer nofollow" 
              aria-label="اینستاگرام DeepChat"
              className="hover:text-indigo-500 transition-transform hover:scale-110"
            >
              <Instagram className="w-7 h-7" />
            </a>
            
            <a 
              href="https://linkedin.com/company/yourcompany" 
              target="_blank" 
              rel="noopener noreferrer nofollow" 
              aria-label="لینکدین شرکت DeepChat"
              className="hover:text-indigo-500 transition-transform hover:scale-110"
            >
              <Linkedin className="w-7 h-7" />
            </a>
            
          </div>
        </motion.div>
        
      </motion.div>
    </motion.main>
  );
}