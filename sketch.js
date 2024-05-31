let DRAW_COLOR = 'red';
let BACKGROUND_COLOR = 'white';
let currentColors = [];
let CANVAS_WIDTH = 400;
let CANVAS_HEIGHT = 400;
let PIXEL_RESOLUTION_WIDTH = 10;
let PIXEL_RESOLUTION_HEIGHT = 10;

function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  currentColors = new Array(PIXEL_RESOLUTION_WIDTH).fill().map(() => new Array(PIXEL_RESOLUTION_HEIGHT).fill(BACKGROUND_COLOR));
  background(BACKGROUND_COLOR);
  for (let i = 0; i < PIXEL_RESOLUTION_WIDTH; i++) {
    for (let j = 0; j < PIXEL_RESOLUTION_HEIGHT; j++) {
      rect(i * (CANVAS_WIDTH / PIXEL_RESOLUTION_WIDTH), j * (CANVAS_HEIGHT / PIXEL_RESOLUTION_HEIGHT), (CANVAS_WIDTH / PIXEL_RESOLUTION_WIDTH), (CANVAS_HEIGHT / PIXEL_RESOLUTION_HEIGHT));
    }
  }
}

function draw() {

}

function mouseClicked(event) {
  let pixelX = Math.floor(mouseX / (CANVAS_WIDTH / PIXEL_RESOLUTION_WIDTH));
  let pixelY = Math.floor(mouseY / (CANVAS_HEIGHT / PIXEL_RESOLUTION_HEIGHT));
  console.log(currentColors);
  if (currentColors[pixelX][pixelY] === BACKGROUND_COLOR) {
    currentColors[pixelX][pixelY] = DRAW_COLOR;
  }
  else {
    currentColors[pixelX][pixelY] = BACKGROUND_COLOR;
  }

  fill(currentColors[pixelX][pixelY]);
  rect(pixelX * (CANVAS_WIDTH / PIXEL_RESOLUTION_WIDTH), pixelY * (CANVAS_HEIGHT / PIXEL_RESOLUTION_HEIGHT), (CANVAS_WIDTH / PIXEL_RESOLUTION_WIDTH), (CANVAS_HEIGHT / PIXEL_RESOLUTION_HEIGHT));
}
