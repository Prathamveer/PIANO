var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var sa =createSprite(25,150,50,150);
sa.shapeColor="red";
var re =createSprite(75,150,50,150);
re.shapeColor="gold";
var ga =createSprite(125,150,50,150);
ga.shapeColor="green";
var ma =createSprite(175,150,50,150);
ma.shapeColor="violet";
var pa =createSprite(225,150,50,150);
pa.shapeColor="cyan";
var dha =createSprite(275,150,50,150);
dha.shapeColor="brown";
var ni =createSprite(325,150,50,150);
ni.shapeColor="pink";
var sa2 =createSprite(375,150,50,150);
sa2.shapeColor="blue";
var tjsfty=createSprite(50,110,30,70);
tjsfty.shapeColor="black";

var tjsfty=createSprite(100,110,30,70);
tjsfty.shapeColor="black";

var tjsfty=createSprite(150,110,30,70);
tjsfty.shapeColor="black";

var tjsfty=createSprite(200,110,30,70);
tjsfty.shapeColor="black";

var tjsfty=createSprite(250,110,30,70);
tjsfty.shapeColor="black";

var tjsfty=createSprite(300,110,30,70);
tjsfty.shapeColor="black";

var tjsfty=createSprite(350,110,30,70);
tjsfty.shapeColor="black";

function draw() {
  background("white");
  
  text("SA",20,250);
  text("RE",70,250);
  text("GA",120,250);
  text("MA",170,250);
  text("PA",220,250);
  text("DHA",270,250);
  text("NI",320,250);
  text("SA",370,250);
    
  if(mousePressedOver(sa)){
    playSound("piano_A.mp3");
  }  
  if(mousePressedOver(re)){
    playSound("assets/piano_B.mp3");
    
  }
  if(mousePressedOver(ga)){
    playSound("assets/piano_middle_C.mp3");
  
  }
  if(mousePressedOver(ma)){
    playSound("assets/piano_D.mp3");
  
  }
  if(mousePressedOver(pa)){
    playSound("assets/piano_E.mp3");
  
  }
  
  if(mousePressedOver(dha)){
    playSound("assets/piano_F.mp3");
  
  }
   if(mousePressedOver(ni)){
    playSound("assets/piano_G.mp3");
  
  }
   if(mousePressedOver(sa2)){
    playSound("assets/piano_B.mp3");
  
  }
    
  drawSprites();
}
 
 

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
