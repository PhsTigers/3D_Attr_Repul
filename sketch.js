let sl,val,bg_0nOff,plsize;
let p1,sun1,sun2,darksun1,darksun2;

let can;
function setup() { bg_OnOff=1;plsize=20;
  can=createCanvas(0.8*windowWidth,0.8*windowHeight,WEBGL);can.position(20,20);
  can.class('bad');
	 setup1();
  start1();
  can.mousePressed(chgbg);
frameRate(5);
}

function draw() {
 if(bg_OnOff==1){background(220,0,0);}
  if(bg_OnOff==2){background(0,200,0);}
if(bg_OnOff==3){background(250,200,200);}
if(bg_OnOff==4){background(floor(random(250)),floor(random(250)),floor(random(250)));}
   if(bg_OnOff!=1&&bg_OnOff!=2&&bg_OnOff!=3&&bg_OnOff!=4){background(0,0,240);}
  //sphere(50);
sun1.display();sun2.display();darksun1.display();
  //darksun2.display();p1.repul(darksun2);
p1.repul(darksun1);
  p1.attr(sun1);p1.attr(sun2);//t1.chbd();
 p1.move(); p1.display();
//val=sl.value();
}

let ch=0;
function mousePressed(){
  if(ch%2==0){loop();}
  if(ch%2==1){noLoop();}
ch++;
}
function chgbg(){
bg_OnOff=4;
}
