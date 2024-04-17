import { app, gameWidth, gameHeight, speedOfPlayer } from "./constants.js";

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
    app.stage.addChild(wallSprite);
    wallSprites.push(wallSprite);
    isWallSpawning = false;
    
      
}


export function timerBeforeSpawningWall() {
    if (!isWallSpawning) {
        setTimeout(spawnWall, timeUntilWallSpawn);
        //timeUntilWallSpawn -= 25;
        isWallSpawning = true;
    }
}

export function removeWallFromGame(wall, playerScore) {
    if(wall.x + wall.width < 0) {
        app.stage.removeChild(wall);
        wallSprites.shift(wall);
        //console.log(wallSprites.length);
        comptorHowManyWallsDied += 1;
        playerScore += 10;
    }
    return playerScore
}
export function wallsManagement(isTouchedByWallByTop, isTouchedByWallByLeft, isTouchedByWallByBottom, isTouchedByWallByRight, sprite, playerScore) {

    wallSprites.forEach(wall => {



    if (sprite.y + sprite.height > wall.y - speedOfPlayer && sprite.y <= wall.y  && sprite.x >= wall.x && sprite.x <= wall.x + wall.width) {
        isTouchedByWallByBottom = true;
    }

    if (sprite.y < wall.y + wall.height + speedOfPlayer && sprite.y >= wall.y + wall.height && sprite.x >= wall.x && sprite.x <= wall.x + wall.width) {
        isTouchedByWallByTop = true;
    }


    if (sprite.x + sprite.width > wall.x - speedOfPlayer && sprite.x <= wall.x  && sprite.y >= wall.y && sprite.y <= wall.y + wall.height) {
        isTouchedByWallByRight = true;
        sprite.x -= speedOfWalls;
    }
    
    if (sprite.x < wall.x + wall.width + speedOfPlayer && sprite.x >= wall.x + wall.width && sprite.y >= wall.y && sprite.y <= wall.y + wall.height) {
        isTouchedByWallByLeft = true;
    }


    

    wall.x -=speedOfWalls;


    playerScore = removeWallFromGame(wall, playerScore);
    });

    return [isTouchedByWallByTop, isTouchedByWallByLeft, isTouchedByWallByBottom, isTouchedByWallByRight, playerScore];

}
