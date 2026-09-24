"use client";

import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { allSubcategories, menuCategories } from "@/data/menu";
import "./tumurunler.css";

export default function TumUrunlerPage() {
  const [category, setCategory] = useState("all");
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const needle = query.trim().toLocaleLowerCase("tr-TR");
    return allSubcategories.filter((item) => (
      (category === "all" || item.categorySlug === category) &&
      (needle === "" ||
        `${item.categoryTitle} ${item.subcategoryTitle} ${item.subcategoryDescription}`
          .toLocaleLowerCase("tr-TR").includes(needle))
    ));
  }, [category, query]);

  const selectedCategory = menuCategories.find((item) => item.slug === category);

  return (
    <div className="catalog-page">
      <section className="page-intro catalog-page__intro">
        <div className="container catalog-page__intro-inner">
          <span className="eyebrow">Sarılar menüsü</span>
          <h1 className="page-title">Bütün ürün grupları.</h1>
          <p className="lead">
            Pasta, tatlı, fırın ürünü ya da özel gün siparişi: aradığınızı yazın
            veya aşağıdan bir kategori seçin.
          </p>
          <div className="catalog-page__search" role="search">
            <Search size={21} strokeWidth={1.8} aria-hidden="true" />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Ürün grubu ara"
              aria-label="Ürün grubu ara"
            />
            {query && (
              <button type="button" aria-label="Aramayı temizle" onClick={() => setQuery("")}>
                <X size={19} aria-hidden="true" />
              </button>
            )}
          </div>
        </div>
      </section>

      <section className="section catalog-page__collection">
        <div className="container">
          <div className="catalog-page__filters" role="group" aria-label="Kategoriler">
            <button type="button" aria-pressed={category === "all"} onClick={() => setCategory("all")}>Tümü</button>
            {menuCategories.map((item) => (
              <button
                key={item.slug}
                type="button"
                aria-pressed={category === item.slug}
                onClick={() => setCategory(item.slug)}
              >
                {item.title}
              </button>
            ))}
          </div>

          <div className="catalog-page__results-head">
            <div>
              <span className="eyebrow">Ürünlerimiz</span>
              <h2>{selectedCategory?.title ?? "Tüm kategoriler"}</h2>
            </div>
            <p role="status" aria-live="polite" aria-atomic="true">
              {results.length} ürün grubu
            </p>
          </div>

          {results.length > 0 ? (
            <div className="product-grid catalog-page__grid">
              {results.map((item) => (
                <ProductCard
                  key={`${item.categorySlug}/${item.subcategorySlug}`}
                  href={`/menu/${item.categorySlug}/${item.subcategorySlug}`}
                  image={item.displayImage.src}
                  alt={item.displayImage.alt}
                  category={item.categoryTitle}
                  title={item.subcategoryTitle}
                  description={item.subcategoryDescription}
                />
              ))}
            </div>
          ) : (
            <div className="catalog-page__empty">
              <Search size={30} strokeWidth={1.4} aria-hidden="true" />
              <h3>Bu aramayla ürün grubu bulunamadı.</h3>
              <p>Başka bir kelime deneyebilir veya filtreleri temizleyebilirsiniz.</p>
              <button type="button" className="button button--dark" onClick={() => { setCategory("all"); setQuery(""); }}>
                Filtreleri temizle
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
