const marvel_heroes = ["thor","Ironman" , "spiderman"]
//array can take any type of data
const dc_heroes = ["superman" , "flash" , "batman"]

// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);

// const all_heroes = marvel_heroes.concat(dc_heroes)
// console.log(all_heroes);

//spread operator is used ...
const all_new_heroes = [...marvel_heroes , ...dc_heroes]

// console.log(all_new_heroes);
//below is the process to flat the array solves the problem arrary inside array by flatting it
const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)

console.log(real_another_array);


console.log(Array.isArray("vivek"));
console.log(Array.from("Vivek"));
//from convert the into array

console.log(Array.from({name: "Vivek"}));//Interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1 , score2 , score3));