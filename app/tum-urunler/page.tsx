"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import ScriptText from "@/components/ScriptText";
import { ArrowRight } from "lucide-react";
import { allSubcategories } from "@/data/menu";

const filledItems = allSubcategories.filter(
  (item) => item.subcategoryImages.length > 0 && item.previewImage
);

const emptyItems = allSubcategories.filter(
  (item) => item.subcategoryImages.length === 0
);

// Framer Motion TypeScript hatasını kesin çözen yapı
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0, 
    // ease: "easeOut" stringi yerine array kullanıldı (Type error çözümü)
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } 
  },
};

export default function TumUrunlerPage() {
  return (
    <main className="overflow-hidden bg-[#FCFAF7] pb-24 sm:pb-32">
      
      {/* ÜST BÖLÜM (HERO) - O kaba metinler kaldırıldı, elit giriş yapıldı */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative pt-16 sm:pt-24 lg:pt-32"
      >
        <div className="pointer-events-none absolute left-[-10%] top-[-5%] h-[500px] w-[500px] rounded-full bg-[#F5EBE1] blur-[120px]" />
        
       
          <div className="mx-auto max-w-4xl text-center">
            
            <div className="inline-flex items-center gap-3">
              <span className="h-px w-6 bg-[var(--primary)] opacity-50" />
              <p className="text-[12px] font-bold uppercase tracking-[0.3em] text-[var(--text-muted)]">
                Menü
              </p>
              <span className="h-px w-6 bg-[var(--primary)] opacity-50" />
            </div>

        
        </div>
      </motion.section>

      {/* HAZIR İÇERİKLER */}
      {filledItems.length > 0 && (
        <section className="relative mt-20 sm:mt-32 lg:mt-40">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className="mb-16 sm:mb-20"
            >
             
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-14"
            >
              {filledItems.map((item) => (
                <motion.div variants={itemVariants} key={`${item.categorySlug}-${item.subcategorySlug}`}>
                  <Link
                    href={`/menu/${item.categorySlug}/${item.subcategorySlug}`}
                    className="group flex flex-col"
                  >
                    <div className="relative overflow-hidden rounded-[32px] sm:rounded-[40px] shadow-[0_20px_50px_rgba(84,45,20,0.06)] transition-all duration-700 hover:shadow-[0_30px_60px_rgba(84,45,20,0.12)] hover:-translate-y-2">
                      <div className="relative h-[380px] w-full bg-[#F8EEE2] sm:h-[450px]">
                        {item.previewImage && (
                          <Image
                            src={item.previewImage}
                            alt={item.subcategoryTitle}
                            fill
                            sizes="(max-width: 1024px) 100vw, 33vw"
                            className="object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                          />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary-dark)]/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                      </div>
                    </div>

                    <div className="mt-8 px-4 text-center">
                      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--primary)]">
                        {item.categoryTitle}
                      </p>
                      <h3 className="mt-2 font-title text-[1.8rem] font-bold text-[var(--primary-dark)] sm:text-[2.2rem] transition-colors group-hover:text-[var(--primary)]">
                        {item.subcategoryTitle}
                      </h3>
                      <p className="mt-3 text-[15px] font-medium leading-relaxed text-[var(--text-soft)]">
                        {item.subcategoryDescription}
                      </p>

                      <div className="mt-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--primary)]/10 text-[var(--primary)] transition-transform duration-500 group-hover:bg-[var(--primary)] group-hover:text-white">
                        <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* YAKINDA EKLENECEKLER */}
      {emptyItems.length > 0 && (
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
                  Yakında Eklenecek
                </ScriptText>
                <h2 className="mt-3 font-title text-[2.2rem] leading-[1.1] text-[var(--primary-dark)] sm:text-[3rem]">
                  Henüz görseli bulunmayan ürünler
                </h2>
                <p className="mt-6 text-[16px] leading-[1.9] text-[var(--text-soft)] sm:text-[17px]">
                  Bu bölümlerin kategori yapısı hazırdır. Görseller stüdyodan geldiğinde
                  otomatik olarak üstteki görselli listeye dahil olacaklardır.
                </p>
              </div>

              <div className="mx-auto mt-16 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {emptyItems.map((item) => (
                  <Link
                    key={`${item.categorySlug}-${item.subcategorySlug}`}
                    href={`/menu/${item.categorySlug}/${item.subcategorySlug}`}
                    className="group flex flex-col justify-center rounded-[24px] border border-[var(--line)] bg-white px-8 py-8 shadow-sm transition-all hover:-translate-y-1 hover:border-[var(--primary)]/30 hover:shadow-md"
                  >
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)]">
                      {item.categoryTitle}
                    </p>
                    <h3 className="mt-2 font-title text-[1.5rem] font-bold text-[var(--primary-dark)] transition-colors group-hover:text-[var(--primary)]">
                      {item.subcategoryTitle}
                    </h3>
                    <p className="mt-3 text-[14px] font-medium leading-relaxed text-[var(--text-soft)]">
                      {item.subcategoryDescription}
                    </p>
                  </Link>
                ))}
              </div>

            </motion.div>
          </div>
        </section>
      )}

      {/* BOTTOM YUMUŞAK YÖNLENDİRME */}
      <div className="container-custom mt-16 text-center sm:mt-24">
        <Link href="/menu" className="btn-primary min-h-[52px] px-10">
          Menüye Geri Dön
        </Link>
      </div>
    </main>
  );
}