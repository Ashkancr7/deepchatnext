// src/app/contact/ContactClient.tsx
"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, Send, Instagram, Linkedin, Loader, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

interface FormData {
  name: string;
  email: string;
  message: string;
}

// کامپوننت اصلی که در کلاینت رندر می‌شود
export default function ContactClient() {
  const [form, setForm] = useState<FormData>({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    // شبیه‌سازی ارسال اطلاعات به سرور/API
    // در دنیای واقعی، اینجا باید Axios.post یا fetch را فراخوانی کنید
    setTimeout(() => {
      setStatus("success");
      setForm({ name: "", email: "", message: "" }); // پاک کردن فرم
      setTimeout(() => setStatus("idle"), 3000);
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="container mx-auto px-4 py-20 md:py-32 max-w-6xl flex-grow">
      <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} className="text-center mb-10 md:mb-16">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4">تماس با ما</h1> 
        <p className="text-base md:text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto px-2">ما همیشه آماده شنیدن نظرات و پاسخ به سوالات شما هستیم.</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
        
        {/* اطلاعات تماس */}
        <div className="lg:col-span-1 bg-indigo-600 text-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-xl flex flex-col justify-between order-2 lg:order-1">
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-6 border-b border-indigo-500 pb-4">راه‌های ارتباطی</h3>
            <div className="space-y-6">
              <ContactItem icon={<Phone className="w-5 h-5" />} title="تلفن" value="09392391840" link="tel:+989392391840" /> 
              <ContactItem icon={<Mail className="w-5 h-5" />} title="ایمیل" value="info@deepchatai.ir" link="mailto:info@deepchatai.ir" /> 
              <ContactItem icon={<MapPin className="w-5 h-5 flex-shrink-0" />} title="آدرس" value="کردستان، سنندج، دانشگاه کردستان، مرکز رشد مهندسی، شرکت مهندسان ارزش‌آفرین‌هیژا واحد2" />
            </div>
          </div>
          <div className="mt-8 md:mt-12 pt-6 border-t border-indigo-400/50">
            <h3 className="mb-4 font-medium opacity-80 text-sm md:text-base">شبکه‌های اجتماعی</h3>
            <div className="flex gap-4">
              <SocialLink href="https://instagram.com/deepchat_ai" icon={<Instagram className="w-5 h-5 md:w-6 md:h-6" />} />
              <SocialLink href="https://linkedin.com" icon={<Linkedin className="w-5 h-5 md:w-6 md:h-6" />} />
            </div>
          </div>
        </div>

        {/* فرم - اصلاح شده برای Accessibility */}
        <div className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-2xl md:rounded-3xl p-6 md:p-12 shadow-xl order-1 lg:order-2">
          <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8">ارسال پیام</h2>
          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">نام شما</label>
                <input 
                  id="name" // 👈 بهبود سئو و دسترسی‌پذیری
                  required 
                  name="name" 
                  className="w-full p-3 rounded-xl bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 focus:outline-none focus:border-indigo-500 transition-colors text-sm md:text-base" 
                  value={form.name} 
                  onChange={handleChange} 
                  placeholder="مانند: علی احمدی"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">ایمیل</label>
                <input 
                  id="email" // 👈 بهبود سئو و دسترسی‌پذیری
                  required 
                  type="email" 
                  name="email"
                  className="w-full p-3 rounded-xl bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 focus:outline-none focus:border-indigo-500 transition-colors text-sm md:text-base" 
                  value={form.email} 
                  onChange={handleChange} 
                  placeholder="example@gmail.com"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">پیام</label>
              <textarea 
                id="message" // 👈 بهبود سئو و دسترسی‌پذیری
                required 
                rows={5} 
                name="message"
                className="w-full p-3 rounded-xl bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 focus:outline-none focus:border-indigo-500 resize-none transition-colors text-sm md:text-base" 
                value={form.message} 
                onChange={handleChange} 
                placeholder="متن پیام خود را بنویسید..."
              />
            </div>
            
            <button 
              disabled={status === "loading"} 
              className="w-full py-3 md:py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-all flex justify-center items-center gap-2 shadow-lg shadow-indigo-500/20 disabled:opacity-70 disabled:cursor-not-allowed text-sm md:text-base"
            >
              {status === "loading" ? <Loader className="animate-spin" /> : <><Send size={18} className="md:w-5 md:h-5" /> ارسال پیام</>}
            </button>
          </form>
          {status === "success" && (
            <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-xl flex items-center gap-2 border border-green-200 dark:border-green-800 text-sm md:text-base">
              <CheckCircle className="w-5 h-5" /> پیام شما با موفقیت ارسال شد.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// --- کامپوننت‌های کمکی (بهینه شده) ---

interface ContactItemProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  link?: string;
}

function ContactItem({ icon, title, value, link }: ContactItemProps) {
  const Content = () => (
    <div className="flex items-start gap-3 md:gap-4 group">
      <div className="bg-indigo-500/50 p-2 rounded-lg group-hover:bg-white group-hover:text-indigo-600 transition-colors flex-shrink-0">
        {icon}
      </div>
      <div className="min-w-0">
        <div className="text-xs text-indigo-200 mb-1">{title}</div>
        <div className="font-medium text-sm md:text-base break-words">{value}</div>
      </div>
    </div>
  );
  // استفاده از تگ <a> برای لینک‌های tel و mailto (مفید برای سئو)
  return link ? <a href={link} className="block hover:opacity-80 transition-opacity">{Content()}</a> : Content();
}

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
}

function SocialLink({ href, icon }: SocialLinkProps) {
  return (
    <a 
      href={href} 
      target="_blank" 
      // 👈 rel="nofollow" اضافه شد برای جلوگیری از انتقال ارزش سئو به شبکه‌های اجتماعی
      rel="noopener noreferrer nofollow" 
      aria-label="لینک شبکه اجتماعی"
      className="p-2 md:p-3 bg-indigo-700 rounded-full hover:bg-white hover:text-indigo-600 transition-all hover:scale-110"
    >
      {icon}
    </a>
  );
}