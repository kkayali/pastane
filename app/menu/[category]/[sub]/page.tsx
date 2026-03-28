import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ScriptText from "@/components/ScriptText";
import { ArrowLeft } from "lucide-react";
import { findSubcategoryBySlugs, menuCategories } from "@/data/menu";

type PageProps = {
  params: Promise<{
    category: string;
    sub: string;
  }>;
};

export async function generateStaticParams() {
  return menuCategories.flatMap((category) =>
    category.subcategories.map((sub) => ({
      category: category.slug,
      sub: sub.slug,
    }))
  );
}

export default async function SubcategoryPage({ params }: PageProps) {
  const { category: categorySlug, sub: subSlug } = await params;
  const result = findSubcategoryBySlugs(categorySlug, subSlug);

  if (!result) notFound();

  const { category, subcategory } = result;
  const preview = subcategory.images[0] || category.coverImage || "";

  return (
    <main className="overflow-hidden bg-[#FCFAF7] pb-24 sm:pb-32">
      {/* ÜST BÖLÜM (HERO KAPAĞI) */}
      <section className="relative pt-8 sm:pt-16 lg:pt-20">
        <div className="container-custom">
          {/* Geri Dön Butonu - Minimal ve Şık */}
          <Link
            href={`/menu/${category.slug}`}
            className="mb-6 inline-flex items-center gap-2 text-[14px] font-bold text-[var(--text-soft)] transition-colors hover:text-[var(--primary)]"
          >
            <ArrowLeft size={16} />
            {category.title} Kategorisine Dön
          </Link>

          <div className="relative overflow-hidden rounded-[32px] sm:rounded-[48px] bg-[#3D1C08] shadow-[0_30px_90px_rgba(84,45,20,0.15)]">
            {preview && (
              <div className="absolute inset-0 z-0">
                <Image
                  src={preview}
                  alt={subcategory.title}
                  fill
                  priority
                  className="object-cover opacity-50 mix-blend-overlay"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3D1C08] via-[#3D1C08]/80 to-transparent" />
              </div>
            )}

            <div className="relative z-10 flex min-h-[350px] flex-col items-center justify-center px-6 py-16 text-center sm:min-h-[450px] sm:px-12 lg:min-h-[500px]">
              <div className="inline-flex items-center gap-3">
                <span className="h-px w-8 bg-[#C27E48]" />
                <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#C27E48]">
                  {category.title}
                </p>
                <span className="h-px w-8 bg-[#C27E48]" />
              </div>

              <h1 className="mt-6 max-w-[15ch] font-title text-[3rem] font-bold leading-[1.05] tracking-[-0.02em] text-white text-balance sm:text-[4rem] lg:text-[5rem]">
                {subcategory.title}
              </h1>

              <p className="mt-6 max-w-[50ch] text-[16px] font-medium leading-[1.9] text-white/80 sm:text-[18px]">
                {subcategory.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ÜRÜN GALERİSİ */}
      <section className="relative mt-20 sm:mt-28 lg:mt-32">
        <div className="container-custom">
          {subcategory.images.length > 0 ? (
            <>
              <div className="mb-12 flex items-center justify-between sm:mb-16">
                <div>
                  <ScriptText className="text-[2rem] text-[var(--primary)] opacity-90 sm:text-[2.6rem]">
                    Lezzet Galerisi
                  </ScriptText>
                  <h2 className="mt-2 font-title text-[2.2rem] leading-[1.1] text-[var(--primary-dark)] sm:text-[2.8rem]">
                    Örnek Sunumlarımız
                  </h2>
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-10">
                {subcategory.images.map((image, index) => (
                  <div
                    key={`${image}-${index}`}
                    className="group relative overflow-hidden rounded-[28px] sm:rounded-[36px] bg-[#F8EEE2] shadow-sm transition-all duration-700 hover:shadow-[0_20px_40px_rgba(84,45,20,0.12)] hover:-translate-y-1.5 aspect-[4/5]"
                  >
                    <Image
                      src={image}
                      alt={`${subcategory.title} görseli ${index + 1}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary-dark)]/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="mx-auto max-w-3xl rounded-[40px] bg-[#FDF8F3] px-8 py-16 text-center border border-[rgba(133,80,44,0.06)] sm:px-16 sm:py-24">
              <ScriptText className="text-[2.4rem] text-[var(--primary)] opacity-90 sm:text-[3rem]">
                Görseller Hazırlanıyor
              </ScriptText>
              <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-[1.9] text-[var(--text-soft)] sm:text-[17.5px]">
                Bu alt kategori için henüz ürün görsellerini stüdyoya almadık. Çekimler tamamlandığında bu alan iştah açıcı bir galeriye dönüşecek.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}