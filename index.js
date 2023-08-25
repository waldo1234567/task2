console.log("====MANIPULASI STRING====");

let nama = "Waldo Walerian";
console.log(nama + " ==> NAMA");

console.log(nama.length + " ==> PANJANG NAMA");

let upperNama = nama.toUpperCase();
console.log(upperNama + " ==> UPPERCASE");

let lowerNama = nama.toLowerCase();
console.log(lowerNama + " ==> LOWERCASE");

console.log(nama[0] + " ==> HURUF PERTAMA");

let potongan = nama.slice(0,6);
console.log(potongan + " ==> POTONGAN NAMA");

console.log(potongan + "Love Javascript ==> GABUNGAN");

let lastChar = nama[nama.length-1];
console.log(lastChar + " ==> HURUF TERAKHIR");

console.log("====MENGUBAH TIPE DATA====");

let umur = "19";

console.log(parseInt(umur) + " ==> MENJADI INTEGER");

let tinggi = "180.5";

console.log(parseFloat(tinggi) + " ==> MENJADI FLOAT");

console.log("====PENGECEKAN TIPE DATA====");

let data = true;

console.log(typeof data + " ==> TIPE DATA");

console.log("====PENJUMLAHAN DAN PENGURANGAN====");

let num1 = 10;
let num2 = 5;
console.log((num1 + num2) + " ==> PENJUMLAHAN");
console.log((num1 - num2) + " ==> PENGURANGAN");

console.log("====PERKALIAN DAN PEBAGIAN====");

let num3 = 6;
let num4 = 2;

console.log((num3 * num4) + " ==> PERKALIAN");
console.log((num3 / num4) + " ==> PEMBAGIAN");

console.log("====PANGKAT BILANGAN====");

let base = 3;
let exponent = 4;

console.log(Math.pow(3,4) + " ==> PEMANGKATAN");

console.log("====RATA-RATA DARI ARRAY====");

let numbers = [5,8,12,4,6];
let hasil = 0;
for(let i = 0; i < numbers.length ; i++){
    hasil += numbers[i];   
}
hasil = hasil/numbers.length
console.log(hasil);

console.log("====BILANGAN GANJIL ATAU GENAP====");

let num = 7;
if(num %2 == 0){
    console.log(num + " adalah bilangan genap");
}else{
    console.log(num + " adalah bilangan ganjil");
}

console.log("====BILANGAN RANDOM 1-5====");

let rdm = Math.floor(Math.random() * 5 + 1);
console.log(rdm + " ==> BILANGAN RANDOM");