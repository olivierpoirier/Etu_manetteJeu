import { gameHeight, speedOfPlayer} from "./constants.js";
import { player } from "./entities.js";

let keys = {};
let keysDiv;

function keyDown(e) {
    //console.log(e.keyCode);
    keys[e.keyCode] = true;
}

function keyUp(e) {
    //console.log(e.keyCode);
    keys[e.keyCode] = false;
}



export function movementControl(isTouchedByWallByTop, isTouchedByWallByLeft, isTouchedByWallByBottom, isTouchedByWallByRight) {
    if(player.y >= 0){
      if(!isTouchedByWallByTop) {
        if(keys["38"]){
          player.y -= speedOfPlayer;
        }
      }
    }
    if(player.y < gameHeight - player.height){
      if(!isTouchedByWallByBottom) {
        if(keys["40"]){
          player.y += speedOfPlayer;
        }
      }
    }
    if (!isTouchedByWallByLeft) {
      if(keys["37"]){
        player.x -= speedOfPlayer;
      }
    }
    if (!isTouchedByWallByRight) {
      if(keys["39"]){
        player.x += speedOfPlayer;
      }
    }

  }

  window.addEventListener("keydown", keyDown);
  window.addEventListener("keyup", keyUp);
  keysDiv = document.querySelector("#keys");