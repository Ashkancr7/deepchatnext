import type { Metadata } from 'next'; 
import Nav from "@/components/Nav";
import AboutUsClient from './AboutUsClient';

// --- ۱. متادیتا (مهم‌ترین بخش سئو - Server Component) ---
// این متادیتا در تگ <head> قرار می‌گیرد.
export const metadata: Metadata = {
  title: 'درباره ما | DeepChat: چت‌بات هوش مصنوعی بومی',
  description: 'آشنایی با شرکت مهندسان نوآفرین پیوان، تیم توسعه‌دهنده DeepChat و چشم‌انداز ما در ارائه راهکارهای هوش مصنوعی و چت‌بات‌های فارسی برای کسب‌وکارهای ایرانی.',
  keywords: ['هوش مصنوعی', 'DeepChat', 'پیوان', 'چت‌بات فارسی', 'درباره ما'],
  openGraph: {
    title: 'درباره ما | DeepChat',
    description: 'معرفی شرکت پیوان و تیم توسعه‌دهنده چت‌بات فارسی DeepChat.',
    url: 'https://deepchatai.ir/about',
    type: 'website',
  },
};


export default function AboutUs() {
  
  // --- ۲. اسکیما مارک‌آپ (Structured Data) ---
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "شرکت مهندسان نوآفرین پیوان (توسعه‌دهنده DeepChat)",
    "url": "https://deepchatai.ir",
    "logo": "https://deepchatai.ir/logo.png", 
    "description": "معرفی شرکت پیوان و تیم توسعه‌دهنده چت‌بات فارسی DeepChat.",
    "sameAs": [
      "https://t.me/deepchat_ir",
      "https://instagram.com/deepchat_ai",
      "https://linkedin.com/company/yourcompany"
    ],
  };

  return (
    <div className="bg-gray-50 dark:bg-slate-950 transition-colors duration-500 min-h-screen font-sans">
      
      {/* اسکیما داده‌های سازمان (برای موتورهای جستجو) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)
        }}
      />
      
      {/* Nav را نگه می‌داریم تا اگر Server Component است، سریع‌تر لود شود */}
      <Nav />
      
      {/* فراخوانی کامپوننت کلاینت که شامل Framer Motion است */}
      <AboutUsClient />
      
    </div>
  );
}