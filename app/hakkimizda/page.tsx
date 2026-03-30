"use client";

import Image from "next/image";
import Link from "next/link";
import "./hakkimizda.css";
import { Clock3, Sparkles, CakeSlice, HeartHandshake } from "lucide-react";

const whyItems = [
  {
    title: "1970'den Beri Güven",
    text: "Yıllara yayılan üretim disiplinimizle güçlü bir güven bağı kuruyoruz.",
    icon: Clock3,
  },
  {
    title: "Günlük Taze Hazırlık",
    text: "Her sabah tüm ürünlerimizi taze olarak hazırlıyoruz.",
    icon: Sparkles,
  },
  {
    title: "Kendi İmalatımız",
    text: "Ürünlerimizi dışarıdan almıyor, kendi mutfağımızda üretiyoruz.",
    icon: CakeSlice,
  },
  {
    title: "Samimi Hizmet",
    text: "Müşterilerimize sıcak ve güvenilir bir hizmet sunuyoruz.",
    icon: HeartHandshake,
  },
];

export default function Page() {
  return (
    <main className="hak-wrapper">

      {/* HERO */}
      <section className="hak-hero">

        <div className="hak-left">
          <h1 className="hak-title">
            1970’ten Bugüne <br /> Lezzet Yolculuğu
          </h1>

          <p className="hak-text">
            Sarılar Unlu Mamüller olarak Akyazı’da yarım asrı aşkın süredir
            günlük üretim anlayışıyla hizmet veriyoruz.
          </p>

          <div className="hak-buttons">
            <Link href="/menu" className="btn-primary">
              Menüyü Keşfet
            </Link>
            <Link href="/iletisim" className="btn-outline">
              İletişim
            </Link>
          </div>
        </div>

        {/* IMAGE FIX */}
        <div className="hak-right">
          <div className="hak-image-wrapper">
            <Image
              src="/images/storefront.jpg"
              alt="Sarılar"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
              className="hak-image"
            />
          </div>
        </div>

      </section>

      {/* STORY */}
      <section className="hak-story">

        <h2 className="hak-story-title">
          Geçmişin ustalığı, bugünün özeni
        </h2>

        <div className="hak-story-grid">
          <p>
            1970’ten bu yana değişmeyen tek şey kaliteye olan bağlılığımızdır.
          </p>

          <p>
            Doğal malzeme ve günlük üretim prensibiyle üretmeye devam ediyoruz.
          </p>
        </div>

        {/* STATS */}
        <div className="hak-stats">
          <div>
            <span>TECRÜBE</span>
            <strong>50+ Yıl</strong>
          </div>
          <div>
            <span>ÜRETİM</span>
            <strong>Günlük</strong>
          </div>
          <div>
            <span>MEMNUNİYET</span>
            <strong>%100</strong>
          </div>
        </div>

      </section>

      {/* WHY */}
      <section className="hak-why">

        <h2 className="hak-why-title">Neden Biz?</h2>

        <div className="hak-why-grid">
          {whyItems.map((item, i) => {
            const Icon = item.icon;

            return (
              <div key={i} className="hak-card">
                <div className="hak-icon">
                  <Icon size={20} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            );
          })}
        </div>

      </section>

    </main>
  );
}