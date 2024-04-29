import { menuFirstLevelSquareLeftCoordinateX, menuFirstLevelSquareTopCoordinateY, levelMaxWidth, levelMaxHeight, backgroundLevel3 }  from "./gameObjectsConst.js";

import { player } from "./player.js";


export function verifyIfGameStart(isGameStarted) {
    if (player.x < menuFirstLevelSquareLeftCoordinateX + levelMaxWidth
    && player.x + player.width > menuFirstLevelSquareLeftCoordinateX
    && player.y < menuFirstLevelSquareTopCoordinateY + levelMaxHeight
    && player.y + player.height > menuFirstLevelSquareTopCoordinateY 
    && isGameStarted === false) {
        isGameStarted = true;
        backgroundLevel3.visible = true;
        let level = 1;
        console.log(level);
    }
    return isGameStarted;
}

