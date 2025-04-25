

const fruits = ["apple", "grape", "banana"]; 

const count = fruits.push("pear");
console.log(count);

console.log(fruits);

fruits.push("orange", "guava", "mango", "cherry");
console.log(fruits);


// for (let i = 0; i < fruits.length; i++) {
//     console.log(`Fruit ${i + 1}: ${fruits[i]}`);
// }

function setup(){
    createCanvas(windowWidth, windowHeight);
    textSize(24);
    fill(0);
}


function draw(){
    background('pink');

    for (let i = 0; i < fruits.length; i++) {
        text(`${i + 1}. ${fruits[i]}`, 50, 50 + i * 30);
    }
}

//Tutorials remixed from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
// and: https://p5js.org/reference/p5/for/