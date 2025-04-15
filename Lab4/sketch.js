var jumble;
var people;


function setup(){
    createCanvas(windowWidth, windowHeight); 
    imageMode(CENTER);
    jumble = createVideo('Talking7.mp4');
    jumble.volume(0);
    jumble.play();
    jumble.loop();
    jumble.hide();

    // video.showControls();

    people = createImg('verbalcommunication02.jpg');
    people.hide();
}


function draw(){

background ('black')

image(jumble, 190,150,400,300);

image(people,500,500,450,350);

}