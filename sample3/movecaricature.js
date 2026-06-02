/*********************************************
  1. mouse:
    - 마우스 클릭 시 배경색이 랜덤 색상으로 변경됨
    - 마우스 포인터 이동 시 눈동자가 커서 방향을 따라다님
  2. keyboard:
    - A 키를 누르면 머리카락 색상이 순환 변경됨 (검정→갈색→금발→흰색)
    - S 키를 누르면 입 모양이 웃음/무표정으로 토글됨
    - C 키를 누르면 배경색이 기본 회색으로 리셋됨
    - D 키를 누르면 손이 나타나 좌우로 움직이고 다시 누르면 사라짐
    - 스페이스바를 누르면 목이 늘어났다가 줄어듦
    - V 키를 누르면 gif 녹화됨
***********************************************/

let bgcolor;
let haircolor;
let smiling;
let showhand;
let handx;
let handspeed;
let neckheight;
let neckgrowing;
let neckanim;

function setup() {
  createCanvas(600, 400);
  bgcolor = color(220);
  haircolor = 0;
  smiling = true;
  showhand = false;
  handx = 400;
  handspeed = 3;
  neckheight = 40;
  neckgrowing = false;
  neckanim = false;
}

function mousePressed() {
  bgcolor = color(random(180, 255), random(180, 255), random(180, 255));
}

function keyPressed() {
  if (key === 'A' || key === 'a') {
    haircolor = haircolor + 1;
    if (haircolor > 3) {
      haircolor = 0;
    }
  }
  if (key === 'S' || key === 's') {
    smiling = !smiling;
  }
  if (key === 'D' || key === 'd') {
    bgcolor = color(220);
  }
  if (key === 'F' || key === 'f') {
    showhand = !showhand;
  }
  if (key === ' '){
    neckanim = true;
    neckgrowing = true;
  }
  if (key === 'v') {
  saveGif('mySketch', 10);
  }
}

function draw() {
  background(bgcolor);

  // 목 애니메이션
  if (neckanim) {
    if (neckgrowing) {
      neckheight = neckheight + 3;
      if (neckheight >= 120) {
        neckgrowing = false;
      }
    } else {
      neckheight = neckheight - 3;
      if (neckheight <= 40) {
        neckheight = 40;
        neckanim = false;
      }
    }
  }

  // 목
  fill(240, 200, 160); noStroke();
  rect(280, 270 - neckheight, 40, neckheight);

  // 얼굴 (목 길이에 따라 위로 올라감)
  fill(240, 200, 160); noStroke();
  ellipse(300, 230 - neckheight, 160, 180);

  // 머리카락
  if (haircolor === 0) fill(color(30));
  else if (haircolor === 1) fill(color(101, 67, 33));
  else if (haircolor === 2) fill(color(255, 215, 0));
  else if (haircolor === 3) fill(color(230));
  arc(300, 180 - neckheight, 180, 140, radians(160), radians(20));

  // 눈 흰자
  fill(255);
  ellipse(270, 220 - neckheight, 30, 25);
  ellipse(330, 220 - neckheight, 30, 25);

  // 눈동자
  let ex1 = constrain(mouseX, 260, 280);
  let ey1 = constrain(mouseY, 213 - neckheight, 227 - neckheight);
  let ex2 = constrain(mouseX, 320, 340);
  let ey2 = constrain(mouseY, 213 - neckheight, 227 - neckheight);
  fill(0);
  ellipse(ex1, ey1, 10, 10);
  ellipse(ex2, ey2, 10, 10);

  // 눈썹
  stroke(0); strokeWeight(3);
  line(255, 200 - neckheight, 285, 200 - neckheight);
  line(315, 200 - neckheight, 345, 200 - neckheight);
  noStroke();

  // 코
  stroke(0);
  line(300, 225 - neckheight, 300, 250 - neckheight);
  noStroke();

  // 입
  noFill(); stroke(0); strokeWeight(1.5);
  if (smiling) {
    arc(300, 265 - neckheight, 50, 30, 0, PI);
  } else {
    line(275, 270 - neckheight, 325, 270 - neckheight);
  }
  noStroke();

  // 옷
  fill(245, 245, 220); stroke(0); strokeWeight(1);
  arc(300, 350, 220, 180, PI, TWO_PI);

  // 손
  if (showhand) {
    handx = handx + handspeed;
    if (handx > 450) handspeed = -3;
    if (handx < 390) handspeed = 3;

    fill(240, 200, 160); noStroke();
    rect(handx - 10, 310, 20, 60);
    ellipse(handx, 310, 40, 35);
    rect(handx - 15, 265, 8, 30);
    rect(handx - 5, 262, 8, 32);
    rect(handx + 5, 262, 8, 32);
    rect(handx + 15, 265, 8, 30);
  }
}