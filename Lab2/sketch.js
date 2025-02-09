var pong = {
    x:0,
    y:0,
    w:60,
    h:60,
    xSpeed: 6,
    ySpeed: 5,
    colour: 'white',
    draw: function(){
        fill(pong.colour);
        circle(pong.x+pong.w/2,pong.y+pong.h/2,pong.w,pong.h)
    },
    move: function(){
        pong.x += pong.xSpeed;
        pong.y += pong.ySpeed;
    
        if(pong.x < 0 || pong.x > width - pong.w){
            pong.xSpeed *= -1;
        }

        if(pong.y > height - pong.h || pong.y < 0){
            pong.ySpeed *= -1;
        }


     }   
};


function setup(){
    createCanvas(windowWidth,windowHeight);
}

function draw(){
    background('#0d104a');
    pong.draw();
    pong.move();
}