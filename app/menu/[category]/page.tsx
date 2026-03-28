import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ScriptText from "@/components/ScriptText";
import { ArrowRight } from "lucide-react";
import { findCategoryBySlug, menuCategories } from "@/data/menu";

type PageProps = {
  params: Promise<{
    category: string;
  }>;
};

export async function generateStaticParams() {
  return menuCategories.map((category) => ({
    category: category.slug,
  }));
}

export default async function CategoryPage({ params }: PageProps) {
  const { category: categorySlug } = await params;
  const category = findCategoryBySlug(categorySlug);

  if (!category) notFound();

  const filledSubs = category.subcategories.filter((sub) => sub.images.length > 0);
  const emptySubs = category.subcategories.filter((sub) => sub.images.length === 0);

  const heroImage = category.coverImage || filledSubs[0]?.images[0] || "";

  return (
    <main className="overflow-hidden bg-[#FCFAF7] pb-24 sm:pb-32">
      {/* ÜST BÖLÜM (HERO KAPAĞI) */}
      <section className="relative pt-8 sm:pt-16 lg:pt-20">
        <div className="container-custom">
          <div className="relative overflow-hidden rounded-[32px] sm:rounded-[48px] bg-[#3D1C08] shadow-[0_30px_90px_rgba(84,45,20,0.15)]">
            
            {heroImage && (
              <div className="absolute inset-0 z-0">
                <Image
                  src={heroImage}
                  alt={category.title}
                  fill
                  priority
                  className="object-cover opacity-60 mix-blend-overlay"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3D1C08] via-[#3D1C08]/80 to-transparent" />
              </div>
            )}

            <div className="relative z-10 flex min-h-[400px] flex-col items-center justify-center px-6 py-20 text-center sm:min-h-[500px] sm:px-12 lg:min-h-[600px]">
              <div className="inline-flex items-center gap-3">
                <span className="h-px w-8 bg-[#C27E48]" />
                <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#C27E48]">
                  Kategori
                </p>
                <span className="h-px w-8 bg-[#C27E48]" />
              </div>

              <div className="mt-6">
                <ScriptText className="text-[2.6rem] text-[#FDF3E7] drop-shadow-lg sm:text-[3.4rem]">
                  {category.title}
                </ScriptText>
              </div>

              <h1 className="mt-4 max-w-[15ch] font-title text-[3.2rem] font-bold leading-[1.05] tracking-[-0.02em] text-white text-balance sm:text-[4.5rem] lg:text-[5.5rem]">
                {category.title} Dünyası
              </h1>

              <p className="mt-8 max-w-[50ch] text-[16px] font-medium leading-[1.9] text-white/80 sm:text-[18px]">
                {category.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ALT KATEGORİLER (GÖRSELLİ) */}
      {filledSubs.length > 0 && (
        <section className="relative mt-24 sm:mt-32 lg:mt-40">
          <div className="container-custom">
            <div className="mb-16 flex items-center gap-4 sm:mb-20">
              <h2 className="font-title text-[2.2rem] leading-[1.1] text-[var(--primary-dark)] sm:text-[2.8rem] lg:text-[3.2rem]">
                Lezzet Galerisi
              </h2>
              <div className="h-px flex-1 bg-gradient-to-r from-[var(--line-strong)] to-transparent" />
            </div>

            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-14">
              {filledSubs.map((sub) => (
                <Link
                  key={sub.slug}
                  href={`/menu/${category.slug}/${sub.slug}`}
                  className="group flex flex-col"
                >
                  <div className="relative overflow-hidden rounded-[32px] shadow-[0_20px_50px_rgba(84,45,20,0.06)] transition-all duration-700 hover:shadow-[0_30px_60px_rgba(84,45,20,0.12)] hover:-translate-y-2 sm:rounded-[40px]">
                    <div className="relative h-[380px] w-full bg-[#F8EEE2] sm:h-[450px]">
                      <Image
                        src={sub.images[0]}
                        alt={sub.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        className="object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary-dark)]/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    </div>
                  </div>

                  <div className="mt-8 px-4 text-center">
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--primary)]">
                      {sub.images.length} Görsel
                    </p>
                    <h3 className="mt-2 font-title text-[1.8rem] font-bold text-[var(--primary-dark)] transition-colors group-hover:text-[var(--primary)] sm:text-[2.2rem]">
                      {sub.title}
                    </h3>
                    <p className="mt-3 text-[15px] font-medium leading-relaxed text-[var(--text-soft)] line-clamp-2">
                      {sub.description}
                    </p>
                    <div className="mt-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--primary)]/10 text-[var(--primary)] transition-transform duration-500 group-hover:bg-[var(--primary)] group-hover:text-white">
                      <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ALT KATEGORİLER (GÖRSELSİZ YAKINDA EKLENECEKLER) */}
      {emptySubs.length > 0 && (
        <section className="relative mt-24 sm:mt-32 lg:mt-40">
          <div className="container-custom">
            <div className="rounded-[40px] bg-[#FDF8F3] px-8 py-16 border border-[rgba(133,80,44,0.06)] sm:rounded-[60px] sm:px-16 sm:py-24">
              <div className="mx-auto max-w-3xl text-center">
                <ScriptText className="text-[2rem] text-[var(--primary)] opacity-90 sm:text-[2.6rem]">
                  Hazırlık Aşamasında
                </ScriptText>
                <h2 className="mt-3 font-title text-[2.2rem] leading-[1.1] text-[var(--primary-dark)] sm:text-[3rem]">
                  Yakında Eklenecek Bölümler
                </h2>
                <p className="mt-6 text-[16px] leading-[1.9] text-[var(--text-soft)] sm:text-[17px]">
                  Bu alt kategorilerin altyapısı hazırdır. En kısa sürede en güzel ürün görsellerimizle bu alanı zenginleştireceğiz.
                </p>
              </div>

              <div className="mx-auto mt-16 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {emptySubs.map((sub) => (
                  <div key={sub.slug} className="flex flex-col justify-center rounded-[24px] border border-[var(--line)] bg-white px-8 py-8 shadow-sm">
                    <h3 className="font-title text-[1.6rem] font-bold text-[var(--primary-dark)]">
                      {sub.title}
                    </h3>
                    <p className="mt-3 text-[14.5px] font-medium leading-relaxed text-[var(--text-soft)]">
                      {sub.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* YUMUŞAK YÖNLENDİRME (BUTON YIĞILMASI GİDERİLDİ) */}
      <div className="mt-20 flex justify-center pb-10 sm:mt-28">
        <Link href="/tum-urunler" className="btn-primary min-h-[52px] px-10">
          Tüm Ürünleri Listele
        </Link>
      </div>
    </main>
  );
}