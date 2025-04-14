let slider;
let myInput;
let strokeWeightSlider;
let colourPicker;

function setup(){
createCanvas(500,500);

// slider = createSlider(0,255);
// slider.position(10,10);
// slider.size(150);

colourPicker = createColorPicker('cornflowerblue');

strokeWeightSlider = createSlider(1,10,5,1)

// tutorial from https://p5js.org/reference/p5/input/
myInput = createInput('enter answer here');
myInput.position(9,550);

//tutorial from https://p5js.org/reference/p5/createButton/
let button = createButton('random')
button.position(190, 550)

button.mousePressed(repaint);

// var bgColorButton = createButton('Refresh');
// bgColorButton.position(190, 550);

// let g = slider.value();
background("pink");

}




function draw(){
// background('pink');

// let g = slider.value();
// background(g);

strokeWeight (strokeWeightSlider.value() );
stroke(colourPicker.value());

// tutorial from https://p5js.org/examples/animation-and-variables-drawing-lines/
if (mouseIsPressed === true){
    line(pmouseX, pmouseY, mouseX, mouseY);
}
}

// function mouseDragged(){
//     line(pmouseX, pmouseY, mouseX, mouseY);

// }
// 
function repaint(){
    let g = random(255);
    background (g);
}