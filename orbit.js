let orbitRadius=180;
let planetRadius=10
let angle=0
let angle1=0
let angle2=0
let angle3=0
let angle4=0
let angle5=0
let angle6=0
let angle7=0
function setup() {
  createCanvas(900, 900);
  background('black');
  
}

function draw() {
  background('black');
  
  fill('yellow')
  circle(450,450, 50)
  
  angle+=0.12
  let x=0.25*orbitRadius*cos(angle)+450
  let y=0.25*orbitRadius*sin(angle)+450
  fill (' rgb(9,161,225)')
  circle(x,y,planetRadius+1)
  
  angle1+=0.11
  let x1=0.5*orbitRadius*cos(angle1)+450
  let y1=0.5*orbitRadius*sin(angle1)+450
  fill ('rgb(10,238,10)')
  circle(x1,y1,planetRadius+3)
  
  
  angle2+=0.10
  let x2=0.75*orbitRadius*cos(angle2)+450
  let y2=0.75*orbitRadius*sin(angle2)+450
  fill ('blue')
  circle(x2,y2,planetRadius+3.1)
  
  angle3+=0.09
  let x3=1*orbitRadius*cos(angle3)+450
  let y3=1*orbitRadius*sin(angle3)+450
  fill ('red')
  circle(x3,y3,planetRadius+2)
  
  angle4+=0.08
  let x4=1.25*orbitRadius*cos(angle4)+450
  let y4=1.25*orbitRadius*sin(angle4)+450
  fill ('brown')
  circle(x4,y4,planetRadius+14)
  
  angle5+=0.07
  let x5=1.5*orbitRadius*cos(angle5)+450
  let y5=1.5*orbitRadius*sin(angle5)+450
  fill ('grey')
  circle(x5,y5,planetRadius+12)
  
  angle6+=0.06
  let x6=1.75*orbitRadius*cos(angle6)+450
  let y6=1.75*orbitRadius*sin(angle6)+450
  fill ('rgb(90,207,90)')
  circle(x6,y6,planetRadius+7)
  
  angle7+=0.05
  let x7=2*orbitRadius*cos(angle7)+450
  let y7=2*orbitRadius*sin(angle7)+450
  fill ('purple')
  circle(x7,y7,planetRadius+6.5)
  
  
}