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

const quickActions = [
  {
    icon: Phone,
    label: "Telefon",
    title: "Hemen Ara",
    text: siteConfig.phoneDisplay,
    href: `tel:${siteConfig.phone}`,
    iconBg: "bg-[var(--primary)]/10",
    iconColor: "text-[var(--primary)]",
    hoverRing: "group-hover:border-[var(--primary)]/30",
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
    hoverRing: "group-hover:border-[#25D366]/30",
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
    hoverRing: "group-hover:border-[#4285F4]/30",
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
    hoverRing: "group-hover:border-[#E1306C]/30",
    desc: "Güncel ürünlerimizi ve paylaşımlarımızı inceleyin.",
  },
];

// TypeScript hatalarını çözen tip tanımlamaları eklendi (Variants)
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};

export default function IletisimPage() {
  return (
    <main className="overflow-hidden bg-[#FCFAF7] pb-24 sm:pb-32 pt-12 sm:pt-20 lg:pt-24">
      {/* Arka Plan Yumuşak Işıklar */}
      <div className="pointer-events-none absolute left-[-10%] top-[-5%] h-[500px] w-[500px] rounded-full bg-[#F5EBE1] blur-[120px]" />
      <div className="pointer-events-none absolute right-[-5%] top-[30%] h-[400px] w-[400px] rounded-full bg-[rgba(133,80,44,0.04)] blur-[100px]" />

      <div className="container-custom relative z-10">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-24 items-start">
          
          {/* SOL TARAF: Davetkâr Metinler ve Sabit Bilgiler */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col xl:sticky xl:top-36"
          >
            <div className="inline-flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)] opacity-60" />
              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[var(--text-muted)]">
                İletişim
              </p>
            </div>

            <div className="mt-8">
              <ScriptText className="text-[2.2rem] text-[var(--primary)] opacity-90 sm:text-[2.8rem]">
                Sizi Dinliyoruz
              </ScriptText>
            </div>

            <h1 className="mt-4 font-title text-[2.6rem] leading-[1.05] tracking-[-0.02em] text-[var(--primary-dark)] text-balance sm:text-[3.6rem] lg:text-[4rem]">
              Sipariş, bilgi ve konum için bize ulaşın
            </h1>

            <p className="mt-6 max-w-[40ch] text-[16px] leading-[1.9] text-[var(--text-soft)] sm:text-[17.5px]">
              Sarılar Unlu Mamüller olarak özel gün siparişlerinizden günlük
              tatlı krizlerinize kadar her an yanınızdayız. Aşağıdaki hızlı
              bağlantılardan dilediğiniz kanalı seçerek bizimle anında
              iletişime geçebilirsiniz.
            </p>

            {/* Sabit Bilgiler Listesi */}
            <div className="mt-12 flex flex-col gap-6 border-t border-[var(--line-strong)] pt-10">
              
              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--primary)]/5 text-[var(--primary)]">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-[var(--text-muted)]">
                    Adresimiz
                  </p>
                  <p className="mt-1.5 text-[15px] font-medium leading-relaxed text-[var(--primary-dark)] sm:text-[16px]">
                    {siteConfig.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--primary)]/5 text-[var(--primary)]">
                  <Clock3 size={18} />
                </div>
                <div>
                  <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-[var(--text-muted)]">
                    Çalışma Saatleri
                  </p>
                  <div className="mt-1.5 text-[15px] font-medium leading-relaxed text-[var(--primary-dark)] sm:text-[16px]">
                    {siteConfig.workingHours.map((item) => (
                      <p key={item}>{item}</p>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--primary)]/5 text-[var(--primary)]">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-[var(--text-muted)]">
                    E-Posta
                  </p>
                  <p className="mt-1.5 text-[15px] font-medium leading-relaxed text-[var(--primary-dark)] sm:text-[16px]">
                    <a href={`mailto:${siteConfig.email}`} className="hover:text-[var(--primary)] transition-colors">
                      bilgi@sarilarunlumamulleri.com
                    </a>
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* SAĞ TARAF: Yumuşak Aksiyon Kartları (Grid Layout) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid gap-5 sm:grid-cols-2 sm:gap-6"
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
                  className={`group relative flex flex-col justify-between overflow-hidden rounded-[32px] bg-white p-7 sm:p-8 shadow-[0_12px_40px_rgba(84,45,20,0.03)] border border-[rgba(133,80,44,0.06)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(84,45,20,0.08)] ${item.hoverRing}`}
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className={`flex h-14 w-14 items-center justify-center rounded-[20px] transition-transform duration-500 group-hover:scale-110 ${item.iconBg} ${item.iconColor}`}>
                        <Icon size={24} strokeWidth={2.5} />
                      </div>
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-50 text-gray-400 transition-colors group-hover:bg-[var(--primary)]/10 group-hover:text-[var(--primary)]">
                        <ArrowUpRight size={16} />
                      </div>
                    </div>

                    <p className="mt-8 text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--text-muted)]">
                      {item.label}
                    </p>

                    <h3 className="mt-2 font-title text-[1.6rem] leading-[1.1] text-[var(--primary-dark)] sm:text-[1.8rem]">
                      {item.title}
                    </h3>
                  </div>

                  <div className="mt-6 pt-6 border-t border-[rgba(133,80,44,0.06)]">
                    <p className="text-[14.5px] font-medium text-[var(--primary-dark)]">
                      {item.text}
                    </p>
                    <p className="mt-1 text-[13.5px] leading-relaxed text-[var(--text-soft)]">
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