let DRAW_COLOR = 'red';
let availableColors = ['red', 'green', 'blue', 'yellow', 'black'];
let BackColor = 'white';
let currentColors = [];
let CANVAS_WIDTH = 400;
let CANVAS_HEIGHT = 400;
let PIXEL_RESOLUTION_WIDTH = 10;
let PIXEL_RESOLUTION_HEIGHT = 10;
let resetButton;

function setup() {
  var canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  canvas.parent('daddy');
  currentColors = new Array(PIXEL_RESOLUTION_WIDTH).fill().map(() => new Array(PIXEL_RESOLUTION_HEIGHT).fill(BackColor));
  background(BackColor);
  for (let i = 0; i < PIXEL_RESOLUTION_WIDTH; i++) {
    for (let j = 0; j < PIXEL_RESOLUTION_HEIGHT; j++) {
      rect(i * (CANVAS_WIDTH / PIXEL_RESOLUTION_WIDTH), j * (CANVAS_HEIGHT / PIXEL_RESOLUTION_HEIGHT), (CANVAS_WIDTH / PIXEL_RESOLUTION_WIDTH), (CANVAS_HEIGHT / PIXEL_RESOLUTION_HEIGHT));
    }
  }
  // create reset button
  resetButton = createButton('Reset');
  resetButton.parent('daddy');
  resetButton.position(150, CANVAS_HEIGHT + 70);
  resetButton.mousePressed(resetCanvas);
}

function resetCanvas() {
  currentColors = new Array(PIXEL_RESOLUTION_WIDTH).fill().map(() => new Array(PIXEL_RESOLUTION_HEIGHT).fill(BackColor));
  background(BackColor);
  for (let i = 0; i < PIXEL_RESOLUTION_WIDTH; i++) {
    for (let j = 0; j < PIXEL_RESOLUTION_HEIGHT; j++) {
      fill(BackColor); // Set the fill color to BackColor
      rect(i * (CANVAS_WIDTH / PIXEL_RESOLUTION_WIDTH), j * (CANVAS_HEIGHT / PIXEL_RESOLUTION_HEIGHT), (CANVAS_WIDTH / PIXEL_RESOLUTION_WIDTH), (CANVAS_HEIGHT / PIXEL_RESOLUTION_HEIGHT));
    }
  }
}

function draw() {

}

function chooseRandomColor() {
  return availableColors[Math.floor(Math.random() * availableColors.length)];
}

function mouseClicked(event) {
  let pixelX = Math.floor(mouseX / (CANVAS_WIDTH / PIXEL_RESOLUTION_WIDTH));
  let pixelY = Math.floor(mouseY / (CANVAS_HEIGHT / PIXEL_RESOLUTION_HEIGHT));
  console.log(currentColors);
  if (currentColors[pixelX][pixelY] === BackColor) {
    DRAW_COLOR = chooseRandomColor();
    currentColors[pixelX][pixelY] = DRAW_COLOR;
  }
  else {
    currentColors[pixelX][pixelY] = BackColor;
  }

  fill(currentColors[pixelX][pixelY]);
  rect(pixelX * (CANVAS_WIDTH / PIXEL_RESOLUTION_WIDTH), pixelY * (CANVAS_HEIGHT / PIXEL_RESOLUTION_HEIGHT), (CANVAS_WIDTH / PIXEL_RESOLUTION_WIDTH), (CANVAS_HEIGHT / PIXEL_RESOLUTION_HEIGHT));
}

function keyPressed() {
  if (key == 's') {
    saveCanvas('photo', 'jpg');
  }
}

