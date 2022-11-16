// This drawing machine will pull from an api in which will give the user a random
// topic to draw. As they draw the brush size will start increasing in which the
// user will have to finish before the brush size is too big for the canvas.
let bsize = 5;
let saveBtn;
let newBtn;
let cnv;
let pg;

function setup() {
  cnv = createCanvas(600, 600);
  cnv.class("canvclss");
  cnv.id("canvid");
  cnv.parent("canvid");

  saveBtn = select("#action_2");
  saveBtn.mousePressed(actsaveBtn);

  newBtn = select("#action_1");
  newBtn.mousePressed(actnewBtn);
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

function actsaveBtn(){
  saveCanvas('file name', 'png');
}
function actnewBtn(){
  clear();
}
