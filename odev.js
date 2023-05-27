// let rastgeleSayi = Math.ceil(Math.random() * 10);
// let sayi = +prompt(
//   "1 ile 10 arasinda bir sayi sectim. lütfen tahmininizi giriniz: "
// );
// rastgeleSayi === sayi
//   ? console.log("tebrikler  " + rastgeleSayi + "  sayisi dogru tahmin")
//   : console.log(`Yanlis tahmin. Lütfen tekrar deneyiniz`);

let rastgeleSayi = Math.trunc(Math.random() * 10);
let sayi = +prompt(
  "1 ile 10 arasinda bir sayi sectim. lütfen tahmininizi giriniz: "
);
for (let i = 1; i <= 10; i++) {
  rastgeleSayi !== sayi
    ? (sayi = +prompt(
        "1 ile 10 arasinda bir sayi sectim. lütfen tahmininizi giriniz: "
      ))
    : console.log("tebrikler  " + rastgeleSayi + "  sayisi dogru tahmin");
}
