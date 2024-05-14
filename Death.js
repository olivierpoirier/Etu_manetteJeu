
import {hideOrShowObjectsWhenGameStart } from "./gameObjectsConst.js";
import { player } from "./player.js";
import { topLayer, middleLayer, underLayer } from "./gameLayers.js";
import {heart1,heart2,heart3} from "./gameObjectsConst.js";
import { scoretext}  from "./gameObjectsConst.js";
import { gameHeight, gameWidth } from "./constants.js";
import { restartWalls } from "./wallsManagement.js";

let playerScore = 0;
const scoreToUnlockLevel2 = 100;
const scoreToUnlockLevel3 = 5000;
const scoreToUnlockLevel4 = 12000;
const scoreToUnlockLevel5 = 14000;

export let lifeplayer = 3;

export function JoueurHorsGame() {
    const positionJoueur = player.getBounds();
    return (
      positionJoueur.x < 0 - player.width
    );
  }

export function MortJoueur() {
    if (JoueurHorsGame()) {
      console.log("Joueur mort");
      lifeplayer -= 1;
      console.log("Vie du joueurs : "+lifeplayer)
      showHearts(lifeplayer);
    }
  
  }

  export function unlockLevels(playerScore, level, isLevel2Unlocked, isLevel3Unlocked, isLevel4Unlocked, isLevel5Unlocked) {
    try {
      
      if(playerScore >= scoreToUnlockLevel2 && level === 1) {
        isLevel2Unlocked = true;
      }
      if(playerScore >= scoreToUnlockLevel3 && level === 2) {
        isLevel3Unlocked = true;
      }
      if(playerScore >= scoreToUnlockLevel4 && level === 3) {
        isLevel4Unlocked = true;
      }
      if(playerScore >= scoreToUnlockLevel5 && level === 4) {
        isLevel5Unlocked = true;
      }
      
    } catch(e) {
      console.error(e);
    }
    return[isLevel2Unlocked, isLevel3Unlocked, isLevel4Unlocked, isLevel5Unlocked];

  }

  export function gameOver(isGameStarted, isPlayerDead, level, playerScore) {

    if ((lifeplayer <= 0 || JoueurHorsGame()) && isGameStarted ) {
      lifeplayer = 3
      playerScore = 0;
      isGameStarted = false;
      isPlayerDead = true;
      player.x = gameWidth*0.10;
      player.y = (gameHeight-player.height)/2;
      restartWalls();
    } 

    return [isGameStarted, isPlayerDead, level, playerScore];
    
  }
  export function showHearts(isGameStarted) {
    if(lifeplayer === 0 || !isGameStarted){
      heart1.visible = false;
      heart2.visible = false;
      heart3.visible = false;
    }
    else if (lifeplayer === 1) {
      heart1.visible = true;
      heart2.visible = false;
      heart3.visible = false;
    }
    else if (lifeplayer === 2) {
      heart1.visible = true;
      heart2.visible = true;
      heart3.visible = false;
    }
    else if (lifeplayer === 3) {
      heart1.visible = true;
      heart2.visible = true;
      heart3.visible = true;
    } else {
      console.error("Error with hearts")
    }
}

 export function perdPV(mortoupas){
    if(mortoupas){
      //topLayer.removeChild(player);
      console.log("Joueur perd 1 pv");
      lifeplayer = lifeplayer - 1;
      console.log(lifeplayer);
      if (lifeplayer <= 0) {
          gameOver();
        } else {
          restartGame();
      }
      showHearts(lifeplayer);
    }
  }
  export function restartGame() {
    //topLayer.addChild(player);
    player.x = gameWidth*0.10;
    player.y = (gameHeight-player.height)/2;
    playerScore = 0;
    scoretext.text = `Score : ${playerScore}`;
  }