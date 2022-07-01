let img;
let col;
let col2;
let sum;
let cont;
function preload(){
  img = loadImage('assets/paisaje.jpg')
}
function setup() {
  createCanvas(400, 400);
  background(img);
  for(i=0;i<img.width;i+=2){
    for(j=0;j<img.height;j+=2){
      col = img.get(j, i);
      col.pop();
      col2 = col[0] + col[1] + col[2];
      col3 = col2/3;
      noStroke();
      fill(col3);
      square(j, i, 2);
    }
    square(j, i, 2);
  }
  console.log(col3);
}