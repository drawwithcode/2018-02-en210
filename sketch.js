//lection 2

function setup(){
  createCanvas(windowWidth,windowHeight)
  background(200)
  angleMode(DEGREES)
}
function draw(){
  strokeWeight(2)


translate(windowWidth/2,windowHeight/2)
    stroke(0,0,0)

frameRate(25)
rotate(frameCount)
                    for(a=0;a<=36000;a++){
                      if(mouseX>100){
                        rotate(frameCount)
                      stroke(mouseX/2,255-mouseX%255,mouseY%255)
                      strokeWeight(2)
                      if(a<=frameCount){
                      line(mouseX*cos(a*32),-mouseX*sin(a*32),100,0)}
                            }
                      else {stroke(mouseX/2,255-mouseX%255,mouseY%255)
                          line(-100*cos(a*3),-100*sin(a*3),100,0)
                      }

                    }

}


function polygon(x, y, radius, npoints) {
  var angle = TWO_PI / npoints;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius;
    var sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
