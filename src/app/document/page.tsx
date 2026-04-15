import type { Metadata } from 'next'; 
import DocumentsClient from './DocumentsClient';
import Nav from "@/components/Nav";

// --- ۱. متادیتا (مهم‌ترین بخش سئو) ---
export const metadata: Metadata = {
  title: 'مستندات نصب DeepChat | راهنمای کد HTML, React و وردپرس',
  description: 'کد نصب چت‌بات DeepChat را برای پلتفرم خود (HTML، Next.js، وردپرس) دریافت کنید. شامل API Key و راهنمای کامل راه‌اندازی سریع.',
  keywords: ['نصب چت‌بات', 'مستندات API', 'نصب ویجت چت', 'deepchat api key', 'راهنمای نصب وردپرس'],
  openGraph: {
    title: 'راهنمای نصب DeepChat',
    description: 'کدهای مورد نیاز برای نصب ویجت DeepChat در سایت شما.',
    url: 'https://deepchatai.ir/documents',
    type: 'article',
  },
};


export default function DocumentsPage() {
  
  // اسکیما برای مستندات (Schema Markup for Documentation)
  // در اینجا از WebPage استفاده شده است.
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "مستندات نصب DeepChat",
    "description": "راهنمای کامل نصب ویجت DeepChat در پلتفرم‌های مختلف.",
    "publisher": {
      "@type": "Organization",
      "name": "DeepChat"
    }
  };

  return (
    // ساختار اصلی با رنگ‌های پس‌زمینه در Server Component
    <div dir="rtl" className="min-h-screen font-vazir bg-gray-50 text-slate-900 dark:bg-[#0B1120] dark:text-white transition-colors duration-300 mt-28">
        <Nav />
        
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
        
        {/* فراخوانی کامپوننت کلاینت برای نمایش محتوای تعاملی */}
        <DocumentsClient />
    </div>
  );
}