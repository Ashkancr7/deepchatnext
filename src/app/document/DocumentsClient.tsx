// src/app/documents/DocumentsClient.tsx
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Copy, Check, Terminal, Code2, 
  LayoutTemplate, Key, FileJson, Globe 
} from "lucide-react";
import Script from "next/script"; // استفاده از Script کامپوننت Next.js

// --- داده‌های استاتیک ---
const STATIC_USER = {
  name: "کاربر گرامی",
  api_key: "a1b2c3d4-e5f6-7890-1234-567890abcdef",
};

const STATIC_SCRIPTS = [
  {
    id: "html",
    title: "نصب در HTML",
    category: "html",
    icon: <Globe className="w-5 h-5 text-orange-500 dark:text-orange-400" />,
    description: "این کد را قبل از بسته شدن تگ </body> در فایل index.html خود قرار دهید.",
    code: String.raw`<div id="widget-root"></div>
<script>
  window.DEEPCHAT_CONFIG = {
    siteKey: "${STATIC_USER.api_key}"
  };
</script>
<script src="https://widget.deepchatai.ir/widgetv1.1.js" async></script>`,
  },
  {
    id: "react",
    title: "نصب در React / Next.js",
    category: "react",
    icon: <FileJson className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />,
    description: "این قطعه کد را در فایل layout.tsx یا App.js اصلی پروژه قرار دهید. از کامپوننت Next/Script استفاده کنید.",
    // استفاده از کامپوننت Script در این حالت (به جای کپی کردن تگ <script>) معمول‌تر است
    code: String.raw`import Script from "next/script";

// Inside your RootLayout or Component
<div id="widget-root"></div>

<Script 
  id="deepchat-config" 
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: \`window.DEEPCHAT_CONFIG = { siteKey: "${STATIC_USER.api_key}" };\`
  }}
/>

<Script 
  src="https://widget.deepchatai.ir/widgetv1.1.js" 
  strategy="afterInteractive" 
/>`,
  },
  {
    id: "wordpress",
    title: "نصب در وردپرس",
    category: "wordpress",
    icon: <LayoutTemplate className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
    description: "کد زیر را در انتهای فایل functions.php قالب فعال خود کپی کنید.",
    code: String.raw`function add_deepchat_widget() {
  if (!is_admin()) {
    echo '
    <div id="widget-root"></div>
    <script>
      window.DEEPCHAT_CONFIG = { siteKey: "${STATIC_USER.api_key}" };
    </script>
    <script src="https://widget.deepchatai.ir/widgetv1.1.js" defer></script>
    ';
  }
}
add_action('wp_footer', 'add_deepchat_widget');`,
  },
];

const CATEGORIES = [
  { id: "html", label: "وب‌سایت ساده (HTML)" },
  { id: "react", label: "React & Next.js" },
  { id: "wordpress", label: "وردپرس" },
];

export default function DocumentsClient() {
  const [activeTab, setActiveTab] = useState("html");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const activeScript = STATIC_SCRIPTS.find(s => s.category === activeTab);

  return (
    // بخش محتوای داخلی - بدون Nav و بدون رنگ‌های پس‌زمینه اصلی
    <div className="container mx-auto px-4 py-0 md:pt-8 max-w-5xl"> 

      {/* هدر صفحه */}
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12">
        <div>
          {/* H1 به دلیل اهمیت ساختاری در صفحه مستندات در کلاینت می‌ماند */}
          <h1 className="text-3xl font-extrabold flex items-center gap-3 mb-3 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
            <Terminal className="w-8 h-8 text-indigo-600 dark:text-indigo-500" />
            مستندات راه‌اندازی
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base">
            کد مربوط به پلتفرم خود را کپی کرده و در سایت قرار دهید.
          </p>
        </div>

        {/* باکس API Key */}
        <div className="w-full md:w-auto bg-white dark:bg-[#161f32] border border-gray-200 dark:border-indigo-500/30 rounded-xl p-4 flex items-center gap-4 shadow-lg shadow-gray-200/50 dark:shadow-indigo-500/10 transition-colors duration-300">
          <div className="bg-indigo-50 dark:bg-indigo-500/10 p-2.5 rounded-lg">
              <Key className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
          </div>
          <div className="flex-1 min-w-0 px-2">
              <p className="text-[10px] uppercase tracking-wider text-slate-500 mb-0.5">API Key</p>
              <code className="block text-sm font-mono text-slate-800 dark:text-white truncate ltr tracking-tight">
                {STATIC_USER.api_key}
              </code>
          </div>
          <button 
              onClick={() => copyToClipboard(STATIC_USER.api_key, "main-key")}
              className="p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg transition-colors text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              title="کپی کلید API" // بهبود دسترسی‌پذیری
          >
              {copiedId === "main-key" ? <Check size={18} className="text-green-500 dark:text-green-400" /> : <Copy size={18} />}
          </button>
        </div>
      </div>

      {/* تب‌ها */}
      <div className="flex gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar border-b border-gray-200 dark:border-slate-800">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveTab(cat.id)}
            className={`
              relative px-6 py-3 text-sm font-medium rounded-t-xl transition-all whitespace-nowrap flex-shrink-0
              ${activeTab === cat.id 
                ? "text-slate-900 bg-white border-gray-200 dark:text-white dark:bg-[#161f32] border-t border-x dark:border-slate-700/50" 
                : "text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 hover:bg-gray-100 dark:hover:bg-slate-800/50"}
            `}
          >
            {cat.label}
            {activeTab === cat.id && (
              <motion.div 
                  layoutId="activeTabIndicator"
                  className="absolute top-0 left-0 right-0 h-0.5 bg-indigo-600 dark:bg-indigo-500 rounded-full" 
              />
            )}
          </button>
        ))}
      </div>

      {/* محتوای تب فعال */}
      <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
              {activeScript && (
                  <motion.div
                      key={activeScript.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="bg-white dark:bg-[#161f32] rounded-2xl border border-gray-200 dark:border-slate-700/50 overflow-hidden shadow-xl dark:shadow-2xl transition-colors duration-300"
                  >
                      {/* هدر کارت */}
                      <div className="p-6 md:p-8 border-b border-gray-100 dark:border-slate-700/50 flex flex-col md:flex-row justify-between items-start gap-4">
                          <div className="flex gap-4">
                              <div className="bg-gray-50 dark:bg-[#0B1120] p-3.5 rounded-xl border border-gray-200 dark:border-slate-700 h-fit shadow-sm dark:shadow-inner">
                                  {activeScript.icon}
                              </div>
                              <div>
                                  <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                                      {activeScript.title}
                                  </h2>
                                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-2xl">
                                      {activeScript.description}
                                  </p>
                              </div>
                          </div>
                          
                          <button
                              onClick={() => copyToClipboard(activeScript.code!, activeScript.id)}
                              className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm font-medium shadow-lg shadow-indigo-500/20 transition-all active:scale-95"
                          >
                              {copiedId === activeScript.id ? <Check size={18} /> : <Copy size={18} />}
                              {copiedId === activeScript.id ? "کپی شد!" : "کپی اسکریپت"}
                          </button>
                      </div>

                      {/* بدنه کد */}
                      <div className="relative group bg-[#0f172a] dark:bg-[#0B1120]">
                          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent"></div>
                          
                          {/* دکمه کپی شناور - بهینه‌شده */}
                          <button 
                              onClick={() => copyToClipboard(activeScript.code!, activeScript.id)}
                              className="absolute top-4 right-4 p-2 bg-slate-700/80 backdrop-blur rounded-lg text-slate-400 hover:text-white opacity-0 group-hover:opacity-100 transition-all border border-slate-600"
                              title="کپی اسکریپت" // بهبود دسترسی‌پذیری
                          >
                              {copiedId === activeScript.id ? <Check size={16} className="text-green-400"/> : <Copy size={16} />}
                          </button>

                          <pre 
                              dir="ltr" 
                              className="p-6 md:p-8 overflow-x-auto text-sm font-mono leading-7 text-blue-100 custom-scrollbar"
                          >
                              <code>{activeScript.code}</code>
                          </pre>
                      </div>
                      
                      {/* فوتر راهنما */}
                      <div className="bg-gray-50 dark:bg-[#131b2c] p-4 text-center text-xs text-slate-500 border-t border-gray-200 dark:border-slate-800 transition-colors duration-300">
                          <span className="inline-flex items-center gap-1.5">
                              <Code2 size={14} />
                              در صورت نیاز به راهنمایی بیشتر، با تیم پشتیبانی تماس بگیرید.
                          </span>
                      </div>
                  </motion.div>
              )}
          </AnimatePresence>
      </div>

      <style jsx global>{`
          /* استایل‌های اسکرول‌بار برای کدباکس‌ها */
          .no-scrollbar::-webkit-scrollbar { display: none; }
          .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
          
          .custom-scrollbar::-webkit-scrollbar {
              height: 8px;
              width: 8px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
              background: #0f172a; 
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
              background: #334155; 
              border-radius: 4px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
              background: #475569; 
          }
      `}</style>
    </div>
  );
}