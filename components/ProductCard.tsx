import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import "./ProductCard.css";

type Props = {
  href: string;
  image: string;
  alt: string;
  category: string;
  title: string;
  description?: string;
};

export default function ProductCard({
  href,
  image,
  alt,
  category,
  title,
  description,
}: Props) {
  return (
    <Link
      className="sarilar-product-card"
      href={href}
      aria-label={category + ": " + title + " detaylarını incele"}
    >
      <div className="sarilar-product-card__media">
        <Image
          className="sarilar-product-card__image"
          src={image}
          alt={alt}
          fill
          sizes="(max-width: 540px) calc(100vw - 28px), (max-width: 1000px) calc(50vw - 24px), 300px"
        />
      </div>

      <div className="sarilar-product-card__body">
        <span className="sarilar-product-card__category">{category}</span>
        <h3 className="sarilar-product-card__title">{title}</h3>
        {description && (
          <p className="sarilar-product-card__description">{description}</p>
        )}

        <span className="sarilar-product-card__action" aria-hidden="true">
          <span>Detayları incele</span>
          <ArrowRight size={17} strokeWidth={1.75} />
        </span>
      </div>
    </Link>
  );
}
