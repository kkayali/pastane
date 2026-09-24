import type { Metadata } from "next";
import {
  ArrowUpRight,
  Clock3,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
} from "lucide-react";
import { siteConfig, whatsappLink } from "@/data/site";
import "./iletisim.css";

export const metadata: Metadata = {
  title: "İletişim",
  description: "Sarılar Unlu Mamüller'in Akyazı adresi, çalışma saatleri, telefonu, WhatsApp iletişimi ve yol tarifi.",
  alternates: { canonical: "/iletisim" },
};

const orderHref = whatsappLink("Merhaba, bugün hangi ürünleriniz var?");

export default function IletisimPage() {
  return (
    <div className="contact-page">
      <section className="page-intro contact-page__intro">
        <div className="container contact-page__intro-inner">
          <div className="contact-page__intro-copy">
            <span className="eyebrow">İletişim</span>
            <h1 className="page-title">Sarılar&apos;a ulaşın.</h1>
            <p className="lead">
              Güncel ürünleri sormak, özel gün siparişinizi konuşmak veya mağazaya
              uğramak için size uygun yolu seçin.
            </p>
            <div className="contact-page__intro-actions">
              <a className="contact-page__write" href={orderHref} target="_blank" rel="noopener noreferrer">
                <MessageCircle size={18} strokeWidth={1.8} aria-hidden="true" /> WhatsApp&apos;tan yaz
              </a>
              <a className="contact-page__call" href={`tel:${siteConfig.phone}`}>
                <Phone size={18} strokeWidth={1.8} aria-hidden="true" /> Hemen ara
              </a>
            </div>
          </div>
          <div className="contact-page__intro-aside">
            <MapPin size={25} strokeWidth={1.4} aria-hidden="true" />
            <span>Mağazamız</span>
            <strong>Akyazı, Sakarya</strong>
            <p>{siteConfig.address}</p>
          </div>
        </div>
      </section>

      <section className="section contact-page__details">
        <div className="container contact-page__layout">
          <div className="contact-page__information">
            <div className="contact-page__information-head">
              <span className="eyebrow">Bilgilerimiz</span>
              <h2>Gelmeden önce.</h2>
              <p>Adresimiz, saatlerimiz ve doğrudan iletişim kanallarımız burada.</p>
            </div>
            <div className="contact-page__rows">
              <a className="contact-page__row" href={siteConfig.mapsUrl} target="_blank" rel="noopener noreferrer">
                <MapPin size={20} strokeWidth={1.7} aria-hidden="true" />
                <span><small>Adres</small><strong>{siteConfig.address}</strong></span>
                <ArrowUpRight className="contact-page__row-arrow" size={18} aria-hidden="true" />
              </a>
              <div className="contact-page__row">
                <Clock3 size={20} strokeWidth={1.7} aria-hidden="true" />
                <span>
                  <small>Çalışma saatleri</small>
                  {siteConfig.workingHours.map((line) => (
                    <strong className="contact-page__hours" key={line}>{line}</strong>
                  ))}
                </span>
              </div>
              <a className="contact-page__row" href={`tel:${siteConfig.phone}`}>
                <Phone size={20} strokeWidth={1.7} aria-hidden="true" />
                <span><small>Telefon</small><strong>{siteConfig.phoneDisplay}</strong></span>
                <ArrowUpRight className="contact-page__row-arrow" size={18} aria-hidden="true" />
              </a>
              <a className="contact-page__row" href={`mailto:${siteConfig.email}`}>
                <Mail size={20} strokeWidth={1.7} aria-hidden="true" />
                <span><small>E-posta</small><strong>{siteConfig.email}</strong></span>
                <ArrowUpRight className="contact-page__row-arrow" size={18} aria-hidden="true" />
              </a>
              <a className="contact-page__row" href={siteConfig.instagram} target="_blank" rel="noopener noreferrer">
                <Instagram size={20} strokeWidth={1.7} aria-hidden="true" />
                <span><small>Instagram</small><strong>{siteConfig.instagramHandle}</strong></span>
                <ArrowUpRight className="contact-page__row-arrow" size={18} aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="contact-page__map-panel">
            <div className="contact-page__map-head">
              <div>
                <span className="eyebrow">Konum</span>
                <h2>Mağazamızı bulun.</h2>
              </div>
              <a href={siteConfig.mapsUrl} target="_blank" rel="noopener noreferrer">
                Yol tarifi <Navigation size={17} strokeWidth={1.7} aria-hidden="true" />
              </a>
            </div>
            <iframe
              title="Sarılar Unlu Mamüller mağaza konumu"
              src={siteConfig.googleMapsEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <p className="contact-page__map-foot">{siteConfig.address}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
