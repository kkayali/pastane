import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import { whatsappLink } from "@/data/site";
import "./EditorialShowcase.css";

const specialOrderHref = whatsappLink(
  "Merhaba, özel gün için pasta yaptırmak istiyorum. Tasarım ve teslim tarihini görüşebilir miyiz?",
);

export default function EditorialShowcase() {
  return (
    <div className="sarilar-editorial">
      <section className="sarilar-editorial__story">
        <div className="container sarilar-editorial__story-inner">
          <div className="sarilar-editorial__story-heading">
            <SectionTitle eyebrow="Hikâyemiz" title="Akyazı'da, 1970'ten beri." />
          </div>

          <figure className="sarilar-editorial__story-figure">
            <div className="sarilar-editorial__story-image">
              <Image
                src="/images/storefront.jpg"
                alt="Sarılar Unlu Mamüller mağazası"
                fill
                sizes="(max-width: 760px) calc(100vw - 28px), (max-width: 1200px) 46vw, 555px"
              />
            </div>
            <figcaption className="sarilar-editorial__caption">
              Sarılar Unlu Mamüller <span aria-hidden="true">/</span> Akyazı
            </figcaption>
          </figure>

          <div className="sarilar-editorial__story-content">
            <p className="sarilar-editorial__story-text">
              1970&apos;ten bu yana Akyazı&apos;da, kendi imalatımızdan çıkan
              ürünleri günlük hazırlıyoruz. Mağazamızı ve hikâyemizi daha
              yakından tanıyın.
            </p>

            <div className="sarilar-editorial__facts">
              <div className="sarilar-editorial__fact">
                <strong>1970&apos;ten beri</strong>
                <span>Akyazı&apos;da</span>
              </div>
              <div className="sarilar-editorial__fact">
                <strong>Kendi imalatımız</strong>
                <span>Günlük hazırlanan ürünler</span>
              </div>
            </div>

            <Link href="/hakkimizda" className="sarilar-editorial__story-link">
              Hikâyemizi oku
              <ArrowRight size={18} strokeWidth={1.7} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="sarilar-editorial__occasion">
        <div className="container sarilar-editorial__occasion-inner">
          <div className="sarilar-editorial__occasion-copy">
            <SectionTitle
              eyebrow="Özel gün siparişleri"
              title="Kutlamanız için özenle hazırlansın."
              description="Doğum günü, düğün ve nişan pastaları için tarih, kişi sayısı ve düşündüğünüz tasarımı paylaşın. Seçenekleri birlikte netleştirelim."
              light
            />

            <div className="sarilar-editorial__occasion-actions">
              <a
                href={specialOrderHref}
                className="sarilar-editorial__order-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={19} strokeWidth={1.8} aria-hidden="true" />
                WhatsApp&apos;tan yaz
              </a>
              <Link href="/menu/dugun-nisan" className="sarilar-editorial__menu-link">
                Düğün ve nişan pastaları
                <ArrowRight size={18} strokeWidth={1.7} aria-hidden="true" />
              </Link>
            </div>
          </div>

          <figure className="sarilar-editorial__occasion-figure">
            <div className="sarilar-editorial__occasion-image">
              <Image
                src="/images/menu/dugun-nisan/dugun-nisan.jpeg"
                alt="Sarılar düğün ve nişan pastası"
                fill
                sizes="(max-width: 760px) calc(100vw - 28px), (max-width: 1200px) 44vw, 530px"
              />
            </div>
            <figcaption className="sarilar-editorial__caption sarilar-editorial__caption--light">
              Özel gün pastaları <span aria-hidden="true">/</span> Sarılar
            </figcaption>
          </figure>
        </div>
      </section>
    </div>
  );
}
