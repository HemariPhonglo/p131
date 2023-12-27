img="";
status="";

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}
function preload(){
    img = loadImage('bed.jpg');
    }
    function draw(){
        image(img, 0, 0, 640, 420);
        fill("yellow");
        text("dog", 45, 75);
        noFill();
        stroke("yellow");
        rect(30, 60, 450, 350);
    
        fill("red");
        text("cat", 320, 120);
        noFill();
        stroke("green");
        rect(300, 90, 270, 320);
    }