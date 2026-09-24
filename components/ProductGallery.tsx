"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ChevronLeft, ChevronRight, MessageCircle, X, ZoomIn } from "lucide-react";
import { getImageTitle, type DisplayImage } from "@/data/menu";
import { whatsappLink } from "@/data/site";
import "./ProductGallery.css";

type Props = {
  title: string;
  images: string[];
  fallbackImage: DisplayImage;
  whatsappMessage: string;
};

type Item = { src: string; title: string; alt: string };

export default function ProductGallery({ title, images, fallbackImage, whatsappMessage }: Props) {
  const items = useMemo<Item[]>(
    () => images.length
      ? images.map((src, index) => {
          const imageTitle = getImageTitle(src, title, index);
          return { src, title: imageTitle, alt: imageTitle };
        })
      : [{ src: fallbackImage.src, title, alt: fallbackImage.alt }],
    [images, title, fallbackImage],
  );

  const orderHref = useMemo(() => whatsappLink(whatsappMessage), [whatsappMessage]);
  const [active, setActive] = useState<number | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const closeRef = useRef<HTMLButtonElement | null>(null);
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);
  const activeItem = active === null ? null : items[active] ?? null;
  const isOpen = activeItem !== null;

  const close = useCallback(() => {
    setActive(null);
    requestAnimationFrame(() => {
      if (triggerRef.current?.isConnected) triggerRef.current.focus();
    });
  }, []);

  const navigate = (direction: number) => {
    setActive((current) => current === null
      ? null
      : (current + direction + items.length) % items.length);
  };

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
        return;
      }

      if (items.length > 1 && (event.key === "ArrowLeft" || event.key === "ArrowRight")) {
        event.preventDefault();
        setActive((current) => current === null
          ? null
          : (current + (event.key === "ArrowRight" ? 1 : -1) + items.length) % items.length);
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;
      const focusable = Array.from(dialogRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      ));
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (!first || !last) return;

      if (!dialogRef.current.contains(document.activeElement)) {
        event.preventDefault();
        first.focus();
      } else if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, items.length, close]);

  return (
    <div className="sarilar-gallery">
      <div className={`sarilar-gallery__grid${items.length === 1 ? " sarilar-gallery__grid--single" : ""}`}>
        {items.map((item, index) => (
          <article className="sarilar-gallery__card" key={`${item.src}-${index}`}>
            <button
              className="sarilar-gallery__photo"
              type="button"
              aria-label={`${item.title} görselini büyüt`}
              onClick={(event) => {
                triggerRef.current = event.currentTarget;
                setActive(index);
              }}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes={items.length === 1
                  ? "(max-width: 600px) calc(100vw - 28px), 430px"
                  : "(max-width: 600px) calc(100vw - 28px), (max-width: 900px) 45vw, (max-width: 1250px) 30vw, 380px"}
              />
              <span className="sarilar-gallery__zoom" aria-hidden="true">
                <ZoomIn size={20} strokeWidth={1.8} />
              </span>
            </button>

            <div className="sarilar-gallery__card-body">
              <span className="sarilar-gallery__index" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{item.title}</h3>
              <a href={orderHref} target="_blank" rel="noopener noreferrer">
                <span>WhatsApp&apos;tan sor</span>
                <MessageCircle size={18} strokeWidth={1.8} aria-hidden="true" />
              </a>
            </div>
          </article>
        ))}
      </div>

      {activeItem && createPortal(
        <div
          className="sarilar-gallery__backdrop"
          onClick={(event) => {
            if (event.target === event.currentTarget) close();
          }}
        >
          <div
            ref={dialogRef}
            className="sarilar-gallery__dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="sarilar-gallery-dialog-title"
          >
            <button
              ref={closeRef}
              className="sarilar-gallery__close"
              type="button"
              onClick={close}
              aria-label="Görseli kapat"
            >
              <X size={22} strokeWidth={1.8} aria-hidden="true" />
            </button>

            <div
              className="sarilar-gallery__large-photo"
              onTouchStart={(event) => {
                const touch = event.changedTouches[0];
                touchStartRef.current = { x: touch.clientX, y: touch.clientY };
              }}
              onTouchEnd={(event) => {
                const start = touchStartRef.current;
                touchStartRef.current = null;
                if (!start || items.length < 2) return;

                const touch = event.changedTouches[0];
                const dx = touch.clientX - start.x;
                const dy = touch.clientY - start.y;
                if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.3) {
                  navigate(dx < 0 ? 1 : -1);
                }
              }}
              onTouchCancel={() => { touchStartRef.current = null; }}
            >
              <Image
                src={activeItem.src}
                alt={activeItem.alt}
                fill
                sizes="(max-width: 700px) calc(100vw - 24px), (max-width: 1200px) 90vw, 1060px"
              />
              {items.length > 1 && (
                <div className="sarilar-gallery__nav">
                  <button type="button" onClick={() => navigate(-1)} aria-label="Önceki görsel">
                    <ChevronLeft size={22} strokeWidth={1.8} aria-hidden="true" />
                  </button>
                  <button type="button" onClick={() => navigate(1)} aria-label="Sonraki görsel">
                    <ChevronRight size={22} strokeWidth={1.8} aria-hidden="true" />
                  </button>
                </div>
              )}
            </div>

            <div className="sarilar-gallery__toolbar">
              <div className="sarilar-gallery__caption">
                <span>{String((active ?? 0) + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}</span>
                <h2 id="sarilar-gallery-dialog-title">{activeItem.title}</h2>
              </div>
              <a className="sarilar-gallery__order" href={orderHref} target="_blank" rel="noopener noreferrer">
                <MessageCircle size={18} strokeWidth={1.8} aria-hidden="true" />
                WhatsApp&apos;tan sor
              </a>
            </div>
          </div>
        </div>,
        document.body,
      )}
    </div>
  );
}
