"use client";

import React from "react";
import { Clock, Globe2, ShieldCheck, Workflow } from "lucide-react";
import { motion } from "framer-motion";

// دیتای استاتیک
const features = [
  {
    icon: <Clock className="w-6 h-6" />,
    title: "پاسخ‌دهی آنی",
    desc: "پاسخگویی ۲۴/۷ بدون حتی یک ثانیه توقف؛ مشتریان شما منتظر نمی‌مانند.",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    icon: <Globe2 className="w-6 h-6" />,
    title: "هوش چندزبانه",
    desc: "ارتباط با تمام دنیا به زبان مادری؛ پشتیبانی دقیق از فارسی، انگلیسی و بیشتر.",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "امنیت سازمانی",
    desc: "حفاظت از داده‌های حساس با استانداردهای نظامی و کنترل دسترسی پیشرفته.",
    gradient: "from-emerald-400 to-green-600",
  },
  {
    icon: <Workflow className="w-6 h-6" />,
    title: "یکپارچگی بی‌‌مرز",
    desc: "اتصال plug-and-play به CRM، ووکامرس و تمام ابزارهای محبوب شما.",
    gradient: "from-violet-500 to-purple-500",
  },
];

// تنظیمات انیمیشن
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.1 } 
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Features() {
  return (
    <section 
      id="features" 
      className="relative py-24 overflow-hidden bg-gray-50 dark:bg-[#0B1120]"
      aria-labelledby="features-heading"
      itemScope
      itemType="https://schema.org/CreativeWork"
    >
      {/* Background pattern */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-500/10 dark:bg-indigo-500/20 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            id="features-heading"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-black tracking-tight text-gray-900 dark:text-white mb-6"
          >
            دیپ‌چت قدرت گرفته از 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-sky-500">
              هوش مصنوعی
            </span>
            <br />
            ساخته شده برای رشد
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 dark:text-slate-400 leading-relaxed"
          >
            دیپ‌چت فقط یک ابزار چت نیست؛ دستیار هوشمندی است که کسب‌وکار شما را 
            به سطح جدیدی از اتوماسیون و رضایت مشتری می‌رساند.
          </motion.p>
        </div>

        {/* Feature Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group relative p-8 bg-white dark:bg-slate-800/50 rounded-[2rem] border border-gray-100 dark:border-slate-700 hover:border-indigo-100 dark:hover:border-indigo-900 shadow-sm hover:shadow-2xl transition-all duration-500"
              role="listitem"
              aria-label={item.title}
              itemScope
              itemType="https://schema.org/SoftwareFeature"
            >
              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-indigo-500/5 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white shadow-lg mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
                  {item.icon}
                  <span className="sr-only">{item.title}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3" itemProp="name">
                  {item.title}
                </h3>
                
                <p className="text-gray-500 dark:text-slate-400 text-sm leading-7" itemProp="description">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "ویژگی‌های DeepChat",
            "itemListElement": features.map((f, i) => ({
              "@type": "SoftwareFeature",
              "position": i + 1,
              "name": f.title,
              "description": f.desc,
            })),
          }),
        }}
      />
    </section>
  );
}
