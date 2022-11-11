// This drawing machine will pull from an api in which will give the user a random
// topic to draw. As they draw the brush size will start increasing in which the
// user will have to finish before the brush size is too big for the canvas.
let bsize = 5;

function setup() {
  createCanvas(600, 600);
  background(255);
}

function keyTyped() {
  if (key == ']') { //Adust Brush Size
    bsize = bsize + 5; //if I press ] my brush will go up by 5
  }
  if (key == "[") {
    bsize = bsize - 5; //if I press [ my brush will down up by 5
  }
  if (bsize < 5) {    //if I press [ beyond 0 my brush will remain as 5
    bsize = 5;
  }
  if (key == 's') {
    saveCanvas('file name', 'png');
  }
}

function draw() {
  strokeWeight(bsize); //adjust the strokeweight by pressing right bracket
  if (mouseIsPressed) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}
