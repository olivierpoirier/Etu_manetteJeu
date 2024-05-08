import { gameWidth, gameHeight} from "./constants.js";
import { middleLayer, topLayer, underLayer, ultraTopLayer, ultraMAXIMUMTopLayer } from "./gameLayers.js";

const menuLeftCoordinateX = gameWidth*0.20;
const menuRightCoordinateX = gameWidth*0.80;
const menuTopCoordinateY = gameHeight*0.20;
const menuBottomCoordinateY = gameHeight*0.80;
const menuMaxWidth = gameWidth*0.60;
const menuMinWidth = gameWidth*0.005;
const menuMaxHeight = gameHeight*0.60;
const menuMinHeight = gameHeight*0.005;

const heightOfLevels = gameHeight*0.35;
export const firstLevelSquareLeftCoordinateX = gameWidth*0.22;
export const firstLevelSquareTopCoordinateY = heightOfLevels;

export const secondLevelSquareLeftCoordinateX = gameWidth*0.335;
export const secondLevelSquareTopCoordinateY = heightOfLevels;

export const thirdLevelSquareLeftCoordinateX = gameWidth*0.45;
export const thirdLevelSquareTopCoordinateY = heightOfLevels;

export const fourthLevelSquareLeftCoordinateX = gameWidth*0.565;
export const fourthLevelSquareTopCoordinateY = heightOfLevels;

export const fifthLevelSquareLeftCoordinateX = gameWidth*0.68;
export const fifthLevelSquareTopCoordinateY = heightOfLevels;

export const levelMaxWidth = gameWidth*0.10;
export const levelMaxHeight = gameWidth*0.10;
const levelMinWidth = gameWidth*0.005;
const levelMinHeight = gameWidth*0.005;


export function hideOrShowObjectsWhenGameStart(isGameStarted, playerScore) {
    try {
        if (isGameStarted) {
            menuBackground.visible = false;
            menuLineLeft.visible = false;
            menuLineRight.visible = false;
            menuLineTop.visible = false;
            menuLineBottom.visible = false;
            level1Icon.visible = false;
            level2Icon.visible = false;
            level3Icon.visible = false;
            level4Icon.visible = false;
            level5Icon.visible = false;
            lockedLevel2Icon.visible = false;
            lockedLevel3Icon.visible = false;
            lockedLevel4Icon.visible = false;
            lockedLevel5Icon.visible = false;
            titleChooseLevel.visible = false;
            level1text.visible = false;
            level2text.visible = false;
            level3text.visible = false;
            level4text.visible = false;
            level5text.visible = false;
            firstLevelSquare.visible = false;
            secondLevelSquare.visible = false;
            thirdLevelSquare.visible = false;
            fourthLevelSquare.visible = false;
            fifthLevelSquare.visible = false;
    
            scoretext.visible = true;
            scoretext.text = `Score : ${playerScore}`
        } else {
            menuBackground.visible = true;
            menuLineLeft.visible = true;
            menuLineRight.visible = true;
            menuLineTop.visible = true;
            menuLineBottom.visible = true;
            level1Icon.visible = true;
            level2Icon.visible = true;
            level3Icon.visible = true;
            level4Icon.visible = true;
            level5Icon.visible = true;
            lockedLevel2Icon.visible = true;
            lockedLevel3Icon.visible = true;
            lockedLevel4Icon.visible = true;
            lockedLevel5Icon.visible = true;
            titleChooseLevel.visible = true;
            level1text.visible = true;
            level2text.visible = true;
            level3text.visible = true;
            level4text.visible = true;
            level5text.visible = true;
            firstLevelSquare.visible = true;
            secondLevelSquare.visible = true;
            thirdLevelSquare.visible = true;
            fourthLevelSquare.visible = true;
            fifthLevelSquare.visible = true;
            backgroundLevel2.visible = false;
            backgroundLevel3.visible = false;
            backgroundLevel4.visible = false;
            backgroundLevel5.visible = false;
            scoretext.visible = false;
            textStyle.fill = "0xffffff";
    
        }
    } catch(e) {
        console.error(e);
    }

}
function showOrUnlock1level(lockedIconLevel, unlockedIconLevel, isTheLevelUnlocked) {
    if(isTheLevelUnlocked) {
        lockedIconLevel.visible = false;
        unlockedIconLevel.visible = true;
    } else {
        lockedIconLevel.visible = true;
        unlockedIconLevel.visible = false;
    }
}
export function showUnlockedLevels(isGameStarted, isLevel2Unlocked, isLevel3Unlocked, isLevel4Unlocked, isLevel5Unlocked) {
    try {
        if (!isGameStarted) {
            showOrUnlock1level(lockedLevel2Icon, level2Icon, isLevel2Unlocked);
            showOrUnlock1level(lockedLevel3Icon, level3Icon, isLevel3Unlocked);
            showOrUnlock1level(lockedLevel4Icon, level4Icon, isLevel4Unlocked);
            showOrUnlock1level(lockedLevel5Icon, level5Icon, isLevel5Unlocked);
        }
    } catch(e) {
        console.error(e);
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
    .rect(firstLevelSquareLeftCoordinateX, firstLevelSquareTopCoordinateY, levelMaxWidth, levelMaxHeight)
    .fill(0xffffff);

const secondLevelSquare = new PIXI.Graphics()
    .rect(secondLevelSquareLeftCoordinateX, secondLevelSquareTopCoordinateY, levelMaxWidth, levelMaxHeight)
    .fill(0xffffff);

const thirdLevelSquare = new PIXI.Graphics()
    .rect(thirdLevelSquareLeftCoordinateX, thirdLevelSquareTopCoordinateY, levelMaxWidth, levelMaxHeight)
    .fill(0xffffff);

const fourthLevelSquare = new PIXI.Graphics()
    .rect(fourthLevelSquareLeftCoordinateX, fourthLevelSquareTopCoordinateY, levelMaxWidth, levelMaxHeight)
    .fill(0xffffff);

const fifthLevelSquare = new PIXI.Graphics()
    .rect(fifthLevelSquareLeftCoordinateX, fifthLevelSquareTopCoordinateY, levelMaxWidth, levelMaxHeight)
    .fill(0xffffff);


//Constants on levels icons :
const level1Icon = PIXI.Sprite.from('Images/level1Icon.png');
level1Icon.x = firstLevelSquareLeftCoordinateX + levelMinWidth/2;
level1Icon.y = firstLevelSquareTopCoordinateY + levelMinHeight/2;
level1Icon.width = levelMaxWidth - levelMinWidth;
level1Icon.height = levelMaxHeight - levelMinHeight;

const level2Icon = PIXI.Sprite.from('Images/level2Icon.png');
level2Icon.x = secondLevelSquareLeftCoordinateX + levelMinWidth/2;
level2Icon.y = secondLevelSquareTopCoordinateY + levelMinHeight/2;
level2Icon.width = levelMaxWidth - levelMinWidth;
level2Icon.height = levelMaxHeight - levelMinHeight;

const level3Icon = PIXI.Sprite.from('Images/level3Icon.png');
level3Icon.x = thirdLevelSquareLeftCoordinateX + levelMinWidth/2;
level3Icon.y = thirdLevelSquareTopCoordinateY + levelMinHeight/2;
level3Icon.width = levelMaxWidth - levelMinWidth;
level3Icon.height = levelMaxHeight - levelMinHeight;

const level4Icon = PIXI.Sprite.from('Images/level4Icon.png');
level4Icon.x = fourthLevelSquareLeftCoordinateX + levelMinWidth/2;
level4Icon.y = fourthLevelSquareTopCoordinateY + levelMinHeight/2;
level4Icon.width = levelMaxWidth - levelMinWidth;
level4Icon.height = levelMaxHeight - levelMinHeight;

const level5Icon = PIXI.Sprite.from('Images/level1Icon.png');
level5Icon.x = fifthLevelSquareLeftCoordinateX + levelMinWidth/2;
level5Icon.y = fifthLevelSquareTopCoordinateY + levelMinHeight/2;
level5Icon.width = levelMaxWidth - levelMinWidth;
level5Icon.height = levelMaxHeight - levelMinHeight;

const lockedIcon = 'Images/lock.png';
const lockedLevel2Icon = PIXI.Sprite.from(lockedIcon);
lockedLevel2Icon.x = secondLevelSquareLeftCoordinateX + levelMinWidth/2;
lockedLevel2Icon.y = secondLevelSquareTopCoordinateY + levelMinHeight/2;
lockedLevel2Icon.width = levelMaxWidth - levelMinWidth;
lockedLevel2Icon.height = levelMaxHeight - levelMinHeight;

const lockedLevel3Icon = PIXI.Sprite.from(lockedIcon);
lockedLevel3Icon.x = thirdLevelSquareLeftCoordinateX + levelMinWidth/2;
lockedLevel3Icon.y = thirdLevelSquareTopCoordinateY + levelMinHeight/2;
lockedLevel3Icon.width = levelMaxWidth - levelMinWidth;
lockedLevel3Icon.height = levelMaxHeight - levelMinHeight;

const lockedLevel4Icon = PIXI.Sprite.from(lockedIcon);
lockedLevel4Icon.x = fourthLevelSquareLeftCoordinateX + levelMinWidth/2;
lockedLevel4Icon.y = fourthLevelSquareTopCoordinateY + levelMinHeight/2;
lockedLevel4Icon.width = levelMaxWidth - levelMinWidth;
lockedLevel4Icon.height = levelMaxHeight - levelMinHeight;

const lockedLevel5Icon = PIXI.Sprite.from(lockedIcon);
lockedLevel5Icon.x = fifthLevelSquareLeftCoordinateX + levelMinWidth/2;
lockedLevel5Icon.y = fifthLevelSquareTopCoordinateY + levelMinHeight/2;
lockedLevel5Icon.width = levelMaxWidth - levelMinWidth;
lockedLevel5Icon.height = levelMaxHeight - levelMinHeight;


//Constants of backgrounds : 
export const backgroundLevel2 = PIXI.Sprite.from('Images/Earth.png');
backgroundLevel2.width = gameWidth;
backgroundLevel2.height = gameHeight;
backgroundLevel2.visible = false;

export const backgroundLevel3 = PIXI.Sprite.from('Images/Grotte.png');
backgroundLevel3.width = gameWidth;
backgroundLevel3.height = gameHeight;
backgroundLevel3.visible = false;

export const backgroundLevel4 = PIXI.Sprite.from('Images/LargeSpace.png');
backgroundLevel4.width = gameWidth;
backgroundLevel4.height = gameHeight;
backgroundLevel4.visible = false;

export const backgroundLevel5 = PIXI.Sprite.from('Images/level1Icon.png');
backgroundLevel5.width = gameWidth;
backgroundLevel5.height = gameHeight;
backgroundLevel5.visible = false;

//Constants of texts Objects 
export const textStyle = new PIXI.TextStyle({
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

export const titleChooseLevel = new PIXI.Text({
    text:"Go on one level icon to start",
    style: textStyle

});

titleChooseLevel.position.x = gameWidth*0.50 - titleChooseLevel.width/2;
titleChooseLevel.position.y = gameHeight*0.10 - titleChooseLevel.height/2;

export const level1text = new PIXI.Text({
    text:"1",
    style: textStyle

});

level1text.position.x = firstLevelSquareLeftCoordinateX + firstLevelSquare.width/2 - level1text.width/2;
level1text.position.y = firstLevelSquareTopCoordinateY + firstLevelSquare.height + level1text.height/4;

const level2text = new PIXI.Text({
    text:"2",
    style: textStyle

});

level2text.position.x = secondLevelSquareLeftCoordinateX + secondLevelSquare.width/2 - level2text.width/2;
level2text.position.y = secondLevelSquareTopCoordinateY + secondLevelSquare.height + level2text.height/4;

const level3text = new PIXI.Text({
    text:"3",
    style: textStyle

});

level3text.position.x = thirdLevelSquareLeftCoordinateX + thirdLevelSquare.width/2 - level3text.width/2;
level3text.position.y = thirdLevelSquareTopCoordinateY + thirdLevelSquare.height + level3text.height/4;

const level4text = new PIXI.Text({
    text:"4",
    style: textStyle

});

level4text.position.x = fourthLevelSquareLeftCoordinateX + fourthLevelSquare.width/2 - level4text.width/2;
level4text.position.y = fourthLevelSquareTopCoordinateY + fourthLevelSquare.height + level4text.height/4;

const level5text = new PIXI.Text({
    text:"5",
    style: textStyle

});

level5text.position.x = fifthLevelSquareLeftCoordinateX + fifthLevelSquare.width/2 - level5text.width/2;
level5text.position.y = fifthLevelSquareTopCoordinateY + fifthLevelSquare.height + level5text.height/4;


//Coeurs
const widthAndHeightOfHearts = 400;
export const heart1 = PIXI.Sprite.from("Images/Coeur.png");
export const heart2 = PIXI.Sprite.from("Images/Coeur.png");
export const heart3 = PIXI.Sprite.from("Images/Coeur.png");
heart1.width=widthAndHeightOfHearts;
heart1.height=widthAndHeightOfHearts;
heart2.width=widthAndHeightOfHearts;
heart2.height=widthAndHeightOfHearts;
heart3.width=widthAndHeightOfHearts;
heart3.height=widthAndHeightOfHearts;
heart1.position.set(-130, -130);  
heart2.position.set(-60, -130);  
heart3.position.set(10, -130); 

underLayer.addChild(backgroundLevel2);
ultraTopLayer.addChild(backgroundLevel3);
underLayer.addChild(backgroundLevel4);
underLayer.addChild(backgroundLevel5);
middleLayer.addChild(titleChooseLevel);
ultraMAXIMUMTopLayer.addChild(scoretext);
middleLayer.addChild(menuBackground);
middleLayer.addChild(menuLineLeft);
middleLayer.addChild(menuLineRight);
middleLayer.addChild(menuLineTop);
middleLayer.addChild(menuLineBottom);
middleLayer.addChild(firstLevelSquare);
middleLayer.addChild(secondLevelSquare);
middleLayer.addChild(thirdLevelSquare);
middleLayer.addChild(fourthLevelSquare);
middleLayer.addChild(fifthLevelSquare);
middleLayer.addChild(level1Icon);
middleLayer.addChild(level2Icon);
middleLayer.addChild(level3Icon);
middleLayer.addChild(level4Icon);
middleLayer.addChild(level5Icon);
middleLayer.addChild(lockedLevel2Icon);
middleLayer.addChild(lockedLevel3Icon);
middleLayer.addChild(lockedLevel4Icon);
middleLayer.addChild(lockedLevel5Icon);
middleLayer.addChild(level1text);
middleLayer.addChild(level2text);
middleLayer.addChild(level3text);
middleLayer.addChild(level4text);
middleLayer.addChild(level5text);
middleLayer.addChild(heart1);
middleLayer.addChild(heart2);
middleLayer.addChild(heart3);
