const SLICE_COUNT = 18;

function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  //pScope.set_direction(CW);
  pScope.set_slice_count(SLICE_COUNT);
  pScope.load_image("GHOSTASCOPER2" , "png");
  pScope.load_image("FIREEE!!" , "png");
}

function setup_layers(pScope){

  new PLayer(null, 220);  //lets us draw the whole circle background, ignoring the boundaries

  var layer1 = new PLayer(Spin);
  layer1.mode (RING);
  layer1.set_boundary( 0, 1000 );

  var layer2 = new PLayer(squares);
  layer2.mode(SWIRL(1));
  layer2.set_boundary( 0, 400 );
  
}

function Spin(x, y, animation, pScope){
push()
scale(2.5)
if(animation.frame == 0){
  pScope.draw_image("GHOSTAscoper2",X,Y);
}
pop()
translate(5 * animation.frame, 0);
scale(animation.frame*2);
fill(196, 252, 255)

let ballSize = 100 + (animation.wave(1)* 20)
let bouce = 0.5* animation.wave()


}
  function dots(x, y, animation, pScope){
    fill(255)

}

function Spin(x, y, animation, pScope){
  scale(2.3);
  pScope.draw_image("GHOSTASCOPER2",x,y);
  scale(animation.frame*2);

  scale(0.25);
  pScope.draw_image("FIREEE!!",x,y);
  scale(animation.frame*2);

  
}
function ghost(x, y, animation, pscope){
translate(x,y-650);
scale(6);
pscope.draw_image_from_sequence("GHOSTASCOPER2",0,0,animation.frame);

}


function squares(x, y, animation, pScope){

  // this is how you set up a background for a specific layer
  let angleOffset = (360 / SLICE_COUNT) / 2
  let backgroundArcStart = 270 - angleOffset;
  let backgroundArcEnd = 270 + angleOffset;

  fill(66, 135, 245)
  

  fill(255, 45)
  ellipse(-10,-300-animation.wave()*50,20,20) // .wave is a cosine wave btw

}
