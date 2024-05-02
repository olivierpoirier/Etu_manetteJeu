
import {hideOrShowObjectsWhenGameStart } from "./gameObjectsConst.js";
import { player } from "./player.js";
import { topLayer, middleLayer, underLayer } from "./gameLayers.js";

import { scoretext}  from "./gameObjectsConst.js";
let playerScore = 0;
let isGameStarted = false;
let lifeplayer = 3;

export function JoueurHorsGame() {
    const positionJoueur = player.getBounds();
    return (
      positionJoueur.x < 0 - player.width
    );
  }

export function MortJoueur() {
    if (JoueurHorsGame()) {
      topLayer.removeChild(player);
      console.log("Joueur mort");
      //alert("JOUEUR MORT !")
      lifeplayer = lifeplayer - 1;
      console.log(lifeplayer)
      if (lifeplayer <= 0) {
        gameOver();
      } else {
        restartGame();
      }
      
      
    }
  
  }

  export function gameOver() {
    
    
  }


 export function mortImpact(mortoupas){
    if(mortoupas === true){
        topLayer.removeChild(player);
        console.log("Joueur mort");
        lifeplayer = lifeplayer - 1;
        console.log(lifeplayer)
        if (lifeplayer <= 0) {
            gameOver();
          } else {
            restartGame();
          }    
    }
  }
  export function restartGame() {
    topLayer.addChild(player);
    player.x = 20;
    player.y = 20;
    playerScore = 0;
    isGameStarted = false;
    scoretext.text = `Score : ${playerScore}`;
    hideOrShowObjectsWhenGameStart(isGameStarted, playerScore);
  }