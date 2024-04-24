import { menuFirstLevelSquareLeftCoordinateX, menuFirstLevelSquareTopCoordinateY, levelMaxWidth, levelMaxHeight }  from "./gameObjectsConst.js";
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