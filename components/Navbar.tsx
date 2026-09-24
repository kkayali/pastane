"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  CakeSlice,
  ChevronRight,
  House,
  LayoutGrid,
  MapPin,
  Menu,
  MessageCircle,
  UsersRound,
  X,
} from "lucide-react";
import { siteConfig, whatsappLink } from "@/data/site";
import "./Navbar.css";

const links = [
  { href: "/", label: "Ana Sayfa", icon: House },
  { href: "/menu", label: "Menü", icon: LayoutGrid },
  { href: "/tum-urunler", label: "Tüm Ürünler", icon: CakeSlice },
  { href: "/hakkimizda", label: "Hakkımızda", icon: UsersRound },
  { href: "/iletisim", label: "İletişim", icon: MapPin },
];

const orderHref = whatsappLink(
  "Merhaba, sipariş vermek istiyorum. Bugün neler var?",
);

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLElement>(null);

  const isCurrent = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(href + "/");

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusFrame = requestAnimationFrame(() => {
      panelRef.current?.querySelector<HTMLAnchorElement>("a[href]")?.focus();
    });

    const restoreToggleFocus = () => {
      setOpen(false);
      requestAnimationFrame(() => toggleRef.current?.focus());
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        restoreToggleFocus();
        return;
      }

      if (event.key !== "Tab" || !panelRef.current) return;
      const focusable = Array.from(
        panelRef.current.querySelectorAll<HTMLAnchorElement>("a[href]"),
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (!first || !last) return;

      if (!panelRef.current.contains(document.activeElement)) {
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

    const desktop = window.matchMedia("(min-width: 1051px)");
    const closeOnDesktop = () => {
      if (desktop.matches) setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", closeOnDesktop);
    return () => {
      cancelAnimationFrame(focusFrame);
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header className={scrolled ? "sarilar-nav sarilar-nav--scrolled" : "sarilar-nav"}>
      <div className="sarilar-nav__inner">
        <Link
          href="/"
          className="sarilar-nav__brand"
          aria-label={siteConfig.name + " ana sayfa"}
          onClick={closeMenu}
        >
          <Image
            src="/logo/logo.png"
            alt={siteConfig.name}
            width={210}
            height={72}
            sizes="(max-width: 320px) 106px, (max-width: 380px) 120px, (max-width: 540px) 142px, (max-width: 1050px) 153px, 172px"
            priority
          />
        </Link>

        <nav className="sarilar-nav__desktop" aria-label="Ana gezinme">
          {links.map((link) => {
            const active = isCurrent(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={
                  "sarilar-nav__desktop-link" +
                  (active ? " sarilar-nav__desktop-link--active" : "")
                }
                aria-current={active ? "page" : undefined}
              >
                <span>{link.label}</span>
                {active && (
                  <span className="sarilar-nav__active-dot" aria-hidden="true" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="sarilar-nav__actions">
          <a
            className="sarilar-nav__quick"
            href={orderHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp üzerinden sipariş için yaz"
            onClick={closeMenu}
          >
            <MessageCircle size={18} strokeWidth={2} aria-hidden="true" />
            <span className="sarilar-nav__quick-desktop">Sipariş için yaz</span>
            <span className="sarilar-nav__quick-mobile">Sipariş</span>
            <ArrowUpRight
              className="sarilar-nav__quick-arrow"
              size={16}
              strokeWidth={2}
              aria-hidden="true"
            />
          </a>

          <button
            ref={toggleRef}
            className="sarilar-nav__toggle"
            type="button"
            aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? (
              <X size={22} aria-hidden="true" />
            ) : (
              <Menu size={22} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {open && (
        <button
          type="button"
          className="sarilar-nav__scrim"
          tabIndex={-1}
          aria-label="Menüyü kapat"
          onClick={() => {
            setOpen(false);
            requestAnimationFrame(() => toggleRef.current?.focus());
          }}
        />
      )}

      <nav
        ref={panelRef}
        id="mobile-navigation"
        className="sarilar-nav__panel"
        aria-label="Mobil gezinme"
        hidden={!open}
      >
        <div className="sarilar-nav__panel-header">
          <p className="sarilar-nav__panel-caption">Sarılar menüsü</p>
          <span className="sarilar-nav__panel-badge">Taze &amp; Günlük</span>
        </div>

        <div className="sarilar-nav__mobile-links">
          {links.map((link) => {
            const Icon = link.icon;
            const active = isCurrent(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={
                  "sarilar-nav__mobile-link" +
                  (active ? " sarilar-nav__mobile-link--active" : "")
                }
                aria-current={active ? "page" : undefined}
                onClick={closeMenu}
              >
                <span className="sarilar-nav__mobile-icon">
                  <Icon size={19} strokeWidth={1.9} aria-hidden="true" />
                </span>
                <span className="sarilar-nav__mobile-label">{link.label}</span>
                <ChevronRight
                  className="sarilar-nav__mobile-chevron"
                  size={18}
                  aria-hidden="true"
                />
              </Link>
            );
          })}
        </div>

        <a
          className="sarilar-nav__panel-order"
          href={orderHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp üzerinden sipariş ver veya soru sor"
          onClick={closeMenu}
        >
          <span className="sarilar-nav__panel-order-icon">
            <MessageCircle size={20} strokeWidth={2} aria-hidden="true" />
          </span>
          <span className="sarilar-nav__panel-order-content">
            <strong>WhatsApp&apos;tan yaz</strong>
            <small>Sipariş ve sorularınız için</small>
          </span>
          <ArrowUpRight size={19} aria-hidden="true" />
        </a>
      </nav>
    </header>
  );
}
