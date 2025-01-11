const id =  "surya"
//console.log(id + "value");
console.log(`hello my name is ${id}`);

const game = new String(`suryansh`)
console.log(game.length)
console.log(game.toUpperCase());

console.log(game.charAt(5));
console.log(game.indexOf('x'));

console.log(game.substring(0,5));// gives only substring till 0 to 4 or 0 to N-1
 const newgame = game.slice(-8,4)
 console.log(newgame);
 

 //------FOR INPUT FORMS-----

 const str ="     surya   "
 console.log(str.trim());
 console.log(str);
 


 const url = "https://surya.com/surya%23aura"
 console.log(url.replace('%23','-'));
 

 console.log(url.includes('hiii'));
  // SPLLLITING AN STRING INTO AN ARRAY
    
  const ar = "MY NAME IS SURYA"
console.log(ar.split(' '));
