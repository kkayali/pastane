import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Clock3,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { siteConfig } from "@/data/site";

const quickLinks = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/menu", label: "Menü" },
  { href: "/tum-urunler", label: "Tüm Ürünler" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/iletisim", label: "İletişim" },
];

const whatsappMessage = encodeURIComponent(
  "Merhaba, bir sipariş vermek istiyordum."
);

export default function Footer() {
  return (
    <footer className="relative mt-auto overflow-hidden bg-[#3D1C08] text-white">
      {/* Üst Kısım Dekoratif Çizgi */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#C27E48] to-transparent opacity-40" />
      
      {/* Arka Plan Soft Işıklar */}
      <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-[#C27E48] opacity-10 blur-[100px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#C27E48] opacity-10 blur-[100px]" />

      <div className="container-custom relative px-5 py-12 sm:px-8 sm:py-16 lg:py-20">
        <div className="overflow-hidden rounded-[32px] border border-white/5 bg-white/5 shadow-2xl backdrop-blur-xl">
          <div className="px-6 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-12">
            
            <div className="grid items-stretch gap-8 lg:grid-cols-[1.2fr_0.8fr_1fr] lg:gap-10">
              
              {/* Sol Sütun - Hakkımızda */}
              <div className="flex h-full flex-col justify-between rounded-[24px] border border-white/10 bg-white/5 p-6 shadow-inner sm:p-8">
                <div>
                  <div className="flex items-center gap-4">
                    {/* Logo arka planı şeffaf ve temiz */}
                    <div className="flex h-[80px] w-[80px] shrink-0 items-center justify-center rounded-[20px] bg-white/5 p-2 shadow-sm ring-1 ring-white/10 sm:h-[90px] sm:w-[90px]">
                      <Image
                        src="/logo/logo.png"
                        alt={siteConfig.name}
                        width={80}
                        height={80}
                        className="h-auto w-full object-contain"
                      />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-widest text-[#C27E48]">
                        Sarılar Unlu Mamüller
                      </p>
                      <h3 className="mt-1 font-serif text-[26px] font-bold leading-tight text-[#FFF8F0] sm:text-[32px]">
                        Günlük taze <br /> lezzetler
                      </h3>
                    </div>
                  </div>

                  {/* Metin tekrarı giderildi */}
                  <p className="mt-6 text-[15px] leading-relaxed text-white/80">
                    1970’den beri Akyazı’da günlük üretim, özenli sunum ve özel gün siparişlerinizde güven veren lezzetler hazırlıyoruz. Kaliteden ödün vermeden, her gün aynı taptaze heyecanla hizmetinizdeyiz.
                  </p>
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  {/* WhatsApp Butonu Garantilendi */}
                  <a
                    href={`https://wa.me/${siteConfig.whatsapp}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noreferrer"
                    style={{ backgroundColor: '#25D366', color: '#ffffff' }}
                    className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full px-6 text-[14px] font-bold shadow-lg shadow-[#25D366]/20 transition-all hover:-translate-y-0.5 hover:shadow-[#25D366]/40"
                  >
                    <MessageCircle size={18} />
                    WhatsApp
                  </a>
                  {/* Hemen Ara Butonu Garantilendi */}
                  <a
                    href={`tel:${siteConfig.phone}`}
                    style={{ backgroundColor: '#ffffff', color: '#3D1C08' }}
                    className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full px-6 text-[14px] font-bold shadow-lg transition-all hover:-translate-y-0.5 hover:bg-gray-100"
                  >
                    <Phone size={18} />
                    Hemen Ara
                  </a>
                </div>
              </div>

              {/* Orta Sütun - Hızlı Menü */}
              <div className="flex h-full flex-col rounded-[24px] border border-white/10 bg-white/5 p-6 shadow-inner sm:p-8">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-widest text-[#C27E48]">
                    Keşfedin
                  </p>
                  <h4 className="mt-1 font-serif text-[24px] font-bold text-[#FFF8F0]">
                    Hızlı Menü
                  </h4>
                </div>

                <div className="mt-5 h-px w-full bg-white/10" />

                <nav className="mt-5 flex flex-col gap-1">
                  {quickLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="group flex items-center justify-between rounded-xl px-3 py-3 text-[15px] font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                    >
                      <span className="flex items-center gap-3">
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/5 text-[#C27E48] transition-colors group-hover:bg-[#C27E48] group-hover:text-white">
                          <ArrowRight size={14} />
                        </span>
                        {link.label}
                      </span>
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Sağ Sütun - İletişim */}
              <div className="flex h-full flex-col rounded-[24px] border border-white/10 bg-white/5 p-6 shadow-inner sm:p-8">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-widest text-[#C27E48]">
                    Ulaşın
                  </p>
                  <h4 className="mt-1 font-serif text-[24px] font-bold text-[#FFF8F0]">
                    Sipariş & İletişim
                  </h4>
                </div>

                <div className="mt-5 h-px w-full bg-white/10" />

                <div className="mt-5 flex flex-col gap-4">
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="group flex items-start gap-4 rounded-xl p-2 transition-colors hover:bg-white/5"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/5 text-[#C27E48] transition-colors group-hover:bg-white/10">
                      <Phone size={18} />
                    </span>
                    <span className="mt-2 text-[15px] font-medium text-white/90 group-hover:text-white">
                      {siteConfig.phoneDisplay}
                    </span>
                  </a>

                  {/* Orijinal WhatsApp Rengi */}
                  <a
                    href={`https://wa.me/${siteConfig.whatsapp}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-start gap-4 rounded-xl p-2 transition-colors hover:bg-white/5"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#25D366]/20 text-[#25D366] transition-colors group-hover:bg-[#25D366]/30">
                      <MessageCircle size={18} />
                    </span>
                    <span className="mt-2 text-[15px] font-medium text-white/90 group-hover:text-white">
                      WhatsApp ile sipariş ve bilgi
                    </span>
                  </a>

                  {/* Punycode hatası düzeltildi */}
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="group flex items-start gap-4 rounded-xl p-2 transition-colors hover:bg-white/5"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/5 text-[#C27E48] transition-colors group-hover:bg-white/10">
                      <Mail size={18} />
                    </span>
                    <span className="mt-2 text-[15px] font-medium text-white/90 group-hover:text-white">
                      bilgi@sarilarunlumamulleri.com
                    </span>
                  </a>

                  <a
                    href={siteConfig.mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-start gap-4 rounded-xl p-2 transition-colors hover:bg-white/5"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/5 text-[#C27E48] transition-colors group-hover:bg-white/10">
                      <MapPin size={18} />
                    </span>
                    <span className="mt-1 text-[14px] leading-relaxed text-white/90 group-hover:text-white">
                      {siteConfig.address}
                    </span>
                  </a>

                  {/* Orijinal Instagram Rengi */}
                  <a
                    href={siteConfig.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-start gap-4 rounded-xl p-2 transition-colors hover:bg-white/5"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E1306C]/20 text-[#E1306C] transition-colors group-hover:bg-[#E1306C]/30">
                      <Instagram size={18} />
                    </span>
                    <span className="mt-2 text-[15px] font-medium text-white/90 group-hover:text-white">
                      Instagram hesabımız
                    </span>
                  </a>

                  <div className="flex items-start gap-4 p-2">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/5 text-[#C27E48]">
                      <Clock3 size={18} />
                    </span>
                    <div className="mt-1 text-[14px] leading-relaxed text-white/80">
                      {siteConfig.workingHours.map((item) => (
                        <p key={item}>{item}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Alt Bilgi (Copyright) Alanı */}
            <div className="mt-12">
              <div className="h-px w-full bg-white/10" />
              <div className="flex flex-col gap-4 pt-8 text-center text-[13px] font-medium text-white/60 md:flex-row md:items-center md:justify-between md:text-left">
                <p>© 2026 {siteConfig.name} — Tüm hakları saklıdır.</p>
                <p>Akyazı’da taptaze pasta, tatlı ve fırın ürünleri.</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </footer>
  );
}