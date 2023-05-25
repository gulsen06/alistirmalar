let rastgeleSayi = Math.ceil(Math.random() * 10);
let sayi = +prompt(
  "1 ile 10 arasinda bir sayi sectim. lütfen tahmininizi giriniz: "
);
rastgeleSayi === sayi
  ? console.log("tebrikler  " + rastgeleSayi + "  sayisi dogru tahmin")
  : console.log(`Yanlis tahmin. Lütfen tekrar deneyiniz`);
