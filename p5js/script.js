// Javascript goes here

function setup() {
    createCanvas(windowWidth, windowHeight);
  }
  
  function draw() {
    // Draw the gradient sky
    for (let y = 0; y < height / 2; y++) {
      let inter = map(y, 0, height / 2, 0, 1);
      let c = lerpColor(color(255, 94, 77), color(44, 62, 80), inter);
      stroke(c);
      line(0, y, width, y);
    }
    
    // Draw the ocean
    for (let y = height / 2; y < height; y++) {
      let inter = map(y, height / 2, height, 0, 1);
      let c = lerpColor(color(44, 62, 80), color(22, 160, 133), inter);
      stroke(c);
      line(0, y, width, y);
    }
    
    // Draw the sun
    let sunY = height / 2 + sin(frameCount * 0.02) * 10;
    fill(255, 204, 0);
    noStroke();
    ellipse(width / 2, sunY, 80, 80);
  }
  
  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }