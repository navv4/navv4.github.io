//I put the references at the bottom because they all mix together

let input, button, slider;
let story = "You are at the OCAD elevator. You can go to floors 2-6.";
let fontSize = 20;
let log = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont('monospace');
  
  input = createInput();
  input.position(20, 20);
  
  button = createButton("ENTER");
  button.position(input.x + input.width + 10, 20);
  button.mousePressed(handleCommand); 
  
  slider = createSlider(12, 32, 18);
  slider.position(20, 60);
  
  log.push(story);
}

function draw() {
  background(30);
  textSize(slider.value());
  fill(255);
  textAlign(LEFT, TOP);

  let displayText = log.slice(-10).join("\n"); 
  text(displayText, 20, 100);
}

function handleCommand() {
  const command = input.value().toLowerCase();
  log.push("> " + command);
  input.value('');
  respondToCommand(command);
}

function respondToCommand(cmd) {
  if (cmd === "go to floor 2") {
    log.push("You see people setting up an exhibition in the great hall");
  } else if (cmd === "go to floor 3") {
    log.push("you see people tirelessly making prints in the screenprinting studio");
  } else if (cmd === "go to floor 4") {
    log.push("people are set up with tripods and cameras, they seem to be doing a photoshoot.");
  } else if (cmd === "go to floor 5") {
    log.push("It is empty and desolate.");
  } else if (cmd === "go to floor 6") {
    log.push("You see someone hunched over trying to make a crappy text adventure game.");
  } else if (cmd === "help") {
    log.push("Try commands like: go to floor 2, go to floor 3, go to floor 4, etc.");
  } else {
    log.push("Answer not understood. Type 'help' if you're stuck.");
  }
}

function keyPressed() {
  if (keyCode === ENTER) {
    handleCommand();
  }
}

//code remixed from a couple sources:
// DOM GUI: https://youtu.be/587qclhguQg?si=20RQh_GxWcKUkQZo
// https://youtu.be/HsDVz2_Qgow?si=tiQ0Q-zm2F8f7LQC
// text adventure: https://editor.p5js.org/cgberry/sketches/POFi65HT1
// https://editor.p5js.org/hosken/sketches/m1j3x42xF