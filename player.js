import { gameHeight, gameWidth } from "./constants.js";
import { ultraTopLayer } from "./gameLayers.js";


export const speedOfPlayer = 3;
const playerWidth = 15;
const playerHeight = 15;

export const player = PIXI.Sprite.from("Images/square.png");
player.width = playerWidth;
player.height = playerHeight;
player.y = (gameHeight-player.height)/2;
player.x = gameWidth*0.10;

ultraTopLayer.addChild(player);