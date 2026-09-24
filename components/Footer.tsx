"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ChevronUp,
  Clock3,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Sparkles,
} from "lucide-react";
import { siteConfig, whatsappLink } from "@/data/site";
import "./Footer.css";

const quickLinks = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/menu", label: "Menü & Lezzetler" },
  { href: "/tum-urunler", label: "Tüm Ürünler" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/iletisim", label: "İletişim & Konum" },
];

const categoryLinks = [
  { href: "/menu/pastalar/ozel-tasarim-pastalar", label: "Özel Tasarım Pastalar" },
  { href: "/menu/firin", label: "Taze Fırın Ürünleri" },
  { href: "/menu/tatlilar", label: "Geleneksel Tatlılar" },
  { href: "/menu/firin/tuzlu-kurabiyeler", label: "Tuzlu Kurabiyeler" },
];

const orderHref = whatsappLink(
  "Merhaba, özel gün siparişi hakkında bilgi almak istiyorum.",
);

export default function Footer() {
  const scrollToTop = () => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" });
  };

  return (
    <footer className="sarilar-footer">
      <div className="sarilar-footer__glow sarilar-footer__glow--gold" aria-hidden="true" />
      <div className="sarilar-footer__glow sarilar-footer__glow--amber" aria-hidden="true" />

      <div className="sarilar-footer__container">
        <div className="sarilar-footer__hero">
          <div className="sarilar-footer__hero-content">
            <p className="sarilar-footer__hero-badge">
              <Sparkles size={14} aria-hidden="true" />
              <span>Özel Günler &amp; Kutlamalar</span>
            </p>
            <h2 className="sarilar-footer__hero-title">
              Özel günler için pasta ve ikramlıklar.
            </h2>
            <p className="sarilar-footer__hero-text">
              Düğün, nişan, doğum günü ve davetler için siparişinizi birlikte planlayalım.
            </p>
          </div>
          <a
            className="sarilar-footer__hero-btn"
            href={orderHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Özel gün siparişi için WhatsApp üzerinden yaz"
          >
            <MessageCircle size={19} strokeWidth={2} aria-hidden="true" />
            <span>Özel gün siparişi için yaz</span>
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>

        <div className="sarilar-footer__gold-thread" aria-hidden="true" />

        <div className="sarilar-footer__grid">
          <div className="sarilar-footer__brand">
            <Link
              href="/"
              className="sarilar-footer__logo-wrap"
              aria-label={siteConfig.name + " ana sayfa"}
            >
              <Image
                src="/logo/logo.png"
                alt={siteConfig.name}
                width={210}
                height={72}
                sizes="(max-width: 540px) 166px, 184px"
                className="sarilar-footer__logo"
              />
            </Link>

            <div className="sarilar-footer__seal">
              <span className="sarilar-footer__seal-year">{siteConfig.foundingYear}</span>
              <span className="sarilar-footer__seal-dot" aria-hidden="true">•</span>
              <span>50+ yıllık zanaat geleneği</span>
            </div>

            <p className="sarilar-footer__desc">
              {siteConfig.foundingYear}&apos;ten beri Akyazı&apos;da günlük pasta,
              tatlı ve fırın ürünleri hazırlıyoruz.
            </p>
          </div>

          <div className="sarilar-footer__nav-cols">
            <nav className="sarilar-footer__nav-group" aria-label="Hızlı bağlantılar">
              <h3 className="sarilar-footer__heading">Keşfet</h3>
              <ul className="sarilar-footer__link-list">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="sarilar-footer__link">
                      <span>{link.label}</span>
                      <ArrowUpRight
                        size={13}
                        className="sarilar-footer__link-arrow"
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav className="sarilar-footer__nav-group" aria-label="Ürün kategorileri">
              <h3 className="sarilar-footer__heading">Lezzetlerimiz</h3>
              <ul className="sarilar-footer__link-list">
                {categoryLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="sarilar-footer__link">
                      <span>{link.label}</span>
                      <ArrowUpRight
                        size={13}
                        className="sarilar-footer__link-arrow"
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="sarilar-footer__contact">
            <h3 className="sarilar-footer__heading">İletişim &amp; Konum</h3>
            <div className="sarilar-footer__contact-rows">
              <a
                href={siteConfig.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="sarilar-footer__contact-row"
              >
                <span className="sarilar-footer__icon-box">
                  <MapPin size={17} aria-hidden="true" />
                </span>
                <span className="sarilar-footer__row-content">
                  <small>Adresimiz</small>
                  <span>{siteConfig.address}</span>
                </span>
                <ArrowUpRight
                  size={15}
                  className="sarilar-footer__row-arrow"
                  aria-hidden="true"
                />
              </a>

              <a
                href={"tel:" + siteConfig.phone}
                className="sarilar-footer__contact-row"
              >
                <span className="sarilar-footer__icon-box">
                  <Phone size={17} aria-hidden="true" />
                </span>
                <span className="sarilar-footer__row-content">
                  <small>Sipariş hattı</small>
                  <span>{siteConfig.phoneDisplay}</span>
                </span>
              </a>

              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="sarilar-footer__contact-row"
              >
                <span className="sarilar-footer__icon-box">
                  <Instagram size={17} aria-hidden="true" />
                </span>
                <span className="sarilar-footer__row-content">
                  <small>Instagram</small>
                  <span>{siteConfig.instagramHandle}</span>
                </span>
                <ArrowUpRight
                  size={15}
                  className="sarilar-footer__row-arrow"
                  aria-hidden="true"
                />
              </a>

              <a
                href={"mailto:" + siteConfig.email}
                className="sarilar-footer__contact-row"
              >
                <span className="sarilar-footer__icon-box">
                  <Mail size={17} aria-hidden="true" />
                </span>
                <span className="sarilar-footer__row-content">
                  <small>E-posta</small>
                  <span>{siteConfig.email}</span>
                </span>
              </a>

              <div className="sarilar-footer__contact-row sarilar-footer__hours-row">
                <span className="sarilar-footer__icon-box">
                  <Clock3 size={17} aria-hidden="true" />
                </span>
                <span className="sarilar-footer__row-content">
                  <span className="sarilar-footer__hours-head">
                    <small>Çalışma saatlerimiz</small>
                    <span className="sarilar-footer__live-badge">
                      <span className="sarilar-footer__pulse-dot" aria-hidden="true" />
                      Haftanın 7 günü
                    </span>
                  </span>
                  <span>{siteConfig.workingHours.join(" · ")}</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="sarilar-footer__bottom">
          <div className="sarilar-footer__copy">
            <span>© {new Date().getFullYear()} {siteConfig.name}. Tüm hakları saklıdır.</span>
            <span className="sarilar-footer__bullet" aria-hidden="true">•</span>
            <span className="sarilar-footer__location">Akyazı / Sakarya</span>
          </div>
          <button
            type="button"
            className="sarilar-footer__top-btn"
            onClick={scrollToTop}
            aria-label="Sayfanın en üstüne dön"
          >
            <span>Sayfa başına dön</span>
            <ChevronUp size={16} aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
}
