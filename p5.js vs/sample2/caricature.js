function setup() {
  createCanvas(600, 400);
  bgcolor = color(220);
  haircolor = 0;
}

function draw() {
  background(bgcolor);

  // 얼굴
  fill(240, 200, 160); noStroke();
  ellipse(300, 160, 160, 180);

  // 머리카락
  fill(color(30));
  arc(300, 120, 180, 140, radians(160), radians(20));

  // 눈 흰자
  fill(255);
  ellipse(270, 160, 30, 25);
  ellipse(330, 160, 30, 25);

  // 눈동자
  fill(0);
  ellipse(270, 160, 10, 10);
  ellipse(330, 160, 10, 10);

  // 눈썹
  stroke(0); strokeWeight(3);
  line(255, 140, 285, 140);
  line(315, 140, 345, 140);
  noStroke();

  // 코
  stroke(0);
  line(300, 165, 300, 190);
  noStroke();

  // 입
  noFill(); stroke(0); strokeWeight(1.5);
  arc(300, 205, 50, 30, 0, PI);
  noStroke();
  
  // 목
  fill(240, 200, 160); noStroke();
  rect(280, 230, 40, 60);

  // 옷
  fill(245, 245, 220); stroke(0); strokeWeight(1);
  arc(300, 350, 220, 180, PI, TWO_PI);

}