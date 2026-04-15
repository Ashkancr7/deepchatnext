"use client";

import React from "react";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

import fast1 from "@/assets/fast1.webp";
import daghigh from "@/assets/daghigh.webp";
import sazegar from "@/assets/sazegar.webp";

interface Block {
  id: string;
  title: string;
  subtitle: string;
  desc: string;
  img: StaticImageData | string;
  color: string;
  shadow: string;
}

export default function Blog() {
  const blocks: Block[] = [
    {
      id: "01",
      title: "سریع و بی‌وقفه",
      subtitle: "سرعت",
      desc: `همیشه آماده پاسخگویی در لحظه. هیچ سوالی بی‌پاسخ نمی‌ماند! با سرعتی فراتر از انتظار، در هر ساعت از شبانه‌روز کنارت هستم. چه بخوای یاد بگیری، چه فقط بخوای مشورت بگیری، همیشه آماده‌ام. پاسخ‌ها دقیق، روشن و متناسب با نیاز تو ارائه می‌شن.`,

      img: fast1,
      color: "from-amber-400 to-orange-600",
      shadow: "shadow-orange-500/20",
    },
    {
      id: "02",
      title: "دقیق و هوشمند",
      subtitle: "دقت",
      desc: `جواب درست، هر بار. با DeepChat، همیشه پاسخ‌های قابل اعتماد و دقیق در اختیار شماست. هر پرسش، با دقت تحلیل می‌شود تا بهترین پاسخ ممکن ارائه گردد. از گفت‌وگوهای روزمره گرفته تا تحلیل‌های عمیق و تخصصی، دیپ‌چت همراه مطمئن شماست.`,

      img: daghigh,
      color: "from-blue-400 to-indigo-600",
      shadow: "shadow-indigo-500/20",
    },
    {
      id: "03",
      title: "سازگار با هر مقیاس",
      subtitle: "انعطاف",
      desc: `مناسب برای هر نوع کسب‌وکار و سازمان. DeepChat خودش را با نیازها و سبک شما هماهنگ می‌کند. از استارتاپ‌های نوپا تا سازمان‌های بزرگ، به‌سادگی در فرآیندهای کاری شما ادغام می‌شود. قابل تنظیم، شخصی‌سازی‌شده و همیشه آماده.`,
      img: sazegar,
      color: "from-blue-400 to-green-600",
      shadow: "shadow-teal-500/20",
    },
  ];

  return (
    <section
      id="blog"
      className="relative py-24 overflow-hidden bg-white dark:bg-[#0B1120] transition-colors duration-500"
      aria-labelledby="blog-heading"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <h2 id="blog-heading" className="sr-only">ویژگی‌های دیپ‌چت</h2>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-32">
        {blocks.map((block, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={block.id}
              className={`flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-24 ${!isEven ? "lg:flex-row-reverse" : ""
                }`}
              itemScope
              itemType="https://schema.org/SoftwareFeature"
              itemProp="itemListElement"
            >
              {/* متن */}
              <motion.div
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex-1 text-right relative"
              >
                <div className="inline-flex items-center px-3 py-1 rounded-full border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 text-xs font-medium text-gray-500 dark:text-slate-400 mb-6">
                  <span className={`w-2 h-2 rounded-full mr-1 ml-1 bg-gradient-to-r ${block.color}`}></span>
                  <span className="sr-only">{block.subtitle}</span>
                  {block.subtitle}
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight" itemProp="name">
                  {block.title}
                </h3>

                <p className="text-lg text-gray-600 dark:text-slate-300 leading-8 text-justify" itemProp="description">
                  {block.desc}
                </p>

                <button
                  className="mt-8 group inline-flex items-center text-sm font-semibold text-gray-900 dark:text-white hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
                  aria-label={`بیشتر بخوانید درباره ${block.title}`}
                >
                  بیشتر بخوانید
                  <svg
                    className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                  </svg>
                </button>
              </motion.div>

              {/* تصویر */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex-1 w-full relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-tr ${block.color} opacity-10 rounded-full -z-10`} />

                <div className="relative rounded-3xl overflow-hidden border border-gray-200 dark:border-slate-700 bg-gray-100 dark:bg-slate-800">
                  <Image
                    src={block.img}
                    alt={block.title}
                    className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105"
                    placeholder="blur"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "ویژگی‌های DeepChat",
            "itemListElement": blocks.map((b, i) => ({
              "@type": "SoftwareFeature",
              "position": i + 1,
              "name": b.title,
              "description": b.desc,
            })),
          }),
        }}
      />
    </section>
  );
}
