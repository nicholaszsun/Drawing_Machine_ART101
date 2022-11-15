// This drawing machine will pull from an api in which will give the user a random
// topic to draw. As they draw the brush size will start increasing in which the
// user will have to finish before the brush size is too big for the canvas.
let bsize = 5;
let savedrawing;
let newproject;
let cnv;

function downloadtopc(){
  saveCanvas('file name', 'png');
}
function resetthecanvas(){
  clear();
}

function setup() {
  cnv = createCanvas(600, 600);
  cnv.parent("#canvasDiv");
  background(255);

  //Save Button
  // savedrawing = createButton("Save");
  // savedrawing.mousePressed(downloadtopc);
  // savedrawing.class("sv_button");
  //New Project Button
  newproject = createButton("New Project");
  newproject.mousePressed(resetthecanvas);
  newproject.class("np_button");
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
}

function draw() {
  strokeWeight(bsize); //adjust the strokeweight by pressing right bracket
  if (mouseIsPressed) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}
