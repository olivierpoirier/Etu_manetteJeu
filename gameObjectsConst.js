import { app, gameWidth, gameHeight} from "./constants.js";
import { middleLayer } from "./gameLayers.js";


const menuLeftCoordinateX = gameWidth*0.20;
const menuRightCoordinateX = gameWidth*0.80;
const menuTopCoordinateY = gameHeight*0.20;
const menuBottomCoordinateY = gameHeight*0.80;
const menuMaxWidth = gameWidth*0.60;
const menuMinWidth = gameWidth*0.005;
const menuMaxHeight = gameHeight*0.60;
const menuMinHeight = gameHeight*0.005;


export const menuFirstLevelSquareLeftCoordinateX = gameWidth*0.30;
export const menuFirstLevelSquareRightCoordinateX = gameWidth*0.40;
export const menuFirstLevelSquareTopCoordinateY = gameHeight*0.30;
export const menuFirstLevelSquareBottomCoordinateY = gameHeight*0.50;

export const levelMaxWidth = gameWidth*0.10;
const levelMinWidth = gameWidth*0.005;
export const levelMaxHeight = gameWidth*0.10;
const levelMinHeight = gameWidth*0.005;

export const textStyle = new PIXI.TextStyle({
    fontFamily: "Verdana",
    fontSize: 36,
    fill: "#ffffff"
});



export const scoretext = new PIXI.Text({
    text:`Score : 0`,
    style: textStyle

});


export const titleChooseLevel = new PIXI.Text({
    text:"Go on one level icon to start",
    style: textStyle

});

titleChooseLevel.position.x = gameWidth*0.50 - titleChooseLevel.width/2;
titleChooseLevel.position.y = gameHeight*0.10 - titleChooseLevel.height/2;

export const level1text = new PIXI.Text({
    text:"level 1",
    style: textStyle

});
export const level2text = new PIXI.Text({
    text:"level 2",
    style: textStyle

});
export const level3text = new PIXI.Text({
    text:"level 3",
    style: textStyle

});

scoretext.position.x = gameWidth*0.70;
scoretext.position.y = gameHeight*0.05;

export const menuBackground = new PIXI.Graphics()
    .rect(menuLeftCoordinateX, menuTopCoordinateY, menuMaxWidth, menuMaxHeight)
    .fill(0x808080);


export const menuLineLeft = new PIXI.Graphics()
    .rect(menuLeftCoordinateX, menuTopCoordinateY, menuMinWidth, menuMaxHeight)
    .fill(0xffffff);

export const menuLineBottom = new PIXI.Graphics()
    .rect(menuLeftCoordinateX, menuBottomCoordinateY - menuMinHeight, menuMaxWidth, menuMinHeight)
    .fill(0xffffff);

export const menuLineRight = new PIXI.Graphics()
    .rect(menuRightCoordinateX, menuTopCoordinateY, menuMinWidth, menuMaxHeight)
    .fill(0xffffff);

export const menuLineTop = new PIXI.Graphics()
    .rect(menuLeftCoordinateX, menuTopCoordinateY, menuMaxWidth, menuMinHeight)
    .fill(0xffffff);



export const firstLevelSquareLineLeft = new PIXI.Graphics()
    .rect(menuFirstLevelSquareLeftCoordinateX, menuFirstLevelSquareTopCoordinateY, levelMinWidth, levelMaxHeight)
    .fill(0xffffff);

export const firstLevelSquareLineBottom = new PIXI.Graphics()
    .rect(menuFirstLevelSquareLeftCoordinateX, menuFirstLevelSquareBottomCoordinateY - levelMinHeight, levelMaxWidth, levelMinHeight)
    .fill(0xffffff);

export const firstLevelSquareLineRight = new PIXI.Graphics()
    .rect(menuFirstLevelSquareRightCoordinateX, menuFirstLevelSquareTopCoordinateY, levelMinWidth, levelMaxHeight)
    .fill(0xffffff);

export const firstLevelSquareLineTop = new PIXI.Graphics()
    .rect(menuFirstLevelSquareLeftCoordinateX, menuFirstLevelSquareTopCoordinateY, levelMaxWidth, levelMinHeight)
    .fill(0xffffff);

export const level1Icon = PIXI.Sprite.from('Images/level1Icon.png');
level1Icon.x = menuFirstLevelSquareLeftCoordinateX + levelMinWidth/2;
level1Icon.y = menuFirstLevelSquareTopCoordinateY + levelMinHeight/2;
level1Icon.width = levelMaxWidth;
level1Icon.height = levelMaxHeight - levelMinHeight;



export const Restartbutton = new PIXI.Graphics()
  .beginFill(0xffffff) // Couleur blanche
  .drawRect(menuFirstLevelSquareLeftCoordinateX, menuFirstLevelSquareTopCoordinateY, levelMaxWidth, levelMinHeight)
  .endFill();

export const restartText = new PIXI.Text('Restart', {
  fontFamily: 'Arial',
  fontSize: 20,
  fill: 0x000000, 
});


export const heart1 = PIXI.Sprite.from("Images/Coeur.png");
export const heart2 = PIXI.Sprite.from("Images/Coeur.png");
export const heart3 = PIXI.Sprite.from("Images/Coeur.png");
heart1.width=400;
heart1.height=400;
heart2.width=400;
heart2.height=400;
heart3.width=400;
heart3.height=400;
heart1.position.set(-130, -130);  
heart2.position.set(-60, -130);  
heart3.position.set(10, -130); 
restartText.position.set(
    menuFirstLevelSquareLeftCoordinateX + levelMaxWidth / 2, 
    menuFirstLevelSquareTopCoordinateY + levelMinHeight / 2);
restartText.anchor.set(0.5);

menuBackground.alpha = 0.4;
scoretext.visible = false;
middleLayer.addChild(titleChooseLevel);
middleLayer.addChild(scoretext);
middleLayer.addChild(menuBackground);
middleLayer.addChild(menuLineLeft);
middleLayer.addChild(menuLineRight);
middleLayer.addChild(menuLineTop);
middleLayer.addChild(menuLineBottom);
middleLayer.addChild(firstLevelSquareLineLeft);
middleLayer.addChild(firstLevelSquareLineBottom);
middleLayer.addChild(firstLevelSquareLineRight);
middleLayer.addChild(firstLevelSquareLineTop);
middleLayer.addChild(level1Icon);
middleLayer.addChild(heart1);
middleLayer.addChild(heart2);
middleLayer.addChild(heart3);
Restartbutton.addChild(restartText);
middleLayer.addChild(Restartbutton);

