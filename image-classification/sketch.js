let classifier;
let img;

let prediction = {
    "label": "Predicting...",
    "confidence": 0.0
}

function gotResults(results) {
    console.log(results);
    prediction["label"] = results[0]["label"];
    prediction["confidence"] = results[0]["confidence"];

    // Display the results.
    let c = color(0, 0, 0);
    c.setAlpha(150);
    fill(c);
    rect(0, 450, 500, 50);

    fill(255);
    textSize(28);
    noStroke();
    textAlign(CENTER, CENTER);
    text(prediction["label"], width/2, 469);

    textSize(16);
    noStroke();
    textAlign(CENTER, CENTER);
    text(`Confidence: ${prediction["confidence"].toFixed(4)}`, width/2, 490);
}

function imageReady() {
    image(img, 0, 0, width, height);
    classifier.classify(img, gotResults);
}

function gotFile(file) {
    if (file.type == "image") {
        img = loadImage(file.data, imageReady);
    } else {
        console.log("Drop a valid image file.");
    }
}

function preload() {
    classifier = ml5.imageClassifier("MobileNet");
}

function setup() {
    let canvas = createCanvas(500, 500);
    canvas.drop(gotFile);

    background(0);
    fill(255);
    noStroke();
    textSize(24);
    textAlign(CENTER);
    text("Drag & drop an image file.", width/2, height/2);
}

function draw() {}
