"use client";

import "./iletisim.css";
import {
  Clock3,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ArrowUpRight,
} from "lucide-react";
import { siteConfig } from "@/data/site";

const whatsappMessage = encodeURIComponent(
  "Merhaba, bir sipariş vermek istiyordum."
);

const quickActions = [
  {
    icon: Phone,
    title: "Hemen Ara",
    text: siteConfig.phoneDisplay,
    href: `tel:${siteConfig.phone}`,
    type: "phone",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    text: "Hızlı sipariş ve bilgi",
    href: `https://wa.me/${siteConfig.whatsapp}?text=${whatsappMessage}`,
    type: "whatsapp",
  },
  {
    icon: MapPin,
    title: "Konum",
    text: "Yol Tarifi Al",
    href: siteConfig.mapsUrl,
    type: "map",
  },
  {
    icon: Instagram,
    title: "Instagram",
    text: "@sarilarunlumamulleri",
    href: siteConfig.instagram,
    type: "instagram",
  },
];

export default function IletisimPage() {
  return (
    <main className="iletisim-wrapper">

      <section className="iletisim-container">

        {/* SOL */}
        <div className="iletisim-left">

          <h1>
            Sipariş, bilgi ve <br /> konum için bize ulaşın
          </h1>

          <p>
            Sarılar Unlu Mamüller olarak her an yanınızdayız.
            Dilediğiniz kanaldan bizimle iletişime geçebilirsiniz.
          </p>

          <div className="iletisim-info">

            <div>
              <MapPin />
              <div>
                <span>Adres</span>
                <p>{siteConfig.address}</p>
              </div>
            </div>

            <div>
              <Clock3 />
              <div>
                <span>Çalışma Saatleri</span>
                {siteConfig.workingHours.map((h, i) => (
                  <p key={i}>{h}</p>
                ))}
              </div>
            </div>

            <div>
              <Mail />
              <div>
                <span>E-Posta</span>
                <p>{siteConfig.email}</p>
              </div>
            </div>

          </div>

        </div>

        {/* SAĞ */}
        <div className="iletisim-right">
          {quickActions.map((item, i) => {
            const Icon = item.icon;

            return (
              <a
                key={i}
                href={item.href}
                className={`iletisim-card ${item.type}`}
              >
                <div className="card-top">
                  <Icon size={22} />
                  <ArrowUpRight size={18} />
                </div>

                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </a>
            );
          })}
        </div>

      </section>

    </main>
  );
}