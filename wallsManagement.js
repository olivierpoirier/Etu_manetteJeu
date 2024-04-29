import { gameWidth, gameHeight } from "./constants.js";
import { player, speedOfPlayer } from "./player.js";
import { underLayer } from "./gameLayers.js";

let wallSprites = [];
let speedOfWalls = 5;
let isWallSpawning = false;
let timeUntilWallSpawn = 200;
let comptorHowManyWallsDied = 0;
let changedAtStart = false;
let wallOpacity = 1;
let isWallOpacityIncrementing = false;

export function increaseDifficultyOfWalls(level) {
    if(comptorHowManyWallsDied >= 100) {
        timeUntilWallSpawn -= 15;
        speedOfWalls += 1;
        comptorHowManyWallsDied = 0;
    }
    if(level === 3) {
        if(wallOpacity > 0 && !isWallOpacityIncrementing) {
            wallOpacity -= 0.02;
        }
        if(wallOpacity <= 1 && isWallOpacityIncrementing) {
            wallOpacity += 0.02;
        }
        if(wallOpacity<= 0){
            isWallOpacityIncrementing = true;
        }

        if(wallOpacity>= 1){
            isWallOpacityIncrementing = false;
        }
    }
}

function spawnWall(level) {
    console.log("spawn");
    let wallSprite = ';';
    if (level != 3) {
        wallSprite = PIXI.Sprite.from('Images/square.png');
    } else {
        let min = 1
        let max = 3

        let randomInt = Math.floor(Math.random() * (max - min + 1)) + min
        if(randomInt === 1) {
            wallSprite = PIXI.Sprite.from('Images/Ghost.png');
        } else if(randomInt === 2) {
            wallSprite = PIXI.Sprite.from('Images/Ghost2.png');
        } else if(randomInt === 3) {
            wallSprite = PIXI.Sprite.from('Images/Ghost3.png');
        }else {
            console.log("error");
        }
        
    }
    
    wallSprite.width = 50;
    wallSprite.height = 50;
    wallSprite.x = gameWidth;
    wallSprite.y = Math.floor(Math.random() * (gameHeight-wallSprite.height));
    if(level === 3) {
        wallSprite.alpha = wallOpacity;
    }
    underLayer.addChild(wallSprite);
    wallSprites.push(wallSprite);
    isWallSpawning = false;
    
      
}


export function timerBeforeSpawningWall(isGameStarted, level) {
    if (!isWallSpawning) {
        if(!isGameStarted) {
        
            timeUntilWallSpawn = Math.floor((Math.random()* 2000) + 600)
            setTimeout(spawnWall, timeUntilWallSpawn, level);
            
            
        } else {
            if(!changedAtStart) {
                wallSprites.forEach(wall => {
                    underLayer.removeChild(wall);
                });
                wallSprites.splice();
                timeUntilWallSpawn = 200;
                changedAtStart = true;
            }
            setTimeout(spawnWall, timeUntilWallSpawn, level);
        }
        
        //timeUntilWallSpawn -= 25;
        isWallSpawning = true;
    }
}

export function removeWallFromGame(isGameStarted, wall, playerScore, level) {
    if(wall.x + wall.width < 0) {
        underLayer.removeChild(wall);
        wallSprites.shift(wall);
        //console.log(wallSprites.length);
        if(isGameStarted) {
            comptorHowManyWallsDied += 1;
            if(level === 1) {
                playerScore += 10;
            }
            if(level === 2) {
                playerScore += 25;
            }
            if(level === 3) {
                playerScore += 35;
            }
            
        }

    }
    return playerScore
}
export function wallsManagement(isGameStarted, isTouchedByWallByTop, isTouchedByWallByLeft, isTouchedByWallByBottom, isTouchedByWallByRight, playerScore, level) {

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

    if(level === 3) {
        wall.alpha = wallOpacity
    }

    playerScore = removeWallFromGame(isGameStarted, wall, playerScore, level);
    });

    return [isTouchedByWallByTop, isTouchedByWallByLeft, isTouchedByWallByBottom, isTouchedByWallByRight, playerScore];

}
