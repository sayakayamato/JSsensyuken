let cvs = document.getElementById('canvas');

function setup() {
  // let can = createCanvas(400,400);  //キャンバスを任意のHTMLの中に追加
  // can.parent(cvs);                  //キャンバスを指定した要素の子要素にする
  background(1, 6, 38);
}

function draw() {

  noStroke();
  fill(200, 200, 200, 100);
  ellipse(mouseX, mouseY, 30);
}