// Bir dizideki tüm elemanları iki katına çıkaran bir fonksiyonu nasıl yazarsınız?

const arr = [1, 2, 3, 4, 5];
let ikiKati = arr.map((item) => (item = item * 2));
console.log(ikiKati);
// Bir dizi içindeki string değerlerin uzunluklarını hesaplayan bir fonksiyonu nasıl yazarsınız?

const meyve = ["apple", "banana", "orange", "kiwi"];
const harfUzunluk = meyve.map((item, index) => {
  return `${index + 1}. ${item} kelimesi ${item.length} harf var`;
});
console.log(harfUzunluk);
// Bir nesne dizisindeki nesnelerin belirli bir özelliğini çıkararak yeni bir dizi oluşturmak için nasıl bir fonksiyon yazarız?
const sinifListesi = [
  { isim: "Selin", yas: 7 },
  { isim: "helin", yas: 7 },
  { isim: "Metin", yas: 7 },
  { isim: "Alin", yas: 7 },
];

let isimListesi = sinifListesi.map((item, index) => {
  return `${index + 1}.......${item.isim}`;
});
console.log(isimListesi);
// bir diyideki sebzeleri ve meyveleri  kategorileyen kodayiran kod
const products = [
  { name: "Elma", category: "Meyve" },
  { name: "Havuç", category: "Sebze" },
  { name: "Muz", category: "Meyve" },
  { name: "Brokoli", category: "Sebze" },
  { name: "Portakal", category: "Meyve" },
];

const sebzeler = products.filter((urun) => {
  return urun.category === "Sebze";
});
console.log(sebzeler);

/* -------------------------------------------------------------------------- */
/*                                  REDUCE                                */
/* -------------------------------------------------------------------------- */
// bir sayı dizisindeki sayıların toplamını hesaplamak istiyoruz:
const sayilar = [1, 18, 23, 45, 24, 6];
const toplam = sayilar.reduce((acc, sayim) => (acc += sayim));
console.log(toplam);

// Bir dizideki en büyük sayıyı bulan bir reduce() kullanımı yazın.
const buyuk = sayilar.reduce((acc, item) => (item > acc ? item : acc));
console.log(buyuk);

// Bir dizi içindeki çift sayıların toplamını hesaplayan bir reduce() kullanımı yazın.
const ciftSayilar = sayilar.reduce(
  (acc, item) => (item % 2 === 0 ? (acc += item) : acc),
  0
);
console.log(ciftSayilar);

// Bir dizideki tek sayıları yeni bir diziye alan bir reduce() kullanımı yazın.
const tekSayilar = sayilar.reduce(
  (acc, item) => (item % 2 === 1 ? acc.concat(item) : acc),
  []
);
console.log(tekSayilar);

const strings = ["Merhaba", "Dünya", "!"];
const birlestir = strings.reduce((acc, kelime) => (acc += kelime.length), 0);
console.log(birlestir);
