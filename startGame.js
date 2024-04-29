import { firstLevelSquareLeftCoordinateX, firstLevelSquareTopCoordinateY, 
    secondLevelSquareLeftCoordinateX, secondLevelSquareTopCoordinateY,
    thirdLevelSquareLeftCoordinateX, thirdLevelSquareTopCoordinateY,
    fourthLevelSquareLeftCoordinateX, fourthLevelSquareTopCoordinateY,
    fifthLevelSquareLeftCoordinateX, fifthLevelSquareTopCoordinateY,
    levelMaxWidth, levelMaxHeight, backgroundLevel3, 
    backgroundLevel4,
    backgroundLevel5,
    backgroundLevel2, textStyle}  from "./gameObjectsConst.js";

import { player } from "./player.js";

let level = 0;

function verifyIfPlayerEnterALevelSpace(isGameStarted, XLevelCoordinate, YLevelCoordinate, levelNumber, background, textColor ) {
    

    if (player.x < XLevelCoordinate + levelMaxWidth
        && player.x + player.width > XLevelCoordinate
        && player.y < YLevelCoordinate + levelMaxHeight
        && player.y + player.height > YLevelCoordinate 
        && !isGameStarted) {
        isGameStarted = true;
        if(background != null) {
            background.visible = true;
        }
        textStyle.fill = textColor;
        level = levelNumber;
        console.log(level);
        
    }

    return [isGameStarted, level];
}
export function verifyIfGameStart(isGameStarted, level) {

    if(!isGameStarted) {
        
        [isGameStarted, level] = verifyIfPlayerEnterALevelSpace(isGameStarted, firstLevelSquareLeftCoordinateX, firstLevelSquareTopCoordinateY, 1, null, "white");
        [isGameStarted, level] = verifyIfPlayerEnterALevelSpace(isGameStarted, secondLevelSquareLeftCoordinateX, secondLevelSquareTopCoordinateY, 2, backgroundLevel2, "black");
        [isGameStarted, level] = verifyIfPlayerEnterALevelSpace(isGameStarted, thirdLevelSquareLeftCoordinateX, thirdLevelSquareTopCoordinateY, 3, backgroundLevel3, "white");
        [isGameStarted, level] = verifyIfPlayerEnterALevelSpace(isGameStarted, fourthLevelSquareLeftCoordinateX, fourthLevelSquareTopCoordinateY, 4, backgroundLevel4, "white");
        [isGameStarted, level] = verifyIfPlayerEnterALevelSpace(isGameStarted, fifthLevelSquareLeftCoordinateX, fifthLevelSquareTopCoordinateY, 5, backgroundLevel5, "white");
        console.log(level);
    }
    
    
    
    
    return [isGameStarted, level];
}

