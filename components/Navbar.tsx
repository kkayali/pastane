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
    const onScroll = () => setIsScrolled(window.scrollY > 20);
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

  // ELİT TASARIM: Sabit genişlik, geniş padding ve premium renkler
// ELİT TASARIM: Sabit genişlik, geniş padding ve premium renkler
  // DİKKAT: text-white sınıfını direkt navBase'e ekledik ki her zaman beyaz başlasın.
 // DİKKAT: text-white yerine !text-white kullanıyoruz. (Ünlem işareti önemli)
  const navBase =
    "relative whitespace-nowrap inline-flex items-center justify-center h-[52px] min-w-[130px] xl:min-w-[140px] rounded-full px-6 text-[15px] font-semibold tracking-wide !text-white transition-all duration-300";
  
  const navState = (active: boolean) =>
    active
      ? "bg-[#D08242] shadow-[0_8px_24px_rgba(208,130,66,0.35)]"
      : "bg-transparent hover:bg-white/10";
  return (
    <>
      {/* HEADER: Koyu kahve, kaydırınca cam efekti */}
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-500 ${
          isScrolled 
            ? "bg-[#241005]/95 backdrop-blur-md shadow-[0_10px_40px_rgba(0,0,0,0.3)] py-2" 
            : "bg-[#241005] py-4"
        }`}
      >
        <div className="mx-auto flex w-full max-w-[1760px] items-center justify-between px-4 sm:px-6 lg:px-10">
          
          {/* LOGO */}
          <Link
            href="/"
            onClick={closeAllMenus}
            className="z-10 flex shrink-0 items-center"
            aria-label={siteConfig.name}
          >
            <div
              className={`transition-transform duration-500 origin-left ${
                isScrolled ? "scale-90" : "scale-100"
              }`}
            >
              <Image
                src="/logo/logo.png"
                alt={siteConfig.name}
                width={190}
                height={62}
                priority
                className="h-auto w-[140px] object-contain sm:w-[160px] lg:w-[180px]"
              />
            </div>
          </Link>

          {/* DESKTOP NAVİGASYON */}
          <nav className="hidden items-center ml-auto xl:flex gap-3 2xl:gap-5">
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
                )} gap-2`}
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

              {/* MEGA MENÜ DROPDOWN */}
              <div
                className={`absolute right-0 top-[calc(100%+12px)] z-[100] w-[800px] max-w-[calc(100vw-40px)] origin-top-right transition-all duration-300 before:absolute before:-top-4 before:h-4 before:w-full ${
                  menuOpen
                    ? "pointer-events-auto visible translate-y-0 opacity-100"
                    : "pointer-events-none invisible translate-y-4 opacity-0"
                }`}
              >
                <div className="overflow-hidden rounded-2xl border border-[#E9DED1] bg-[#FDFBF7] shadow-[0_40px_80px_rgba(0,0,0,0.2)]">
                  <div className="p-10">
                    <div className="mb-8 flex items-center justify-between border-b border-[#E9DED1] pb-5">
                      <p className="font-serif text-[26px] font-bold text-[#3A1B0B]">
                        Ürün Menüsü
                      </p>
                      <Link
                        href="/tum-urunler"
                        onClick={closeAllMenus}
                        className="group inline-flex items-center gap-2 rounded-full bg-[#EFE6DB] px-5 py-2.5 text-[14px] font-bold text-[#A25F2D] transition-colors hover:bg-[#D08242] hover:text-white"
                      >
                        Tüm Ürünleri Gör
                        <ArrowUpRight
                          size={18}
                          className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </Link>
                    </div>

                    <div className="grid grid-cols-2 gap-x-12 gap-y-8 sm:grid-cols-3">
                      {menuCategories.map((category) => (
                        <div key={category.slug} className="group">
                          <Link
                            href={`/menu/${category.slug}`}
                            onClick={closeAllMenus}
                            className="block font-serif text-[19px] font-bold leading-tight text-[#3A1B0B] transition-colors group-hover:text-[#D08242]"
                          >
                            {category.title}
                          </Link>

                          <ul className="mt-4 flex flex-col gap-2.5">
                            {category.subcategories.map((sub) => (
                              <li key={sub.slug}>
                                <Link
                                  href={`/menu/${category.slug}/${sub.slug}`}
                                  onClick={closeAllMenus}
                                  className="flex items-center text-[15px] font-medium text-[#735540] transition-colors hover:text-[#D08242]"
                                >
                                  <span className="h-1.5 w-1.5 rounded-full bg-[#D08242]/40 mr-2.5 opacity-0 transition-opacity group-hover:opacity-100" />
                                  {sub.title}
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

            {/* HEMEN ARA BUTONU: Dikkat çekici, elit beyaz/kahve kontrastı */}
            <a
              href={`tel:${siteConfig.phone}`}
              className="ml-6 whitespace-nowrap inline-flex items-center justify-center h-[52px] rounded-full bg-white px-8 text-[15px] font-bold text-[#241005] shadow-[0_4px_20px_rgba(255,255,255,0.15)] transition-all duration-300 hover:bg-[#F3E6D8] hover:scale-105"
            >
              <Phone size={18} className="mr-2.5" />
              Hemen Ara
            </a>
          </nav>

          {/* MOBİL BUTONLARI */}
          <div className="flex items-center gap-4 xl:hidden">
            <a
              href={`tel:${siteConfig.phone}`}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#241005] shadow-lg"
              aria-label="Hemen Ara"
            >
              <Phone size={20} />
            </a>

            <button
              type="button"
              onClick={openMobileMenu}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
              aria-label="Menüyü Aç"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* MOBİL MENÜ OVERLAY */}
      <div
        className={`fixed inset-0 z-[80] bg-[#110702]/80 backdrop-blur-md transition-opacity duration-300 xl:hidden ${
          mobileOpen
            ? "pointer-events-auto visible opacity-100"
            : "pointer-events-none invisible opacity-0"
        }`}
        onClick={closeMobileMenu}
      />

      {/* MOBİL MENÜ PANE: Bembeyaz, ferah ve modern */}
      <div
        className={`fixed right-0 top-0 z-[90] h-full w-full max-w-[360px] overflow-y-auto bg-white shadow-2xl transition-transform duration-500 ease-in-out xl:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-gray-100 bg-white/95 px-8 py-6 backdrop-blur-md">
          <p className="font-serif text-[24px] font-bold text-[#241005]">
            Menü
          </p>
          <button
            type="button"
            onClick={closeMobileMenu}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-50 text-[#241005] transition-transform hover:bg-gray-100 hover:rotate-90"
            aria-label="Kapat"
          >
            <X size={24} />
          </button>
        </div>

        <div className="px-8 py-6">
          <div className="flex flex-col">
            <Link
              href="/"
              onClick={closeAllMenus}
              className={`flex items-center justify-between border-b border-gray-100 py-5 text-[17px] font-bold transition-colors ${
                isActive(pathname, "/") ? "text-[#D08242]" : "text-[#3A1B0B]"
              }`}
            >
              Ana Sayfa
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className={`flex w-full items-center justify-between border-b border-gray-100 py-5 text-left text-[17px] font-bold transition-colors ${
                menuActive || mobileMenuOpen ? "text-[#D08242]" : "text-[#3A1B0B]"
              }`}
            >
              Ürün Menüsü
              <ChevronDown
                size={20}
                className={`transition-transform duration-300 ${
                  mobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* AKORDEON: Temiz, çizgisiz ve geniş boşluklu */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                mobileMenuOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="bg-gray-50/50 rounded-2xl p-5 mt-4 mb-2">
                <Link
                  href="/tum-urunler"
                  onClick={closeAllMenus}
                  className="mb-6 flex min-h-[50px] items-center justify-center rounded-xl bg-[#241005] px-4 text-[15px] font-bold text-white shadow-md"
                >
                  Tüm Ürünleri Gör
                </Link>

                <div className="space-y-6">
                  {menuCategories.map((category) => (
                    <div key={category.slug}>
                      <Link
                        href={`/menu/${category.slug}`}
                        onClick={closeAllMenus}
                        className="block font-serif text-[18px] font-bold text-[#3A1B0B]"
                      >
                        {category.title}
                      </Link>
                      <ul className="mt-3 flex flex-col gap-3 border-l-2 border-gray-200 pl-4">
                        {category.subcategories.map((sub) => (
                          <li key={sub.slug}>
                            <Link
                              href={`/menu/${category.slug}/${sub.slug}`}
                              onClick={closeAllMenus}
                              className="block text-[15px] font-medium text-gray-500 transition-colors hover:text-[#D08242]"
                            >
                              {sub.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {mainLinks.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeAllMenus}
                className={`flex items-center justify-between border-b border-gray-100 py-5 text-[17px] font-bold transition-colors ${
                  isActive(pathname, link.href) ? "text-[#D08242]" : "text-[#3A1B0B]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="mt-12">
            <p className="mb-5 text-[11px] font-extrabold uppercase tracking-[0.2em] text-gray-400">
              Hızlı İletişim
            </p>
            <div className="flex flex-col gap-3.5">
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex min-h-[54px] w-full items-center justify-center gap-3 rounded-2xl bg-[#241005] px-4 text-[16px] font-bold text-white shadow-lg transition-transform hover:scale-[1.02]"
              >
                <Phone size={20} />
                Hemen Ara
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="flex min-h-[54px] w-full items-center justify-center gap-3 rounded-2xl bg-[#25D366] px-4 text-[16px] font-bold text-white shadow-lg transition-transform hover:scale-[1.02]"
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