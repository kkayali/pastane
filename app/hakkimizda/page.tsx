"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Transition } from "framer-motion";
import ScriptText from "@/components/ScriptText";
import {
  ArrowRight,
  Sparkles,
  Clock3,
  CakeSlice,
  HeartHandshake,
} from "lucide-react";

const transitionConfig: Transition = {
  duration: 0.8,
  ease: [0.22, 1, 0.36, 1],
};

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: transitionConfig,
  viewport: { once: true, amount: 0.2 },
};

const whyItems = [
  {
    title: "1970’den Beri Güven",
    text: "Yıllara yayılan üretim disipliniyle Akyazı’da güçlü bir güven bağı oluşturuyoruz.",
    icon: Clock3,
  },
  {
    title: "Günlük Taze Hazırlık",
    text: "Ürünlerimizi her sabah günün ilk ışıklarıyla taze taze hazırlıyoruz.",
    icon: Sparkles,
  },
  {
    title: "Kendi İmalatımız",
    text: "Dışarıdan ürün almıyor, her lezzeti kendi mutfağımızda hazırlıyoruz.",
    icon: CakeSlice,
  },
  {
    title: "Samimi Hizmet",
    text: "Müşterilerimize sıcak, ilgili ve samimi bir aile ortamı sunuyoruz.",
    icon: HeartHandshake,
  },
];

const stats = [
  { label: "TECRÜBE", value: "50+ Yıl" },
  { label: "ÜRETİM", value: "Günlük" },
  { label: "MEMNUNİYET", value: "%100" },
];

export default function HakkimizdaPage() {
  return (
    <main className="overflow-hidden bg-[#FCFAF7] text-stone-900">
      {/* HERO */}
      <section className="relative pt-24 pb-24 lg:pt-34 lg:pb-32 xl:pt-40 xl:pb-36">
        <div className="pointer-events-none absolute -left-20 top-0 h-[500px] w-[500px] rounded-full bg-orange-100/40 blur-[120px]" />
        <div className="pointer-events-none absolute right-[-80px] top-10 h-[320px] w-[320px] rounded-full bg-orange-200/20 blur-[110px]" />

        <div className="container-custom px-6 lg:px-12">
          <div className="grid items-center gap-14 lg:grid-cols-[0.94fr_1.06fr] xl:gap-20">
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={transitionConfig}
              className="max-w-[620px]"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-100 bg-orange-50 px-5 py-2">
                <span className="h-2 w-2 rounded-full bg-orange-700" />
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-orange-900">
                  Sarılar Unlu Mamüller
                </p>
              </div>

              <div className="mt-6">
                <ScriptText className="text-xl italic text-orange-800 lg:text-3xl">
                  Yarım asırlık sıcak bir gelenek
                </ScriptText>
              </div>

              <h1 className="mt-5 max-w-[11ch] font-title text-[3rem] leading-[1.04] tracking-[-0.04em] sm:text-[4rem] lg:text-[4.8rem] xl:text-[5.2rem]">
                1970’ten Bugüne Lezzet Yolculuğu
              </h1>

              <p className="mt-6 max-w-[560px] text-[17px] leading-[1.9] text-stone-600">
                Sakarya Akyazı’da yarım asırdır güvenle tercih edilen Sarılar
                Unlu Mamüller; günlük üretim anlayışıyla nesiller boyu süren bir
                lezzet geleneğidir.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/menu"
                  className="inline-flex h-14 items-center justify-center rounded-full bg-orange-800 px-8 text-[15px] font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-orange-900"
                >
                  Menüyü Keşfet
                </Link>

                <Link
                  href="/iletisim"
                  className="inline-flex h-14 items-center gap-2 rounded-full border border-stone-300 bg-white px-8 text-[15px] font-semibold text-stone-900 transition duration-300 hover:bg-stone-900 hover:text-white"
                >
                  İletişim
                  <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>

            {/* RIGHT IMAGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={transitionConfig}
              className="relative mx-auto w-full max-w-[860px]"
            >
              <div className="relative overflow-hidden rounded-[36px] border-[10px] border-white bg-white shadow-[0_30px_70px_rgba(62,31,16,0.14)]">
                {/* 1536 / 1400 ratio */}
                <div className="relative aspect-[1536/1400] w-full">
                  <Image
                    src="/images/storefront.jpg"
                    alt="Sarılar Mağaza"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 52vw"
                    className="object-cover brightness-[1.03]"
                  />
                  <div className="absolute inset-0 bg-black/[0.04]" />
                </div>
              </div>

              <div className="absolute bottom-5 left-5 max-w-[310px] rounded-[22px] border border-stone-200 bg-white/95 px-5 py-4 shadow-xl backdrop-blur lg:-left-8 lg:bottom-7">
                <p className="text-sm italic leading-[1.75] text-stone-700">
                  “Her sabah yükselen o taze koku, 50 yıllık emeğimizin en güzel
                  imzasıdır.”
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="bg-white py-22 lg:py-28">
        <div className="container-custom px-6 lg:px-12">
          <motion.div {...fadeUp} className="mx-auto max-w-4xl text-center">
            <h2 className="font-title text-[2.5rem] leading-[1.08] tracking-[-0.03em] sm:text-[3.2rem] lg:text-[3.8rem]">
              Geçmişin ustalığı, bugünün özeni
            </h2>
          </motion.div>

          <div className="mt-14 grid items-start gap-10 md:grid-cols-2 lg:gap-14">
            <motion.p
              {...fadeUp}
              className="text-[17px] leading-[1.9] text-stone-600"
            >
              1970’den bu yana değişmeyen tek şey, kaliteye olan bağlılığımız.
              Geleneksel tariflerimizi modern standartlarla buluşturarak
              Akyazı’nın damak tadını koruyoruz.
            </motion.p>

            <motion.p
              {...fadeUp}
              className="text-[17px] leading-[1.9] text-stone-600"
            >
              Tezgâhımızdaki her ürün kendi imalatımızdır. Doğal malzeme ve
              günlük hazırlık prensibinden asla ödün vermiyor, her gün aynı
              özeni sürdürmeye devam ediyoruz.
            </motion.p>
          </div>

          {/* STATS */}
          <div className="mt-18 grid gap-6 sm:grid-cols-3">
            {stats.map((item, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                className="rounded-[22px] border border-stone-200 bg-[#FCFAF7] p-7 text-center shadow-[0_8px_24px_rgba(0,0,0,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_28px_rgba(0,0,0,0.08)]"
              >
                <p className="text-xs font-bold tracking-[0.22em] text-orange-700">
                  {item.label}
                </p>
                <p className="mt-3 font-title text-[2.2rem] leading-none text-stone-900 lg:text-[2.5rem]">
                  {item.value}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="bg-[#FCFAF7] py-22 lg:py-28">
        <div className="container-custom px-6 lg:px-12">
          <div className="mb-14 text-center">
            <h2 className="font-title text-[2.5rem] leading-[1.08] tracking-[-0.03em] sm:text-[3.2rem]">
              Neden Biz?
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {whyItems.map((item, i) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={i}
                  {...fadeUp}
                  className="rounded-[24px] border border-stone-200 bg-white p-6 shadow-[0_8px_24px_rgba(0,0,0,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_30px_rgba(0,0,0,0.08)]"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-orange-800">
                    <Icon size={26} />
                  </div>

                  <h3 className="text-lg font-semibold text-stone-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-[15px] leading-[1.8] text-stone-600">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-22">
        <div className="container-custom px-6 lg:px-12">
          <motion.div
            {...fadeUp}
            className="rounded-[40px] bg-[linear-gradient(135deg,#4B220F_0%,#6A3214_100%)] px-8 py-10 text-white shadow-[0_28px_60px_rgba(62,31,16,0.22)] sm:px-10 sm:py-12 lg:px-14 lg:py-16"
          >
            <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center lg:gap-12">
              <div className="max-w-[640px]">
                <h2 className="font-title text-[2.2rem] leading-[1.08] tracking-[-0.03em] sm:text-[3rem] lg:text-[3.4rem]">
                  Sıcak bir lezzet durağına davetlisiniz
                </h2>
                <p className="mt-4 max-w-[520px] text-[16px] leading-[1.85] text-stone-200">
                  Günlük hazırlanan ürünlerimizi görmek ve özel siparişler için
                  bizimle iletişime geçmek üzere sizi bekliyoruz.
                </p>
              </div>

              <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row lg:flex-col">
                <Link
                  href="/menu"
                  className="inline-flex min-h-[58px] min-w-[210px] items-center justify-center rounded-full border border-[#EED8C3] bg-[#F4E7D8] px-8 text-[15px] font-semibold text-[#4B220F] shadow-[0_10px_24px_rgba(0,0,0,0.12)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#F0DDC7]"
                >
                  Ürünleri İncele
                </Link>

                <Link
                  href="/iletisim"
                  className="inline-flex min-h-[58px] min-w-[210px] items-center justify-center gap-2 rounded-full border border-white/35 bg-white/10 px-8 text-[15px] font-semibold text-white backdrop-blur transition duration-300 hover:bg-white/16"
                >
                  Bize Ulaş
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}