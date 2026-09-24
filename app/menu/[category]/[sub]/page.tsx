import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowLeft, MessageCircle } from "lucide-react";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import ProductGallery from "@/components/ProductGallery";
import { findSubcategoryBySlugs, getSubcategoryDisplayImage, menuCategories } from "@/data/menu";
import { productWhatsappMessage } from "@/data/messages";
import { siteConfig, whatsappLink } from "@/data/site";
import "./sub.css";

type Props = { params: Promise<{ category: string; sub: string }> };

export function generateStaticParams() {
  return menuCategories.flatMap((category) => category.subcategories.map((sub) => ({
    category: category.slug,
    sub: sub.slug,
  })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: catSlug, sub: subSlug } = await params;
  const found = findSubcategoryBySlugs(catSlug, subSlug);
  if (!found) return {};
  return {
    title: `${found.subcategory.title} | ${found.category.title}`,
    description: found.subcategory.description,
    alternates: { canonical: `/menu/${catSlug}/${subSlug}` },
  };
}

export default async function SubcategoryPage({ params }: Props) {
  const { category: catSlug, sub: subSlug } = await params;
  const found = findSubcategoryBySlugs(catSlug, subSlug);
  if (!found) notFound();

  const { category, subcategory } = found;
  const media = getSubcategoryDisplayImage(subcategory, category);
  const whatsappMessage = productWhatsappMessage(catSlug, subSlug);
  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: siteConfig.siteUrl },
      { "@type": "ListItem", position: 2, name: "Menü", item: `${siteConfig.siteUrl}/menu` },
      { "@type": "ListItem", position: 3, name: category.title, item: `${siteConfig.siteUrl}/menu/${catSlug}` },
      { "@type": "ListItem", position: 4, name: subcategory.title, item: `${siteConfig.siteUrl}/menu/${catSlug}/${subSlug}` },
    ],
  };

  return (
    <div className="subcategory-page">
      <JsonLd data={breadcrumbs} />
      <section className="page-intro subcategory-page__intro">
        <div className="container">
          <nav className="breadcrumbs subcategory-page__breadcrumbs" aria-label="Sayfa yolu">
            <Link href="/">Ana Sayfa</Link>
            <span aria-hidden="true">/</span>
            <Link href="/menu">Menü</Link>
            <span aria-hidden="true">/</span>
            <Link href={`/menu/${catSlug}`}>{category.title}</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{subcategory.title}</span>
          </nav>
          <div className="subcategory-page__hero">
            <div className="subcategory-page__hero-copy">
              <span className="eyebrow">{category.title}</span>
              <h1 className="page-title">{subcategory.title}</h1>
              <p className="lead">{subcategory.description}</p>
              <div className="subcategory-page__hero-actions">
                <a
                  className="button button--green"
                  href={whatsappLink(whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle size={18} aria-hidden="true" /> Sipariş için yaz
                </a>
                <a className="subcategory-page__gallery-jump" href="#galeri">
                  Fotoğrafları incele <ArrowDown size={17} aria-hidden="true" />
                </a>
              </div>
              <p className="subcategory-page__availability">Güncel çeşit ve sipariş ayrıntılarını mesajla öğrenebilirsiniz.</p>
            </div>
            <div className="subcategory-page__cover">
              <Image
                src={media.src}
                alt={media.alt}
                fill
                priority
                sizes="(max-width: 760px) calc(100vw - 28px), (max-width: 1320px) 50vw, 650px"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="galeri" className="section subcategory-page__gallery">
        <div className="container">
          <div className="subcategory-page__gallery-head">
            <div>
              <span className="eyebrow">Galeri</span>
              <h2 className="section-title">{subcategory.title}</h2>
            </div>
            <p>Fotoğrafa dokunarak büyütün; merak ettiklerinizi doğrudan sorun.</p>
          </div>
          <ProductGallery
            title={subcategory.title}
            images={subcategory.images}
            fallbackImage={media}
            whatsappMessage={whatsappMessage}
          />
          <Link href={`/menu/${catSlug}`} className="subcategory-page__back">
            <ArrowLeft size={17} aria-hidden="true" /> {category.title} kategorisine dön
          </Link>
        </div>
      </section>
    </div>
  );
}
