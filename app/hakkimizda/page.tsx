import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock3, MapPin, MessageCircle, Wheat } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import { siteConfig, whatsappLink } from "@/data/site";
import "./hakkimizda.css";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description: "1970'ten beri Akyazı'da hizmet veren Sarılar Unlu Mamüller'in hikâyesi, günlük hazırlanan ürünleri ve kendi imalatı.",
  alternates: { canonical: "/hakkimizda" },
};

const orderHref = whatsappLink("Merhaba, Sipariş verebilir miyim?");

export default function HakkimizdaPage() {
  return (
    <div className="about-page">
      <section className="page-intro about-page__intro">
        <div className="container about-page__hero">
          <div className="about-page__hero-copy">
            <span className="eyebrow">Sarılar&apos;ın hikâyesi</span>
            <h1 className="page-title">1970&apos;ten beri Akyazı&apos;dayız.</h1>
            <p className="lead">
              Pasta, tatlı ve fırın ürünlerimizi kendi imalatımızda hazırlıyoruz.
              Günlük ürünlerimiz ve özel gün siparişlerimiz için Akyazı&apos;daki
              mağazamızda buluşuyoruz.
            </p>
            <div className="about-page__hero-actions">
              <Link className="button button--dark" href="/menu">
                Menüyü keşfet <ArrowRight size={17} aria-hidden="true" />
              </Link>
              <Link className="button button--light" href="/iletisim">Bize ulaşın</Link>
            </div>
          </div>
          <figure className="about-page__figure">
            <div className="about-page__photo">
              <Image
                src="/images/storefront.jpg"
                alt="Sarılar Unlu Mamüller'in Akyazı'daki mağazası"
                fill
                priority
                sizes="(max-width: 760px) calc(100vw - 28px), (max-width: 1200px) 48vw, 690px"
              />
            </div>
            <figcaption>Sarılar Unlu Mamüller <span aria-hidden="true">/</span> Akyazı</figcaption>
          </figure>
        </div>
      </section>

      <section className="section about-page__story">
        <div className="container about-page__story-grid">
          <div className="about-page__year" aria-label="1970'ten beri Akyazı'da">
            <strong>{siteConfig.foundingYear}</strong>
            <span>Akyazı, Sakarya</span>
          </div>
          <div className="about-page__story-copy">
            <SectionTitle eyebrow="Dünden bugüne" title="Aynı şehirde, aynı özenle." />
            <p>
              Sarılar&apos;da günlük üretim ve kendi imalatımız işimizin temelini oluşturur.
              Vitrindeki pastaları, tatlıları ve fırın ürünlerini yakından görmek için
              mağazamıza uğrayabilirsiniz.
            </p>
            <p>
              Özel gün pastalarında tarih, kişi sayısı ve düşündüğünüz tasarımı
              konuşarak siparişinizi netleştiriyoruz. Güncel çeşitleri öğrenmek için
              de doğrudan bize yazabilirsiniz.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--tint about-page__principles">
        <div className="container">
          <div className="about-page__principles-head">
            <SectionTitle
              eyebrow="Bugün Sarılar"
              title="Günlük işlerimiz, değişmeyen yaklaşımımız."
              description="Mağazaya geldiğinizde de sipariş için yazdığınızda da işimizi bu üç şeyin etrafında sürdürüyoruz."
            />
          </div>
          <div className="about-page__values">
            <article className="about-page__value">
              <span className="about-page__value-icon"><Clock3 size={23} strokeWidth={1.6} aria-hidden="true" /></span>
              <span className="about-page__value-number" aria-hidden="true">01</span>
              <h3>Günlük hazırlık</h3>
              <p>Pastalarımız, tatlılarımız ve fırın ürünlerimiz için günlük üretime önem veriyoruz.</p>
            </article>
            <article className="about-page__value">
              <span className="about-page__value-icon"><Wheat size={23} strokeWidth={1.6} aria-hidden="true" /></span>
              <span className="about-page__value-number" aria-hidden="true">02</span>
              <h3>Kendi imalatımız</h3>
              <p>Vitrindeki lezzetlerden özel gün pastalarına kadar üretimi kendi bünyemizde yürütüyoruz.</p>
            </article>
            <article className="about-page__value">
              <span className="about-page__value-icon"><MessageCircle size={23} strokeWidth={1.6} aria-hidden="true" /></span>
              <span className="about-page__value-number" aria-hidden="true">03</span>
              <h3>Doğrudan iletişim</h3>
              <p>Ürün seçimini, sipariş tarihini ve teslimat ayrıntılarını sizinle konuşuyoruz.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section about-page__visit">
        <div className="container about-page__visit-inner">
          <div>
            <span className="eyebrow">Akyazı&apos;da bekleriz</span>
            <h2>Mağazada görüşelim.</h2>
            <p>Uğramadan önce güncel ürünleri sorabilir veya yol tarifine bakabilirsiniz.</p>
          </div>
          <div className="about-page__visit-actions">
            <a href={siteConfig.mapsUrl} target="_blank" rel="noopener noreferrer" className="button button--dark">
              <MapPin size={17} aria-hidden="true" /> Yol tarifi
            </a>
            <a href={orderHref} target="_blank" rel="noopener noreferrer" className="button button--light">
              <MessageCircle size={17} aria-hidden="true" /> WhatsApp&apos;tan yaz
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
