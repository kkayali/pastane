import Image from "next/image";
import { ornamentalScript } from "@/app/fonts";

const items = [
  {
    image: "/images/menu/pastalar/meyvelipasta1.jpeg",
    eyebrow: "Ozel tasarim • Zarif sunum",
    title: "Lezzet ve zarafetin\nen tatli hali",
    text: "Her detayinda ozen, her lokmada mutluluk hissi veren secili pasta sunumlari.",
  },
  {
    image: "/images/menu/sutlu-tatlilar/magnolya1.jpeg",
    eyebrow: "Gunluk taze • Hafif tercih",
    title: "Gunluk tazeligin\nen saf hali",
    text: "Hafif, dengeli ve gunun her aninda keyifle tercih edilen taze tatlilar.",
    reverse: true,
  },
  {
    image: "/images/menu/dugun-nisan/dugun-nisan.jpeg",
    eyebrow: "Butik cizgi • Ozel gunler",
    title: "Sik sunumlarin\nen ozel dokunusu",
    text: "Dugun, nisan ve kutlamalara zarif gorunum katan ozenli hazirlik anlayisi.",
  },
];

export default function EditorialShowcase() {
  return (
    <section className="section pt-0">
      <div className="container-custom">
        <div className="space-y-12 sm:space-y-16 lg:space-y-24">
          {items.map((item) => (
            <div
              key={item.title}
              className={`grid items-center gap-8 lg:grid-cols-[1fr_0.9fr] lg:gap-14 ${
                item.reverse
                  ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1"
                  : ""
              }`}
            >
              <div className="relative overflow-hidden rounded-[30px] border border-[var(--line)] bg-[rgba(255,250,244,0.78)] p-2 shadow-[var(--shadow-medium)] sm:rounded-[34px] sm:p-3">
                <div className="relative h-[320px] overflow-hidden rounded-[24px] bg-[#f8eee2] sm:h-[430px] sm:rounded-[28px] lg:h-[520px]">
                  <Image
                    src={item.image}
                    alt={item.title.replace(/\n/g, " ")}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition duration-700 hover:scale-[1.03]"
                    loading="eager"
                  />
                </div>
              </div>

              <div
                className={`overflow-visible px-2 sm:px-4 ${
                  item.reverse ? "lg:pr-8 lg:pl-2" : "lg:pl-8 lg:pr-2"
                }`}
              >
                {/* siyah içindeki küçük üst yazı */}
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--text-muted)] sm:text-[11px]">
                  {item.eyebrow}
                </p>

                {/* mavi içindeki büyük script başlık */}
                <h2
                  className={`${ornamentalScript.className} relative top-2 mt-10 max-w-[500px] whitespace-pre-line text-[3.2rem] leading-[1.1] text-[var(--primary)] sm:top-3 sm:text-[4.2rem] lg:top-4 lg:max-w-[560px] lg:text-[5.4rem]`}
                >
                  {item.title}
                </h2>

                {/* kırmızı içindeki açıklama */}
                <p className="mt-10 max-w-[32rem] text-[14.5px] leading-7 text-[var(--text-soft)] sm:text-[15.5px] sm:leading-8">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}