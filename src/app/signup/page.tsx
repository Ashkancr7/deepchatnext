"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

// 🎨: آیکون‌های SVG (آیکون Globe اضافه شد)
const Icons = {
  User: () => (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
  ),
  Mail: () => (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
  ),
  Phone: () => (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
  ),
  Lock: () => (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
  ),
  CreditCard: () => (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
  ),
  Globe: () => (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
  ),
  Eye: () => (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
  ),
  EyeOff: () => (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" /></svg>
  ),
  Check: () => (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
  )
};

const planOptions = [
  { value: "", label: "انتخاب پلن اشتراک..." },
  { value: "استارت اولیه", label: "استارت اولیه" },
];

// تایپ آپدیت شده
interface FormData {
  name: string;
  email: string;
  password: string;
  plan: string;
  phone: string;
  web_name: string; // فیلد جدید
}

export default function SignUpSplit() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    password: "",
    plan: "",
    phone: "",
    web_name: "", // مقدار اولیه جدید
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [apiError, setApiError] = useState<string | null>(null);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    // محدودیت عددی برای موبایل
    if (name === "phone") {
      if (!/^\d*$/.test(value)) return;
    }

    setForm({ ...form, [name]: value });
  };

  const isFormValid =
    form.name &&
    form.email &&
    form.password &&
    form.phone &&
    form.plan &&
    form.web_name; // اعتبار سنجی فیلد جدید

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;

    setStatus("loading");
    setApiError(null);

    // ساخت پلود نهایی برای ارسال به بک‌اند
    const payload = {
        ...form,
        activition: "pending" // این فیلد را خودکار ارسال می‌کنیم
    };

    try {
      const res = await fetch(
        "https://api.deepchatai.ir/client_auth/client_auth/register/request_otp", // URL اصلاح شد (یک client_auth حذف شد)
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.detail || "مشکلی در ثبت‌نام پیش آمده است.");
      }

      setStatus("success");
      setTimeout(() => {
        router.push(`/otp?phone=${form.phone}`);
      }, 1500);
    } catch (err: any) {
      setStatus("error");
      setApiError(err.message || "خطا در اتصال به سرور");
    }
  };

  return (
    <div dir="rtl" className="min-h-screen bg-white dark:bg-slate-900 font-sans flex">

      {/* 🟢 بخش راست: فرم ثبت نام */}
      <div className="flex-1 flex flex-col justify-center py-6 px-4 sm:px-6 lg:flex-none lg:px-14 xl:px-20 lg:w-1/2 relative z-10 overflow-y-auto">

        <div className="mx-auto w-full max-w-sm lg:max-w-xl mt-4 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-right mb-6">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                ساخت حساب فروشگاهی
              </h2>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                مشخصات فروشگاه و مدیر را وارد کنید.
              </p>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="space-y-4">

                {/* گرید 2 ستونه */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                  {/* ردیف ۱ */}
                  <InputField
                    label="نام و نام خانوادگی"
                    name="name"
                    placeholder="علی محمدی"
                    value={form.name}
                    onChange={handleChange}
                    icon={<Icons.User />}
                  />

                  <InputField
                    label="شماره موبایل"
                    type="tel"
                    name="phone"
                    placeholder="0912..."
                    value={form.phone}
                    onChange={handleChange}
                    icon={<Icons.Phone />}
                  />

                  {/* ردیف ۲ */}
                  <InputField
                    label="نام فروشگاه / وب‌سایت"
                    name="web_name"
                    placeholder="دیجی شاپ"
                    value={form.web_name}
                    onChange={handleChange}
                    icon={<Icons.Globe />}
                  />

                  <InputField
                    label="آدرس ایمیل"
                    type="email"
                    name="email"
                    placeholder="name@company.com"
                    value={form.email}
                    onChange={handleChange}
                    icon={<Icons.Mail />}
                  />

                  {/* ردیف ۳ */}
                  <SelectField
                    label="انتخاب اشتراک"
                    name="plan"
                    value={form.plan}
                    onChange={handleChange}
                    options={planOptions}
                    icon={<Icons.CreditCard />}
                  />

                   <InputField
                    label="رمز عبور"
                    type="password"
                    name="password"
                    placeholder="حداقل ۸ کاراکتر"
                    value={form.password}
                    onChange={handleChange}
                    icon={<Icons.Lock />}
                    isPassword
                  />

                </div>

                <div className="pt-4">
                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    whileHover={{ scale: 1.01 }}
                    type="submit"
                    disabled={status === "loading" || !isFormValid}
                    className={`
                      w-full flex justify-center py-3.5 px-4 border border-transparent rounded-xl shadow-sm text-base font-bold text-white 
                      transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
                      ${status === "loading" || !isFormValid
                        ? "bg-slate-400 cursor-not-allowed opacity-70"
                        : "bg-indigo-600 hover:bg-indigo-700 hover:shadow-indigo-500/30"}
                    `}
                  >
                    {status === "loading" ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        در حال پردازش...
                      </span>
                    ) : (
                      "ثبت‌نام و شروع رایگان"
                    )}
                  </motion.button>
                </div>
              </form>

              <div className="mt-4">
                {/* پیام‌های وضعیت */}
                <AnimatePresence mode="wait">
                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="p-3 rounded-lg bg-red-50 text-red-600 text-sm text-center border border-red-100"
                    >
                      {apiError}
                    </motion.div>
                  )}
                  {status === "success" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="p-3 rounded-lg bg-green-50 text-green-600 text-sm text-center border border-green-100 flex items-center justify-center gap-2"
                    >
                      <Icons.Check />
                      ثبت‌نام موفقیت‌آمیز بود!
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="mt-6 text-center border-t border-slate-200 dark:border-slate-800 pt-4">
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  قبلاً ثبت‌نام کرده‌اید؟{" "}
                  <a href="https://panel.deepchatai.ir" className="font-bold text-indigo-600 hover:text-indigo-500">
                    وارد شوید
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 🔵 بخش چپ: تصویر */}
      <div className="hidden lg:block relative w-0 flex-1 lg:w-1/2 overflow-hidden bg-indigo-900 h-screen sticky top-0">
        <img
          className="absolute inset-0 h-full w-full object-cover opacity-40 mix-blend-overlay"
          src="https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
          alt="E-commerce work"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-indigo-900 via-indigo-900/40 to-transparent"></div>
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-pink-500 blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-blue-500 blur-3xl opacity-20"></div>
      </div>

    </div>
  );
}

// 🌳: کامپوننت InputField
interface InputFieldProps {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  icon?: React.ReactNode;
  isPassword?: boolean;
  className?: string;
}

function InputField({ label, name, type = "text", value, onChange, placeholder, icon, isPassword, className }: InputFieldProps) {
  const [showPassword, setShowPassword] = useState(false);
  const inputType = isPassword ? (showPassword ? "text" : "password") : type;

  return (
    <div className={className}>
      <label htmlFor={name} className="block text-xs md:text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
        {label}
      </label>
      <div className="relative mt-1 rounded-xl shadow-sm">
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-slate-400">
          {icon}
        </div>
        <input
          type={inputType}
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          className="block w-full pr-10 pl-3 py-3 bg-gray-50 dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700 rounded-xl focus:ring-indigo-500 focus:border-indigo-500 text-sm text-slate-900 dark:text-white transition-all outline-none"
          placeholder={placeholder}
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400 hover:text-indigo-500 cursor-pointer"
          >
            {showPassword ? <Icons.EyeOff /> : <Icons.Eye />}
          </button>
        )}
      </div>
    </div>
  );
}

// 🌳: کامپوننت SelectField
interface SelectFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: { value: string; label: string }[];
  icon?: React.ReactNode;
}

function SelectField({ label, name, value, onChange, options, icon }: SelectFieldProps) {
  return (
    <div>
      <label htmlFor={name} className="block text-xs md:text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
        {label}
      </label>
      <div className="relative mt-1 rounded-xl shadow-sm">
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-slate-400">
          {icon}
        </div>
        <select
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          className="block w-full pr-10 pl-3 py-3 bg-gray-50 dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700 rounded-xl focus:ring-indigo-500 focus:border-indigo-500 text-sm text-slate-900 dark:text-white transition-all outline-none appearance-none cursor-pointer"
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value} className="bg-white dark:bg-slate-800">
              {opt.label}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
        </div>
      </div>
    </div>
  );
}