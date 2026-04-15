import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Blog from "@/components/Blog";
import TrustedBy from "@/components/TrustedBy";

export default function Home() {
  return (
    <div className="w-full overflow-hidden bg-white text-black dark:bg-slate-900 dark:text-slate-100 transition-colors duration-300">
      
      {/* HEADER */}
      <header>
        <Nav />
      </header>

      {/* MAIN CONTENT */}
      <main id="main-content" className="pt-10">

        {/* HERO — MUST HAVE H1 */}
        <section aria-labelledby="hero-heading">
          <Hero />
        </section>

        <TrustedBy />

        {/* FEATURES */}
        <section aria-labelledby="features-heading">
          <Features />
        </section>

        {/* BLOG (SEO GOLD) */}
        <section aria-labelledby="blog-heading">
          <Blog />
        </section>

        {/* PRICING */}
        <section aria-labelledby="pricing-heading">
          <Pricing />
        </section>

        {/* FAQ (Rich Result Friendly) */}
        <section aria-labelledby="faq-heading">
          <FAQ />
        </section>

        {/* CTA */}
        <section aria-labelledby="cta-heading">
          <CTA />
        </section>

      </main>

      {/* FOOTER */}
      <footer>
        <Footer />
      </footer>

    </div>
  );
}
