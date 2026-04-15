"use client";

import React, { useState, useEffect, useRef } from "react";
import { useSearchParams, useRouter } from "next/navigation"; // جایگزین react-router-dom
import { motion, AnimatePresence } from "framer-motion";
import {
  Loader2,
  ArrowRight,
  CheckCircle2,
  Timer,
  LockKeyhole,
} from "lucide-react";

const OTP_LENGTH = 6;

export default function OTP() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  // دریافت شماره از URL (مثلا: /auth/otp?phone=0912...)
  const phone = searchParams.get("phone");

  const [otp, setOtp] = useState<string[]>(new Array(OTP_LENGTH).fill(""));
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const [timeLeft, setTimeLeft] = useState(120);
  const [canResend, setCanResend] = useState(false);

  // تایپ‌دهی به Ref برای آرایه‌ای از اینپوت‌ها
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timerId);
    } else {
      setCanResend(true);
    }
  }, [timeLeft]);

  // --- لاجیک هندل کردن ورودی‌ها ---
  const handleChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (isNaN(Number(value))) return;

    const newOtp = [...otp];
    // گرفتن آخرین کاراکتر وارد شده
    const lastChar = value.substring(value.length - 1);

    newOtp[index] = lastChar;
    setOtp(newOtp);

    // پرش به جلو
    if (lastChar && index < OTP_LENGTH - 1 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace") {
      // اگر خالی بود برگرد عقب
      if (!otp[index] && index > 0 && inputRefs.current[index - 1]) {
        inputRefs.current[index - 1]?.focus();
      }
    }

    // جهت نماها
    if (e.key === "ArrowRight" && index < OTP_LENGTH - 1) {
      inputRefs.current[index + 1]?.focus();
    }
    if (e.key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, OTP_LENGTH);
    if (!/^\d+$/.test(pastedData)) return;

    const newOtp = [...otp];
    pastedData.split("").forEach((char, index) => {
      if (index < OTP_LENGTH) newOtp[index] = char;
    });
    setOtp(newOtp);

    const lastIndex = Math.min(pastedData.length, OTP_LENGTH) - 1;
    if (inputRefs.current[lastIndex]) {
      inputRefs.current[lastIndex]?.focus();
    }
  };
  // ----------------------------

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const otpCode = otp.join("");

    if (otpCode.length !== OTP_LENGTH) {
      setError("لطفا کد را کامل وارد کنید.");
      return;
    }

    setError(null);
    setLoading(true);

    try {
      const res = await fetch(
        "https://api.deepchatai.ir/client_auth/client_auth/register/verify",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ phone, otp_code: otpCode }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.detail || "کد تایید نادرست است.");
      }

      setSuccess(true);
      // ذخیره توکن‌ها (اختیاری - بسته به لاجیک احراز هویت شما)
      if (data.access_token) {
          localStorage.setItem("access_token", data.access_token);
      }
      
      setTimeout(() => {
        window.location.href = "https://panel.deepchatai.ir/";
      }, 1500);
    } catch (err: any) {
      setError(err.message || "خطایی رخ داد");
    } finally {
      setLoading(false);
    }
  }

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  return (
    <div
      dir="rtl"
      className="min-h-screen w-full flex items-center justify-center bg-slate-950 px-4 relative overflow-hidden"
    >
      {/* بک‌گراند */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[500px] h-[500px] rounded-full bg-indigo-600/10 blur-[100px]" />
        <div className="absolute top-[40%] -left-[10%] w-[400px] h-[400px] rounded-full bg-purple-600/10 blur-[100px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md relative z-10"
      >
        <button
          onClick={() => router.back()} // استفاده از router.back()
          className="flex items-center gap-2 text-slate-400 hover:text-white mb-6 transition-colors text-sm"
        >
          بازگشت / اصلاح شماره
          <ArrowRight className="w-4 h-4 transform rotate-180" />
        </button>

        <div className="bg-slate-900/80 border border-slate-800 backdrop-blur-xl rounded-3xl shadow-2xl p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-indigo-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4 text-indigo-400 border border-indigo-500/20">
              {success ? (
                <CheckCircle2 className="w-8 h-8 text-green-400" />
              ) : (
                <LockKeyhole className="w-8 h-8" />
              )}
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">تایید شماره</h1>
            <p className="text-slate-400 text-sm">
              کد ارسال شده به{" "}
              <span className="text-slate-200 font-mono dir-ltr inline-block mx-1">
                {phone || "---"}
              </span>{" "}
              را وارد کنید.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* کانتینر ورودی‌ها با LTR برای ترتیب صحیح */}
            <div className="flex flex-row-reverse justify-center items-center gap-2">
              {otp.map((digit, index) => (
                <motion.input
                  key={index}
                  ref={(ref) => { inputRefs.current[index] = ref; }}
                  type="text"
                  inputMode="numeric"
                  autoComplete="one-time-code"
                  value={digit}
                  onChange={(e) => handleChange(index, e)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  onPaste={handlePaste}
                  animate={error ? { x: [-5, 5, -5, 5, 0] } : {}}
                  dir="ltr"
                  style={{ textAlign: "center" }}
                  className={`w-12 h-14 sm:w-14 sm:h-16 text-2xl font-bold rounded-xl bg-slate-800 text-white outline-none transition-all duration-200 
                    ${
                      error
                        ? "border-2 border-red-500/50 focus:border-red-500"
                        : "border border-slate-700 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 focus:bg-slate-800"
                    }
                    ${digit ? "border-indigo-500/50 bg-slate-800" : ""}
                  `}
                />
              ))}
            </div>

            <div className="h-6 text-center text-sm font-medium">
              <AnimatePresence mode="wait">
                {error && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-red-400"
                  >
                    {error}
                  </motion.p>
                )}
                {success && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-green-400"
                  >
                    ورود موفقیت‌آمیز! در حال انتقال...
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            <button
              type="submit"
              disabled={loading || success}
              className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all duration-300 
                ${
                  loading || success
                    ? "bg-slate-700 text-slate-400 cursor-not-allowed"
                    : "bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40"
                }`}
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  بررسی...
                </>
              ) : success ? (
                <>
                  <CheckCircle2 className="w-5 h-5" />
                  تایید شد
                </>
              ) : (
                "تایید و ورود"
              )}
            </button>

            <div className="flex items-center justify-center gap-2 text-sm">
              {canResend ? (
                <button
                  type="button"
                  onClick={() => {
                    setTimeLeft(120);
                    setCanResend(false);
                    setOtp(new Array(OTP_LENGTH).fill(""));
                    setError(null);
                  }}
                  className="text-indigo-400 hover:text-indigo-300 transition-colors font-medium"
                >
                  ارسال مجدد کد
                </button>
              ) : (
                <div className="flex items-center gap-2 text-slate-500">
                  <Timer className="w-4 h-4" />
                  <span>ارسال مجدد تا</span>
                  <span className="font-mono text-slate-300 w-9 text-left dir-ltr">
                    {formatTime(timeLeft)}
                  </span>
                </div>
              )}
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
}