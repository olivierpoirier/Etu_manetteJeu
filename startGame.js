import { firstLevelSquareLeftCoordinateX, firstLevelSquareTopCoordinateY, levelMaxWidth, levelMaxHeight, backgroundLevel3 }  from "./gameObjectsConst.js";

import { player } from "./player.js";


export function verifyIfGameStart(isGameStarted) {
    if (player.x < firstLevelSquareLeftCoordinateX + levelMaxWidth
    && player.x + player.width > firstLevelSquareLeftCoordinateX
    && player.y < firstLevelSquareTopCoordinateY + levelMaxHeight
    && player.y + player.height > firstLevelSquareTopCoordinateY 
    && !isGameStarted) {
        isGameStarted = true;
        backgroundLevel3.visible = true;
        let level = 1;
        console.log(level);
    }
    return isGameStarted;
}

