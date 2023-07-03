img="";
var status="";
function preload(){
    img=loadImage("dog_cat.jpg");
}
function setup(){
     canvas=createCanvas(640,420);
     canvas.center();
     objectDetector=ml5.objectDetector('cocossd',modelLoaded);
     document.getElementById("status").innerHTML="Status: objects are geting detected";
}
function modelLoaded(){
    console.log("modelLoaded")
    status = true;
    objectDetector.detect(img,gotResult);
}
function gotResult(error,results){
    if(error){
        console.log(error);
    }
    else{
    console.log(results);
    }
}
function draw(){
    image(img,0,0,640,420);
    rect(50,50,450,350);
    fill("#2e91b8");
    stroke("#2e91b8");
    text("dog",30,50);
    noFill();

    rect(50,50,250,350);
    fill("#a10c06");
    stroke("#a10c06");
    text("cat",280,50);
    noFill();
}