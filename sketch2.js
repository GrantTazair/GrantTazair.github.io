
let bubble1;
let xvel = 3
let yvel = 4
let score = 0
let scoreElm;
let bubbles = [];
function setup() {
  createCanvas(900, 600);
  bubble1 = {
    x: random(0, width),
    y: random(0, height),
    size: random(25, 40)
  };
  for (let i = 0; i< 8; i++) {
    let bubble = {
      x: random(0, width),
      y: random(0, height),
      size: random(10, 40),
      xvel: random(-3, 10),
      yvel: random( -4, 4),

  };

    bubbles.push(bubble);
}
  }

function draw() {
  background(0,255,130);
  textSize(24);
  text("score: "+ score, 20,40);
  fill(170);
  for ( let bubble of bubbles){
    if (score > 20 && bubble.size < 60){
      bubble1.size++;
      bubblex.size++;

    }
    circle(bubble.x, bubble.y, bubble.size);
    bubble.x += random(-2, 2);
    bubble.y += random(-2, 2);
     if (bubble.x >= width || bubble.x <= 0)
     {
         bubble.xvel = -bubble.xvel;
      }

       //if( bubble.y >= height || bubble.y <= 0)
     //if (bubble.x >= 460 || bubble.x <= -460)
     //if (bubble.y >= 460 || bubble.y <= -460)
  //{
    // xvel = -xvel;
    //yvel = -yvel;
//  }
  if (bubble.y >= height || bubble.y <= 0)
   bubble.yvel = -bubble.yvel;
   bubble.x += bubble.xvel;
   bubble.y += bubble.yvel;
  }
  bubble1.x=mouseX;
  bubble1.y=mouseY;
  fill ("#7D3C98");
  circle(bubble1.x, bubble1.y, bubble1.size);
  for (let i=0; i < bubbles.length; i++){
    let bubble = bubbles[i];
    let d=dist(bubble.x, bubble.y, bubble1.x, bubble1.y);
    if (d <= bubble1.size + bubble.size ){
      if(bubble1.size >= bubble.size){
        score++;
      bubbles.push({
            x: random(0, width),
            y: random(0, height),
            size: random(40),
            xvel: random(-3, 3),
            yvel: random(-4, 4)
        });
      }
      else{
        score--;
      }
      bubbles.splice(i, 1);
    }
  }
 }
