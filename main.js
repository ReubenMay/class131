img="";
function preload(){
    img=loadImage("dog_cat.jpg");
}
function setup(){
     canvas=createCanvas(640,420);
     canvas.center();
}
function draw(){
    image(img,0,0,640,420);
    rect(50,50,450,350);
    fill("#2e91b8");
    stroke("#2e91b8");
    text("dog",30,50);
    noFill();
}