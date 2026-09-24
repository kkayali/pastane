import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container" style={{ maxWidth: 650, textAlign: "center" }}>
        <span className="eyebrow">Sayfa bulunamadı</span>
        <h1 className="page-title" style={{ marginTop: 17 }}>Aradığınız sayfa burada değil.</h1>
        <p className="lead" style={{ margin: "16px auto 26px" }}>
          Menüye dönerek Sarılar ürün gruplarını keşfedebilirsiniz.
        </p>
        <Link className="button button--dark" href="/menu"><ArrowLeft size={17} /> Menüye dön</Link>
      </div>
    </section>
  );
}
