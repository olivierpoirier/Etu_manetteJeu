import { gameHeight, gameWidth } from "./constants.js";
import { ultraTopLayer } from "./gameLayers.js";
import { newLevel } from "./startAndEndGame.js";

export let player;  
const playerWidth = 15;
const playerHeight = 15;
export const speedOfPlayer = 3;

export function ChangementSkin() {
    let Skin;
    if (newLevel === 1) {
        Skin = "Images/square.png";
    } else if (newLevel === 2) {
        Skin = "Images/square.png"; // Skin pour le monde 2
    } else if (newLevel === 3) {
        Skin = "Images/square.png"; // Skin pour le monde 3
    } else if (newLevel === 4) {
        Skin = "Images/square.png"; // Skin pour le monde 4
    } else if (newLevel === 5) {
        Skin = "Images/square.png"; // Skin pour le monde 5
    } else {
        Skin = "Images/square.png"; // Skin pour le monde Défaut
    }

    if (player) {
        ultraTopLayer.removeChild(player);
    }

    player = PIXI.Sprite.from(Skin);
    player.width = playerWidth;
    player.height = playerHeight;
    player.y = (gameHeight - player.height) / 2;
    player.x = gameWidth * 0.10;

    ultraTopLayer.addChild(player);
}

ChangementSkin();
