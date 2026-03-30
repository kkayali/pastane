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
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <Hero />
      </motion.div>

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
                  className="group block overflow-hidden rounded-[32px] border border-[#EBE1D5] bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="relative h-[320px] overflow-hidden border-b border-[#EBE1D5] sm:h-[360px]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover transition-transform duration-[1.5s] group-hover:scale-[1.05]"
                    />
                  </div>

                  <div className="p-7 text-center sm:p-8">
                    <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#3E1F10]/70">
                      Ana kategori
                    </p>
                    <h2 className="mt-3 font-title text-[1.9rem] font-bold leading-none text-[#3E1F10] sm:text-[2.1rem]">
                      {item.title}
                    </h2>
                    <p className="mt-4 text-[15px] font-medium leading-relaxed text-[#3E1F10]/80">
                      {item.text}
                    </p>

                    <div className="mt-6 inline-flex items-center gap-2 text-[14px] font-bold text-[#3E1F10] transition-transform group-hover:translate-x-1">
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

     <motion.section 
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="section-sm pt-16 pb-24 sm:pt-24 sm:pb-32"
>
  <div className="container-custom">
    <div className="relative">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        
        {/* SOL TARAF */}
        <div className="flex flex-col">
          <div className="mb-4">
            <ScriptText className="text-[2rem] text-[#3E1F10]/80 sm:text-[2.4rem]">
              Bize Ulaşın
            </ScriptText>
          </div>

          <h2 className="font-title text-[2.2rem] leading-[1.15] tracking-tight text-[#3E1F10] sm:text-[2.6rem] lg:text-[2.8rem]">
            Akyazı’da günlük üretim, şık sunum, gerçek lezzet
          </h2>

          <p className="mt-5 max-w-[620px] text-[15px] leading-[1.8] text-[#3E1F10]/80 sm:text-[16px]">
            1970’den bu yana üretim kültürünü sürdüren Sarılar Unlu
            Mamüller; pasta, tatlı ve fırın ürünlerinde günlük tazelik,
            özenli hazırlık ve zarif sunum anlayışını bir araya getirir.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link 
              href="/menu" 
              className="flex min-h-[50px] w-full items-center justify-center rounded-full bg-[#3E1F10] px-8 transition-transform hover:scale-[1.02] sm:w-auto"
            >
              <span className="text-[15px] font-bold text-white">Menüyü İncele</span>
            </Link>

            <Link 
              href="/hakkimizda" 
              className="flex min-h-[50px] w-full items-center justify-center rounded-full border-2 border-[#3E1F10] bg-transparent px-8 transition-colors hover:bg-[#3E1F10]/5 sm:w-auto"
            >
              <span className="text-[15px] font-bold text-[#3E1F10]">Hakkımızda</span>
            </Link>
          </div>

          <div className="mt-10 flex flex-col gap-4">
            {trustItems.map((item, index) => (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={item}
                className="flex items-start gap-3"
              >
                <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#3E1F10]/10 text-[#3E1F10]">
                  <Check size={14} strokeWidth={3} />
                </div>
                <p className="text-[15px] font-medium leading-relaxed text-[#3E1F10]">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* SAĞ TARAF */}
        <div className="flex flex-col overflow-hidden rounded-[28px] border border-[#EBE1D5] bg-white shadow-md">
          <div className="p-6 sm:p-8">
            <div className="mb-3 flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#3E1F10]/5 text-[#3E1F10]">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#3E1F10]/60">
                  Konum
                </p>
                <h3 className="mt-0.5 font-title text-[1.3rem] font-bold leading-tight text-[#3E1F10] sm:text-[1.5rem]">
                  Akyazı’da kolay ulaşılabilir konum
                </h3>
              </div>
            </div>

            <p className="text-[14px] leading-[1.7] text-[#3E1F10]/75">
              Merkezi konumumuz sayesinde mağazamıza hızlıca ulaşabilirsiniz.
              Harita üzerinden konumu inceleyip doğrudan yol tarifi başlatabilirsiniz.
            </p>
          </div>

          <div className="h-[250px] w-full border-y border-[#EBE1D5] bg-gray-50 sm:h-[300px]">
            <iframe
              title="Sarılar Unlu Mamüller Konum"
              src={siteConfig.googleMapsEmbed}
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#3E1F10]/5 text-[#3E1F10]">
                <MapPin size={14} />
              </div>
              <p className="text-[14px] font-bold leading-snug text-[#3E1F10]">
                {siteConfig.address}
              </p>
            </div>

            <a
              href={siteConfig.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="flex min-h-[46px] w-full shrink-0 items-center justify-center gap-2 rounded-full bg-[#3E1F10] px-6 transition-transform hover:scale-[1.02] sm:w-auto"
            >
              <Navigation size={15} className="text-white" />
              <span className="whitespace-nowrap text-[14px] font-bold text-white">
                Yol Tarifi Al
              </span>
            </a>
          </div>
        </div>

      </div>
    </div>
  </div>
</motion.section>

      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 200, damping: 20 }}
        className="fixed bottom-6 right-6 z-[90] sm:bottom-8 sm:right-8"
      >
        <div className="group relative flex items-center justify-center">
          <div className="pointer-events-none absolute right-full mr-4 hidden w-max -translate-x-2 rounded-[14px] bg-white px-5 py-3 text-[14px] font-bold text-[#3E1F10] opacity-0 shadow-[0_10px_24px_rgba(62,31,16,0.12)] transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:block border border-[#EBE1D5]">
            Size nasıl yardımcı olabiliriz?
            <div className="absolute right-[-6px] top-1/2 h-3 w-3 -translate-y-1/2 rotate-45 border-r border-t border-[#EBE1D5] bg-white" />
          </div>

          <Link
            href={`https://wa.me/${siteConfig.whatsapp}?text=${whatsappMessage}`}
            target="_blank"
            rel="noreferrer"
            className="relative flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_32px_rgba(37,211,102,0.4)] transition-transform hover:scale-110 sm:h-[68px] sm:w-[68px]"
            aria-label="WhatsApp üzerinden iletişime geçin"
          >
            <MessageCircle size={32} strokeWidth={2.2} className="relative z-10" color="#FFFFFF" />
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