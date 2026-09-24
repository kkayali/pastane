import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getCategoryDisplayImage, type MenuCategory } from "@/data/menu";
import "./CategoryCard.css";

export default function CategoryCard({ category }: { category: MenuCategory }) {
  const media = getCategoryDisplayImage(category);

  return (
    <Link
      className="sarilar-category-card"
      href={"/menu/" + category.slug}
      aria-label={category.title + " kategorisini incele"}
    >
      <div className="sarilar-category-card__media">
        <Image
          className="sarilar-category-card__image"
          src={media.src}
          alt={media.alt}
          fill
          sizes="(max-width: 540px) calc(100vw - 28px), (max-width: 760px) calc(50vw - 24px), (max-width: 1000px) calc(50vw - 32px), (max-width: 1400px) 400px, 450px"
        />
      </div>

      <div className="sarilar-category-card__body">
        <span className="sarilar-category-card__count">
          {category.subcategories.length} ürün grubu
        </span>
        <h3 className="sarilar-category-card__title">{category.title}</h3>
        <p className="sarilar-category-card__description">{category.description}</p>
        <span className="sarilar-category-card__action" aria-hidden="true">
          <span>Kategoriyi incele</span>
          <ArrowRight size={18} strokeWidth={1.7} />
        </span>
      </div>
    </Link>
  );
}