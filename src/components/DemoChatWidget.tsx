"use client";

import React, { useState, useEffect, useRef } from "react";

// تعریف تایپ پیام
interface Message {
  role: "bot" | "user";
  text: string;
  ts: number;
}

export default function DemoChatWidget() {
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", text: "سلام! چطور می‌تونم کمکتون کنم؟", ts: Date.now() - 1000 * 60 * 12 },
    { role: "user", text: "می‌خوام به سایتم وصلش کنم.", ts: Date.now() - 1000 * 60 * 11 },
    { role: "bot", text: "راهنما می‌خوای برای نصب اسکریپت یا اتصال API؟", ts: Date.now() - 1000 * 60 * 10 },
  ]);

  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [siteApi] = useState("a563ef9f-b113-4e11-9db9-76cae3f015f1");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) ref.current.scrollTop = ref.current.scrollHeight;
  }, [messages, typing]);

  const send = async (text: string) => {
    const t = text.trim();
    if (!t) return;

    const userMsg: Message = { role: "user", text: t, ts: Date.now() };
    setMessages((s) => [...s, userMsg]);
    setInput("");
    setTyping(true);

    try {
      const token = localStorage.getItem("access_token");
      const clientId = siteApi;

      if (!clientId) {
        setMessages((s) => [...s, { role: "bot", text: "❌ کلید سایت (api_key) یافت نشد.", ts: Date.now() }]);
        setTyping(false);
        return;
      }

      const res = await fetch("https://api.deepchatai.ir/ask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(token && { Authorization: `Bearer ${token}` }),
          "X-Client-Id": clientId,
        },
        body: JSON.stringify({ question: t }),
      });

      if (!res.ok) throw new Error(`Server error: ${res.status}`);

      const data = await res.json();
      const botAnswer = data.answer || "❌ پاسخ دریافت نشد.";
      animateTyping(botAnswer);
    } catch {
      setMessages((s) => [...s, { role: "bot", text: "❌ خطا در ارتباط با سرور", ts: Date.now() }]);
      setTyping(false);
    }
  };

  const animateTyping = (text: string) => {
    let i = 0;
    let current = "";
    setMessages((prev) => [...prev, { role: "bot", text: "", ts: Date.now() }]);

    const type = () => {
      if (i < text.length) {
        current += text[i++];
        setMessages((prev) => {
            const newMessages = [...prev];
            const lastMsgIndex = newMessages.length - 1;
            if (lastMsgIndex >= 0) {
                newMessages[lastMsgIndex] = { ...newMessages[lastMsgIndex], text: current };
            }
            return newMessages;
        });
        setTimeout(type, 25);
      } else {
          setTyping(false);
      }
    };
    type();
  };

  return (
    <div className="flex flex-col gap-2 w-full max-w-md mx-auto h-full">
      {/* پیام‌ها */}
      <div
        ref={ref}
        className="h-64 md:h-80 overflow-auto p-2 space-y-3 rounded-xl transition-colors duration-500
                   bg-gray-50 dark:bg-slate-800 text-gray-900 dark:text-slate-100 custom-scrollbar"
      >
        {messages.map((m, i) => (
          <div 
            key={i} 
            // اصلاح جهت: در RTL، جاستیفای استارت میشه راست (کاربر) و اِند میشه چپ (ربات)
            className={`flex ${m.role === "user" ? "justify-start" : "justify-end"} px-2`}
          >
            <div
              className={`
                max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed transition-colors duration-300
                ${m.role === "user" 
                  ? "bg-indigo-600 text-white rounded-tr-sm" // گوشه تیز بالا راست برای کاربر
                  : "bg-gray-200 dark:bg-slate-700 text-gray-800 dark:text-slate-100 rounded-tl-sm" // گوشه تیز بالا چپ برای ربات
                }
              `}
            >
              <div>{m.text}</div>
              <div className={`text-[10px] mt-1 text-left ${m.role === "user" ? "text-indigo-200" : "text-gray-500 dark:text-slate-400"}`}>
                {new Date(m.ts).getHours()}:{String(new Date(m.ts).getMinutes()).padStart(2, "0")}
              </div>
            </div>
          </div>
        ))}

        {typing && (
          <div className="flex justify-end px-2"> {/* ربات سمت چپ (End) */}
            <div className="max-w-[60%] px-4 py-2.5 rounded-2xl rounded-tl-sm bg-gray-200 dark:bg-slate-700 text-gray-800 dark:text-slate-100 text-sm flex items-center space-x-2 animate-pulse">
              <span>در حال نوشتن</span>
              <span className="flex space-x-1 mx-2"> {/* margin-x اصلاح شد */}
                <span className="w-1.5 h-1.5 bg-gray-500 dark:bg-gray-400 rounded-full animate-bounce"></span>
                <span className="w-1.5 h-1.5 bg-gray-500 dark:bg-gray-400 rounded-full animate-bounce [animation-delay:.2s]"></span>
                <span className="w-1.5 h-1.5 bg-gray-500 dark:bg-gray-400 rounded-full animate-bounce [animation-delay:.4s]"></span>
              </span>
            </div>
          </div>
        )}
      </div>

      {/* ورودی */}
      <div className="flex items-center gap-2 mt-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send(input)}
          placeholder="پیام‌تان را بنویسید..."
          className="flex-1 px-4 py-2.5 rounded-full border border-gray-300 dark:border-slate-600
                     bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-300 text-sm"
        />
        <button
          onClick={() => send(input)}
          className="p-3 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition-colors duration-300 shadow-md"
        >
          {/* آیکون ارسال */}
          <svg className="w-5 h-5 -rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
        </button>
      </div>
    </div>
  );
}