// function toFarenheit(celcius) {
//     let result = (celcius * 9 / 5) + 32;
//     return result;
// }

toFarenheit = celcius => { return (celcius * 9 / 5) + 32; };

console.log(`${toFarenheit(30)}==> arrow function`);

function curryFarenheit(a){
    return function(b){
        return (b * 9 /5) + 32;
    }
}

let varOne = curryFarenheit();
console.log(`${varOne(30)} ==> currying function`);

calculator = (num1,num2,option) => {
    if (isNaN(num1,num2)) {
        return console.log("please input a number");
    }else{
        if (option === "tambah") {
            return num1 + num2;
        }
        else if (option === "kali") {
            return num1 * num2;
        }
        else if (option === "bagi") {
            return num1 / num2;
        }
        else if (option === "kurang") {
            return num1 - num2
        }
        else if (option === "pangkat") {
            let hasil = Math.pow(num1, num2);
            console.log(`${hasil} == > input pertama adalah base , input kedua adalah exponentnya`);
        }
        else {
            return null;
        };
    }

};
console.log(calculator(6, 2, "tambah"));
console.log(calculator(6, 2, "kali"));
console.log(calculator(6, 2, "bagi"));
console.log(calculator(6, 2, "kurang"));
console.log(calculator(6, 2, "pangkat"));
console.log(calculator(2, 2, "tambah"));