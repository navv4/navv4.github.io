var x=10;
var y=10;

function setup() {
    createCanvas(800,500);
}

function draw(){
background('#ADD8E6')
ellipse(x,y,80,40);
x = x + 5;
x = x % 800;
y = 300 ;
y = y % 500;


}