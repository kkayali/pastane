import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import JsonLd from "@/components/JsonLd";
import {
  findCategoryBySlug,
  getCategoryDisplayImage,
  getSubcategoryDisplayImage,
  menuCategories,
} from "@/data/menu";
import { siteConfig } from "@/data/site";
import "./category.css";

type Props = { params: Promise<{ category: string }> };

export function generateStaticParams() {
  return menuCategories.map((category) => ({ category: category.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: slug } = await params;
  const category = findCategoryBySlug(slug);
  if (!category) return {};
  return {
    title: category.title,
    description: category.description,
    alternates: { canonical: `/menu/${slug}` },
    openGraph: {
      title: `${category.title} | ${siteConfig.name}`,
      description: category.description,
    },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category: slug } = await params;
  const category = findCategoryBySlug(slug);
  if (!category) notFound();

  const display = getCategoryDisplayImage(category);
  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: siteConfig.siteUrl },
      { "@type": "ListItem", position: 2, name: "Menü", item: `${siteConfig.siteUrl}/menu` },
      { "@type": "ListItem", position: 3, name: category.title, item: `${siteConfig.siteUrl}/menu/${slug}` },
    ],
  };

  return (
    <div className="category-page">
      <JsonLd data={breadcrumbs} />
      <section className="page-intro category-page__intro">
        <div className="container">
          <nav className="breadcrumbs category-page__breadcrumbs" aria-label="Sayfa yolu">
            <Link href="/">Ana Sayfa</Link>
            <span aria-hidden="true">/</span>
            <Link href="/menu">Menü</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{category.title}</span>
          </nav>
          <div className="category-page__hero">
            <div className="category-page__hero-copy">
              <span className="eyebrow">Sarılar menüsü</span>
              <h1 className="page-title">{category.title}</h1>
              <p className="lead">{category.description}</p>
              <div className="category-page__hero-meta">
                <strong>{String(category.subcategories.length).padStart(2, "0")}</strong>
                <span>Ürün grubu</span>
              </div>
              <a className="category-page__jump" href="#alt-kategoriler">
                Ürün gruplarına göz at <ArrowDown size={18} aria-hidden="true" />
              </a>
            </div>
            <figure className="category-page__figure">
              <div className="category-page__cover">
                <Image
                  src={display.src}
                  alt={display.alt}
                  fill
                  priority
                  sizes="(max-width: 760px) calc(100vw - 28px), (max-width: 1320px) 50vw, 650px"
                />
              </div>
              <figcaption>Sarılar menüsü <span aria-hidden="true">/</span> {category.title}</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section id="alt-kategoriler" className="section category-page__collection">
        <div className="container">
          <div className="category-page__collection-head">
            <div>
              <span className="eyebrow">{category.title}</span>
              <h2 className="section-title">Neler var?</h2>
            </div>
            <p>Ürün grubunu seçin; fotoğrafları ve ayrıntıları inceleyin.</p>
          </div>
          <div className="product-grid category-page__grid">
            {category.subcategories.map((sub) => {
              const media = getSubcategoryDisplayImage(sub, category);
              return (
                <ProductCard
                  key={sub.slug}
                  href={`/menu/${category.slug}/${sub.slug}`}
                  image={media.src}
                  alt={media.alt}
                  category={category.title}
                  title={sub.title}
                  description={sub.description}
                />
              );
            })}
          </div>
          <Link href="/menu" className="category-page__back">
            <ArrowLeft size={17} aria-hidden="true" /> Tüm kategorilere dön
          </Link>
        </div>
      </section>
    </div>
  );
}
