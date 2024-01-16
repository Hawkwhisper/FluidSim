const logicFrameRate = 60; // Set your desired logic frame rate
const frameTime = 1000 / logicFrameRate; // Time per frame in milliseconds

let lastTime = 0;
let lag = 0;

function appLoop(timestamp) {
  const deltaTime = timestamp - lastTime;
  lastTime = timestamp;

  lag += deltaTime;

  while (lag >= frameTime) {
    updateLogic();
    lag -= frameTime;
  }

  // Update visuals at the browser's frame rate
  updateVisuals();

  // Request the next frame
  requestAnimationFrame(appLoop);
}

function updateLogic() {
}

function updateVisuals() {
}

// Start the app loop
requestAnimationFrame(appLoop);
