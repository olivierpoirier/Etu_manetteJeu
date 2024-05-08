import { gameHeight } from "../constants.js";
import { player, speedOfPlayer } from "../player.js";

const context = cast.framework.CastReceiverContext.getInstance();
const CHANNEL = 'urn:x-cast:gameChannel';

let traductedMessage;
let whereIsGoingPlayerX;
let whereIsGoingPlayerY;

context.addCustomMessageListener(CHANNEL, handleMessageFromSender);

const options = new cast.framework.CastReceiverOptions();

context.start(options);

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
    traductedMessage = JSON.parse(message);
}

export function castControlManagement(isTouchedByWallByTop, isTouchedByWallByLeft, isTouchedByWallByBottom, isTouchedByWallByRight) {
    if(traductedMessage != undefined) {
      whereIsGoingPlayerX = traductedMessage.whereIsGoingPlayerX;
      whereIsGoingPlayerY = traductedMessage.whereIsGoingPlayerY;
    }
    if(player.y >= 0){
      if(!isTouchedByWallByTop) {
        if(keys["38"] || whereIsGoingPlayerY === "Up"){
          player.y -= speedOfPlayer;
        }
      }
    }
    if(player.y < gameHeight - player.height){
      if(!isTouchedByWallByBottom || whereIsGoingPlayerY === "Down") {
        if(keys["40"]){
          player.y += speedOfPlayer;
        }
      }
    }
    if (!isTouchedByWallByLeft || whereIsGoingPlayerX === "Left") {
      if(keys["37"]){
        player.x -= speedOfPlayer;
      }
    }
    if (!isTouchedByWallByRight || whereIsGoingPlayerX === "Right") {
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