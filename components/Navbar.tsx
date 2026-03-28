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

  // BURASI GÜNCELLENDİ: whitespace-nowrap eklendi, padding ve fontlar responsive yapıldı
  const navBase =
    "whitespace-nowrap inline-flex items-center justify-center min-h-[54px] xl:min-h-[62px] rounded-full px-5 xl:px-6 2xl:px-9 text-[14px] xl:text-[15.5px] font-medium tracking-[0.01em] transition-all duration-300";
  
  const navState = (active: boolean) =>
    active
      ? "bg-[#F8ECDD] text-[#5B3119] shadow-[0_10px_24px_rgba(0,0,0,0.14)]"
      : "text-[#FFF7EF] hover:bg-white/12 hover:text-white";

  return (
    <>
      <header className="sticky top-0 z-50 w-full px-3 pt-3 sm:px-4 sm:pt-4">
        <div
          className={`relative mx-auto w-full max-w-[1760px] overflow-visible border border-[rgba(255,255,255,0.08)] bg-[#3D1C08] transition-all duration-300 ${
            isScrolled
              ? "shadow-[0_14px_34px_rgba(0,0,0,0.18)]"
              : "shadow-[0_22px_52px_rgba(0,0,0,0.24)]"
          }`}
          style={{ borderRadius: "0px" }}
        >
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.03)_0%,transparent_18%,transparent_82%,rgba(255,255,255,0.03)_100%)]" />

          <div
            className={`relative mx-auto flex w-full items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 transition-all duration-300 ${
              isScrolled ? "min-h-[84px]" : "min-h-[98px]"
            }`}
          >
            <Link
              href="/"
              onClick={closeAllMenus}
              className="z-10 flex shrink-0 items-center"
              aria-label={siteConfig.name}
            >
              <div
                className={`transition-transform duration-300 ${
                  isScrolled ? "scale-[0.94]" : "scale-100"
                }`}
              >
                <Image
                  src="/logo/logo.png"
                  alt={siteConfig.name}
                  width={190}
                  height={62}
                  priority
                  className="h-auto w-[136px] object-contain sm:w-[150px] lg:w-[165px] xl:w-[178px]"
                />
              </div>
            </Link>

            {/* BURASI GÜNCELLENDİ: gap artırıldı ve ml-auto ile sağa yaslandı */}
            <nav className="hidden items-center ml-auto xl:flex gap-4 xl:gap-6 2xl:gap-8">
              <Link
                href="/"
                onClick={closeAllMenus}
                className={`${navBase} ${navState(isActive(pathname, "/"))}`}
              >
                Ana Sayfa
              </Link>

              <div
                ref={desktopMenuRef}
                className="relative"
                onMouseEnter={() => setMenuOpen(true)}
                onMouseLeave={() => setMenuOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setMenuOpen((prev) => !prev)}
                  className={`${navBase} ${navState(
                    menuActive || menuOpen
                  )} gap-2.5`}
                  aria-expanded={menuOpen}
                  aria-haspopup="true"
                >
                  Menü
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-300 ${
                      menuOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`absolute right-0 top-full z-[100] w-[760px] max-w-[calc(100vw-32px)] origin-top-right pt-5 transition-all duration-300 ${
                    menuOpen
                      ? "pointer-events-auto visible translate-y-0 opacity-100"
                      : "pointer-events-none invisible -translate-y-3 opacity-0"
                  }`}
                >
                  <div className="overflow-hidden border border-[#E9DED1] bg-[#FCFAF7] shadow-[0_28px_70px_rgba(0,0,0,0.18)]">
                    <div className="p-8">
                      <div className="mb-6 flex items-center justify-between border-b border-[#E9DED1] pb-4">
                        <div>
                          <p className="font-serif text-[24px] font-bold text-[#4A2411]">
                            Ürün Menüsü
                          </p>
                          <p className="mt-1 text-[13px] text-[#8A6A54]">
                            Ana kategoriler ve alt ürün grupları
                          </p>
                        </div>

                        <Link
                          href="/tum-urunler"
                          onClick={closeAllMenus}
                          className="group inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[14px] font-semibold text-[#A25F2D] transition hover:bg-[#F6EDE4]"
                        >
                          Tüm Ürünleri Gör
                          <ArrowUpRight
                            size={16}
                            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          />
                        </Link>
                      </div>

                      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3">
                        {menuCategories.map((category) => (
                          <div
                            key={category.slug}
                            className="group border border-[#EEE4D8] bg-white p-5 shadow-[0_6px_18px_rgba(0,0,0,0.04)] transition-all duration-300 hover:border-[#D7B292] hover:shadow-[0_12px_28px_rgba(0,0,0,0.07)]"
                          >
                            <Link
                              href={`/menu/${category.slug}`}
                              onClick={closeAllMenus}
                              className="block font-serif text-[20px] font-bold leading-tight text-[#4A2411] transition-colors group-hover:text-[#A25F2D]"
                            >
                              {category.title}
                            </Link>

                            <ul className="mt-4 flex flex-col gap-1.5">
                              {category.subcategories.map((sub) => (
                                <li key={sub.slug}>
                                  <Link
                                    href={`/menu/${category.slug}/${sub.slug}`}
                                    onClick={closeAllMenus}
                                    className="flex items-center justify-between px-2 py-2 text-[14px] font-medium text-[#735540] transition-colors hover:bg-[#FDF3E7] hover:text-[#5C3218]"
                                  >
                                    <span>{sub.title}</span>
                                    <ChevronRight
                                      size={14}
                                      className="opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
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

              {mainLinks.slice(1).map((link) => {
                const active = isActive(pathname, link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeAllMenus}
                    className={`${navBase} ${navState(active)}`}
                  >
                    {link.label}
                  </Link>
                );
              })}

              {/* BURASI GÜNCELLENDİ: whitespace-nowrap eklendi, min-h ve padding ekran boyutlarına göre ayarlandı */}
              <a
                href={`tel:${siteConfig.phone}`}
                className="ml-2 whitespace-nowrap inline-flex min-h-[54px] xl:min-h-[62px] items-center justify-center gap-2.5 rounded-full bg-[linear-gradient(135deg,#C98245_0%,#A45D2A_100%)] px-5 xl:px-6 2xl:px-9 text-[14px] xl:text-[15.5px] font-semibold text-white shadow-[0_14px_28px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_34px_rgba(0,0,0,0.22)]"
              >
                <Phone size={18} />
                Hemen Ara
              </a>
            </nav>

            <div className="flex items-center gap-3 xl:hidden">
              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[linear-gradient(135deg,#C98245_0%,#A45D2A_100%)] text-white shadow-md"
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

      <div
        className={`fixed inset-0 z-[80] bg-[#1A0C05]/60 backdrop-blur-sm transition-opacity duration-300 xl:hidden ${
          mobileOpen
            ? "pointer-events-auto visible opacity-100"
            : "pointer-events-none invisible opacity-0"
        }`}
        onClick={closeMobileMenu}
      />

      <div
        className={`fixed right-0 top-0 z-[90] h-full w-full max-w-[380px] overflow-y-auto bg-[#FCFAF7] shadow-2xl transition-transform duration-300 xl:hidden ${
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
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#EBE1D5] bg-white text-[#4A2411] shadow-sm transition-transform hover:rotate-90 hover:bg-[#F6EDE4]"
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
                  : "border border-[#EBE1D5] bg-white text-[#4A2411] shadow-sm hover:bg-[#F6EDE4]"
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
                  : "border border-[#EBE1D5] bg-white text-[#4A2411] shadow-sm hover:bg-[#F6EDE4]"
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

            <div
              className={`overflow-hidden transition-all duration-300 ${
                mobileMenuOpen
                  ? "max-h-[2000px] opacity-100"
                  : "max-h-0 opacity-0"
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
                  <div
                    key={category.slug}
                    className="border-t border-[#EBE1D5] pt-3 first:border-0 first:pt-0"
                  >
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
                          className="rounded-full border border-[#EBE1D5] bg-[#F6EDE4] px-4 py-2 text-[13px] font-medium text-[#5C3218] transition-colors hover:bg-[#C27E48] hover:text-white"
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
                    : "border border-[#EBE1D5] bg-white text-[#4A2411] shadow-sm hover:bg-[#F6EDE4]"
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