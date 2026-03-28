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

// Framer Motion Animasyon Varyantları
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
      
      {/* HERO BÖLÜMÜ */}
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
                    <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#3D1C08]/70">
                      Ana kategori
                    </p>
                    <h2 className="mt-3 font-title text-[1.9rem] font-bold leading-none text-[#3D1C08] sm:text-[2.1rem]">
                      {item.title}
                    </h2>
                    <p className="mt-4 text-[15px] font-medium leading-relaxed text-[#3D1C08]/80">
                      {item.text}
                    </p>

                    <div className="mt-6 inline-flex items-center gap-2 text-[14px] font-bold text-[#3D1C08] transition-transform group-hover:translate-x-1">
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

      {/* ELİT HAKKIMIZDA & HARİTA BÖLÜMÜ */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="section-sm pt-16 pb-24 sm:pt-24 sm:pb-32"
      >
        <div className="container-custom">
          {/* Ana Kapsayıcı */}
          <div className="relative overflow-hidden rounded-[40px] bg-[#FCFAF7] p-6 sm:p-12 lg:p-14 xl:p-16 shadow-[0_10px_40px_rgba(61,28,8,0.06)] border border-[#EBE1D5]">
            
            {/* Işık Efektleri */}
            <div className="pointer-events-none absolute -left-20 top-0 h-96 w-96 rounded-full bg-[#3D1C08] blur-[140px] opacity-[0.04]" />
            <div className="pointer-events-none absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-[#3D1C08] blur-[140px] opacity-[0.04]" />

            {/* Geniş gap'li grid */}
            <div className="relative grid items-start gap-12 lg:grid-cols-[1fr_1fr] xl:gap-20">
              
              {/* SOL TARAF - Metinler ve İçerik */}
              <div className="flex flex-col">
                <div className="mb-4">
                  <ScriptText className="text-[2.2rem] text-[#3D1C08]/80 sm:text-[2.6rem]">
                    Bize Ulaşın
                  </ScriptText>
                </div>

                <h2 className="font-title text-[2.4rem] leading-[1.15] tracking-tight text-[#3D1C08] sm:text-[2.8rem] lg:text-[3rem]">
                  Akyazı’da günlük üretim, şık sunum, gerçek lezzet
                </h2>

                <p className="mt-6 text-[16px] leading-[1.9] text-[#3D1C08]/80 sm:text-[17px]">
                  1970’den bu yana üretim kültürünü sürdüren Sarılar Unlu
                  Mamüller; pasta, tatlı ve fırın ürünlerinde günlük tazelik,
                  özenli hazırlık ve zarif sunum anlayışını bir araya getirir.
                </p>

                {/* RADİKAL ÇÖZÜM 1: Yazı Rengini span ile çiviledik! */}
                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <Link href="/menu" className="flex min-h-[56px] w-full sm:w-auto items-center justify-center rounded-full bg-[#3D1C08] px-10 transition-all hover:scale-[1.02]">
                    <span style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: '15.5px' }}>Menüyü İncele</span>
                  </Link>
                  <Link href="/hakkimizda" className="flex min-h-[56px] w-full sm:w-auto items-center justify-center rounded-full border-2 border-[#3D1C08] bg-transparent px-10 transition-all hover:bg-[#F6EDE4]">
                    <span style={{ color: '#3D1C08', fontWeight: 'bold', fontSize: '15.5px' }}>Hakkımızda</span>
                  </Link>
                </div>

                <div className="mt-12 flex flex-col gap-5">
                  {trustItems.map((item, index) => (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      key={item}
                      className="flex items-start gap-4"
                    >
                      <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#3D1C08]/10 text-[#3D1C08]">
                        <Check size={14} strokeWidth={3} />
                      </div>
                      <p className="text-[16px] font-medium leading-relaxed text-[#3D1C08]">
                        {item}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* SAĞ TARAF - Harita Kartı */}
              <div className="flex flex-col overflow-hidden rounded-[32px] border border-[#EBE1D5] bg-white shadow-sm">
                
                {/* Kart Başlığı */}
                <div className="px-6 py-6 sm:px-8 sm:py-8">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#3D1C08]/5 text-[#3D1C08]">
                      <MapPin size={22} />
                    </div>
                    <div>
                      <p className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-[#3D1C08]/60">
                        Konum
                      </p>
                      <h3 className="mt-1 font-title text-[1.4rem] font-bold leading-tight text-[#3D1C08] sm:text-[1.6rem]">
                        Akyazı’da kolay ulaşılabilir konum
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Harita İframe */}
                <div className="relative border-y border-[#EBE1D5] bg-[#F6EDE4]">
                  <iframe
                    title="Sarılar Unlu Mamüller Konum"
                    src={siteConfig.googleMapsEmbed}
                    className="h-[300px] w-full sm:h-[350px] lg:h-[400px]"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_10px_rgba(0,0,0,0.02)]" />
                </div>

                {/* RADİKAL ÇÖZÜM 2: Asla Sıkışmayan Adres ve Buton Kutusu */}
                <div className="bg-[#FCFAF7] p-6 sm:p-8">
                  <p className="text-[15px] leading-[1.8] text-[#3D1C08]/80 mb-6">
                    Merkezi konumumuz sayesinde mağazamıza hızlıca ulaşabilirsiniz. 
                    Harita üzerinden konumu inceleyip doğrudan yol tarifi başlatabilirsiniz.
                  </p>

                  <div className="flex flex-col gap-4 rounded-[20px] bg-white p-5 border border-[#EBE1D5] shadow-sm">
                    {/* Adres üstte */}
                    <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#3D1C08]/5 text-[#3D1C08]">
                        <MapPin size={16} />
                      </div>
                      <p className="text-[14.5px] font-bold text-[#3D1C08] leading-snug">
                        {siteConfig.address}
                      </p>
                    </div>

                    {/* Buton altta, %100 genişlik, span ile çivilenmiş beyaz renk */}
                    <a
                      href={siteConfig.mapsUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex min-h-[50px] w-full items-center justify-center gap-2 rounded-full bg-[#3D1C08] transition-transform hover:scale-[1.02]"
                    >
                      <Navigation size={16} color="#FFFFFF" />
                      <span style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: '15px' }}>Yol Tarifi Al</span>
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* SABİT YÜZEL WHATSAPP BUTONU */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 200, damping: 20 }}
        className="fixed bottom-6 right-6 z-[90] sm:bottom-8 sm:right-8"
      >
        <div className="group relative flex items-center justify-center">
          <div className="pointer-events-none absolute right-full mr-4 hidden w-max -translate-x-2 rounded-[14px] bg-white px-5 py-3 text-[14px] font-bold text-[#3D1C08] opacity-0 shadow-[0_10px_24px_rgba(61,28,8,0.12)] transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:block border border-[#EBE1D5]">
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