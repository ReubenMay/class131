img="";
var status="";
objects=[];
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
    objects=results;
    }
}
function draw(){
    image(img,0,0,640,420);
    if(status!=""){
        for(i=0;i<objects.length;i++){
        document.getElementById("status").innerHTML="Status : object detected ";
        fill("#04288a");
        percent = floor(objects[i].confidence * 100);
        text(objects[i].label+""+percent+"%",objects[i].x,objects[i].y);
        noFill();
        rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
        stroke("#04288a");
        }
    }
}