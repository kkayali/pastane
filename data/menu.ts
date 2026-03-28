export type MenuSubcategory = {
  title: string;
  slug: string;
  description: string;
  images: string[];
};

export type MenuCategory = {
  title: string;
  slug: string;
  description: string;
  coverImage?: string;
  subcategories: MenuSubcategory[];
};

export const homeImages = {
  hero: "/images/home/hero.jpeg",
  showcase: [
    "/images/home/showcase-1.jpeg",
    "/images/home/showcase-2.jpeg",
    "/images/home/showcase-3.jpeg",
    "/images/home/showcase-4.jpeg",
    "/images/home/showcase-5.jpeg",
    "/images/home/showcase-6.jpeg",
    "/images/home/showcase-7.jpeg",
    "/images/home/showcase-8.jpeg",
    "/images/home/showcase-9.jpeg",
     "/images/home/showcase-10.jpeg",
    "/images/home/showcase-11.jpeg",
    "/images/home/showcase-12.jpeg",
  ],
  gallery: [
    "/images/home/gallery-1.jpeg",
    "/images/home/gallery-2.jpeg",
    "/images/home/gallery-3.jpeg",
    "/images/home/gallery-4.jpeg",
  ],
};

export const menuCategories: MenuCategory[] = [
  {
    title: "Tatlılar",
    slug: "tatlilar",
    description:
      "Baklava ve sütlü baklava çeşitlerini kapsayan tatlı kategorisi.",
    coverImage: "",
    subcategories: [
      {
        title: "Baklava Çeşitleri",
        slug: "baklava-cesitleri",
        description: "Baklava çeşitlerinin yer aldığı alt kategori.",
        images: [],
      },
      {
        title: "Sütlü Baklava Çeşitleri",
        slug: "sutlu-baklava-cesitleri",
        description: "Sütlü baklava çeşitlerinin yer aldığı alt kategori.",
        images: [],
      },
    ],
  },
  {
    title: "Pastalar",
    slug: "pastalar",
    description:
      "Günlük pasta, doğum günü, özel tasarım, resimli ve tek kişilik pasta seçeneklerinden oluşan ana kategori.",
    coverImage: "/images/menu/pastalar/meyvelipasta1.jpeg",
    subcategories: [
      {
        title: "Günlük",
        slug: "gunluk",
        description:
          "Günlük olarak hazırlanan eşsiz lezzetlerimiz.",
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
        title: "Doğum Günü",
        slug: "dogum-gunu",
        description:
          "Kutlama ve özel günler için hazırlanan doğum günü pasta kategorisi.",
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
          "Kişiye ve konsepte özel hazırlanan tasarım pastaların yer aldığı kategori.",
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
          "Görsel baskı veya özel konseptle hazırlanan resimli pastalar kategorisi.",
        images: ["/images/menu/pastalar/resimlipasta.jpeg"],
      },
      {
        title: "Tek Kişilik Pastalar",
        slug: "tek-kisilik-pastalar",
        description:
          "Bireysel sunuma uygun tek kişilik pasta çeşitlerinin yer aldığı kategori.",
        images: [
          "/images/menu/pastalar/cikolataframbuazgunlukpasta.jpeg",
          "/images/menu/pastalar/cikolatalicileklipastagunluk.jpeg",
          "/images/menu/pastalar/cikolatalipastagunluk.jpeg",
          "/images/menu/pastalar/cikolatamuzlupastagunluk.jpeg",
          "/images/menu/pastalar/cileklipastagunluk.jpeg",
        ],
      },
    ],
  },
  {
    title: "Fırın",
    slug: "firin",
    description:
      "Tatlı kurabiyelerden ekler çeşitlerine kadar günlük hazırlanan fırın ürünlerini kapsayan geniş kategori.",
    coverImage: "",
    subcategories: [
      {
        title: "Tatlı Kurabiyeler",
        slug: "tatli-kurabiyeler",
        description: "Tatlı kurabiye çeşitlerinin yer aldığı fırın alt kategorisi.",
        images: [],
      },
      {
        title: "Tuzlu Kurabiyeler",
        slug: "tuzlu-kurabiyeler",
        description: "Tuzlu kurabiye çeşitlerinin yer aldığı fırın alt kategorisi.",
        images: [],
      },
      {
        title: "Special",
        slug: "special",
        description:
          "Özel sunumlu veya farklı yapıya sahip fırın ürünlerinin bulunduğu kategori.",
        images: [],
      },
      {
        title: "Kek",
        slug: "kek",
        description: "Kek ürünlerinin yer aldığı fırın alt kategorisi.",
        images: [],
      },
      {
        title: "Ekmek",
        slug: "ekmek",
        description: "Günlük ekmek çeşitlerinin bulunduğu fırın alt kategorisi.",
        images: [],
      },
      {
        title: "Yufka",
        slug: "yufka",
        description: "Yufka ürünlerinin bulunduğu fırın alt kategorisi.",
        images: [],
      },
      {
        title: "Poğaça",
        slug: "pogaca",
        description: "Poğaça çeşitlerinin yer aldığı fırın alt kategorisi.",
        images: [],
      },
      {
        title: "Makaron",
        slug: "makaron",
        description: "Makaron ürünlerinin yer aldığı fırın alt kategorisi.",
        images: [],
      },
      {
        title: "Ekler ve Çeşitleri",
        slug: "ekler-ve-cesitleri",
        description: "Ekler ve benzeri ürünlerin bulunduğu fırın alt kategorisi.",
        images: [],
      },
    ],
  },
  {
    title: "Düğün Nişan",
    slug: "dugun-nisan",
    description:
      "Düğün, nişan, söz ve benzeri organizasyonlara özel ürün gruplarını içeren kategori.",
    coverImage: "/images/menu/dugun-nisan/dugun-nisan.jpeg",
    subcategories: [
      {
        title: "Pastalar",
        slug: "pastalar",
        description:
          "Düğün ve nişan organizasyonlarına özel pasta kategorisi.",
        images: [
          "/images/menu/dugun-nisan/dugun-nisan.jpeg",
          "/images/menu/dugun-nisan/dugun-nisan2.jpeg",
        ],
      },
      {
        title: "Çikolatalar",
        slug: "cikolatalar",
        description:
          "Düğün ve nişan organizasyonlarına özel çikolata kategorisi.",
        images: [],
      },
    ],
  },
  {
    title: "Sütlü Tatlılar",
    slug: "sutlu-tatlilar",
    description:
      "Hafif ve süt bazlı tatlı seçeneklerini kapsayan ana kategori.",
    coverImage: "/images/menu/sutlu-tatlilar/magnolya1.jpeg",
    subcategories: [
      {
        title: "Islak Kek",
        slug: "islak-kek",
        description: "Islak kek ürünlerinin yer aldığı sütlü tatlı kategorisi.",
        images: [],
      },
      {
        title: "Trileçe",
        slug: "trilece",
        description: "Trileçe ürünlerinin yer aldığı sütlü tatlı kategorisi.",
        images: [],
      },
      {
        title: "Kap Tatlılar",
        slug: "kap-tatlilar",
        description:
          "Kap sunumlu sütlü tatlı ürünlerinin yer aldığı kategori.",
        images: [
          "/images/menu/sutlu-tatlilar/magnolya1.jpeg",
          "/images/menu/sutlu-tatlilar/magnolya2.jpeg",
          "/images/menu/sutlu-tatlilar/profiterol1.jpeg",
          "/images/menu/sutlu-tatlilar/supangle1.jpeg",
        ],
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

export const allSubcategories = menuCategories.flatMap((category) =>
  category.subcategories.map((subcategory) => ({
    categoryTitle: category.title,
    categorySlug: category.slug,
    categoryImage: category.coverImage || "",
    subcategoryTitle: subcategory.title,
    subcategorySlug: subcategory.slug,
    subcategoryDescription: subcategory.description,
    subcategoryImages: subcategory.images,
    previewImage: subcategory.images[0] || category.coverImage || "",
  })),
);