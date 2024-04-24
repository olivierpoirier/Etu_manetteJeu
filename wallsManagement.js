import { gameWidth, gameHeight, speedOfPlayer } from "./constants.js";
import { player } from "./entities.js";
import { underLayer } from "./gameLayers.js";

let wallSprites = [];
let speedOfWalls = 5;
let isWallSpawning = false;
let timeUntilWallSpawn = 200;
let comptorHowManyWallsDied = 0;

export function increaseDifficultyOfWalls() {
    if(comptorHowManyWallsDied >= 100) {
        timeUntilWallSpawn -= 15;
        speedOfWalls += 1;
        comptorHowManyWallsDied = 0;
    }
}

function spawnWall() {
    console.log("spawn");
    let wallSprite = PIXI.Sprite.from('Images/square.png');
    wallSprite.width = 50;
    wallSprite.height = 50;
    wallSprite.x = gameWidth;
    wallSprite.y = Math.floor(Math.random() * (gameHeight-wallSprite.height));
    underLayer.addChild(wallSprite);
    wallSprites.push(wallSprite);
    isWallSpawning = false;
    
      
}


export function timerBeforeSpawningWall(isGameStarted) {
    if (!isWallSpawning) {
        if(!isGameStarted) {
        
            timeUntilWallSpawn = Math.floor((Math.random()* 2000) + 600)
            setTimeout(spawnWall, timeUntilWallSpawn);
            
            
        } else {
            setTimeout(spawnWall, timeUntilWallSpawn);
        }
        
        //timeUntilWallSpawn -= 25;
        isWallSpawning = true;
    }
}

export function removeWallFromGame(isGameStarted, wall, playerScore) {
    if(wall.x + wall.width < 0) {
        underLayer.removeChild(wall);
        wallSprites.shift(wall);
        //console.log(wallSprites.length);
        if(isGameStarted) {
            comptorHowManyWallsDied += 1;
            playerScore += 10;
        }

    }
    return playerScore
}
export function wallsManagement(isGameStarted, isTouchedByWallByTop, isTouchedByWallByLeft, isTouchedByWallByBottom, isTouchedByWallByRight, playerScore) {

    wallSprites.forEach(wall => {


    if(isGameStarted) {
        if (player.y + player.height > wall.y - speedOfPlayer && player.y <= wall.y  && player.x >= wall.x && player.x <= wall.x + wall.width) {
            isTouchedByWallByBottom = true;
        }

        if (player.y < wall.y + wall.height + speedOfPlayer && player.y >= wall.y + wall.height && player.x >= wall.x && player.x <= wall.x + wall.width) {
            isTouchedByWallByTop = true;
        }


        if (player.x + player.width > wall.x - speedOfPlayer && player.x <= wall.x  && player.y >= wall.y && player.y <= wall.y + wall.height) {
            isTouchedByWallByRight = true;
            player.x -= speedOfWalls;
        }
        
        if (player.x < wall.x + wall.width + speedOfPlayer && player.x >= wall.x + wall.width && player.y >= wall.y && player.y <= wall.y + wall.height) {
            isTouchedByWallByLeft = true;
        }
    }


    wall.x -=speedOfWalls;


    playerScore = removeWallFromGame(isGameStarted, wall, playerScore);
    });

    return [isTouchedByWallByTop, isTouchedByWallByLeft, isTouchedByWallByBottom, isTouchedByWallByRight, playerScore];

}
