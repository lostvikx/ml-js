function setup() {
    createCanvas(600, 400);
}

function draw() {
    // Landscape sketch
    background("skyblue");

    // Sun object
    fill("yellow");
    stroke("orange");
    strokeWeight(20);
    circle(550, 50, 100);

    // Grass object
    fill("green");
    stroke(0);  // Reset the stroke and strokeWeight
    strokeWeight(1);
    rect(0, 200, 600, 200);

    // Emojis
    textSize(75);
    text("🌸", 100, 250);
    text("🐞", mouseX, mouseY);
}
