let t;

function setup() {
  createCanvas(600, 400);
  colorMode(HSB, 360, 100, 100, 100);
}

function draw() {
  t = frameCount * 0.02;
  background(45, 10, 97);

  // ── 크기 변화 (sin 파형으로 맥동) ──────────────
  let pulse  = sin(t) * 0.15 + 1.0;   // 0.85 ~ 1.15
  let pulse2 = sin(t + PI) * 0.12 + 1.0;

  // ── 색상 변화 (hue가 시간에 따라 순환) ─────────
  let hBase = (frameCount * 0.4) % 360;
  let c1 = color((hBase) % 360, 55, 95, 85);
  let c2 = color((hBase + 90) % 360, 50, 90, 85);
  let c3 = color((hBase + 180) % 360, 45, 88, 85);
  let c4 = color((hBase + 270) % 360, 60, 85, 85);
  let cArc = color((hBase + 45) % 360, 65, 80, 80);
  let cTri = color((hBase + 135) % 360, 40, 95, 90);

  stroke(0, 0, 55, 70);
  strokeWeight(1);

  // ── 중앙 원 (맥동 + 색상 변화) ────────────────
  fill(c1);
  circle(300, 200, 200 * pulse);

  // ── 좌우 원 (반대 위상 맥동 + 이동) ──────────
  fill(c2);
  let sideX = sin(t * 0.7) * 18;
  circle(120 + sideX, 200, 160 * pulse2);
  circle(480 - sideX, 200, 160 * pulse2);

  // ── 상하 원 (수직 이동 + 크기 변화) ──────────
  fill(c3);
  let sideY = cos(t * 0.8) * 15;
  circle(300, 40  + sideY, 160 * pulse2);
  circle(300, 360 - sideY, 160 * pulse2);

  // ── 모서리 작은 원 (궤도 회전) ────────────────
  fill(c4);
  let orb = 12;
  circle(60  + cos(t) * orb, 60  + sin(t) * orb, 80 * pulse);
  circle(540 + cos(t + PI) * orb, 60  + sin(t + PI) * orb, 80 * pulse);
  circle(60  + cos(t + PI) * orb, 340 + sin(t + PI) * orb, 80 * pulse);
  circle(540 + cos(t) * orb, 340 + sin(t) * orb, 80 * pulse);

  // ── 삼각형 (회전 + 색상 변화) ─────────────────
  fill(cTri);
  push();
    translate(300, 200);
    rotate(sin(t * 0.5) * 0.08);
    translate(-300, -200);
    triangle(300, 200, 200, 60,  400, 60);
    triangle(300, 200, 200, 340, 400, 340);
  pop();
  push();
    translate(300, 200);
    rotate(cos(t * 0.5) * 0.08);
    translate(-300, -200);
    triangle(300, 200, 60,  140, 60,  260);
    triangle(300, 200, 540, 140, 540, 260);
  pop();

  // ── 반원 호 (크기 맥동 + 색상 변화) ──────────
  fill(cArc);
  let arcR = 160 * (sin(t * 1.2) * 0.1 + 1.0);
  arc(120, 200, arcR, arcR, PI / 2,  PI * 1.5);
  arc(480, 200, arcR, arcR, PI * 1.5, PI / 2);

  // ── 기준선 (투명도 파동) ──────────────────────
  stroke(0, 0, 60, 30 + sin(t * 2) * 20);
  strokeWeight(0.8);
  line(0, 200, 600, 200);
  line(300, 0, 300, 400);
  line(0, 0, 600, 400);
  line(600, 0, 0, 400);
}

function keyPressed() {
  if (key === 's') {
    saveGif('mySketch', 7);
  }
}