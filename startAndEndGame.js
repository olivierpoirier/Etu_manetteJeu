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

let newLevel = 0;
let isLevelChoosen = false;


function verifyIfPlayerEnterALevelSpace(isGameStarted, XLevelCoordinate, YLevelCoordinate, levelNumber, background, textColor, audioPath, isLevelUnlocked) {
    
    try {
        
        if(isLevelUnlocked) {
            if ((player.x < XLevelCoordinate + levelMaxWidth
                && player.x + player.width > XLevelCoordinate
                && player.y < YLevelCoordinate + levelMaxHeight
                && player.y + player.height > YLevelCoordinate)
                && !isGameStarted) {
                isGameStarted = true;
                isLevelChoosen = true;
                if(background != null) {
                    background.visible = true;
                }
                textStyle.fill = textColor;
                newLevel = levelNumber;
                console.log("Level started : " + newLevel);
                if(audioPath != null) {
                    let aud = new Audio(audioPath);
                    aud.play()
                }
                
            }
        }

    } catch(e) {
        console.error(e);
    }


    return isGameStarted;
}
export function verifyIfGameStart(isGameStarted, isLevel2Unlocked, isLevel3Unlocked, isLevel4Unlocked, isLevel5Unlocked) {

    try {
        if(!isGameStarted) {
        
            isGameStarted = verifyIfPlayerEnterALevelSpace(isGameStarted, firstLevelSquareLeftCoordinateX, firstLevelSquareTopCoordinateY, 1, null, "white", "Audio/level1.mp3", true);
            isGameStarted = verifyIfPlayerEnterALevelSpace(isGameStarted, secondLevelSquareLeftCoordinateX, secondLevelSquareTopCoordinateY, 2, backgroundLevel2, "black", "Audio/level1.mp3", isLevel2Unlocked);
            isGameStarted = verifyIfPlayerEnterALevelSpace(isGameStarted, thirdLevelSquareLeftCoordinateX, thirdLevelSquareTopCoordinateY, 3, backgroundLevel3, "white", "Audio/level3.mp3", isLevel3Unlocked);
            isGameStarted = verifyIfPlayerEnterALevelSpace(isGameStarted, fourthLevelSquareLeftCoordinateX, fourthLevelSquareTopCoordinateY, 4, backgroundLevel4, "white", "Audio/level4.mp3", isLevel4Unlocked);
            isGameStarted = verifyIfPlayerEnterALevelSpace(isGameStarted, fifthLevelSquareLeftCoordinateX, fifthLevelSquareTopCoordinateY, 5, backgroundLevel5, "white", "Audio/level5.mp3", isLevel5Unlocked);
            if (!isLevelChoosen) {
                newLevel = 0;
            }
        } else {
            isLevelChoosen = false;
        }

    } catch(e) {
        console.error(e);
    }

    return [isGameStarted, newLevel];
}



