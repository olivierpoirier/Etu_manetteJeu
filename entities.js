import { playerWidth, playerHeight } from "./constants.js";
import { topLayer } from "./gameLayers.js";

export const player = PIXI.Sprite.from('Images/square.png');
player.width = playerWidth;
player.height = playerHeight;

topLayer.addChild(player);