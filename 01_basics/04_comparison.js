console.log("2">1)// true
console.log("02">1)//true automatically converted into number

// == is  equality check and compasrison (>.<,<=,>=)  work differently ---> comparison convert null to a number thats why in case 3 its giving true
console.log(null>0);//false
console.log(null==0)//false
console.log(null>=0);//true


console.log(undefined==0)//false
console.log(undefined>0)//false
console.log(undefined<0);//false
console.log(undefined>=0);//false


// === -----> compare on the basis of value as well as datatype
console.log("2"===2);
