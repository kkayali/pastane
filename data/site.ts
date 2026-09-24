export const siteConfig = {
  name: "Sarılar Unlu Mamüller",
  shortName: "Sarılar",
  siteUrl: "https://xn--sarlarunlumamulleri-i5c.com",
  description:
    "Sakarya Akyazı'da 1970'ten bu yana hizmet veren Sarılar Unlu Mamüller; günlük pastalar, tatlılar, fırın ürünleri ve özel gün siparişlerinde taze üretim anlayışıyla hizmet verir.",
  phoneDisplay: "0 (538) 070 00 25",
  phone: "+905380700025",
  whatsapp: "905380700025",
  email: "bilgi@sarilarunlumamulleri.com",
  address: "Ada Caddesi Rençber İş Hanı No:12 Akyazı / Sakarya",
  mapsUrl:
    "https://www.google.com/maps/place/40%C2%B041'01.0%22N+30%C2%B037'30.0%22E/@40.6835328,30.6249934,20.56z/data=!4m4!3m3!8m2!3d40.6836014!4d30.6250057?hl=tr&entry=ttu",
  googleMapsEmbed:
    "https://www.google.com/maps?q=40.6836014,30.6250057&z=17&output=embed",
  instagram: "https://www.instagram.com/sarilarunlumamulleri/",
  instagramHandle: "@sarilarunlumamulleri",
  latitude: 40.6836014,
  longitude: 30.6250057,
  foundingYear: 1970,
  heroTitle: "1970'ten beri Akyazı'da her gün taze lezzetler",
  heroSubtitle:
    "Günlük pastalardan sütlü tatlılara, fırın ürünlerinden düğün ve nişan siparişlerine kadar Sarılar'ın seçili lezzetlerini keşfedin.",
  aboutShort:
    "1970'ten bu yana Akyazı'da üretim kültürünü sürdüren Sarılar; günlük taze ürün anlayışı, kendi imalatı ve özenli hizmetiyle nesillerdir aynı adreste lezzet üretiyor.",
  workingHours: [
    "Pazartesi - Cumartesi: 07:00 - 22:00",
    "Pazar: 08:00 - 21:00",
  ],
} as const;

export function whatsappLink(message: string) {
  return "https://wa.me/" + siteConfig.whatsapp + "?text=" + encodeURIComponent(message);
}
