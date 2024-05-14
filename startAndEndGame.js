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

import { audioLevel1, audioLevel2, audioLevel3, audioLevel4, audioLevel5 } from "./audio.js";

let newLevel = 0;
let isLevelChoosen = false;


function verifyIfPlayerEnterALevelSpace(isGameStarted, XLevelCoordinate, YLevelCoordinate, levelNumber, background, textColor, audio, isLevelUnlocked) {
    
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
                if(audio != null) {
                    audio.play()
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
            
            
            if(audioLevel1.currentTime != 0 || 
                audioLevel2.currentTime != 0 ||
                audioLevel3.currentTime != 0 ||
                audioLevel4.currentTime != 0 ||
                audioLevel5.currentTime != 0
            ) {
                audioLevel1.pause();
                audioLevel1.currentTime = 0;
                audioLevel2.pause();
                audioLevel2.currentTime = 0;
                audioLevel3.pause();
                audioLevel3.currentTime = 0;
                audioLevel4.pause();
                audioLevel4.currentTime = 0;
                audioLevel5.pause();
                audioLevel5.currentTime = 0;
            }
            isGameStarted = verifyIfPlayerEnterALevelSpace(isGameStarted, firstLevelSquareLeftCoordinateX, firstLevelSquareTopCoordinateY, 1, null, "white", audioLevel1, true);
            isGameStarted = verifyIfPlayerEnterALevelSpace(isGameStarted, secondLevelSquareLeftCoordinateX, secondLevelSquareTopCoordinateY, 2, backgroundLevel2, "black", audioLevel2, isLevel2Unlocked);
            isGameStarted = verifyIfPlayerEnterALevelSpace(isGameStarted, thirdLevelSquareLeftCoordinateX, thirdLevelSquareTopCoordinateY, 3, backgroundLevel3, "white", audioLevel3, isLevel3Unlocked);
            isGameStarted = verifyIfPlayerEnterALevelSpace(isGameStarted, fourthLevelSquareLeftCoordinateX, fourthLevelSquareTopCoordinateY, 4, backgroundLevel4, "white", audioLevel4, isLevel4Unlocked);
            isGameStarted = verifyIfPlayerEnterALevelSpace(isGameStarted, fifthLevelSquareLeftCoordinateX, fifthLevelSquareTopCoordinateY, 5, backgroundLevel5, "white", audioLevel5, isLevel5Unlocked);
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



