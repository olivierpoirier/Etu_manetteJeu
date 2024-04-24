import { menuFirstLevelSquareLeftCoordinateX, menuFirstLevelSquareTopCoordinateY, levelMaxWidth, levelMaxHeight }  from "./gameObjectsConst.js";
import { scoretext, menuBackground, menuLineLeft, menuLineRight, menuLineTop, 
    menuLineBottom ,firstLevelSquareLineLeft, firstLevelSquareLineBottom, 
    firstLevelSquareLineRight, firstLevelSquareLineTop, level1Icon,heart1,heart2,heart3}  from "./gameObjectsConst.js";
import { player } from "./entities.js";


export function verifyIfGameStart(isGameStarted) {
    if (player.x < menuFirstLevelSquareLeftCoordinateX + levelMaxWidth
    && player.x + player.width > menuFirstLevelSquareLeftCoordinateX
    && player.y < menuFirstLevelSquareTopCoordinateY + levelMaxHeight
    && player.y + player.height > menuFirstLevelSquareTopCoordinateY 
    && isGameStarted === false) {
        isGameStarted = true;
    }
    return isGameStarted;
}

export function hideOrShowObjectsWhenGameStart(isGameStarted, playerScore) {
    if (isGameStarted) {
        menuBackground.visible = false;
        menuLineLeft.visible = false;
        menuLineRight.visible = false;
        menuLineTop.visible = false;
        menuLineBottom.visible = false;
        firstLevelSquareLineLeft.visible = false;
        firstLevelSquareLineRight.visible = false;
        firstLevelSquareLineBottom.visible = false;
        firstLevelSquareLineTop.visible = false;
        level1Icon.visible = false;
        heart1.visible = true
        heart2.visible = true
        heart3.visible = true

        scoretext.visible = true;
        scoretext.text = `Score : ${playerScore}`
    }
}