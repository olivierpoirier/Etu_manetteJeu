import { player } from "./player.js";
import { heart1, heart2, heart3 } from "./gameObjectsConst.js";
import { scoretext}  from "./gameObjectsConst.js";
import { gameHeight, gameWidth } from "./constants.js";
import { restartWalls } from "./wallsManagement.js";

let playerScore = 0;
const scoreToUnlockLevel2 = 100;
const scoreToUnlockLevel3 = 1000;
const scoreToUnlockLevel4 = 3000;
const scoreToUnlockLevel5 = 4000;
const timeOfInvulnerability = 250;
let lifeplayer = 3;

let comptorOfInvTime = 0;

function JoueurHorsGame() {
  try{
    const positionJoueur = player.getBounds();
    return (
      positionJoueur.x < 0 - player.width
    );
  } catch(e) {
    console.error(e);
    return 0;
  }

}

export function MortJoueur() {
  try {
    if (JoueurHorsGame()) {
      console.log("Joueur mort");
      lifeplayer -= 1;
      console.log("Vie du joueurs : "+lifeplayer)
    }
  } catch(e) {
    console.error(e);
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

  try {
    if ((lifeplayer <= 0 || JoueurHorsGame()) && isGameStarted ) {
      lifeplayer = 3
      playerScore = 0;
      isGameStarted = false;
      isPlayerDead = true;
      player.x = gameWidth*0.10;
      player.y = (gameHeight-player.height)/2;
      restartWalls();
    } 
  } catch(e) {
    console.error(e);
  }
  return [isGameStarted, isPlayerDead, level, playerScore];
  
}

export function showHearts(isGameStarted) {
  try {
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
  } catch(e) {
    console.error(e);
  }

}

export function perdPV(isPlayerImmortal){
  try {
    if(!isPlayerImmortal){
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
  } catch(e) {
    console.error(e);
  }

}

export function restartGame() {
  try {
    player.x = gameWidth*0.10;
    player.y = (gameHeight-player.height)/2;
    playerScore = 0;
    scoretext.text = `Score : ${playerScore}`;
  } catch(e) {
    console.error(e);
  }

}

export function removeImmortalityAfterDelay(isPlayerImmortal) {
  try {
    if(isPlayerImmortal) {
      comptorOfInvTime += 1;
      if(comptorOfInvTime >= timeOfInvulnerability){
        comptorOfInvTime = 0;
        isPlayerImmortal =false;
      }
    }
    console.log(isPlayerImmortal);


  } catch(e) {
    console.error(e);
  }
  return isPlayerImmortal;

}