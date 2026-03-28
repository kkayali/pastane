"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import ScriptText from "@/components/ScriptText";
import { ArrowRight } from "lucide-react";
import { menuCategories } from "@/data/menu";

const categoriesWithImages = menuCategories.filter(
  (category) =>
    !!category.coverImage ||
    category.subcategories.some((sub) => sub.images.length > 0)
);

const categoriesWithoutImages = menuCategories.filter(
  (category) =>
    !category.coverImage &&
    !category.subcategories.some((sub) => sub.images.length > 0)
);

// Framer Motion için Type-Safe Varyantlar
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function MenuPage() {
  return (
    <main className="overflow-hidden bg-[#FCFAF7] pb-24 sm:pb-32">
      {/* ÜST BÖLÜM (HERO) */}
      <section className="relative pt-16 sm:pt-24 lg:pt-32">
        <div className="pointer-events-none absolute left-[-10%] top-[-5%] h-[500px] w-[500px] rounded-full bg-[#F5EBE1] blur-[120px]" />
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mx-auto max-w-4xl text-center"
          >
            <div className="inline-flex items-center gap-3">
              <span className="h-px w-6 bg-[var(--primary)] opacity-50" />
              <p className="text-[12px] font-bold uppercase tracking-[0.3em] text-[var(--text-muted)]">
                Menümüz
              </p>
              <span className="h-px w-6 bg-[var(--primary)] opacity-50" />
            </div>

            <div className="mt-8">
              <ScriptText className="text-[2.2rem] text-[var(--primary)] sm:text-[3rem]">
                Geniş ürün yelpazemiz
              </ScriptText>
            </div>

            <h1 className="mt-4 font-title text-[2.8rem] leading-[1.05] tracking-[-0.02em] text-[var(--primary-dark)] text-balance sm:text-[4rem] lg:text-[4.6rem]">
              Sarılar Unlu Mamüller Ürün Kategorileri
            </h1>

            <p className="mx-auto mt-8 max-w-[65ch] text-[16.5px] leading-[1.9] text-[var(--text-soft)] sm:text-[18px]">
              Tatlılardan pastalara, fırın ürünlerinden özel gün siparişlerine kadar uzanan 
              lezzet dünyamızı inceleyin. Görseli hazır olan ürünlerimizi keşfedebilir, 
              yapılanma aşamasındaki kategorilerimizi görüntüleyebilirsiniz.
            </p>
          </motion.div>
        </div>
      </section>

      {/* GÖRSELLİ KATEGORİLER (ÖNE ÇIKANLAR) */}
      {categoriesWithImages.length > 0 && (
        <section className="relative mt-20 sm:mt-32 lg:mt-40">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className="mb-16 sm:mb-20"
            >
              <div className="flex items-center gap-4">
                <h2 className="font-title text-[2.2rem] leading-[1.1] text-[var(--primary-dark)] sm:text-[2.8rem] lg:text-[3.2rem]">
                  Öne Çıkan Lezzetler
                </h2>
                <div className="h-px flex-1 bg-gradient-to-r from-[var(--line-strong)] to-transparent" />
              </div>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-14"
            >
              {categoriesWithImages.map((category) => {
                const preview =
                  category.coverImage ||
                  category.subcategories.find((sub) => sub.images.length > 0)
                    ?.images[0] ||
                  "";

                return (
                  <motion.div variants={itemVariants} key={category.slug}>
                    <Link
                      href={`/menu/${category.slug}`}
                      className="group flex flex-col"
                    >
                      <div className="relative overflow-hidden rounded-[32px] sm:rounded-[40px] shadow-[0_20px_50px_rgba(84,45,20,0.06)] transition-all duration-700 hover:shadow-[0_30px_60px_rgba(84,45,20,0.12)] hover:-translate-y-2">
                        <div className="relative h-[380px] w-full bg-[#F8EEE2] sm:h-[450px]">
                          {preview && (
                            <Image
                              src={preview}
                              alt={category.title}
                              fill
                              sizes="(max-width: 1024px) 100vw, 33vw"
                              className="object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                            />
                          )}
                          {/* Hafif iç gölge ve kararma */}
                          <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary-dark)]/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                        </div>
                      </div>

                      <div className="mt-8 px-4 text-center">
                        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--primary)]">
                          {category.subcategories.length} Alt Kategori
                        </p>
                        <h3 className="mt-2 font-title text-[1.8rem] font-bold text-[var(--primary-dark)] sm:text-[2.2rem] transition-colors group-hover:text-[var(--primary)]">
                          {category.title}
                        </h3>
                        <p className="mt-3 text-[15px] font-medium leading-relaxed text-[var(--text-soft)]">
                          {category.description}
                        </p>
                        <div className="mt-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--primary)]/10 text-[var(--primary)] transition-transform duration-500 group-hover:bg-[var(--primary)] group-hover:text-white">
                          <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>
      )}

      {/* YAKINDA EKLENECEK KATEGORİLER (Sert kutulardan kurtarıldı) */}
      {categoriesWithoutImages.length > 0 && (
        <section className="relative mt-24 sm:mt-32 lg:mt-40">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className="rounded-[40px] bg-[#FDF8F3] px-8 py-16 sm:rounded-[60px] sm:px-16 sm:py-24 border border-[rgba(133,80,44,0.06)]"
            >
              <div className="mx-auto max-w-3xl text-center">
                <ScriptText className="text-[2rem] text-[var(--primary)] opacity-90 sm:text-[2.6rem]">
                  Çok Yakında
                </ScriptText>
                <h2 className="mt-3 font-title text-[2.2rem] leading-[1.1] text-[var(--primary-dark)] sm:text-[3rem]">
                  Genişleyen Lezzet Ağımız
                </h2>
                <p className="mt-6 text-[16px] leading-[1.9] text-[var(--text-soft)] sm:text-[17px]">
                  Aşağıdaki kategorilerimizin ürün yapıları hazırlandı. Çok yakında
                  tüm görsel içerikleri ve detaylarıyla bu alanda yerlerini alacaklar.
                </p>
              </div>

              <div className="mx-auto mt-16 grid max-w-5xl gap-6 sm:grid-cols-2">
                {categoriesWithoutImages.map((category) => (
                  <Link
                    key={category.slug}
                    href={`/menu/${category.slug}`}
                    className="group flex flex-col justify-center rounded-[24px] border border-[var(--line)] bg-white px-8 py-8 shadow-sm transition-all hover:-translate-y-1 hover:border-[var(--primary)]/30 hover:shadow-md"
                  >
                    <h3 className="font-title text-[1.6rem] font-bold text-[var(--primary-dark)] transition-colors group-hover:text-[var(--primary)]">
                      {category.title}
                    </h3>
                    <p className="mt-3 text-[14.5px] font-medium leading-relaxed text-[var(--text-soft)]">
                      {category.description}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {category.subcategories.slice(0, 3).map((sub) => (
                        <span
                          key={sub.slug}
                          className="rounded-full bg-[#F5EBE1] px-4 py-1.5 text-[13px] font-semibold text-[var(--primary-dark)]/80"
                        >
                          {sub.title}
                        </span>
                      ))}
                      {category.subcategories.length > 3 && (
                        <span className="rounded-full bg-[#F5EBE1] px-4 py-1.5 text-[13px] font-semibold text-[var(--primary-dark)]/80">
                          +{category.subcategories.length - 3} daha
                        </span>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
              
              <div className="mt-16 text-center">
                <Link href="/tum-urunler" className="btn-primary min-h-[52px] px-10">
                  Tüm Ürünleri İncele
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      )}
    </main>
  );
}