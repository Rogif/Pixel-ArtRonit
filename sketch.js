let DRAW_COLOR = 'red';
let BACKGROUND_COLOR = 'white';
let CURRENT_COLOR = BACKGROUND_COLOR;

function setup() {
  createCanvas(400, 400);
  background(BACKGROUND_COLOR);
}

function draw() {

}

function mousePressed(event) {
  if (CURRENT_COLOR === BACKGROUND_COLOR) {
    CURRENT_COLOR = DRAW_COLOR;
  }
  else {
    CURRENT_COLOR = BACKGROUND_COLOR;
  }
  fill(CURRENT_COLOR);
  rect(0, 0, 50, 50);
  console.log('mousePressed', event)
}
