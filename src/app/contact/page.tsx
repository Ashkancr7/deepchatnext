import type { Metadata } from 'next'; 
import ContactClient from './ContactClient'; // فراخوانی کامپوننت کلاینت 
import Nav from "@/components/Nav"; // فرض می‌کنیم Nav یک Server Component است

// --- ۱. متادیتا (مهم‌ترین بخش سئو) ---
export const metadata: Metadata = {
  title: 'تماس با ما | DeepChat: شماره تماس، ایمیل و آدرس',
  description: 'برای دریافت پشتیبانی فنی، فرصت‌های همکاری و اطلاعات بیشتر در مورد چت‌بات‌های هوش مصنوعی DeepChat، با ما تماس بگیرید. اطلاعات تماس شرکت مهندسان نوآفرین پیوان.',
  keywords: ['تماس با DeepChat', 'شماره تلفن DeepChat', 'آدرس شرکت پیوان', 'پشتیبانی چت‌بات هوش مصنوعی'],
  openGraph: {
    title: 'تماس با ما | DeepChat',
    description: 'اطلاعات تماس DeepChat برای همکاری و پشتیبانی.',
    url: 'https://deepchatai.ir/contact',
    type: 'website',
  },
};


export default function ContactPage() {
  
  // --- ۲. اسکیما مارک‌آپ (Structured Data) ---
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "شرکت مهندسان نوآفرین پیوان (DeepChat)",
    "url": "https://deepchatai.ir",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+98-9919699504",
      "contactType": "customer service",
      "areaServed": "IR"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "سنندج",
      "addressRegion": "کردستان",
      "streetAddress": "دانشگاه کردستان، مرکز رشد مهندسی، شرکت مهندسان نوآفرین پیوان واحد11",
      "postalCode": "6617715179" // کد پستی فرضی یا واقعی
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950 font-sans text-slate-900 dark:text-slate-100 flex flex-col">
      <Nav /> 
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      
      {/* فراخوانی کامپوننت کلاینت برای نمایش UI و انیمیشن */}
      <ContactClient />
    </div>
  );
}