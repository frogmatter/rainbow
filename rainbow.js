var count,r,g,b;

function setup() {
  createCanvas(400,400);
  //frameRate(20);
  noStroke();
}

function draw() {
  count = 0;
  for(r=0;r<256;r++){
    for(g=0;g<256;g++){
      //for(b=0;b<255;b++){
      fill(r,g,0);
      rect(r,g,30,30);
      //triangle(r,200,g,200,b,200);
      //}
    }
  }
}
