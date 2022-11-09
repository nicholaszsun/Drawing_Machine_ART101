let x = 15

function setup() {
  createCanvas(600, 600);
  background(220);
}

function keyTyped() {
  if (key == ']') {
    x = x + 15; //if I press ] my brush will go up by 15
  } else {
    (key == '[');
    x = x - 15; //if I press [ my brush will go down by 15
    // } else if (x < 0) {
    //   console.log('too small')
    // }
  }
}
function draw() {
  strokeWeight(x); //adjust the strokeweight by pressing right bracket
  if (mouseIsPressed) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}
