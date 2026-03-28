"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, MapPin, Navigation, MessageCircle } from "lucide-react";
import { motion, Variants } from "framer-motion";
import Hero from "@/components/Hero";
import JsonLd from "@/components/JsonLd";
import SectionTitle from "@/components/SectionTitle";
import EditorialShowcase from "@/components/EditorialShowcase";
import ScriptText from "@/components/ScriptText";
import { siteConfig } from "@/data/site";

const featuredCollections = [
  {
    title: "Pastalar",
    image: "/images/menu/pastalar/meyvelipasta1.jpeg",
    href: "/menu/pastalar",
    text: "Günlük tüketimden kutlama pastlarına uzanan lezzet.",
  },
  {
    title: "Düğün & Nişan",
    image: "/images/menu/dugun-nisan/dugun-nisan.jpeg",
    href: "/menu/dugun-nisan",
    text: "Özel günler için zarif, dikkat çekici ve özenli sunumlar.",
  },
  {
    title: "Sütlü Tatlılar",
    image: "/images/menu/sutlu-tatlilar/magnolya1.jpeg",
    href: "/menu/sutlu-tatlilar",
    text: "Hafif ve keyifli sunumuyla gün boyu tercih edilen tatlılar.",
  },
];

const trustItems = [
  "1970’den bu yana süregelen üretim tecrübesi",
  "Günlük taze üretim anlayışı",
  "Özel gün siparişlerinde özenli hazırlık",
  "Hijyen ve müşteri memnuniyeti odaklı yaklaşım",
];

const whatsappMessage = encodeURIComponent(
  "Merhaba, ürünleriniz hakkında bilgi almak ve sipariş vermek istiyorum."
);

// Framer Motion Animasyon Varyantları (TypeScript hatalarını önlemek için 'Variants' tipi eklendi)
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Bakery",
    name: siteConfig.name,
    description: siteConfig.description,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address,
      addressLocality: "Akyazı",
      addressRegion: "Sakarya",
      addressCountry: "TR",
    },
    url: "https://www.sarilarunlumamulleri.com",
    sameAs: [siteConfig.instagram],
    priceRange: "₺₺",
    servesCuisine: ["Bakery", "Dessert", "Cake", "Pastry"],
    hasMap: siteConfig.mapsUrl,
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      
      {/* HERO (En Üst) Alanına Yumuşak Giriş Animasyonu Eklendi */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <Hero />
      </motion.div>

      {/* ANA KATEGORİLER BÖLÜMÜ */}
      <section className="section pt-10 sm:pt-14">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <SectionTitle
              eyebrow="Ana kategoriler"
              title="Sarılar’ın öne çıkan lezzet dünyası"
              description="Günlük tüketimden özel gün siparişlerine kadar uzanan ana kategori yapımızı buradan inceleyebilirsiniz."
              center
            />
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="mt-10 grid gap-6 lg:grid-cols-3"
          >
            {featuredCollections.map((item) => (
              <motion.div variants={itemVariants} key={item.title}>
                <Link
                  href={item.href}
                  className="group block overflow-hidden rounded-[32px] border border-[var(--line)] bg-white shadow-[var(--shadow-soft)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[var(--shadow-hover)]"
                >
                  <div className="relative h-[320px] overflow-hidden border-b border-[var(--line)] sm:h-[360px]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover transition-transform duration-[1.5s] group-hover:scale-[1.05]"
                    />
                  </div>

                  <div className="p-7 text-center sm:p-8">
                    <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-[var(--primary)]">
                      Ana kategori
                    </p>
                    <h2 className="mt-3 font-title text-[1.9rem] font-bold leading-none text-[var(--primary-dark)] sm:text-[2.1rem]">
                      {item.title}
                    </h2>
                    <p className="mt-4 text-[15px] font-medium leading-relaxed text-[var(--primary-dark)]/70">
                      {item.text}
                    </p>

                    <div className="mt-6 inline-flex items-center gap-2 text-[14px] font-bold text-[var(--primary)] transition-transform group-hover:translate-x-1">
                      İncele
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <EditorialShowcase />

      {/* ALT BÖLÜM (HAKKIMIZDA & HARİTA) */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="section-sm pt-12 pb-24 sm:pt-16 sm:pb-32"
      >
        <div className="container-custom">
          <div className="relative overflow-hidden rounded-[40px] border border-[var(--line)] bg-[linear-gradient(135deg,rgba(255,250,244,0.96)_0%,rgba(246,236,224,0.92)_100%)] p-8 shadow-[var(--shadow-medium)] sm:p-12 lg:p-16">
            <div className="pointer-events-none absolute -left-10 top-6 h-40 w-40 rounded-full bg-[rgba(255,236,212,0.55)] blur-3xl sm:h-56 sm:w-56" />
            <div className="pointer-events-none absolute -right-10 bottom-4 h-40 w-40 rounded-full bg-[rgba(133,80,44,0.06)] blur-3xl sm:h-56 sm:w-56" />

            <div className="relative grid items-start gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:gap-10">
              
              {/* Sol Taraf - Bilgiler ve Butonlar */}
              <div className="lg:pr-4">
                <div className="mb-4">
                  <ScriptText className="text-[1.8rem] text-[var(--primary)] opacity-90 sm:text-[2.2rem]">
                    Bize Ulaşın
                  </ScriptText>
                </div>

                <h2 className="mt-2 font-title text-[2.6rem] leading-[1.05] tracking-[-0.02em] text-[var(--primary-dark)] text-balance sm:text-[3.2rem]">
                  Akyazı’da günlük üretim, şık sunum, gerçek lezzet
                </h2>

                <p className="mt-6 max-w-[44ch] text-[16px] leading-[1.9] text-[var(--text-soft)] sm:text-[17.5px]">
                  1970’den bu yana üretim kültürünü sürdüren Sarılar Unlu
                  Mamüller; pasta, tatlı ve fırın ürünlerinde günlük tazelik,
                  özenli hazırlık ve zarif sunum anlayışını bir araya getirir.
                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <Link href="/menu" className="btn-primary min-h-[52px] px-9">
                    Menüyü İncele
                  </Link>
                  <Link href="/hakkimizda" className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-[var(--primary)]/30 bg-transparent px-9 text-[0.96rem] font-bold text-[var(--primary-dark)] transition-all hover:bg-[var(--primary)]/5">
                    Hakkımızda
                  </Link>
                </div>

                <div className="mt-12 flex flex-col gap-4">
                  {trustItems.map((item, index) => (
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      key={item}
                      className="group flex items-center gap-4 rounded-[24px] border border-[var(--line)] bg-white/60 px-5 py-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-md"
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--primary)]/10 text-[var(--primary)] transition-colors duration-300 group-hover:bg-[var(--primary)] group-hover:text-white">
                        <Check size={16} strokeWidth={2.5} />
                      </div>
                      <p className="text-[15px] font-semibold leading-snug text-[var(--primary-dark)]">
                        {item}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Sağ Taraf - Harita ve Konum */}
              <div className="flex flex-col rounded-[32px] border border-[rgba(133,80,44,0.08)] bg-white/80 p-5 shadow-[0_20px_40px_rgba(84,45,20,0.04)] backdrop-blur-sm sm:p-6 lg:p-8">
                <div className="mb-6 flex items-start gap-4">
                  <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-[20px] bg-[var(--primary)]/10 text-[var(--primary)]">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--text-muted)]">
                      Konum
                    </p>
                    <h3 className="mt-1.5 font-title text-[1.4rem] font-bold leading-tight text-[var(--primary-dark)] sm:text-[1.6rem]">
                      Akyazı’da kolay ulaşılabilir konum
                    </h3>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-[24px] border border-[var(--line)] bg-white shadow-inner">
                  <iframe
                    title="Sarılar Unlu Mamüller Konum"
                    src={siteConfig.googleMapsEmbed}
                    className="h-[300px] w-full sm:h-[380px] lg:h-[450px]"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-[24px] shadow-[inset_0_0_24px_rgba(0,0,0,0.08)] ring-1 ring-inset ring-[var(--line)]" />
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#FAF4ED]/50 to-transparent" />
                </div>

                <div className="mt-6 rounded-[24px] border border-[rgba(133,80,44,0.06)] bg-[#FDF8F3] px-5 py-5 sm:px-6 sm:py-6">
                  <p className="text-[14.5px] font-medium leading-[1.8] text-[var(--primary-dark)]/80 sm:text-[15.5px]">
                    Merkezi konumumuz sayesinde mağazamıza hızlıca
                    ulaşabilirsiniz. Harita üzerinden konumu inceleyip doğrudan
                    yol tarifi başlatabilirsiniz.
                  </p>

                  <div className="mt-6 flex flex-col gap-4 border-t border-[var(--line)] pt-5 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-[14px] font-bold leading-relaxed text-[var(--primary)]">
                      {siteConfig.address}
                    </p>

                    <a
                      href={siteConfig.mapsUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full border border-[var(--primary)]/20 bg-white px-6 font-bold text-[var(--primary-dark)] shadow-sm transition-all hover:bg-[var(--primary)]/5 sm:w-auto"
                    >
                      <Navigation size={16} />
                      Yol Tarifi Al
                    </a>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </motion.section>

      {/* SABİT YÜZEL WHATSAPP BUTONU (Premium & Smooth) */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 200, damping: 20 }}
        className="fixed bottom-6 right-6 z-[90] sm:bottom-8 sm:right-8"
      >
        <div className="group relative flex items-center justify-center">
          {/* Sadece PC'de üzerine gelince (hover) açılan şık Tooltip (Baloncuk) */}
          <div className="pointer-events-none absolute right-full mr-4 hidden w-max -translate-x-2 rounded-[14px] bg-white px-5 py-3 text-[14px] font-bold text-[#3D1C08] opacity-0 shadow-[0_10px_24px_rgba(84,45,20,0.12)] transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:block border border-gray-100">
            Size nasıl yardımcı olabiliriz?
            {/* Tooltip Oku */}
            <div className="absolute right-[-6px] top-1/2 h-3 w-3 -translate-y-1/2 rotate-45 border-r border-t border-gray-100 bg-white" />
          </div>

          <Link
            href={`https://wa.me/${siteConfig.whatsapp}?text=${whatsappMessage}`}
            target="_blank"
            rel="noreferrer"
            className="relative flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_32px_rgba(37,211,102,0.4)] transition-transform hover:scale-110 sm:h-[68px] sm:w-[68px]"
            aria-label="WhatsApp üzerinden iletişime geçin"
          >
            <MessageCircle size={32} strokeWidth={2.2} className="relative z-10" />
            
            {/* Elit, yavaş ve çok yumuşak titreşim (Pulse) efekti */}
            <span 
              className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366] opacity-30" 
              style={{ animationDuration: '3s' }} 
            />
          </Link>
        </div>
      </motion.div>
    </>
  );
}