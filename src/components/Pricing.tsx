"use client";

import React, { useState } from "react";
import { Check, X, Zap } from "lucide-react";
import { useRouter } from "next/navigation"; // جایگزین react-router-dom
import { motion, AnimatePresence } from "framer-motion";

// 1. تعریف تایپ‌ها برای ساختار دیتا
type BillingCycle = "monthly" | "yearly";

interface Feature {
  label: string;
  type?: "messages";
  value?: string;
  monthly?: number | string; // چون هم عدد داریم هم 'نامحدود'
  yearly?: number | string;
  included: boolean;
}

interface Plan {
  id: string;
  name: string;
  desc: string;
  popular?: boolean;
  price: {
    monthly: string;
    yearly: string;
  };
  features: Feature[];
}

// 2. داده‌ها (تایپ شده)
const PLANS: Plan[] = [
  {
    id: "starter",
    name: "استارت اولیه",
    desc: "برای پروژه‌های شخصی و تست سیستم",
    price: { monthly: "رایگان", yearly: "رایگان" },
    features: [
      { label: "پیام", type: "messages", monthly: 250, yearly: 250, included: true },
      { label: "حجم فایل", value: "5 مگ", included: true },
      { label: "ذخیره چت", value: "2 ماه", included: true },
      { label: "نمایش اطلاعات کاربر", value: "", included: true },
      { label: "احراز هویت", value: "", included: true },
      { label: "اتصال به تلگرام", value: "", included: false },
      { label: "اتصال به اینستاگرام", value: "", included: false },
      { label: "اتصال به واتساپ", value: "", included: false },
      { label: "پشتیبانی 24 ساعته", value: "", included: false },
      { label: "پاسخ آماده", value: "", included: false },
    ],
  },
  {
    id: "growth",
    name: "مرحله رشد",
    desc: "برای کسب‌وکارهای در حال توسعه",
    price: { monthly: "450,000", yearly: "4,500,000" },
    features: [
      { label: "پیام", type: "messages", monthly: 1000, yearly: 1000 * 12, included: true },
      { label: "حجم فایل", value: "10 مگ", included: true },
      { label: "ذخیره چت", value: "1 سال", included: true },
      { label: "نمایش اطلاعات کاربر", value: "", included: true },
      { label: "احراز هویت", value: "", included: true },
      { label: "اتصال به تلگرام", value: "", included: true },
      { label: "اتصال به اینستاگرام", value: "", included: true },
      { label: "اتصال به واتساپ", value: "", included: true },
      { label: "پشتیبانی 24 ساعته", value: "", included: true },
      { label: "پاسخ آماده", value: "", included: true },
    ],
  },
  {
    id: "pro",
    name: "حرفه‌ای",
    desc: "نهایت قدرت برای تیم‌های بزرگ",
    popular: true,
    price: { monthly: "999,000", yearly: "9,900,000" },
    features: [
      { label: "پیام", type: "messages", monthly: 2500, yearly: 2500 * 12, included: true },
      { label: "حجم فایل", value: "50 مگ", included: true },
      { label: "ذخیره چت", value: "", included: true },
      { label: "نمایش اطلاعات کاربر", value: "", included: true },
      { label: "احراز هویت", value: "", included: true },
      { label: "اتصال به تلگرام", value: "", included: true },
      { label: "اتصال به اینستاگرام", value: "", included: true },
      { label: "اتصال به واتساپ", value: "", included: true },
      { label: "پشتیبانی 24 ساعته", value: "", included: true },
      { label: "پاسخ آماده", value: "", included: true },
    ],
  },
  {
    id: "enterprise",
    name: "سازمانی",
    desc: "راهکارهای اختصاصی برای سازمان‌ها",
    price: { monthly: "تماس بگیرید", yearly: "تماس بگیرید" },
    features: [
      { label: "پیام", type: "messages", monthly: 'نامحدود', yearly: 'نامحدود', included: true },
      { label: "حجم فایل", value: "اختصاصی", included: true },
      { label: "سرور اختصاصی", value: "", included: true },
      { label: "قرارداد رسمی", value: "", included: true },
      { label: "منتور فنی", value: "", included: true },
      { label: "شخصی سازی", value: "", included: true },
      { label: "ذخیره چت", value: "", included: true },
      { label: "پشتیبانی 24 ساعته", value: "", included: true },
      { label: "اتصال به شبکه ها", value: "", included: true },
      { label: "اتصال به اپلیکیشن", value: "", included: true },
    ],
  },
];

// --- Toggle Component ---
interface ToggleProps {
  billing: BillingCycle;
  setBilling: (val: BillingCycle) => void;
}

const PricingToggle = ({ billing, setBilling }: ToggleProps) => (
  <div id="pricing" className="relative flex items-center justify-center mt-8 mb-12">
    <div className="relative flex bg-gray-200 dark:bg-slate-800 p-1 rounded-full">
      <motion.div
        className="absolute top-1 bottom-1 rounded-full bg-white dark:bg-indigo-600 shadow-sm z-0"
        initial={false}
        animate={{
          left: billing === "monthly" ? "4px" : "50%",
          width: "calc(50% - 4px)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      />

      <button
        onClick={() => setBilling("monthly")}
        className={`relative z-10 px-6 py-2 text-sm font-semibold rounded-full transition-colors ${
          billing === "monthly" ? "text-gray-900 dark:text-white" : "text-gray-500"
        }`}
      >
        ماهانه
      </button>
      <button
        onClick={() => setBilling("yearly")}
        className={`relative z-10 px-6 py-2 text-sm font-semibold rounded-full transition-colors ${
          billing === "yearly" ? "text-gray-900 dark:text-white" : "text-gray-500"
        }`}
      >
        سالانه
      </button>
    </div>
  </div>
);

// --- Card Component ---
interface CardProps {
  plan: Plan;
  billing: BillingCycle;
}

const PricingCard = ({ plan, billing }: CardProps) => {
  const router = useRouter(); // استفاده از هوک روتر Next.js
  const isPopular = plan.popular;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className={`relative flex flex-col p-6 rounded-3xl border transition-all ${
        isPopular
          ? "border-indigo-500 bg-white dark:bg-slate-800 shadow-xl scale-105 md:scale-110 z-10"
          : "border-gray-200 dark:border-slate-700 bg-gray-50/50 dark:bg-slate-800/50"
      }`}
    >
      {isPopular && (
        <div className="absolute -top-4 left-0 right-0 flex justify-center">
          <span className="bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
            <Zap className="w-3 h-3" />
            پیشنهاد ویژه
          </span>
        </div>
      )}

      {/* عنوان */}
      <div className="mb-5 text-center lg:text-right">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{plan.name}</h3>
        <p className="text-sm text-gray-500 dark:text-slate-400 mt-1 h-10">{plan.desc}</p>
      </div>

      {/* قیمت */}
      <div className="mb-6 flex justify-center lg:justify-start">
        <AnimatePresence mode="wait">
          <motion.div
            key={billing}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex items-end gap-1"
          >
            <span className="text-3xl font-extrabold text-gray-900 dark:text-white">
              {billing === "monthly" ? plan.price.monthly : plan.price.yearly}
            </span>

            {plan.price.monthly !== "رایگان" &&
              plan.price.monthly !== "تماس بگیرید" && (
                <span className="text-sm text-gray-500 dark:text-slate-400 mb-1">
                  تومان
                </span>
              )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ویژگی‌ها */}
      <ul className="space-y-4 mb-8 flex-1">
        {plan.features.map((feat, idx) => (
          <li key={idx} className="flex items-center gap-3 text-sm">
            <div
              className={`w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center ${
                feat.included
                  ? "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400"
                  : "bg-gray-100 dark:bg-slate-700 text-gray-400"
              }`}
            >
              {feat.included ? <Check className="w-3 h-3" /> : <X className="w-3 h-3" />}
            </div>

            <span
              className={
                feat.included
                  ? "text-gray-700 dark:text-slate-300"
                  : "text-gray-400 line-through decoration-gray-400/50"
              }
            >
              {feat.type === "messages"
                ? `${billing === "monthly" ? feat.monthly : feat.yearly} پیام`
                : `${feat.value || ''} ${feat.label}`}
            </span>
          </li>
        ))}
      </ul>

      {/* دکمه */}
      <button
        onClick={() => router.push("/signup")} // هدایت به صفحه جدید ثبت‌نام
        className={`w-full py-3 rounded-xl font-semibold transition-all ${
          isPopular
            ? "bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg hover:shadow-indigo-500/30"
            : "bg-white dark:bg-slate-700 border border-gray-200 dark:border-slate-600 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-slate-600"
        }`}
      >
        {plan.price.monthly === "تماس بگیرید" ? "تماس برای فروش" : "انتخاب پلن"}
      </button>
    </motion.div>
  );
};

// --- صفحه اصلی ---
export default function Pricing() {
  const [billing, setBilling] = useState<BillingCycle>("monthly");

  return (
    <section className="py-24 bg-gray-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-4">
            پلن‌های اشتراک
          </h2>
          <p className="text-lg text-gray-600 dark:text-slate-400">
            پلن‌های شفاف، بدون هزینه‌ی پنهان. مناسب برای هر سایز کسب‌وکار.
          </p>
        </div>

        <PricingToggle billing={billing} setBilling={setBilling} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PLANS.map((p) => (
            <PricingCard key={p.id} plan={p} billing={billing} />
          ))}
        </div>
      </div>
    </section>
  );
}