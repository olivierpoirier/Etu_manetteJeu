
import {hideOrShowObjectsWhenGameStart } from "./gameObjectsConst.js";
import { player } from "./player.js";
import { topLayer, middleLayer, underLayer } from "./gameLayers.js";
import {heart1,heart2,heart3} from "./gameObjectsConst.js"

import { scoretext}  from "./gameObjectsConst.js";
let playerScore = 0;
let isGameStarted = false;
export let lifeplayer = 3;

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
      lifeplayer -= 1;
      console.log("Vie du joueurs : "+lifeplayer)
      showHearts(lifeplayer)
      if (lifeplayer <= 0) {
        gameOver();
      } else {
        restartGame();
      }
    }
  
  }

export function showHearts(lifeplayer) {
    if(lifeplayer == 0){
      heart1.visible = false;
      heart2.visible = false;
      heart3.visible = false;
    }
    if (lifeplayer >= 1) {
      heart1.visible = true;
      heart2.visible = false;
      heart3.visible = false;
    }
    if (lifeplayer >= 2) {
      heart1.visible = true;
      heart2.visible = true;
      heart3.visible = false;
    }
    if (lifeplayer >= 3) {
      heart1.visible = true;
      heart2.visible = true;
      heart3.visible = true;
    }
}


  export function gameOver() {
    
  }


 export function mortImpact(mortoupas){
    if(mortoupas){
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