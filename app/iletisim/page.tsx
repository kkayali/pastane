"use client";

import {
  Clock3,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ArrowUpRight,
} from "lucide-react";
import { motion, Variants } from "framer-motion";
import { siteConfig } from "@/data/site";
import ScriptText from "@/components/ScriptText";

const whatsappMessage = encodeURIComponent(
  "Merhaba, bir sipariş vermek istiyordum."
);

// CSS değişkenlerinden doğabilecek renk kayıplarını Tailwind'in kesin renkleriyle garantiye alıyoruz
const quickActions = [
  {
    icon: Phone,
    label: "Telefon",
    title: "Hemen Ara",
    text: siteConfig.phoneDisplay,
    href: `tel:${siteConfig.phone}`,
    iconBg: "bg-orange-50",
    iconColor: "text-orange-700",
    hoverRing: "group-hover:border-orange-300",
    desc: "Doğrudan arayarak hızlıca sipariş verebilirsiniz.",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    title: "Mesaj Gönder",
    text: "Hızlı sipariş ve bilgi",
    href: `https://wa.me/${siteConfig.whatsapp}?text=${whatsappMessage}`,
    external: true,
    iconBg: "bg-[#25D366]/10",
    iconColor: "text-[#25D366]",
    hoverRing: "group-hover:border-[#25D366]/40",
    desc: "Yazılı iletişim ile anında detaylı bilgi alın.",
  },
  {
    icon: MapPin,
    label: "Konum",
    title: "Yol Tarifi Al",
    text: "Akyazı / Sakarya",
    href: siteConfig.mapsUrl,
    external: true,
    iconBg: "bg-[#4285F4]/10",
    iconColor: "text-[#4285F4]",
    hoverRing: "group-hover:border-[#4285F4]/40",
    desc: "Harita üzerinden işletmemize doğrudan ulaşın.",
  },
  {
    icon: Instagram,
    label: "Instagram",
    title: "Instagram'ı Gör",
    text: "@sarilarunlumamulleri",
    href: siteConfig.instagram,
    external: true,
    iconBg: "bg-[#E1306C]/10",
    iconColor: "text-[#E1306C]",
    hoverRing: "group-hover:border-[#E1306C]/40",
    desc: "Güncel ürünlerimizi ve paylaşımlarımızı inceleyin.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
  },
};

export default function IletisimPage() {
  return (
    // NAVBAR ÇAKIŞMA ÇÖZÜMÜ: pt-32 lg:pt-48 eklenerek sayfa içeriği çok ciddi şekilde aşağı itildi. 
    // Eğer navbar 'fixed' ise bu değerler (yaklaşık 120px-190px arası) çakışmayı kesin önler.
    <main className="relative overflow-hidden bg-[#FCFAF7] pt-36 pb-32 lg:pt-48 lg:pb-48 min-h-screen">
      {/* Arka Plan Işıkları */}
      <div className="pointer-events-none absolute left-[-10%] top-[-5%] h-[600px] w-[600px] rounded-full bg-orange-100/40 blur-[140px]" />
      <div className="pointer-events-none absolute right-[-5%] top-[30%] h-[500px] w-[500px] rounded-full bg-[#9B5D2F]/5 blur-[120px]" />

      <div className="container-custom relative z-10 px-6 lg:px-12">
        <div className="grid gap-20 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
          
          {/* SOL TARAF */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            // Sticky'nin top değeri navbar yüksekliği + güvenli mesafe kadar ayarlandı
            className="flex flex-col h-fit self-start xl:sticky xl:top-40"
          >
            <div className="inline-flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-orange-700 opacity-80" />
              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-orange-800">
                İletişim
              </p>
            </div>

            <div className="mt-8">
              <ScriptText className="text-3xl text-orange-800 opacity-90 sm:text-4xl italic">
                Sizi Dinliyoruz
              </ScriptText>
            </div>

            {/* Başlık font boyutu ufak bir miktar küçültüldü ki çok satır kırılması yapmasın */}
            <h1 className="mt-5 font-title text-[2.6rem] leading-[1.05] tracking-tight text-[#2D160A] sm:text-[3.5rem] lg:text-[4rem]">
              Sipariş, bilgi ve konum için bize ulaşın
            </h1>

            <p className="mt-8 text-lg leading-relaxed text-[#5A3119]/80 max-w-xl">
              Sarılar Unlu Mamüller olarak özel gün siparişlerinizden günlük
              tatlı krizlerinize kadar her an yanınızdayız. Aşağıdaki hızlı
              bağlantılardan dilediğiniz kanalı seçerek bizimle anında
              iletişime geçebilirsiniz.
            </p>

            {/* Sabit Bilgiler */}
            <div className="mt-14 flex flex-col gap-8 border-t border-orange-900/10 pt-12">
              
              <div className="flex items-start gap-5">
                <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange-50 text-orange-700 shadow-sm">
                  <MapPin size={22} strokeWidth={2.5} />
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#9B5D2F]">
                    Adresimiz
                  </p>
                  <p className="mt-2 text-[15px] font-medium leading-relaxed text-[#2D160A] sm:text-[16px]">
                    {siteConfig.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange-50 text-orange-700 shadow-sm">
                  <Clock3 size={22} strokeWidth={2.5} />
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#9B5D2F]">
                    Çalışma Saatleri
                  </p>
                  <div className="mt-2 text-[15px] font-medium leading-relaxed text-[#2D160A] sm:text-[16px]">
                    {siteConfig.workingHours.map((item, index) => (
                      <p key={index}>{item}</p>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange-50 text-orange-700 shadow-sm">
                  <Mail size={22} strokeWidth={2.5} />
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#9B5D2F]">
                    E-Posta
                  </p>
                  <p className="mt-2 text-[15px] font-medium leading-relaxed text-[#2D160A] sm:text-[16px]">
                    <a href={`mailto:${siteConfig.email}`} className="hover:text-orange-700 transition-colors">
                      {siteConfig.email}
                    </a>
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* SAĞ TARAF: Aksiyon Kartları */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid gap-6 sm:grid-cols-2"
          >
            {quickActions.map((item) => {
              const Icon = item.icon;

              return (
                <motion.a
                  variants={itemVariants}
                  key={item.label}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noreferrer" : undefined}
                  // Kartların eşit hizalanması için h-full eklendi
                  className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-[32px] bg-white p-8 shadow-sm border border-stone-200 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${item.hoverRing}`}
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className={`flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-500 group-hover:scale-110 ${item.iconBg} ${item.iconColor}`}>
                        <Icon size={24} strokeWidth={2.5} />
                      </div>
                      {/* Daha şık bir ok efekti */}
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-50 text-stone-400 transition-all duration-500 group-hover:bg-orange-50 group-hover:text-orange-700 group-hover:rotate-45">
                        <ArrowUpRight size={18} />
                      </div>
                    </div>

                    <p className="mt-8 text-[11px] font-bold uppercase tracking-[0.2em] text-stone-500">
                      {item.label}
                    </p>

                    <h3 className="mt-3 font-title text-[1.5rem] leading-[1.15] text-[#2D160A] sm:text-[1.7rem]">
                      {item.title}
                    </h3>
                  </div>

                  <div className="mt-8 pt-6 border-t border-stone-100">
                    <p className="text-[15px] font-bold text-[#2D160A]">
                      {item.text}
                    </p>
                    <p className="mt-2 text-[14px] leading-relaxed text-[#5A3119]/75">
                      {item.desc}
                    </p>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>

        </div>
      </div>
    </main>
  );
}