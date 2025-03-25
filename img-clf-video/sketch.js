let classifier;

let prediction = {
    "label": "Predicting...",
    "confidence": 0.0
}

function gotResults(results) {
    prediction["label"] = results[0]["label"];
    prediction["confidence"] = results[0]["confidence"];
}

function preload() {
    classifier = ml5.imageClassifier("MobileNet");
}

function setup() {
    createCanvas(640, 480);
    capture = createCapture(VIDEO);
    capture.hide();

    classifier.classifyStart(capture, gotResults);
}

function draw() {
    background(220);
    image(capture, 0, 0, width, height);
    
    let c = color(0, 0, 0);
    c.setAlpha(150);
    fill(c);
    rect(0, 430, width, 50);

    fill(255);
    textSize(28);
    noStroke();
    textAlign(CENTER, CENTER);
    text(prediction["label"], width/2, 450);

    textSize(16);
    noStroke();
    textAlign(CENTER, CENTER);
    text(`Confidence: ${prediction["confidence"].toFixed(4)}`, width/2, 470);
}
