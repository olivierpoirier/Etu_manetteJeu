import { gameHeight, speedOfPlayer} from "./constants.js";

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



export function movementControl(isTouchedByWallByTop, isTouchedByWallByLeft, isTouchedByWallByBottom, isTouchedByWallByRight, sprite) {
    if(sprite.y >= 0){
      if(!isTouchedByWallByTop) {
        if(keys["38"]){
          sprite.y -= speedOfPlayer;
        }
      }
    }
    if(sprite.y < gameHeight - sprite.height){
      if(!isTouchedByWallByBottom) {
        if(keys["40"]){
          sprite.y += speedOfPlayer;
        }
      }
    }
    if (!isTouchedByWallByLeft) {
      if(keys["37"]){
        sprite.x -= speedOfPlayer;
      }
    }
    if (!isTouchedByWallByRight) {
      if(keys["39"]){
      sprite.x += speedOfPlayer;
      }
    }

  }

  window.addEventListener("keydown", keyDown);
  window.addEventListener("keyup", keyUp);
  keysDiv = document.querySelector("#keys");