

const fruits = ["apple", "grape", "banana"]; 

const count = fruits.push("pear");
console.log(count);

console.log(fruits);

fruits.push("orange", "guava", "mango", "cherry");
console.log(fruits);


for (let i = 0; i < fruits.length; i++) {
    console.log(`Fruit ${i + 1}: ${fruits[i]}`);
}

function setup(){
    createCanvas(windowWidth, windowHeight);

}


function draw(){
    background('pink');

}