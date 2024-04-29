import { topLayer } from "./gameLayers.js";


export const speedOfPlayer = 3;
const playerWidth = 15;
const playerHeight = 15;

export const player = PIXI.Sprite.from('Images/square.png');
player.width = playerWidth;
player.height = playerHeight;

topLayer.addChild(player);