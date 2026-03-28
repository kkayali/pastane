"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  ChevronRight,
  Menu,
  Phone,
  X,
  ArrowUpRight,
} from "lucide-react";
import { siteConfig } from "@/data/site";
import { menuCategories } from "@/data/menu";

const mainLinks = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/iletisim", label: "İletişim" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const pathname = usePathname();
  const desktopMenuRef = useRef<HTMLDivElement | null>(null);

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuActive =
    pathname.startsWith("/menu") || pathname.startsWith("/tum-urunler");

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        desktopMenuRef.current &&
        !desktopMenuRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const closeAllMenus = () => {
    setMenuOpen(false);
    setMobileMenuOpen(false);
    setMobileOpen(false);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileOpen(false);
  };

  const openMobileMenu = () => {
    setMobileOpen(true);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full px-3 pt-3 sm:px-4 sm:pt-4">
        <div
          className={`relative mx-auto w-full max-w-[1680px] overflow-visible rounded-[28px] border border-white/10 bg-[#3D1C08] transition-all duration-300 ${
            isScrolled
              ? "shadow-lg shadow-black/20"
              : "shadow-2xl shadow-black/30"
          }`}
        >
          {/* HATA BURADA ÇÖZÜLDÜ: px-5 sm:px-8 yerine py-2 pr-2 pl-5 sm:pr-3 sm:pl-8 yapıldı. Butonların sağa çarpması engellendi. */}
          <div className={`relative flex w-full items-center justify-between pl-5 pr-2 py-2 sm:pl-8 sm:pr-3 transition-all duration-300 ${
            isScrolled ? 'min-h-[76px]' : 'min-h-[90px]'
          }`}>
            {/* Logo */}
            <Link
              href="/"
              onClick={closeAllMenus}
              className="group z-10 flex shrink-0 items-center"
              aria-label={siteConfig.name}
            >
              <div
                className={`relative flex items-center justify-center transition-transform duration-300 ${
                  isScrolled ? "scale-[0.92]" : "scale-100"
                }`}
              >
                <Image
                  src="/logo/logo.png"
                  alt={siteConfig.name}
                  width={180}
                  height={60}
                  priority
                  className="h-auto w-[140px] object-contain sm:w-[160px]"
                />
              </div>
            </Link>

            {/* Masaüstü Menü */}
            <nav className="hidden items-center gap-1 lg:gap-3 xl:flex">
              {mainLinks.slice(0, 1).map((link) => {
                const active = isActive(pathname, link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeAllMenus}
                    style={{ color: active ? '#5C3218' : '#FFF8F0' }} 
                    className={`relative inline-flex min-h-[44px] items-center rounded-full px-4 lg:px-5 text-[14.5px] lg:text-[15px] font-medium tracking-wide transition-all duration-300 ${
                      active
                        ? "bg-[#FDF3E7] shadow-md"
                        : "hover:bg-white/10"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}

              {/* Mega Menü Dropdown Container */}
              <div
                ref={desktopMenuRef}
                className="relative"
                onMouseEnter={() => setMenuOpen(true)}
                onMouseLeave={() => setMenuOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setMenuOpen((prev) => !prev)}
                  style={{ color: menuActive || menuOpen ? '#5C3218' : '#FFF8F0' }} 
                  className={`inline-flex min-h-[44px] items-center gap-2 rounded-full px-4 lg:px-5 text-[14.5px] lg:text-[15px] font-medium tracking-wide transition-all duration-300 ${
                    menuActive || menuOpen
                      ? "bg-[#FDF3E7] shadow-md"
                      : "hover:bg-white/10"
                  }`}
                  aria-expanded={menuOpen}
                >
                  Menü
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${
                      menuOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Mega Menü İçeriği */}
                <div
                  className={`absolute right-0 z-[100] pt-6 transition-all duration-300 w-[700px] max-w-[calc(100vw-2rem)] origin-top-right ${
                    menuOpen
                      ? "pointer-events-auto visible translate-y-0 opacity-100 scale-100"
                      : "pointer-events-none invisible -translate-y-3 opacity-0 scale-95"
                  }`}
                >
                  <div className="overflow-hidden rounded-[28px] border border-[#EBE1D5] bg-[#FCFAF7] shadow-2xl shadow-black/25">
                    <div className="w-full p-8">
                      <div className="mb-6 flex items-center justify-between border-b border-[#EBE1D5]/60 pb-4">
                        <div>
                          <p className="font-serif text-[22px] font-bold text-[#4A2411]">Ürün Menüsü</p>
                        </div>
                        <Link
                          href="/tum-urunler"
                          onClick={closeAllMenus}
                          className="group flex items-center gap-1.5 rounded-full px-4 py-2 text-[14px] font-semibold text-[#A25F2D] transition hover:bg-[#F6EDE4]"
                        >
                          Tüm Ürünleri Gör
                          <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </Link>
                      </div>

                      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3">
                        {menuCategories.map((category) => (
                          <div
                            key={category.slug}
                            className="group flex flex-col rounded-2xl border border-[#EBE1D5]/50 bg-white p-5 shadow-sm transition-all hover:border-[#C27E48]/40 hover:shadow-md"
                          >
                            <Link
                              href={`/menu/${category.slug}`}
                              onClick={closeAllMenus}
                              className="block font-serif text-[18px] font-bold text-[#4A2411] transition-colors group-hover:text-[#A25F2D]"
                            >
                              {category.title}
                            </Link>
                            <ul className="mt-4 flex flex-col gap-1">
                              {category.subcategories.map((sub) => (
                                <li key={sub.slug}>
                                  <Link
                                    href={`/menu/${category.slug}/${sub.slug}`}
                                    onClick={closeAllMenus}
                                    className="flex items-center justify-between rounded-lg py-2 px-2 text-[14px] font-medium text-[#7D5B43] transition-colors hover:bg-[#FDF3E7] hover:text-[#5C3218]"
                                  >
                                    <span>{sub.title}</span>
                                    <ChevronRight
                                      size={14}
                                      className="text-[#C27E48] opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                                    />
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Diğer Linkler */}
              {mainLinks.slice(1).map((link) => {
                const active = isActive(pathname, link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeAllMenus}
                    style={{ color: active ? '#5C3218' : '#FFF8F0' }} 
                    className={`relative inline-flex min-h-[44px] items-center rounded-full px-4 lg:px-5 text-[14.5px] lg:text-[15px] font-medium tracking-wide transition-all duration-300 ${
                      active
                        ? "bg-[#FDF3E7] shadow-md"
                        : "hover:bg-white/10"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}

              {/* Hemen Ara Butonu */}
              <a
                href={`tel:${siteConfig.phone}`}
                className="ml-2 inline-flex min-h-[48px] lg:min-h-[50px] items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#C27E48] to-[#9F5D2A] px-6 lg:px-7 text-[14.5px] lg:text-[15px] font-semibold text-white shadow-lg transition-transform hover:-translate-y-0.5 hover:shadow-xl"
              >
                <Phone size={18} />
                <span className="hidden lg:inline">Hemen Ara</span>
                <span className="lg:hidden">Ara</span>
              </a>
            </nav>

            {/* Mobil Menü Tetikleyiciler */}
            <div className="flex items-center gap-2 sm:gap-3 xl:hidden">
              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-[#C27E48] to-[#9F5D2A] text-white shadow-md"
                aria-label="Hemen Ara"
              >
                <Phone size={18} />
              </a>

              <button
                type="button"
                onClick={openMobileMenu}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-[#FFF8F0] backdrop-blur-md transition-colors hover:bg-white/20"
                aria-label="Menüyü Aç"
              >
                <Menu size={20} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobil Overlay ve Panel Kodları (Burası aynı kalıyor) */}
      <div
        className={`fixed inset-0 z-[80] bg-[#1A0C05]/60 backdrop-blur-sm transition-opacity duration-300 xl:hidden ${
          mobileOpen ? "pointer-events-auto visible opacity-100" : "pointer-events-none invisible opacity-0"
        }`}
        onClick={closeMobileMenu}
      />

      <div
        className={`fixed right-0 top-0 z-[90] h-full w-full max-w-[360px] overflow-y-auto bg-[#FCFAF7] shadow-2xl transition-transform duration-300 xl:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-[#EBE1D5]/60 bg-[#FCFAF7]/95 px-6 py-5 backdrop-blur-md">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#9A7052]">
              Sarılar
            </p>
            <p className="mt-1 font-serif text-[20px] font-bold text-[#4A2411]">
              Menü
            </p>
          </div>
          <button
            type="button"
            onClick={closeMobileMenu}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#4A2411] shadow-sm border border-[#EBE1D5] transition-transform hover:rotate-90 hover:bg-[#F6EDE4]"
            aria-label="Kapat"
          >
            <X size={20} />
          </button>
        </div>

        <div className="px-6 py-6">
          <div className="space-y-3">
            <Link
              href="/"
              onClick={closeAllMenus}
              className={`flex items-center justify-between rounded-xl p-4 text-[16px] font-semibold transition-colors ${
                isActive(pathname, "/")
                  ? "bg-[#FDF3E7] text-[#5C3218]"
                  : "bg-white text-[#4A2411] border border-[#EBE1D5] shadow-sm hover:bg-[#F6EDE4]"
              }`}
            >
              Ana Sayfa
              <ChevronRight size={18} className="text-[#C27E48]" />
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className={`flex w-full items-center justify-between rounded-xl p-4 text-left text-[16px] font-semibold transition-colors ${
                menuActive || mobileMenuOpen
                  ? "bg-[#FDF3E7] text-[#5C3218]"
                  : "bg-white text-[#4A2411] border border-[#EBE1D5] shadow-sm hover:bg-[#F6EDE4]"
              }`}
            >
              Ürün Menüsü
              <ChevronDown
                size={18}
                className={`text-[#C27E48] transition-transform duration-300 ${
                  mobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Mobil Alt Kategoriler */}
            <div
              className={`overflow-hidden transition-all duration-300 ${
                mobileMenuOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="mt-2 space-y-4 rounded-xl border border-[#EBE1D5]/60 bg-white p-5 shadow-sm">
                <Link
                  href="/tum-urunler"
                  onClick={closeAllMenus}
                  className="mb-4 flex min-h-[46px] items-center justify-center rounded-full bg-gradient-to-r from-[#C27E48] to-[#9F5D2A] px-4 text-[15px] font-semibold text-white shadow-md"
                >
                  Tüm Ürünleri Gör
                </Link>

                {menuCategories.map((category) => (
                  <div key={category.slug} className="pt-3 border-t border-[#EBE1D5] first:border-0 first:pt-0">
                    <Link
                      href={`/menu/${category.slug}`}
                      onClick={closeAllMenus}
                      className="block font-serif text-[18px] font-bold text-[#4A2411]"
                    >
                      {category.title}
                    </Link>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {category.subcategories.map((sub) => (
                        <Link
                          key={sub.slug}
                          href={`/menu/${category.slug}/${sub.slug}`}
                          onClick={closeAllMenus}
                          className="rounded-full bg-[#F6EDE4] border border-[#EBE1D5] px-4 py-2 text-[13px] font-medium text-[#5C3218] transition-colors hover:bg-[#C27E48] hover:text-white"
                        >
                          {sub.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {mainLinks.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeAllMenus}
                className={`flex items-center justify-between rounded-xl p-4 text-[16px] font-semibold transition-colors ${
                  isActive(pathname, link.href)
                    ? "bg-[#FDF3E7] text-[#5C3218]"
                    : "bg-white text-[#4A2411] border border-[#EBE1D5] shadow-sm hover:bg-[#F6EDE4]"
                }`}
              >
                {link.label}
                <ChevronRight size={18} className="text-[#C27E48]" />
              </Link>
            ))}
          </div>

          <div className="mt-8 rounded-xl border border-[#EBE1D5]/60 bg-white p-6 shadow-sm">
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#9A7052]">
              Hızlı İletişim
            </p>
            <div className="mt-4 flex flex-col gap-3">
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex min-h-[46px] w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#C27E48] to-[#9F5D2A] px-4 text-[15px] font-semibold text-white shadow-md"
              >
                <Phone size={18} />
                Hemen Ara
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="flex min-h-[46px] w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 text-[15px] font-semibold text-white shadow-md"
              >
                WhatsApp ile Yazın
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}