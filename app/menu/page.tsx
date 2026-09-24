import type { Metadata } from "next";
import { ArrowDown } from "lucide-react";
import CategoryCard from "@/components/CategoryCard";
import { menuCategories } from "@/data/menu";
import "./menu.css";

export const metadata: Metadata = {
  title: "Menü",
  description: "Sarılar Unlu Mamüller'in pasta, tatlı, fırın, sütlü tatlı ve özel gün ürün gruplarını inceleyin.",
  alternates: { canonical: "/menu" },
};

const totalGroups = menuCategories.reduce((total, category) => total + category.subcategories.length, 0);

export default function MenuPage() {
  return (
    <div className="menu-page">
      <section className="page-intro menu-page__intro">
        <div className="container menu-page__intro-inner">
          <div className="menu-page__intro-copy">
            <span className="eyebrow">Sarılar menüsü</span>
            <h1 className="page-title">Aradığınız lezzeti bulun.</h1>
            <p className="lead">
              Günlük pastalar, tatlılar, fırın ürünleri ve özel günler için
              hazırladıklarımızı kategori kategori inceleyin.
            </p>
            <a className="menu-page__explore" href="#kategoriler">
              Kategorilere geç <ArrowDown size={18} strokeWidth={1.8} aria-hidden="true" />
            </a>
          </div>
          <div className="menu-page__figures" aria-label={`${menuCategories.length} kategori ve ${totalGroups} ürün grubu`}>
            <div><strong>{String(menuCategories.length).padStart(2, "0")}</strong><span>Kategori</span></div>
            <div><strong>{String(totalGroups).padStart(2, "0")}</strong><span>Ürün grubu</span></div>
          </div>
        </div>
      </section>

      <section id="kategoriler" className="section menu-page__collection">
        <div className="container">
          <div className="menu-page__collection-head">
            <span className="eyebrow">Menümüz</span>
            <p>Kategoriyi seçin, ürün gruplarını ve fotoğrafları görün.</p>
          </div>
          <div className="category-grid menu-page__grid">
            {menuCategories.map((category) => (
              <CategoryCard key={category.slug} category={category} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
