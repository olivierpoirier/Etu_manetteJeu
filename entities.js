import { app, playerWidth, playerHeight } from "./constants.js";

export const player = PIXI.Sprite.from('Images/square.png');
player.width = playerWidth;
player.height = playerHeight;

app.stage.addChild(player);