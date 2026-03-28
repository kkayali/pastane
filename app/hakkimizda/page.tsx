"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import ScriptText from "@/components/ScriptText";
import { ArrowRight } from "lucide-react";

export default function HakkimizdaPage() {
  return (
    <main className="overflow-hidden bg-[#FCFAF7] pb-20 sm:pb-32">
      {/* ÜST BÖLÜM (HERO) */}
      <section className="relative pt-12 sm:pt-20 lg:pt-24">
        <div className="pointer-events-none absolute left-[-10%] top-0 h-[500px] w-[500px] rounded-full bg-[rgba(255,236,214,0.4)] blur-[120px]" />
        <div className="pointer-events-none absolute right-[-5%] top-[20%] h-[400px] w-[400px] rounded-full bg-[rgba(133,80,44,0.06)] blur-[100px]" />

        <div className="container-custom relative">
          <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-20">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative z-10"
            >
              <div className="inline-flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)] opacity-60" />
                <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-[var(--text-muted)]">
                  Sarılar Unlu Mamüller
                </p>
              </div>

              <div className="mt-8">
                <ScriptText className="text-[2rem] text-[var(--primary)] opacity-90 sm:text-[2.6rem]">
                  Köklü bir lezzet hikâyesi
                </ScriptText>
              </div>

              <h1 className="mt-4 font-title text-[2.8rem] leading-[1.05] tracking-[-0.02em] text-[var(--primary-dark)] text-balance sm:text-[3.8rem] lg:text-[4.5rem]">
                1980’den bugüne uzanan lezzet yolculuğu
              </h1>

              <p className="mt-8 max-w-[36rem] text-[15.5px] leading-[1.8] text-[var(--text-soft)] sm:text-[17px]">
                Sakarya Akyazı’da yıllardır güvenle tercih edilen Sarılar Unlu
                Mamüller; günlük üretim anlayışı, kendi imalatı ve özenli sunum
                çizgisiyle sıcak, samimi ve kaliteli bir pastane kültürü sunar.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link href="/menu" className="btn-primary min-h-[52px] px-9">
                  Menüyü İncele
                </Link>
                <Link
                  href="/iletisim"
                  className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full px-8 text-[15px] font-medium text-[var(--primary-dark)] transition-colors hover:bg-[var(--primary)]/5"
                >
                  İletişime Geç
                  <ArrowRight size={16} className="opacity-70" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
              className="relative w-full"
            >
              <div className="relative w-full overflow-hidden rounded-[32px] sm:rounded-[48px] shadow-[0_20px_60px_rgba(84,45,20,0.08)]">
                <div className="relative w-full h-auto aspect-square sm:aspect-[1536/1400]">
                  <Image
                    src="/images/storefront.jpg"
                    alt="Sarılar Unlu Mamüller mağaza görünümü"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-[1.5s] hover:scale-105"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ORTA BÖLÜM (HİKAYEMİZ) - Tamamen Yeniden Düzenlendi */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mt-28 sm:mt-40 lg:mt-48"
      >
        <div className="container-custom">
          {/* Dergi Tarzı Grid Tasarımı */}
          <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-24 xl:gap-32 items-start">
            
            {/* Sol Taraf (Büyük Başlık) */}
            <div className="sticky top-32">
              <div className="inline-flex items-center gap-3">
                <span className="h-px w-6 bg-[var(--primary)] opacity-50" />
                <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-[var(--text-muted)]">
                  Hikâyemiz
                </p>
              </div>
              <h2 className="mt-6 max-w-[12ch] font-title text-[2.6rem] leading-[1.05] tracking-[-0.02em] text-[var(--primary-dark)] text-balance sm:text-[3.6rem] lg:text-[4rem]">
                Geçmişten gelen ustalık, bugünün özeni
              </h2>
            </div>

            {/* Sağ Taraf (Ferah Paragraflar) */}
            <div className="flex flex-col space-y-10 lg:pt-14">
              <p className="text-[16.5px] leading-[1.9] text-[var(--text-soft)] sm:text-[18px]">
                Sarılar Unlu Mamüller’in temelleri 1980 yılında atılmış,
                yıllar içinde edinilen üretim disiplini ve tecrübe bugünkü
                güçlü yapısına dönüşmüştür. İlk günden bu yana değişmeyen
                anlayışımız; kaliteli ürün, düzenli üretim ve güven veren
                hizmet sunmaktır.
              </p>

              <p className="text-[16.5px] leading-[1.9] text-[var(--text-soft)] sm:text-[18px]">
                İşletmemizde satışa sunulan ürünler kendi imalatımızdır.
                Pasta, tatlı, sütlü tatlı ve fırın ürünlerinde günlük tazelik
                anlayışını koruyarak müşterilerimize hem lezzetli hem de
                özenli bir deneyim yaşatmayı hedefliyoruz.
              </p>

              {/* Farklı renk ile vurgu */}
              <div className="rounded-2xl bg-[#FDF8F3] p-6 sm:p-8 border border-[var(--line)]">
                <p className="text-[16.5px] font-medium leading-[1.9] text-[var(--primary-dark)] sm:text-[18px]">
                  Bugün Akyazı’da Sarılar Unlu Mamüller denince; sadece bir
                  pastane değil, yıllardır tercih edilen, samimiyeti ve
                  kalitesiyle güven oluşturan güçlü bir lezzet noktası anlaşılır.
                </p>
              </div>
            </div>

          </div>
        </div>
      </motion.section>

      {/* ALT BÖLÜM (NEDEN SARILAR) */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <div className="container-custom">
          {/* Çerçeveler silindi, devasa padding'ler ile ferahlık sağlandı */}
          <div className="rounded-[40px] bg-[#FDF8F3] px-8 py-16 sm:rounded-[60px] sm:px-16 sm:py-24 lg:px-24">
            <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-24">
              
              <div>
                <div className="mb-6">
                  <ScriptText className="text-[2rem] text-[var(--primary)] opacity-90 sm:text-[2.6rem]">
                    Neden Sarılar?
                  </ScriptText>
                </div>
                <h2 className="font-title text-[2.4rem] leading-[1.1] tracking-[-0.02em] text-[var(--primary-dark)] text-balance sm:text-[3.2rem]">
                  Akyazı’da güven veren güçlü bir lezzet noktası
                </h2>
              </div>

              <div>
                <p className="text-[16.5px] leading-[1.9] text-[var(--text-soft)] sm:text-[18px] max-w-[65ch]">
                  Günlük üretim anlayışımız, kendi imalatımız, yıllara dayanan
                  tecrübemiz ve müşteri memnuniyetine verdiğimiz önem ile
                  müşterilerimizin güvenle tercih ettiği sıcak ve güçlü bir
                  marka olmayı sürdürüyoruz.
                </p>
              </div>

            </div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}