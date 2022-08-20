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


var retangulo1 = createSprite(25, 50, 50, 50);
  retangulo1.shapeColor = "green";
var retangulo2 = createSprite(75, 50, 50, 50);
  retangulo2.shapeColor = "orange";
var retangulo3 = createSprite(125, 50, 50, 50);
  retangulo3.shapeColor = "green";
var retangulo4 = createSprite(175, 50, 50, 50);
  retangulo4.shapeColor = "orange";
var retangulo5 = createSprite(225, 50, 50, 50);
  retangulo5.shapeColor = "green";
var retangulo6 = createSprite(275, 50, 50, 50);
  retangulo6.shapeColor = "orange";
var retangulo7 = createSprite(325, 50, 50, 50);
  retangulo7.shapeColor = "green";
var retangulo8 = createSprite(375, 50, 50, 50);
  retangulo8.shapeColor = "orange";
var retangulo9 = createSprite(25, 150, 50, 50);
  retangulo9.shapeColor = "red";
var retangulo10 = createSprite(75, 150, 50, 50);
  retangulo10.shapeColor = "blue";
var retangulo11 = createSprite(125, 150, 50, 50);
  retangulo11.shapeColor = "red";
var retangulo12 = createSprite(175, 150, 50, 50);
  retangulo12.shapeColor = "blue";
var retangulo13 = createSprite(225, 150, 50, 50);
  retangulo13.shapeColor = "red";
var retangulo14 = createSprite(275, 150, 50, 50);
  retangulo14.shapeColor = "blue";
var retangulo15 = createSprite(325, 150, 50, 50);
  retangulo15.shapeColor = "red";
var retangulo16 = createSprite(375, 150, 50, 50);
  retangulo16.shapeColor = "blue";
var ball = createSprite(200, 225, 20, 20);
  ball.shapeColor = "white";
var raquete = createSprite(200, 350, 100, 10);
  raquete.shapeColor = "purple";
createEdgeSprites();

var pontuacao = 0; 
var estadoJogo = "inicio";
function draw() {
 background ("black"); 
 //estado inicio
 if (estadoJogo === "inicio"){
  textSize(60);
  fill("lightGray");
  text("Press Enter", 50, 250);
    //mover a bola
 if(keyDown("enter")) {
    ball.velocityY = 2;
    ball.velocityX = 3;
    estadoJogo = "jogar";
  }
 }

fill("white");
textSize(18);
text ("pontuação: " + pontuacao,250,25);
  
  //estado jogar
  if (estadoJogo === "jogar"){
    //move a raquete no eixo x seguindo o mouse
    raquete.x = World.mouseX;
    if (pontuacao === 16 || ball.isTouching(bottomEdge)){
    estadoJogo = "fim";
   } 
  }
 //estado fim
 if (estadoJogo === "fim"){
  ball.velocityX = 0;
  ball.velocityY = 0;
  if(pontuacao === 16){
  textSize(60);
  fill("lightGreen");
  text ("You Win!!!", 50, 250);
  textSize(30);
  fill("lightGreen");
  text ("press R to restart", 50, 280);
    
  }else{
  textSize(60);
  fill("red");
  text ("You Lose...", 40, 250);
  textSize(30);
  fill("red");
  text ("press R to restart", 50, 280);
    
  }
  if(keyDown("R")){
  ball.x = 200; 
  ball.y = 225;
  estadoJogo = "inicio";
  pontuacao = 0;
  }
 }

/*a bola vai bater na parede de cima, esquerda,
direita, de cima e na raquete.*/
ball.bounceOff(topEdge);
ball.bounceOff(rightEdge);
ball.bounceOff(leftEdge);
ball.bounceOff(raquete);

  if (ball.isTouching(retangulo1)) {
    retangulo1.destroy();  
    pontuacao = pontuacao + 1;
  }
  if (ball.isTouching(retangulo2)) {
    retangulo2.destroy();  
    pontuacao = pontuacao + 1;
  }
  if (ball.isTouching(retangulo3)) {
    retangulo3.destroy();  
    pontuacao = pontuacao + 1;
  }
  if (ball.isTouching(retangulo4)) {
    retangulo4.destroy();  
    pontuacao = pontuacao + 1;
  }
  if (ball.isTouching(retangulo5)) {
    retangulo5.destroy();  
    pontuacao = pontuacao + 1;
  }
  if (ball.isTouching(retangulo6)) {
    retangulo6.destroy();  
    pontuacao = pontuacao + 1;
  }
  if (ball.isTouching(retangulo7)) {
    retangulo7.destroy();  
    pontuacao = pontuacao + 1;
  }
  if (ball.isTouching(retangulo8)) {
    retangulo8.destroy();  
    pontuacao = pontuacao + 1;
  }
  if (ball.isTouching(retangulo9)) {
    retangulo9.destroy();  
    pontuacao = pontuacao + 1;
  }
  if (ball.isTouching(retangulo10)) {
    retangulo10.destroy();  
    pontuacao = pontuacao + 1;
  }
  if (ball.isTouching(retangulo11)) {
    retangulo11.destroy();  
    pontuacao = pontuacao + 1;
  }
  if (ball.isTouching(retangulo12)) {
    retangulo12.destroy();  
    pontuacao = pontuacao + 1;
  }
  if (ball.isTouching(retangulo13)) {
    retangulo13.destroy();  
    pontuacao = pontuacao + 1;
  }
  if (ball.isTouching(retangulo14)) {
    retangulo14.destroy();  
    pontuacao = pontuacao + 1;
  }
  if (ball.isTouching(retangulo15)) {
    retangulo15.destroy();  
    pontuacao = pontuacao + 1;
  }
  if (ball.isTouching(retangulo16)) {
    retangulo16.destroy();  
    pontuacao = pontuacao + 1;
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
