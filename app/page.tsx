import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, MapPin, MessageCircle, Phone } from "lucide-react";
import Hero from "@/components/Hero";
import CategoryCard from "@/components/CategoryCard";
import ProductCard from "@/components/ProductCard";
import EditorialShowcase from "@/components/EditorialShowcase";
import SectionTitle from "@/components/SectionTitle";
import JsonLd from "@/components/JsonLd";
import { menuCategories } from "@/data/menu";
import { siteConfig, whatsappLink } from "@/data/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const featured = [
  {
    title: "Meyveli Günlük Pasta",
    image: "/images/menu/pastalar/meyvelipasta1.jpeg",
    href: "/menu/pastalar/gunluk",
    category: "Günlük pastalar",
  },
  {
    title: "Çikolata & Frambuaz",
    image: "/images/menu/pastalar/cikolataframbuazgunlukpasta.jpeg",
    href: "/menu/pastalar/gunluk",
    category: "Günlük pastalar",
  },
  {
    title: "Özel Tasarım Pasta",
    image: "/images/menu/pastalar/ozeltasarim2.jpeg",
    href: "/menu/pastalar/ozel-tasarim-pastalar",
    category: "Özel günler",
  },
  {
    title: "Magnolia",
    image: "/images/menu/sutlu-tatlilar/magnolya1.jpeg",
    href: "/menu/sutlu-tatlilar/kap-tatlilar",
    category: "Sütlü tatlılar",
  },
] as const;

const orderHref = whatsappLink("Merhaba, sipariş için yazıyorum. Bugün neler var?");

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Bakery",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.siteUrl,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address,
      addressLocality: "Akyazı",
      addressRegion: "Sakarya",
      addressCountry: "TR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.latitude,
      longitude: siteConfig.longitude,
    },
    sameAs: [siteConfig.instagram],
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <Hero />

      <section className="section home-section home-section--menu">
        <div className="container">
          <div className="home-section__head">
            <SectionTitle
              eyebrow="Menümüz"
              title="Canınız ne çekiyor?"
              description="Pastalardan fırın ürünlerine, tatlılardan özel gün siparişlerine kadar menümüzü keşfedin."
            />
            <Link className="home-section__more" href="/menu">
              <span>Bütün kategoriler</span>
              <ArrowUpRight size={19} strokeWidth={1.75} aria-hidden="true" />
            </Link>
          </div>

          <div className="category-grid">
            {menuCategories.map((category) => (
              <CategoryCard key={category.slug} category={category} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tint home-section home-section--featured">
        <div className="container">
          <div className="home-section__head">
            <SectionTitle
              eyebrow="Fotoğraf seçkisi"
              title="Vitrinden seçtiklerimiz."
              description="Günlük pastalardan özel tasarımlara ve sütlü tatlılara göz atın. Güncel ürünleri bize sorabilirsiniz."
            />
            <Link className="home-section__more" href="/tum-urunler">
              <span>Tüm ürün grupları</span>
              <ArrowUpRight size={19} strokeWidth={1.75} aria-hidden="true" />
            </Link>
          </div>

          <div className="product-grid">
            {featured.map((item) => (
              <ProductCard
                key={item.title}
                title={item.title}
                category={item.category}
                href={item.href}
                image={item.image}
                alt={item.title}
              />
            ))}
          </div>
        </div>
      </section>

      <EditorialShowcase />

      <section className="section home-contact">
        <div className="container">
          <div className="home-contact__panel">
            <div className="home-contact__copy">
              <span className="home-contact__eyebrow">Sipariş & iletişim</span>
              <h2>Ne hazırlayalım?</h2>
              <p>
                Ürün ve sipariş için bize yazın. Mağazamıza uğrayacaksanız
                yol tarifine göz atın.
              </p>
              <a className="home-contact__phone" href={`tel:${siteConfig.phone}`}>
                <Phone size={16} strokeWidth={1.8} aria-hidden="true" />
                {siteConfig.phoneDisplay}
              </a>
            </div>

            <div className="home-contact__actions">
              <a href={orderHref} target="_blank" rel="noopener noreferrer" className="home-contact__primary">
                <MessageCircle size={19} strokeWidth={1.8} aria-hidden="true" />
                <span>WhatsApp&apos;tan yaz</span>
                <ArrowRight size={18} strokeWidth={1.8} aria-hidden="true" />
              </a>
              <a href={siteConfig.mapsUrl} target="_blank" rel="noopener noreferrer" className="home-contact__secondary">
                <MapPin size={19} strokeWidth={1.8} aria-hidden="true" />
                <span>Yol tarifi al</span>
                <ArrowUpRight size={18} strokeWidth={1.8} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
