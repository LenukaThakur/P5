function preload(){

}

function setup(){
    createCanvas(400, 350);
    video=createCapture(VIDEO)
    video.hide()
}

function draw(){
    fill("red")
    circle(0, 0, 50);
    fill("red")
    circle(400, 0, 50);
    fill("red")
    circle(0, 350, 50);
    fill("red")
    circle(400, 350, 50);
    fill("green")
    rect(20, 20, 360, 310);
    fill("blue")
    rect(40, 40, 320, 270);
    image(video,60, 60, 200, 150);

}

function take_snapshot(){
    save("selfie.png")
    }