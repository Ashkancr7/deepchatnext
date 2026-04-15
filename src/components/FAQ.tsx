"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItemType {
  id: number;
  question: string;
  answer: string;
}

const FAQ_DATA: FAQItemType[] = [
  {
    id: 1,
    question: "چطور شروع کنم؟",
    answer:
      "کافیه ثبت‌نام کنی، اسکریپت رو در سایتت قرار بدی و تنظیمات اولیه رو انجام بدی تا DeepChat آماده‌ی پاسخگویی باشه. ما راهنمای قدم‌به‌قدم ویدیویی هم داریم.",
  },
  {
    id: 2,
    question: "آیا امکان اتصال به CRM وجود دارد؟",
    answer:
      "بله، کاملاً! از طریق API قدرتمند و وب‌هوک‌های ما می‌تونی DeepChat رو به CRM، فروشگاه‌سازها (مثل ووکامرس) یا هر سیستم اختصاصی دیگری متصل کنی.",
  },
  {
    id: 3,
    question: "پشتیبانی چگونه است؟",
    answer:
      "ما هوای شما رو داریم. برای همه پلن‌ها پشتیبانی ایمیلی با پاسخگویی زیر ۲ ساعت فعاله. برای پلن‌های سازمانی، پشتیبانی تلفنی اختصاصی و منتور فنی هم در نظر گرفتیم.",
  },
];

// --- FAQ Item Component ---
interface FAQItemProps {
  item: FAQItemType;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItem = ({ item, isOpen, onToggle }: FAQItemProps) => {
  return (
    <div
      className={`group border rounded-2xl overflow-hidden transition-all duration-300 ${
        isOpen
          ? "border-indigo-500 bg-indigo-50/50 dark:bg-slate-800/80 dark:border-indigo-500 shadow-md"
          : "border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-indigo-300 dark:hover:border-slate-600"
      }`}
    >
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${item.id}`}
        className="w-full p-5 flex items-center justify-between text-right focus:outline-none focus:ring-2 focus:ring-indigo-500/20 rounded-t-2xl"
      >
        <span
          className={`font-bold text-lg transition-colors duration-300 ${
            isOpen
              ? "text-indigo-600 dark:text-indigo-400"
              : "text-gray-800 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400"
          }`}
        >
          {item.question}
        </span>
        <span
          className={`p-2 rounded-full transition-all duration-300 ${
            isOpen
              ? "bg-indigo-100 dark:bg-indigo-900/30 rotate-180"
              : "bg-gray-100 dark:bg-slate-700 group-hover:bg-indigo-50 dark:group-hover:bg-slate-600"
          }`}
        >
          <ChevronDown
            className={`w-5 h-5 transition-colors ${
              isOpen ? "text-indigo-600 dark:text-indigo-400" : "text-gray-500 dark:text-slate-400"
            }`}
          />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            id={`faq-answer-${item.id}`}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="px-5 pb-5 text-gray-600 dark:text-slate-400 text-sm md:text-base leading-relaxed overflow-hidden"
          >
            {item.answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- Main FAQ Component ---
export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setOpenIndex((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-slate-950 transition-colors duration-500 relative overflow-hidden">
      {/* پس‌زمینه تزئینی */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="w-full px-6 mx-auto md:max-w-4xl relative z-10">
        {/* هدر */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-2 mb-4 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl">
            <HelpCircle className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
            سوالات <span className="text-indigo-600 dark:text-indigo-400">متداول</span>
          </h2>
          <p className="text-gray-500 dark:text-slate-400 max-w-xl mx-auto text-lg">
            پاسخ به پرسش‌هایی که ممکن است برای شما پیش بیاید.
          </p>
        </div>

        {/* لیست آیتم‌ها */}
        <div className="space-y-4">
          {FAQ_DATA.map((item) => (
            <FAQItem
              key={item.id}
              item={item}
              isOpen={openIndex === item.id}
              onToggle={() => handleToggle(item.id)}
            />
          ))}
        </div>

        {/* کال تو اکشن پایین */}
        <div className="mt-10 text-center">
          <p className="text-gray-500 dark:text-slate-400 text-sm">
            سوال دیگری دارید؟{" "}
            <a href="#" className="text-indigo-600 font-semibold hover:underline">
              از چت بات بپرس
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
