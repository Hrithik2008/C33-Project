const Engine = Matter.Engine,
    World = Matter.World,
    Events = Matter.Events,
    Bodies = Matter.Bodies;

var particle,
    particles = [],
    count = 0,
    gameState = "start";
var plinkos = [];
var divisions = [];

var divisionHeight = 300;
var score = 0,
    scoreText;
function setup() {
    createCanvas(800, 800);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(width / 2, height, width, 20);
    for (var k = 0; k <= width; k = k + 80) {
        divisions.push(new Divisions(k, height - divisionHeight / 2, 10, divisionHeight));
    }
    for (var j = 75; j <= width; j = j + 50) {

        plinkos.push(new Plinko(j, 75));
    }

    for (var j = 50; j <= width - 10; j = j + 50) {

        plinkos.push(new Plinko(j, 175));
    }

    for (var j = 75; j <= width; j = j + 50) {

        plinkos.push(new Plinko(j, 275));
    }

    for (var j = 50; j <= width - 10; j = j + 50) {

        plinkos.push(new Plinko(j, 375));
    }
    particle = null;
}


function draw() {
    background("black");
    if (gameState === "play") {
        textSize(20);
        textAlign(LEFT);;
        text("Score : " + score, 20, 30);
        text("Count : " + count, 700, 30);
        textSize(40);
        Engine.update(engine);

        for (var i = 0; i < plinkos.length; i++) {

            plinkos[i].display();

        }

        for (var j = 0; j < particles.length; j++) {

            particles[j].display();
        }
        for (var k = 0; k < divisions.length; k++) {

            divisions[k].display();
        }
        if (count >= 5) {
          push();
          textSize(100);
          textAlign(CENTER);
          fill(255,0,0,300);
          text("GAME OVER", 400, 400);
          pop();
        }
        if (particle !== null) {

            var pos = particle.body.position;

            if (pos.y > 750) {

                if (pos.x > 0 && pos.x < 80) {
                    score = score + divisions[0].scoreValue;
                    particle = null;
                }

                if (pos.x > 81 && pos.x < 160) {
                    score = score + divisions[1].scoreValue;
                    particle = null;
                }

                if (pos.x > 161 && pos.x < 240) {
                    score = score + divisions[2].scoreValue;
                    particle = null;
                }

                if (pos.x > 241 && pos.x < 320) {
                    score = score + divisions[3].scoreValue;
                    particle = null;
                }

                if (pos.x > 321 && pos.x < 400) {
                    score = score + divisions[4].scoreValue;
                    particle = null;
                }

                if (pos.x > 401 && pos.x < 480) {
                    score = score + divisions[5].scoreValue;
                    particle = null;
                }

                if (pos.x > 481 && pos.x < 560) {
                    score = score + divisions[6].scoreValue;
                    particle = null;
                }

                if (pos.x > 561 && pos.x < 640) {
                    score = score + divisions[7].scoreValue;
                    particle = null;
                }

                if (pos.x > 641 && pos.x < 720) {
                    score = score + divisions[8].scoreValue;
                    particle = null;
                }

                if (pos.x > 721 && pos.x < 800) {
                    score = score + divisions[9].scoreValue;
                    particle = null;
                }

            }
        }
    }

    // console.log(mouseX,mouseY);
    if (gameState === "start") {
        textSize(80);
        fill(255);
        textAlign(CENTER);
        text("Plinko", 400, 75);
        // fill(255);
        text("Press S to start", 400, 200);
    }
}

function mousePressed() {
    if (gameState === "play") {
        particle = new Particle(mouseX, 10, 10);
        particles.push(particle);
        count++;
    }
}

function keyPressed() {
    if (gameState === "start") {
        if (keyCode === 83) {
            gameState = "play";
        }
    }
    if(keyCode === 32){
      if(count >= 5){
        score = 0;
        particle = null;
        particles =[];
        count = 0;
      }
    }
}
