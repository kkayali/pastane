"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import { homeImages } from "@/data/menu";

const slides = [
  homeImages.hero,
  ...homeImages.showcase,
  ...homeImages.gallery,
].filter(Boolean);

const heroFacts = [
  "1980’den beri üretim",
  "Günlük taze hazırlık",
  "Özel gün siparişleri",
];

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 4200);

    return () => clearInterval(timer);
  }, []);

  const accentImage = useMemo(() => {
    if (slides.length < 2) return slides[0];
    return slides[(active + 1) % slides.length];
  }, [active]);

  return (
    <section className="hero-section page-hero overflow-hidden">
      <div className="hero-blob hero-blob-1" />
      <div className="hero-blob hero-blob-2" />

      <div className="container-custom">
        <div className="grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
          <div className="relative z-[1]">
            <div className="eyebrow">
              Günlük üretim • Butik sunum • Özel gün siparişleri
            </div>

            <p className="mt-7 font-script text-[1.75rem] leading-none text-[var(--primary)] sm:text-[2.15rem]">
              Sevgiyle hazırlanır
            </p>

            {/* BAŞLIK DÜZELTİLDİ: Kelimeler mantıklı bölündü ve max-w kısıtlaması kaldırıldı */}
            <h1 className="mt-4 font-title text-[3.15rem] leading-[1.05] tracking-[-0.04em] text-[var(--primary-dark)] sm:text-[4.2rem] lg:text-[5rem]">
              Her gün taze hazırlanan
              <br />
              lezzetler
            </h1>

            <p className="mt-6 max-w-[34rem] text-[0.98rem] leading-8 text-[var(--text-soft)] sm:text-[1rem]">
              Pastadan sütlü tatlılara, fırın ürünlerinden özel gün
              siparişlerine kadar uzanan seçili lezzetlerimizle Akyazı’da sıcak,
              zarif ve güven veren bir deneyim sunuyoruz.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link href="/menu" className="btn-primary">
                Menüyü İncele
                <ArrowRight size={16} />
              </Link>

              {/* BUTON KONTRASTI DÜZELTİLDİ: Görünürlüğü artırıldı */}
              <Link
                href="/iletisim"
                className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full border border-[var(--primary)]/40 bg-white/90 px-8 text-[0.96rem] font-bold text-[var(--primary-dark)] shadow-md backdrop-blur-md transition-all hover:-translate-y-0.5 hover:bg-white hover:shadow-lg"
              >
                Sipariş ve İletişim
              </Link>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-[13.5px] font-bold text-[var(--primary-dark)]/80 sm:text-[14px]">
              {heroFacts.map((item, index) => (
                <div key={item} className="flex items-center gap-3">
                  <span>{item}</span>
                  {index !== heroFacts.length - 1 && (
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)]/40" />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-[1]">
            <div className="relative rounded-[36px] border border-[var(--line)] bg-[rgba(255,250,244,0.82)] p-3 shadow-[var(--shadow-medium)] sm:p-4">
              <div className="absolute left-5 top-5 z-10 rounded-full bg-[rgba(255,250,244,0.88)] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--primary-dark)] shadow-[0_8px_20px_rgba(84,45,20,0.06)] backdrop-blur-md sm:text-[11px]">
                Özel sunumlar • Taze üretim
              </div>

              <div className="relative overflow-hidden rounded-[30px] bg-[#f8eee2]">
                <div className="relative h-[360px] sm:h-[480px] lg:h-[620px]">
                  {slides.map((src, i) => (
                    <div
                      key={`${src}-${i}`}
                      className={`absolute inset-0 transition-opacity duration-700 ${
                        i === active ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <Image
                        src={src}
                        alt={`Sarılar Unlu Mamüller görseli ${i + 1}`}
                        fill
                        priority={i === 0}
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>

                {accentImage && (
                  <button
                    type="button"
                    onClick={() => setActive((active + 1) % slides.length)}
                    className="absolute bottom-4 right-4 hidden w-[150px] overflow-hidden rounded-[24px] border border-white/60 bg-[rgba(255,250,244,0.78)] p-2 shadow-[0_16px_36px_rgba(84,45,20,0.1)] backdrop-blur-md transition duration-300 hover:-translate-y-1 lg:block"
                    aria-label="Sonraki görsel"
                  >
                    <div className="relative h-[140px] overflow-hidden rounded-[18px]">
                      <Image
                        src={accentImage}
                        alt="Öne çıkan diğer ürün"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </button>
                )}
              </div>
            </div>

            {/* SLIDER NOKTALARI: margin-top artırıldı (mt-8) */}
            {slides.length > 1 && (
              <div className="mt-8 flex items-center justify-center gap-3">
                {slides.slice(0, Math.min(slides.length, 6)).map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Slider ${i + 1}`}
                    onClick={() => setActive(i)}
                    className={`rounded-full transition-all ${
                      i === active
                        ? "h-2.5 w-8 bg-[var(--primary)]"
                        : "h-2.5 w-2.5 bg-[var(--primary)]/20"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}