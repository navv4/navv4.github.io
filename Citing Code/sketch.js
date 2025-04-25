
var tim1;
var tim2;
var tim3;
let clickCount = 0;
let angryStartTime = 0;
let isAngry = false;



function setup(){
    createCanvas (windowWidth, windowHeight);
    imageMode(CENTER)
    // image load tutorial from: https://p5js.org/reference/p5/loadImage/ ===========
    tim1 = loadImage('TimHappy.jpg');
    tim2 = loadImage('TimPoked.jpg');
    tim3 = loadImage('TimAngry.jpg');
//===================================================================================
}

function draw(){
    background ('pink');
    
// millis tutorial from: https://p5js.org/reference/p5/millis/ =================
    if (isAngry) {
        if (millis() - angryStartTime < 3000) {  
// =============================================================================
          image(tim3, width/2, height/2, 300, 300);
        } else {
          isAngry = false; // Reset angry state
          clickCount = 0;
    image(tim1,width/2, height/2, 300, 300);
        }

// mouse is pressed tutorial from:https://p5js.org/reference/p5/mouseIsPressed/ =====

    } else if (mouseIsPressed) {
        image(tim2, width/2, height/2, 300, 300);
      } else {
        image(tim1, width/2, height/2, 300, 300);
      }

// ==================================================================================      

    // tim1.onclick = function(){
    //     image(tim2, width/2, height/2, 300, 300);
    // }

}


//tutorial retrieved from: https://youtu.be/DEHsr4XicN8?si=1uWELcQNDpHhESp7 ==================
function mousePressed(){
    clickCount++
    console.log("Click:", clickCount);

    if (clickCount === 10) {
        angryStartTime = millis();
        isAngry = true;
      }
}
//==============================================================================================

function windowResized(){
    resizeCanvas(windowWidth,windowHeight);
    
}


