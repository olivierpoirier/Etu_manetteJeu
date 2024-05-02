import { gameHeight } from "../constants.js";
import { player, speedOfPlayer } from "../player.js";

const context = cast.framework.CastReceiverContext.getInstance();
const CHANNEL = 'urn:x-cast:testChannel';

context.addCustomMessageListener(CHANNEL, handleMessageFromSender);


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

function handleMessageFromSender(message) {
    console.log(message);
}

export function castControlManagement(isTouchedByWallByTop, isTouchedByWallByLeft, isTouchedByWallByBottom, isTouchedByWallByRight) {
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
    if(keys['80']) {
      console.log('allo')
      let aud = new Audio("Audio/menu.mp3");
      aud.play();
    }
  }

  window.addEventListener("keydown", keyDown);
  window.addEventListener("keyup", keyUp);
  keysDiv = document.querySelector("#keys");