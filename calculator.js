function calculator(num1,num2,option){
    if(option === "tambah"){
        return num1+num2;
    }
    else if(option === "kali"){
        return num1 * num2;
    }
    else if(option === "bagi"){
        return num1 / num2;
    }
    else if(option === "kurang"){
        return num1 - num2
    }
    else if(option === "pangkat"){
        let hasil = Math.pow(num1,num2);
        console.log(`${hasil} == > input pertama adalah base , input kedua adalah exponentnya`); 
    }
    else{
        return null;
    };
};
console.log(calculator(6,2,"tambah"));
console.log(calculator(6,2,"kali"));
console.log(calculator(6,2,"bagi"));
console.log(calculator(6,2,"kurang"));
console.log(calculator(6,2,"pangkat"));