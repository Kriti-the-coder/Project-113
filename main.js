 function preload(){

  }

 function setup(){
  canvas = createCanvas(610,480);
  canvas.position(110,250);
  video = createCapture(VIDEO);
  video.hide();
 }

 function draw(){
    image(video,210,130,220,220);
    fill(255,0,0)
    stroke(255,0,0)
    circle(40, 40, 70);
    circle(40,440,70);
    circle(570, 40, 70);
    circle(570,440,70);

    fill(0,255,0)
    stroke(0,255,0)
    rect(30,75,20,330)
    rect(560,75,20,330)
    rect(76,430,460,20)
    rect(76,33,460,20)
  }

  function take_snapshot(){
    save('student_name.png');
}

  