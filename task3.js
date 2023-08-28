let nama = "waldo walerian"
function name(nama) {
    return nama
}
console.log(name(nama))

function namaBesar(nama) {
    let upper = nama.toUpperCase();
    return upper;
}

console.log(namaBesar(nama))

function namaKecil(nama) {
    let lower = nama.toLowerCase();
    return lower;
}

console.log(namaKecil(nama));

function hurufPertama(nama) {
    let pertama = nama[0];
    return pertama;
}
console.log(hurufPertama(nama));

function potonganNama(nama) {
    let potongan = nama.slice(0, 6);
    return potongan;
}
console.log(potonganNama(nama));

function gabungan(nama) {
    let first = potonganNama(nama);
    let hasil = `${first}Love Javascript`;
    return hasil;
}
console.log(gabungan(nama));

function hurufTerakhir(nama) {
    let huruf = nama[nama.length - 1];
    return huruf;
}

console.log(hurufTerakhir(nama));

function change(age) {
    let newAge = parseInt(age);

    return newAge
}

console.log(change("19"));

function changeHeight(height) {
    let newHeight = parseFloat(height);
    return newHeight;
}

console.log(changeHeight(180.5));

num1 = 10;
num2 = 5;

function addition(num1, num2) {
    return console.log(num1 + num2);
}
let pertambahan = addition(num1, num2);

function subtraction(num1, num2) {
    return console.log(num1 - num2);
}
let pengurangan = subtraction(num1, num2);

let num3 = 6;
let num4 = 2;

function multipication(num1, num2) {
    return console.log(num3 * num4);

}

let perkalian = multipication(num3, num4);

function divide(num3, num4) {
    return console.log(num3 / num4);
}

let pembagian = divide(num3, num4);

let base = 3;
let exponent = 4;

function power(base, exponent) {
    let result = Math.pow(base, exponent)
    return console.log(result);
}
let pemangkatan = power(base, exponent);

let numbers = [5, 8, 12, 4, 6];
let hasil = 0;
function rataRata(numbers, hasil) {
    for (let i = 0; i < numbers.length; i++) {
        hasil += numbers[i];
    }
    hasil = hasil / numbers.length
    return hasil;
}
console.log(rataRata(numbers, hasil));

let num = 7;
function modulus(num) {
    if (num % 2 == 0) {
        console.log(num + " adalah bilangan genap");
    } else {
        console.log(num + " adalah bilangan ganjil");
    }
}
let modulo = modulus(num);

function random() {
    let rdm = Math.floor(Math.random() * 5 + 1);
    return rdm
}
console.log(random());


let celcius = 30;

function toFarenheit(celcius) {
    let result = (celcius * 9 / 5) + 32;
    return result;
}

let farenheit = toFarenheit(celcius);
console.log(`${celcius} celcius is ${farenheit} in fareheit`);

let dasar = 2;
let angkaPangkat = 4;

function thePowerOf(dasar, angkaPangkat) {
    let result = dasar ** angkaPangkat;
    return result;
}
console.log(thePowerOf(dasar, angkaPangkat));