import { gameHeight, gameWidth } from "./constants.js";
import { middleLayer } from "./gameLayers.js";
import { newLevel } from "./startAndEndGame.js";

export let player;  
const playerWidth = gameWidth*0.02;
const playerHeight = gameWidth*0.02;
export const speedOfPlayer = gameWidth*0.003;

export function ChangementSkin() {
    let Skin;
    if (newLevel === 1) {
        Skin = "Images/square.png";
    } else if (newLevel === 2) {
        Skin = "Images/helicopter.png"; // Skin pour le monde 2
    } else if (newLevel === 3) {
        Skin = "Images/drill.png"; // Skin pour le monde 3
    } else if (newLevel === 4) {
        Skin = "Images/starship.png"; // Skin pour le monde 4
    } else if (newLevel === 5) {
        Skin = "Images/super juba.png"; // Skin pour le monde 5
    } else {
        Skin = "Images/square.png"; // Skin pour le monde Défaut
    }

    if (player) {
        middleLayer.removeChild(player);
    }

    player = PIXI.Sprite.from(Skin);
    player.width = playerWidth;
    player.height = playerHeight;
    player.y = (gameHeight - player.height) / 2;
    player.x = gameWidth * 0.10;

    middleLayer.addChild(player);
}

ChangementSkin();
