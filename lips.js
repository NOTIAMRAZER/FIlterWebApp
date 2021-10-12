noseX = 0;
noseY = 0;

function preload(){
    lips = loadImage('lips.png');
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("PoseNet is initalized");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x - 18;
        noseY = results[0].pose.nose.y + 17;
    }
}

function draw(){
    image(video, 0, 0, 300, 300);
    image(lips, noseX, noseY, 40, 30);
}

function take_snapshot(){
    save('MyFilterImage.png');
}