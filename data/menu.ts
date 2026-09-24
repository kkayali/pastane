export type RepresentativeImage = {
  src: string;
  sourcePage: string;
  alt: string;
};

export type MenuSubcategory = {
  title: string;
  slug: string;
  description: string;
  images: string[];
  representativeImage?: RepresentativeImage;
};

export type MenuCategory = {
  title: string;
  slug: string;
  description: string;
  coverImage?: string;
  representativeImage?: RepresentativeImage;
  subcategories: MenuSubcategory[];
};

export type DisplayImage = {
  src: string;
  alt: string;
  representative: boolean;
  sourcePage?: string;
};

const pexels = (id: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&q=86`;

const stockPhoto = (id: number, pageSlug: string, alt: string): RepresentativeImage => ({
  src: pexels(id),
  sourcePage: pageSlug.includes("/")
    ? `https://www.pexels.com/${pageSlug}`
    : `https://www.pexels.com/photo/${pageSlug}-${id}/`,
  alt,
});

const representative = {
  baklava: {
    src: pexels(36990024),
    sourcePage:
      "https://www.pexels.com/photo/close-up-of-traditional-turkish-baklava-dessert-36990024/",
    alt: "Tepside geleneksel baklava sunumu",
  },
  milkBaklava: {
    src: pexels(18543468),
    sourcePage:
      "https://www.pexels.com/photo/turkish-milk-dessert-on-a-plate-18543468/",
    alt: "Sütle servis edilen fıstıklı baklava sunumu",
  },
  sweetCookies: {
    src: pexels(11127418),
    sourcePage:
      "https://www.pexels.com/photo/close-up-photo-of-cookies-with-chocolate-chips-11127418/",
    alt: "Tatlı kurabiye çeşitleri",
  },
  savoryCookies: {
    src: pexels(5724151),
    sourcePage:
      "https://www.pexels.com/photo/cookies-with-herbs-5724151/",
    alt: "Otlu tuzlu kurabiye sunumu",
  },
  special: {
    src: pexels(13920948),
    sourcePage:
      "https://www.pexels.com/photo/baked-goods-in-glass-shelves-13920948/",
    alt: "Pastane vitrinindeki çeşitli fırın ürünleri",
  },
  cake: {
    src: pexels(16885531),
    sourcePage:
      "https://www.pexels.com/photo/top-view-of-a-cake-on-a-cutting-board-16885531/",
    alt: "Kek sunumu",
  },
  bread: {
    src: pexels(36930978),
    sourcePage:
      "https://www.pexels.com/photo/crusty-artisan-sourdough-bread-on-wooden-board-36930978/",
    alt: "Taze fırın ekmeği",
  },
  yufka: {
    src: pexels(16791023),
    sourcePage: "https://www.pexels.com/photo/close-up-of-flat-bread-16791023/",
    alt: "Geleneksel yufka ve yassı ekmek",
  },
  pogaca: {
    src: pexels(10976467),
    sourcePage:
      "https://www.pexels.com/photo/freshly-baked-bread-in-a-bowl-10976467/",
    alt: "Sepette taze poğaça çeşitleri",
  },
  macaron: {
    src: pexels(30749699),
    sourcePage:
      "https://www.pexels.com/photo/colorful-macarons-display-in-istanbul-bakery-30749699/",
    alt: "Renkli makaron çeşitleri",
  },
  eclair: {
    src: pexels(18330355),
    sourcePage:
      "https://www.pexels.com/photo/chocolate-eclairs-in-a-bakery-18330355/",
    alt: "Çikolata kaplı eklerler",
  },
  chocolate: {
    src: pexels(5713598),
    sourcePage:
      "https://www.pexels.com/photo/pralines-in-a-box-5713598/",
    alt: "Kutu içinde çeşitli çikolatalar",
  },
  wetCake: {
    src: pexels(14564752),
    sourcePage:
      "https://www.pexels.com/photo/close-up-of-chocolate-cakes-14564752/",
    alt: "Çikolata kaplı kare kekler",
  },
  singleCake: {
    src: pexels(11675722),
    sourcePage:
      "https://www.pexels.com/photo/close-up-photo-of-delectable-chocolate-cakes-11675722/",
    alt: "Tek porsiyonluk çikolatalı pastalar",
  },
  trilece: {
    src: pexels(8272570),
    sourcePage:
      "https://www.pexels.com/photo/turkish-trilece-and-chocolate-pudding-near-glasses-of-tea-8272570/",
    alt: "Trileçe tatlısı sunumu",
  },
} satisfies Record<string, RepresentativeImage>;

export const homeImages = {
  hero: "/images/home/hero.jpeg",
};

export const menuCategories: MenuCategory[] = [
  {
    title: "Tatlılar",
    slug: "tatlilar",
    description:
      "Şerbetli tatlılardan sütlü baklavaya uzanan, çay ve kahve saatlerine eşlik eden tatlı seçenekleri.",
    representativeImage: representative.baklava,
    subcategories: [
      {
        title: "Baklava Çeşitleri",
        slug: "baklava-cesitleri",
        description:
          "Kat kat dokusu ve fıstıklı sunumlarıyla klasik baklava çeşitleri.",
        images: [],
        representativeImage: representative.baklava,
      },
      {
        title: "Sütlü Baklava Çeşitleri",
        slug: "sutlu-baklava-cesitleri",
        description:
          "Daha hafif dokulu, sütlü yorumlarıyla ferah baklava seçenekleri.",
        images: [],
        representativeImage: representative.milkBaklava,
      },
      {
        title: "Şekerpare",
        slug: "sekerpare",
        description: "Ceviz dokunuşuyla sevilen klasik şerbetli tatlı.",
        images: [],
        representativeImage: stockPhoto(36989967, "traditional-turkish-sekerpare-with-walnuts", "Cevizli şekerpare sunumu"),
      },
      {
        title: "Revani",
        slug: "revani",
        description: "İrmikli keki ve şerbetiyle tanıdık bir tatlı.",
        images: [],
        representativeImage: stockPhoto(29012088, "delicious-revani-dessert-with-turkish-tea", "Çay yanında revani dilimi"),
      },
      {
        title: "Tulumba Tatlısı",
        slug: "tulumba",
        description: "Dışı çıtır, içi şerbetli küçük lokmalar.",
        images: [],
        representativeImage: stockPhoto(5939294, "syrup-dripping-in-brown-cookies-on-white-ceramic-plate", "Şerbetli tulumba tatlıları"),
      },
      {
        title: "Halka Tatlısı",
        slug: "halka-tatlisi",
        description: "Çıtır dokulu, halka biçiminde geleneksel şerbetli tatlı.",
        images: [],
        representativeImage: stockPhoto(19420953, "man-preparing-a-traditional-turkish-dessert-halka-tatlisi", "Hazırlanan halka tatlıları"),
      },
      {
        title: "Kadayıf",
        slug: "kadayif",
        description: "İncecik tel kadayıf ve şerbetin buluştuğu klasik tat.",
        images: [],
        representativeImage: stockPhoto(17255893, "close-up-of-kadayif-baklava", "Yakından çekilmiş kadayıf tatlısı"),
      },
      {
        title: "Burma Kadayıf",
        slug: "burma-kadayif",
        description: "İnce tel kadayıfın kıvrılarak hazırlanan şerbetli hali.",
        images: [],
        representativeImage: stockPhoto(5342251, "close-up-of-stack-of-traditional-confection-dessert", "Şerbetli kadayıf hamur işi sunumu"),
      },
      {
        title: "Şöbiyet",
        slug: "sobiyet",
        description: "Kremalı ve fıstıklı şerbetli tatlı seçenekleri.",
        images: [],
        representativeImage: stockPhoto(18852577, "triangle-of-baklava-on-plate", "Kremayla sunulan üçgen baklava dilimi"),
      },
      {
        title: "Fıstık Sarma",
        slug: "fistik-sarma",
        description: "Fıstığın öne çıktığı, ince katlı şerbetli tatlı.",
        images: [],
        representativeImage: stockPhoto(36927856, "traditional-turkish-fistikli-sarma-dessert", "Fıstıklı sarma tatlısı"),
      },
      {
        title: "Havuç Dilimi",
        slug: "havuc-dilimi",
        description: "İri üçgen dilimi ve fıstığıyla sevilen baklava yorumu.",
        images: [],
        representativeImage: stockPhoto(20183058, "close-up-of-a-triangular-slice-of-balaclava-with-honey-and-walnuts", "Kat kat yufkalı üçgen baklava dilimi"),
      },
      {
        title: "Kalburabastı",
        slug: "kalburabasti",
        description: "Cevizle ve şerbetle anılan geleneksel hamur tatlısı.",
        images: [],
        representativeImage: stockPhoto(36989968, "delicious-turkish-walnut-cookies-on-tray", "Tepside cevizli geleneksel tatlı hamur işleri"),
      },
      {
        title: "Kemalpaşa Tatlısı",
        slug: "kemalpasa-tatlisi",
        description: "Küçük, şerbetli lokmalarıyla klasik tatlı seçeneği.",
        images: [],
        representativeImage: stockPhoto(7803115, "brown-round-sekerpare-dessert", "Yuvarlak şerbetli tatlı sunumu"),
      },
      {
        title: "Bülbül Yuvası",
        slug: "bulbul-yuvasi",
        description: "Yuvarlak formu ve fıstıklı sunumuyla şerbetli tatlı.",
        images: [],
        representativeImage: stockPhoto(29114977, "delicious-baklava-nest-with-pistachios", "Fıstıklı yuva biçiminde şerbetli tatlılar"),
      },
      {
        title: "Lokma Tatlısı",
        slug: "lokma-tatlisi",
        description: "Küçük porsiyonlarda sunulan geleneksel lokma tatlısı.",
        images: [],
        representativeImage: stockPhoto(10627857, "golden-lokmas-floating-on-oil", "Hazırlanan altın renkli lokmalar"),
      },
    ],
  },
  {
    title: "Pastalar",
    slug: "pastalar",
    description:
      "Günlük pastalardan doğum günü ve kişiye özel tasarımlara uzanan pasta koleksiyonu.",
    coverImage: "/images/menu/pastalar/meyvelipasta1.jpeg",
    subcategories: [
      {
        title: "Günlük Pastalar",
        slug: "gunluk",
        description:
          "Her gün vitrinde yerini alan çikolatalı, meyveli ve özel günlük pasta seçenekleri.",
        images: [
          "/images/menu/pastalar/cikolataframbuazgunlukpasta.jpeg",
          "/images/menu/pastalar/cikolatagunluk.jpeg",
          "/images/menu/pastalar/cikolatalicileklipastagunluk.jpeg",
          "/images/menu/pastalar/cikolatalipastagunluk.jpeg",
          "/images/menu/pastalar/cikolatamuzlupastagunluk.jpeg",
          "/images/menu/pastalar/cileklipastagunluk.jpeg",
          "/images/menu/pastalar/gunlukpasta1.jpeg",
          "/images/menu/pastalar/meyvelipasta1.jpeg",
        ],
      },
      {
        title: "Doğum Günü Pastaları",
        slug: "dogum-gunu",
        description:
          "Kutlama temasına göre hazırlanabilen doğum günü pasta sunumları.",
        images: [
          "/images/menu/pastalar/ozeltasarim2.jpeg",
          "/images/menu/pastalar/ozeltasarim1.jpeg",
          "/images/menu/pastalar/ozeltasarim4.jpeg",
        ],
      },
      {
        title: "Özel Tasarım Pastalar",
        slug: "ozel-tasarim-pastalar",
        description:
          "Kişiye, konsepte ve özel güne göre hazırlanan özgün pasta tasarımları.",
        images: [
          "/images/menu/pastalar/cikolatalipastaozeltasarim.jpeg",
          "/images/menu/pastalar/ozeltasarim.jpeg",
          "/images/menu/pastalar/ozeltasarim1.jpeg",
          "/images/menu/pastalar/ozeltasarim2.jpeg",
          "/images/menu/pastalar/ozeltasarim3.jpeg",
          "/images/menu/pastalar/ozeltasarim4.jpeg",
          "/images/menu/pastalar/ozeltasarim5.jpeg",
          "/images/menu/pastalar/ozeltasarim6.jpeg",
          "/images/menu/pastalar/ozeltasarim7.jpeg",
          "/images/menu/pastalar/ozeltasarim8.jpeg",
        ],
      },
      {
        title: "Resimli Pastalar",
        slug: "resimli-pastalar",
        description:
          "Fotoğraf, logo veya özel görsel baskıyla kişiselleştirilebilen pasta seçenekleri.",
        images: ["/images/menu/pastalar/resimlipasta.jpeg"],
      },
      {
        title: "Tek Kişilik Pastalar",
        slug: "tek-kisilik-pastalar",
        description:
          "Bireysel sunuma uygun, şık porsiyonlarda hazırlanan pasta seçenekleri.",
        images: [],
        representativeImage: representative.singleCake,
      },
      {
        title: "Çikolatalı Pasta",
        slug: "cikolatali-pasta",
        description: "Çikolata kreması ve kat kat pasta dokusuyla klasik seçim.",
        images: [],
        representativeImage: stockPhoto(21820865, "chocolate-cake-in-bakery", "Pastane vitrininde çikolatalı pasta"),
      },
      {
        title: "Meyveli Pasta",
        slug: "meyveli-pasta",
        description: "Mevsim meyveleriyle tamamlanan hafif pasta seçenekleri.",
        images: ["/images/menu/pastalar/meyvelipasta1.jpeg"],
      },
      {
        title: "Çilekli Pasta",
        slug: "cilekli-pasta",
        description: "Çilek ve krema uyumunu sevenlere pasta seçenekleri.",
        images: [],
        representativeImage: stockPhoto(6990073, "photograph-of-strawberry-cake", "Çileklerle süslenmiş kremalı pasta"),
      },
      {
        title: "Muzlu Pasta",
        slug: "muzlu-pasta",
        description: "Muzun yumuşak dokusuyla hazırlanan kremalı pasta.",
        images: ["/images/menu/pastalar/cikolatamuzlupastagunluk.jpeg"],
      },
      {
        title: "Frambuazlı Pasta",
        slug: "frambuazli-pasta",
        description: "Frambuazın hafif ekşiliğiyle dengelenen pasta.",
        images: [],
        representativeImage: stockPhoto(27304365, "close-up-of-a-raspberry-cake", "Frambuazla süslenmiş pasta"),
      },
      {
        title: "Profiterollü Pasta",
        slug: "profiterollu-pasta",
        description: "Profiterol sevenlere özel kutlama pastası seçenekleri.",
        images: [],
        representativeImage: stockPhoto(10111209, "pastries-over-a-cake-stand", "Sunum standında çikolatalı profiterol topları"),
      },
      {
        title: "Krokanlı Pasta",
        slug: "krokanli-pasta",
        description: "Karamel ve çıtır kuruyemiş dokusuyla pasta.",
        images: [],
        representativeImage: stockPhoto(4161223, "a-slice-of-caramel-cake-with-chocolate-coated-nuts", "Karamelli ve kuruyemişli pasta dilimi"),
      },
      {
        title: "Fıstıklı Pasta",
        slug: "fistikli-pasta",
        description: "Fıstıklı kremayı sevenlere pasta seçenekleri.",
        images: [],
        representativeImage: stockPhoto(32039104, "delicious-pistachio-cake-on-kitchen-table", "Fıstıklı pasta sunumu"),
      },
      {
        title: "Rulo Pasta",
        slug: "rulo-pasta",
        description: "Dilim dilim servis edilen kremalı rulo pasta.",
        images: [],
        representativeImage: stockPhoto(34249417, "delicious-homemade-roll-cake", "Kremalı rulo pasta dilimleri"),
      },
      {
        title: "Baton Pasta",
        slug: "baton-pasta",
        description: "Uzun formda, paylaşmaya uygun pasta seçenekleri.",
        images: [],
        representativeImage: stockPhoto(36590625, "homemade-loaf-cake-with-cream-on-a-plate", "Uzun formda kremalı kek sunumu"),
      },
    ],
  },
  {
    title: "Fırın",
    slug: "firin",
    description:
      "Kurabiyeden poğaçaya, ekmekten ekler ve makarona kadar günün farklı saatlerine eşlik eden fırın ürünleri.",
    representativeImage: representative.special,
    subcategories: [
      {
        title: "Tatlı Kurabiyeler",
        slug: "tatli-kurabiyeler",
        description: "Çay ve kahve yanında tercih edilen tatlı kurabiye çeşitleri.",
        images: [],
        representativeImage: representative.sweetCookies,
      },
      {
        title: "Tuzlu Kurabiyeler",
        slug: "tuzlu-kurabiyeler",
        description: "Günlük atıştırmalık için hazırlanan tuzlu kurabiye seçenekleri.",
        images: [],
        representativeImage: representative.savoryCookies,
      },
      {
        title: "Special",
        slug: "special",
        description: "Sarılar vitrininde dönemsel olarak öne çıkan özel fırın ürünleri.",
        images: [],
        representativeImage: representative.special,
      },
      {
        title: "Kek",
        slug: "kek",
        description: "Yumuşak dokulu, günlük tüketime uygun kek çeşitleri.",
        images: [],
        representativeImage: representative.cake,
      },
      {
        title: "Ekmek",
        slug: "ekmek",
        description: "Günlük hazırlanan taze ekmek seçenekleri.",
        images: [],
        representativeImage: representative.bread,
      },
      {
        title: "Yufka",
        slug: "yufka",
        description: "Geleneksel mutfağa uygun günlük yufka ürünleri.",
        images: [],
        representativeImage: representative.yufka,
      },
      {
        title: "Poğaça",
        slug: "pogaca",
        description: "Kahvaltı ve gün içi atıştırmalık için taze poğaça çeşitleri.",
        images: [],
        representativeImage: representative.pogaca,
      },
      {
        title: "Makaron",
        slug: "makaron",
        description: "Renkli, zarif ve porsiyonluk makaron seçenekleri.",
        images: [],
        representativeImage: representative.macaron,
      },
      {
        title: "Ekler ve Çeşitleri",
        slug: "ekler-ve-cesitleri",
        description: "Kremalı, çikolatalı ve farklı sunumlarda ekler çeşitleri.",
        images: [],
        representativeImage: representative.eclair,
      },
      {
        title: "Simit",
        slug: "simit",
        description: "Susam kaplı, çay saatlerinin vazgeçilmezi.",
        images: [],
        representativeImage: stockPhoto(19199375, "close-up-of-simit-traditional-turkish-bread", "Fırında susamlı Türk simitleri"),
      },
      {
        title: "Açma",
        slug: "acma",
        description: "Yumuşak dokulu, kahvaltıya eşlik eden açma.",
        images: [],
        representativeImage: stockPhoto(37290136, "turkish-simit-and-acma-close-up", "Simit yanında yumuşak açmalar"),
      },
      {
        title: "Börek Çeşitleri",
        slug: "borek-cesitleri",
        description: "Kahvaltı ve davet masaları için börek seçenekleri.",
        images: [],
        representativeImage: stockPhoto(38356208, "close-up-of-traditional-turkish-borek-spiral", "Tepside sarmal biçimli börek"),
      },
      {
        title: "Su Böreği",
        slug: "su-boregi",
        description: "Kat kat hamuruyla klasik tepsi böreği.",
        images: [],
        representativeImage: stockPhoto(34060892, "hu-hu/foto/34060892/", "Pastane tepsisindeki börek ve fırın ürünleri"),
      },
      {
        title: "Ay Çöreği",
        slug: "ay-coregi",
        description: "Kahve ve çay yanında sevilen kıvrımlı çörek.",
        images: [],
        representativeImage: stockPhoto(6601708, "chocolate-chip-crescent-rolls-on-plate", "Tabakta kıvrımlı küçük çörekler"),
      },
      {
        title: "Kruvasan",
        slug: "kruvasan",
        description: "Kat kat hamuru ve çıtır yüzeyiyle kahvaltı seçeneği.",
        images: [],
        representativeImage: stockPhoto(37218332, "freshly-baked-croissants-in-istanbul-bakery", "Pastanede pişmiş kruvasanlar"),
      },
    ],
  },
  {
    title: "Düğün & Nişan",
    slug: "dugun-nisan",
    description:
      "Düğün, nişan, söz ve özel kutlamalar için hazırlanan zarif pasta ve ikram seçenekleri.",
    coverImage: "/images/menu/dugun-nisan/dugun-nisan.jpeg",
    subcategories: [
      {
        title: "Pastalar",
        slug: "pastalar",
        description:
          "Düğün ve nişan organizasyonlarının temasına göre hazırlanan pasta seçenekleri.",
        images: [
          "/images/menu/dugun-nisan/dugun-nisan.jpeg",
          "/images/menu/dugun-nisan/dugun-nisan2.jpeg",
        ],
      },
      {
        title: "Çikolatalar",
        slug: "cikolatalar",
        description:
          "Özel gün masalarına ve ikram paketlerine uygun çikolata sunumları.",
        images: [],
        representativeImage: representative.chocolate,
      },
      {
        title: "Düğün Pastaları",
        slug: "dugun-pastalari",
        description: "Düğününüzün davetli sayısına ve temasına göre pasta seçenekleri.",
        images: [],
        representativeImage: stockPhoto(34596956, "elegant-three-tier-wedding-cake", "Üç katlı düğün pastası"),
      },
      {
        title: "Nişan Pastaları",
        slug: "nisan-pastalari",
        description: "Nişan masasına uygun, kişiselleştirilebilen pasta tasarımları.",
        images: [],
        representativeImage: stockPhoto(28965839, "elegant-engagement-cake-with-gold-accents", "Altın detaylı nişan pastası"),
      },
      {
        title: "Söz Pastaları",
        slug: "soz-pastalari",
        description: "Söz gününe uygun ölçü ve tasarımda pasta seçenekleri.",
        images: [],
        representativeImage: stockPhoto(31009164, "heart-shaped-engagement-cake-with-floral-design", "Çiçekli kalp biçiminde kutlama pastası"),
      },
      {
        title: "Nikâh Pastaları",
        slug: "nikah-pastalari",
        description: "Nikâh sonrası kutlamalar için zarif pasta sunumları.",
        images: [],
        representativeImage: stockPhoto(28259732, "elegant-white-wedding-cake-with-floral-decoration", "Çiçeklerle süslenmiş beyaz kutlama pastası"),
      },
      {
        title: "Kına Pastaları",
        slug: "kina-pastalari",
        description: "Kına gecesinin rengine ve konseptine uygun pasta seçenekleri.",
        images: [],
        representativeImage: stockPhoto(30770346, "red-velvet-engagement-cake-with-personalized-message", "Kırmızı tonlarda kişiye özel kutlama pastası"),
      },
      {
        title: "Yıldönümü Pastaları",
        slug: "yildonumu-pastalari",
        description: "Yıldönümü sofralarına uygun kişisel pasta tasarımları.",
        images: [],
        representativeImage: stockPhoto(31793674, "elegant-two-tier-25th-anniversary-cake", "Yıldönümü için hazırlanmış iki katlı pasta"),
      },
      {
        title: "Mini Kutlama Pastaları",
        slug: "mini-kutlama-pastalari",
        description: "Küçük kutlamalara uygun, az kişilik pasta seçenekleri.",
        images: [],
        representativeImage: stockPhoto(16195010, "small-cake-with-a-single-candle", "Mumla süslenmiş küçük kutlama pastası"),
      },
      {
        title: "Davetlik Kurabiyeler",
        slug: "davetlik-kurabiyeler",
        description: "Davet ve kutlama masaları için tatlı kurabiye sunumları.",
        images: [],
        representativeImage: stockPhoto(7184200, "cookies-for-the-party", "Kutlama için hazırlanmış kurabiyeler"),
      },
      {
        title: "Davetlik Tuzlu Kurabiyeler",
        slug: "davetlik-tuzlu-kurabiyeler",
        description: "Davet sofralarına eşlik eden tuzlu atıştırmalıklar.",
        images: [],
        representativeImage: stockPhoto(5724151, "cookies-with-herbs", "Otlu tuzlu kurabiye sunumu"),
      },
      {
        title: "Davetlik Kuru Pastalar",
        slug: "davetlik-kuru-pastalar",
        description: "Çay servisine uygun, paylaşmalık kuru pasta seçenekleri.",
        images: [],
        representativeImage: stockPhoto(32441082, "assorted-pastry-platter-display-at-buffet", "Davet büfesinde çeşitli küçük hamur işleri"),
      },
      {
        title: "Davetlik Mini Ekler",
        slug: "davetlik-mini-ekler",
        description: "Tek lokmalık ikramlar için küçük ekler sunumları.",
        images: [],
        representativeImage: stockPhoto(13177922, "eclair", "Sunum tabağında çeşitli eklerler"),
      },
      {
        title: "Davetlik Cupcake’ler",
        slug: "davetlik-cupcakeler",
        description: "Kutlama renklerine uyarlanabilen porsiyonluk kekler.",
        images: [],
        representativeImage: stockPhoto(17637167, "delicious-decorated-cupcakes", "Renkli süslemeli kutlama cupcake’leri"),
      },
      {
        title: "Hediyelik Çikolata Kutuları",
        slug: "hediyelik-cikolata-kutulari",
        description: "Kutlamalarda hediye etmeye uygun çikolata sunumları.",
        images: [],
        representativeImage: stockPhoto(30353752, "elegant-gift-box-of-gourmet-chocolate-truffles", "Hediyelik kutuda çikolata çeşitleri"),
      },
    ],
  },
  {
    title: "Sütlü Tatlılar",
    slug: "sutlu-tatlilar",
    description:
      "Hafif dokulu sütlü tatlılardan trileçeye ve kap tatlılarına uzanan günlük seçenekler.",
    coverImage: "/images/menu/sutlu-tatlilar/magnolya1.jpeg",
    subcategories: [
      {
        title: "Islak Kek",
        slug: "islak-kek",
        description: "Yoğun çikolata dokusuyla servis edilen ıslak kek seçenekleri.",
        images: [],
        representativeImage: representative.wetCake,
      },
      {
        title: "Trileçe",
        slug: "trilece",
        description: "Sütlü dokusu ve yumuşak kekiyle sevilen trileçe sunumları.",
        images: [],
        representativeImage: representative.trilece,
      },
      {
        title: "Kap Tatlılar",
        slug: "kap-tatlilar",
        description:
          "Magnolia, profiterol ve supangle gibi porsiyonluk kap tatlıları.",
        images: [
          "/images/menu/sutlu-tatlilar/magnolya1.jpeg",
          "/images/menu/sutlu-tatlilar/magnolya2.jpeg",
          "/images/menu/sutlu-tatlilar/profiterol1.jpeg",
          "/images/menu/sutlu-tatlilar/supangle1.jpeg",
        ],
      },
      {
        title: "Sütlaç",
        slug: "sutlac",
        description: "Pirinç ve sütün buluştuğu klasik kaşık tatlısı.",
        images: [],
        representativeImage: stockPhoto(30403808, "traditional-turkish-sutlac-in-clay-pots", "Toprak kâselerde sütlaç"),
      },
      {
        title: "Fırın Sütlaç",
        slug: "firin-sutlac",
        description: "Üzeri fırınlanmış, yumuşak dokulu sütlaç.",
        images: [],
        representativeImage: stockPhoto(8053828, "bowls-of-baked-turkish-rice-pudding", "Üzeri kızarmış fırın sütlaç kâseleri"),
      },
      {
        title: "Kazandibi",
        slug: "kazandibi",
        description: "Karamelize yüzeyiyle sevilen klasik sütlü tatlı.",
        images: [],
        representativeImage: stockPhoto(16668398, "close-up-of-a-turkish-kazandibi-dessert", "Karamelize yüzeyli kazandibi"),
      },
      {
        title: "Tavukgöğsü",
        slug: "tavukgogsu",
        description: "Yumuşak dokusuyla sevilen geleneksel sütlü tatlı.",
        images: [],
        representativeImage: stockPhoto(20692141, "top-view-of-creamy-desserts-with-pistachios", "Fıstıkla servis edilmiş kremalı sütlü tatlı"),
      },
      {
        title: "Supangle",
        slug: "supangle",
        description: "Yoğun kakaolu, porsiyonluk sütlü tatlı.",
        images: [],
        representativeImage: stockPhoto(12106438, "chocolate-pudding-in-bowl", "Kâsede çikolatalı puding"),
      },
      {
        title: "Profiterol",
        slug: "profiterol",
        description: "Kremalı küçük hamurlar ve çikolata sosuyla sevilen tatlı.",
        images: ["/images/menu/sutlu-tatlilar/profiterol1.jpeg"],
      },
      {
        title: "Keşkül",
        slug: "keskul",
        description: "Badem aromasıyla bilinen geleneksel sütlü tatlı.",
        images: [],
        representativeImage: stockPhoto(15794016, "traditional-turkish-puddings-with-pistachios-sprinkle", "Fıstıkla süslenmiş sütlü tatlı kâseleri"),
      },
      {
        title: "Muhallebi",
        slug: "muhallebi",
        description: "Sade ve hafif sütlü tatlılardan vazgeçmeyenlere.",
        images: [],
        representativeImage: stockPhoto(37825034, "traditional-turkish-sutlac-in-glass-bowl", "Tarçın serpilmiş sütlü tatlı"),
      },
      {
        title: "Magnolia",
        slug: "magnolia",
        description: "Meyve, krema ve bisküvili katların bir arada olduğu tatlı.",
        images: ["/images/menu/sutlu-tatlilar/magnolya1.jpeg"],
      },
      {
        title: "Krem Karamel",
        slug: "krem-karamel",
        description: "Karamel soslu, ipeksi dokulu kaşık tatlısı.",
        images: [],
        representativeImage: stockPhoto(12322407, "creme-caramel-dessert", "Karamel soslu krem tatlısı"),
      },
      {
        title: "İrmik Tatlısı",
        slug: "irmik-tatlisi",
        description: "İrmiğin hafif dokusuyla hazırlanan sütlü tatlı seçeneği.",
        images: [],
        representativeImage: stockPhoto(37118307, "delicious-semolina-dessert-with-pistachio-topping", "Fıstıkla süslenmiş irmikli tatlı"),
      },
      {
        title: "Etimek Tatlısı",
        slug: "etimek-tatlisi",
        description: "Kremalı katları ve kıtır tabanıyla sevilen tatlı.",
        images: [],
        representativeImage: stockPhoto(8745313, "bread-pudding-with-cream-on-white-ceramic-plate", "Kremayla servis edilmiş katlı ekmek tatlısı"),
      },
    ],
  },
];

export const findCategoryBySlug = (slug: string) =>
  menuCategories.find((category) => category.slug === slug);

export const findSubcategoryBySlugs = (
  categorySlug: string,
  subSlug: string,
) => {
  const category = findCategoryBySlug(categorySlug);
  if (!category) return null;

  const subcategory = category.subcategories.find((sub) => sub.slug === subSlug);
  if (!subcategory) return null;

  return { category, subcategory };
};

export const getSubcategoryDisplayImage = (
  subcategory: MenuSubcategory,
  category?: MenuCategory,
): DisplayImage => {
  if (subcategory.images[0]) {
    return {
      src: subcategory.images[0],
      alt: subcategory.title,
      representative: false,
    };
  }

  if (subcategory.representativeImage) {
    return {
      ...subcategory.representativeImage,
      representative: true,
    };
  }

  if (category?.representativeImage) {
    return {
      ...category.representativeImage,
      representative: true,
    };
  }

  return {
    src: homeImages.hero,
    alt: subcategory.title,
    representative: false,
  };
};

export const getCategoryDisplayImage = (category: MenuCategory): DisplayImage => {
  if (category.coverImage) {
    return {
      src: category.coverImage,
      alt: category.title,
      representative: false,
    };
  }

  if (category.representativeImage) {
    return {
      ...category.representativeImage,
      representative: true,
    };
  }

  const firstSub = category.subcategories[0];
  return getSubcategoryDisplayImage(firstSub, category);
};

export const getImageTitle = (
  src: string,
  subcategoryTitle: string,
  index: number,
) => {
  const file = src.split("/").pop()?.toLocaleLowerCase("tr-TR") ?? "";

  const known: Array<[string, string]> = [
    ["cikolataframbuaz", "Çikolata & Frambuaz Pasta"],
    ["cikolatamuzlu", "Çikolata & Muz Pasta"],
    ["cikolatalicilekli", "Çikolata & Çilek Pasta"],
    ["cikolatagunluk", "Çikolatalı Günlük Pasta"],
    ["cikolatalipasta", "Çikolatalı Pasta"],
    ["cileklipasta", "Çilekli Pasta"],
    ["meyvelipasta", "Meyveli Pasta"],
    ["gunlukpasta", "Günlük Pasta"],
    ["resimlipasta", "Resimli Pasta"],
    ["cikolatalipastaozeltasarim", "Çikolatalı Özel Tasarım Pasta"],
    ["magnolya", "Magnolia"],
    ["profiterol", "Profiterol"],
    ["supangle", "Supangle"],
    ["dugun-nisan", "Düğün & Nişan Pastası"],
    ["ozeltasarim", "Özel Tasarım Pasta"],
  ];

  const match = known.find(([needle]) => file.includes(needle));
  if (!match) return `${subcategoryTitle} ${index + 1}`;

  if (match[0] === "ozeltasarim" && /\d/.test(file)) {
    return `${match[1]} ${index + 1}`;
  }

  return match[1];
};

export const allSubcategories = menuCategories.flatMap((category) =>
  category.subcategories.map((subcategory) => {
    const displayImage = getSubcategoryDisplayImage(subcategory, category);

    return {
      categoryTitle: category.title,
      categorySlug: category.slug,
      subcategoryTitle: subcategory.title,
      subcategorySlug: subcategory.slug,
      subcategoryDescription: subcategory.description,
      subcategoryImages: subcategory.images,
      displayImage,
    };
  }),
);
