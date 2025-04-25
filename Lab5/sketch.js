let circleColor;

function setup() {
    createCanvas(400, 400);
    
    // Check if a color is saved in localStorage
    let savedColor = localStorage.getItem('circleColor');
    if (savedColor) {
        circleColor = color(savedColor); 
    } else {
        circleColor = color(255, 0, 0); 
    }
}

function draw() {
    background(220);
    fill(circleColor);
    ellipse(width / 2, height / 2, 100, 100); 
}

function changeColor() {
    circleColor = color(random(255), random(255), random(255));
    
    localStorage.setItem('circleColor', circleColor.toString());
}

//reference from: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage