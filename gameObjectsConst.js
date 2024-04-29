import { gameWidth, gameHeight} from "./constants.js";
import { middleLayer, topLayer } from "./gameLayers.js";

const menuLeftCoordinateX = gameWidth*0.20;
const menuRightCoordinateX = gameWidth*0.80;
const menuTopCoordinateY = gameHeight*0.20;
const menuBottomCoordinateY = gameHeight*0.80;
const menuMaxWidth = gameWidth*0.60;
const menuMinWidth = gameWidth*0.005;
const menuMaxHeight = gameHeight*0.60;
const menuMinHeight = gameHeight*0.005;


export const menuFirstLevelSquareLeftCoordinateX = gameWidth*0.30;
export const menuFirstLevelSquareTopCoordinateY = gameHeight*0.30;

export const levelMaxWidth = gameWidth*0.10;
const levelMinWidth = gameWidth*0.005;
export const levelMaxHeight = gameWidth*0.10;
const levelMinHeight = gameWidth*0.005;


export function hideOrShowObjectsWhenGameStart(isGameStarted, playerScore) {
    if (isGameStarted) {
        menuBackground.visible = false;
        menuLineLeft.visible = false;
        menuLineRight.visible = false;
        menuLineTop.visible = false;
        menuLineBottom.visible = false;
        level1Icon.visible = false;
        titleChooseLevel.visible = false;
        level1text.visible = false;
        firstLevelSquare.visible = false;

        scoretext.visible = true;
        scoretext.text = `Score : ${playerScore}`
    }
}

// Constants of the menu : 
const menuBackground = new PIXI.Graphics()
    .rect(menuLeftCoordinateX, menuTopCoordinateY, menuMaxWidth, menuMaxHeight)
    .fill(0x808080);

const menuLineLeft = new PIXI.Graphics()
    .rect(menuLeftCoordinateX, menuTopCoordinateY, menuMinWidth, menuMaxHeight)
    .fill(0xffffff);

const menuLineBottom = new PIXI.Graphics()
    .rect(menuLeftCoordinateX, menuBottomCoordinateY - menuMinHeight, menuMaxWidth, menuMinHeight)
    .fill(0xffffff);

const menuLineRight = new PIXI.Graphics()
    .rect(menuRightCoordinateX, menuTopCoordinateY, menuMinWidth, menuMaxHeight)
    .fill(0xffffff);

const menuLineTop = new PIXI.Graphics()
    .rect(menuLeftCoordinateX, menuTopCoordinateY, menuMaxWidth, menuMinHeight)
    .fill(0xffffff);

menuBackground.alpha = 0.4;


//Constants of levels : 
const firstLevelSquare = new PIXI.Graphics()
    .rect(menuFirstLevelSquareLeftCoordinateX, menuFirstLevelSquareTopCoordinateY, levelMaxWidth, levelMaxHeight)
    .fill(0xffffff);

const level1Icon = PIXI.Sprite.from('Images/level1Icon.png');
level1Icon.x = menuFirstLevelSquareLeftCoordinateX + levelMinWidth/2;
level1Icon.y = menuFirstLevelSquareTopCoordinateY + levelMinHeight/2;
level1Icon.width = levelMaxWidth - levelMinWidth;
level1Icon.height = levelMaxHeight - levelMinHeight;


//Constants of backgrounds : 
export const backgroundLevel3 = PIXI.Sprite.from('Images/Grotte.png');
backgroundLevel3.width = gameWidth;
backgroundLevel3.height = gameHeight;
backgroundLevel3.visible = false;

//Constants of texts Objects 
const textStyle = new PIXI.TextStyle({
    fontFamily: "Verdana",
    fontSize: 36,
    fill: "#ffffff"
});

export const scoretext = new PIXI.Text({
    text:`Score : 0`,
    style: textStyle

});

scoretext.position.x = gameWidth*0.70;
scoretext.position.y = gameHeight*0.05;
scoretext.visible = false;

const titleChooseLevel = new PIXI.Text({
    text:"Go on one level icon to start",
    style: textStyle

});

titleChooseLevel.position.x = gameWidth*0.50 - titleChooseLevel.width/2;
titleChooseLevel.position.y = gameHeight*0.10 - titleChooseLevel.height/2;

const level1text = new PIXI.Text({
    text:"level 1",
    style: textStyle

});

level1text.position.x = gameWidth*0.35 - level1text.width/2;
level1text.position.y = gameHeight*0.35 + levelMaxHeight - level1text.height/2;;

const level2text = new PIXI.Text({
    text:"level 2",
    style: textStyle

});

const level3text = new PIXI.Text({
    text:"level 3",
    style: textStyle

});




topLayer.addChild(backgroundLevel3);
middleLayer.addChild(titleChooseLevel);
middleLayer.addChild(scoretext);
middleLayer.addChild(menuBackground);
middleLayer.addChild(menuLineLeft);
middleLayer.addChild(menuLineRight);
middleLayer.addChild(menuLineTop);
middleLayer.addChild(menuLineBottom);
middleLayer.addChild(firstLevelSquare);
middleLayer.addChild(level1Icon);
middleLayer.addChild(level1text);

