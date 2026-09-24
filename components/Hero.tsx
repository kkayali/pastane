"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Clock3,
  MapPin,
  MessageCircle,
  Wheat,
} from "lucide-react";
import { whatsappLink } from "@/data/site";
import "./Hero.css";

const slides = [
  {
    src: "/images/home/hero.jpeg",
    label: "Sarılar'dan lezzetler",
    alt: "Sarılar pasta ve tatlı sunumu",
  },
  {
    src: "/images/menu/pastalar/meyvelipasta1.jpeg",
    label: "Günlük pastalar",
    alt: "Sarılar meyveli günlük pasta",
  },
  {
    src: "/images/menu/dugun-nisan/dugun-nisan.jpeg",
    label: "Özel gün pastaları",
    alt: "Sarılar düğün ve nişan pastası",
  },
  {
    src: "/images/menu/sutlu-tatlilar/magnolya1.jpeg",
    label: "Sütlü tatlılar",
    alt: "Sarılar magnolia tatlısı",
  },
] as const;

const orderHref = whatsappLink("Merhaba, sipariş vermek istiyorum.");

export default function Hero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [announcement, setAnnouncement] = useState("");
  const touchStart = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(query.matches);

    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (paused || reducedMotion) return;

    const timer = window.setInterval(() => {
      if (!document.hidden) {
        setActive((current) => (current + 1) % slides.length);
      }
    }, 5500);

    return () => window.clearInterval(timer);
  }, [active, paused, reducedMotion]);

  const selectSlide = (index: number) => {
    setActive(index);
    setAnnouncement(`${slides[index].label}, ${index + 1} / ${slides.length}`);
  };

  const step = (direction: number) => {
    selectSlide((active + direction + slides.length) % slides.length);
  };

  const finishSwipe = (x: number, y: number) => {
    const start = touchStart.current;
    touchStart.current = null;
    if (!start) return;

    const dx = x - start.x;
    const dy = y - start.y;
    if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy) * 1.3) {
      step(dx < 0 ? 1 : -1);
    }
  };

  return (
    <>
      <section className="sarilar-hero">
        <div className="container sarilar-hero__grid">
          <div className="sarilar-hero__intro">
            <p className="sarilar-hero__eyebrow">Akyazı · 1970&apos;ten beri</p>
            <h1 className="sarilar-hero__title">
              Güzel günlerin <em>lezzet durağı.</em>
            </h1>
          </div>

          <div
            className="sarilar-hero__showcase"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocusCapture={() => setPaused(true)}
            onBlurCapture={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
            }}
          >
            <div
              id="sarilar-hero-media"
              className="sarilar-hero__media"
              role="region"
              aria-roledescription="görsel akışı"
              aria-label="Sarılar ürün fotoğrafları"
              onTouchStart={(event) => {
                const touch = event.changedTouches[0];
                touchStart.current = { x: touch.clientX, y: touch.clientY };
              }}
              onTouchEnd={(event) => {
                const touch = event.changedTouches[0];
                finishSwipe(touch.clientX, touch.clientY);
              }}
              onTouchCancel={() => { touchStart.current = null; }}
            >
              {slides.map((slide, index) => (
                <div
                  key={slide.src}
                  className="sarilar-hero__slide"
                  data-active={index === active}
                  aria-hidden={index !== active}
                >
                  <Image
                    src={slide.src}
                    alt={index === active ? slide.alt : ""}
                    fill
                    priority={index === 0}
                    sizes="(max-width: 540px) calc(100vw - 28px), (max-width: 900px) calc(100vw - 32px), (max-width: 1200px) 48vw, 590px"
                  />
                </div>
              ))}

              <div className="sarilar-hero__photo-caption">
                <span className="sarilar-hero__photo-count" aria-hidden="true">
                  {String(active + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
                </span>
                <p>{slides[active].label}</p>
              </div>

              <div className="sarilar-hero__arrows" role="group" aria-label="Fotoğraf kontrolü">
                <button
                  type="button"
                  onClick={() => step(-1)}
                  aria-label="Önceki görsel"
                  aria-controls="sarilar-hero-media"
                >
                  <ChevronLeft size={20} aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => step(1)}
                  aria-label="Sonraki görsel"
                  aria-controls="sarilar-hero-media"
                >
                  <ChevronRight size={20} aria-hidden="true" />
                </button>
              </div>
            </div>

            <div className="sarilar-hero__thumb-bar">
              <span className="sarilar-hero__thumb-heading">Fotoğrafları keşfet</span>
              <div className="sarilar-hero__thumbs" role="group" aria-label="Fotoğraf seç">
                {slides.map((slide, index) => (
                  <button
                    type="button"
                    key={slide.src}
                    className="sarilar-hero__thumb"
                    data-active={index === active}
                    onClick={() => selectSlide(index)}
                    aria-label={`${slide.label} görselini göster`}
                    aria-pressed={index === active}
                    aria-controls="sarilar-hero-media"
                  >
                    <Image src={slide.src} alt="" fill sizes="72px" />
                  </button>
                ))}
              </div>
            </div>

            <span className="sarilar-hero__screen-reader" role="status">
              {announcement}
            </span>
          </div>

          <div className="sarilar-hero__details">
            <p className="sarilar-hero__lead">
              Günlük pastalar, tatlılar, fırın ürünleri ve özel günler için hazırlanan
              lezzetleri keşfedin. Sipariş ve güncel ürün bilgisi için bize doğrudan ulaşın.
            </p>

            <div className="sarilar-hero__actions">
              <Link className="sarilar-hero__menu-link" href="/menu">
                Menüyü keşfet <ArrowRight size={18} strokeWidth={1.8} aria-hidden="true" />
              </Link>
              <a className="sarilar-hero__order-link" href={orderHref} target="_blank" rel="noopener noreferrer">
                <MessageCircle size={18} strokeWidth={1.8} aria-hidden="true" />
                WhatsApp&apos;tan yaz
              </a>
            </div>

            <p className="sarilar-hero__note">
              Akyazı&apos;daki mağazamızdan sipariş ve teslimat bilgisi alabilirsiniz.
            </p>
          </div>
        </div>
      </section>

      <div className="sarilar-hero__trust">
        <div className="container sarilar-hero__trust-inner">
          <div className="sarilar-hero__trust-item">
            <Clock3 size={22} strokeWidth={1.5} aria-hidden="true" />
            <span>1970&apos;ten beri <strong>Akyazı&apos;da</strong></span>
          </div>
          <div className="sarilar-hero__trust-item">
            <Wheat size={22} strokeWidth={1.5} aria-hidden="true" />
            <span>Günlük üretim <strong>kendi imalatımız</strong></span>
          </div>
          <div className="sarilar-hero__trust-item">
            <MapPin size={22} strokeWidth={1.5} aria-hidden="true" />
            <span>Mağazada <strong>doğrudan iletişim</strong></span>
          </div>
        </div>
      </div>
    </>
  );
}
