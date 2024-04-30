import { gameWidth, gameHeight } from "./constants.js";
import { player, speedOfPlayer } from "./player.js";
import { underLayer } from "./gameLayers.js";
import { Wall } from "./wall.js";

let wallSprites = [];
let speedOfWalls = 5;
let isWallSpawning = false;
let timeUntilWallSpawn = 200;
let comptorHowManyWallsDied = 0;
let changedAtStart = false;
const normalWallType = "NORMAL";

export function increaseDifficultyOfWalls() {
    if(comptorHowManyWallsDied >= 100) {
        timeUntilWallSpawn -= 15;
        speedOfWalls += 1;
        comptorHowManyWallsDied = 0;
    }
    

    
}

function spawnGhostWall(wallSprite) {
    let minImage = 1;
    let maxImage = 3;
    let randomInt = Math.floor(Math.random() * (maxImage - minImage + 1)) + minImage;
    const wallType = "GHOST";

    if(randomInt === 1) {
        wallSprite = new Wall('Images/Ghost.png', false, false, wallType);
    } else if(randomInt === 2) {
        wallSprite = new Wall('Images/Ghost2.png', false, false, wallType);
    } else if(randomInt === 3) {
        wallSprite = new Wall('Images/Ghost3.png', false, false, wallType);
    }else {
        console.log("error");
    }

    wallSprite.alpha = Math.random().toFixed(2);
    wallSprite.isAlphaIncrementing = Math.floor(Math.random() * (1 - 0 + 1)) + 0;

    return wallSprite;
} 

function spawnAlienWall(wallSprite) {
    let minImage = 1
    let maxImage = 8
    let randomInt = Math.floor(Math.random() * (maxImage - minImage + 1)) + minImage
    const wallType = "ALIEN";

    if(randomInt === 1) {
        wallSprite = new Wall('Images/Alien1.png', false, false, wallType);
    } else if(randomInt === 2) {
        wallSprite = new Wall('Images/Alien2.png', false, false, wallType);
    } else if(randomInt === 3) {
        wallSprite = new Wall('Images/Alien3.png', false, false, wallType);
    } else if(randomInt === 4) {
        wallSprite = new Wall('Images/Alien4.png', false, false, wallType);
    } else if(randomInt === 5) {
        wallSprite = new Wall('Images/Alien5.png', false, false, wallType);
    } else if(randomInt === 6) {
        wallSprite = new Wall('Images/Alien6.png', false, false, wallType);
    } else if(randomInt === 7) {
        wallSprite = new Wall('Images/Alien7.png', false, false, wallType);
    } else if(randomInt === 8) {
        wallSprite = new Wall('Images/Alien8.png', false, false, wallType);
    }else {
        console.log("error");
    }
    wallSprite.isZigZagingToBottomLeft = Math.floor(Math.random() * (1 - 0 + 1)) + 0;

    return wallSprite;
} 



function spawnWall(level) {
    console.log("spawn");
    let wallSprite;
    if (level === 3) {
        wallSprite = spawnGhostWall(wallSprite);
        
    } else if (level === 4){
        wallSprite = spawnAlienWall(wallSprite);
    } else if (level === 5) {
        let minImage = 1
        let maxImage = 3
        let randomInt = Math.floor(Math.random() * (maxImage - minImage + 1)) + minImage
        if(randomInt === 1) {
            wallSprite = new Wall('Images/square.png', false, false, normalWallType);
        } else if(randomInt === 2) {
            wallSprite = spawnGhostWall(wallSprite);
        } else if(randomInt === 3) {
            wallSprite = spawnAlienWall(wallSprite);
        }else {
            console.log("error");
        }
    } else {
        wallSprite = new Wall('Images/square.png', false, false, normalWallType);
    }

    //if(level === 5) {
    //    wallSprite.isOnlyGoingForward = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
    //}
    
    wallSprite.sprite.width = 50;
    wallSprite.sprite.height = 50;
    wallSprite.sprite.x = gameWidth;
    wallSprite.sprite.y = Math.floor(Math.random() * (gameHeight-wallSprite.sprite.height));

    underLayer.addChild(wallSprite.sprite);
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
                    underLayer.removeChild(wall.sprite);
                });
                wallSprites.splice(0 , wallSprites.length);
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
    if(wall.sprite.x + wall.sprite.width < 0) {
        underLayer.removeChild(wall.sprite);
        wallSprites.shift(wall);
        //console.log(wallSprites.length);
        if(isGameStarted) {
            comptorHowManyWallsDied += 1;
            if(level === 1) {
                playerScore += 10;
            }
            else if(level === 2) {
                playerScore += 25;
            }
            else if(level === 3) {
                playerScore += 35;
            }
            else if(level === 4) {
                playerScore += 40;
            }
            else if(level === 5) {
                playerScore += 50;
            } else {
                playerScore += 0;
            }
            
        }

    }
    return playerScore
}
export function wallsManagement(isGameStarted, isTouchedByWallByTop, isTouchedByWallByLeft, isTouchedByWallByBottom, isTouchedByWallByRight, playerScore, level) {

    wallSprites.forEach(wall => {

    if(isGameStarted) {
        if (player.y + player.height > wall.sprite.y - speedOfPlayer && player.y <= wall.sprite.y  && player.x >= wall.sprite.x && player.x <= wall.sprite.x + wall.sprite.width) {
            isTouchedByWallByBottom = true;
            if(player.y - speedOfWalls > 0){
                player.y -= speedOfWalls;
            }
        }

        if (player.y < wall.sprite.y + wall.sprite.height + speedOfPlayer && player.y >= wall.sprite.y + wall.sprite.height && player.x >= wall.sprite.x && player.x <= wall.sprite.x + wall.sprite.width) {
            isTouchedByWallByTop = true;
            if(player.y + player.height + speedOfWalls < gameHeight){
                player.y += speedOfWalls;
            }
        }


        if (player.x + player.width > wall.sprite.x - speedOfPlayer && player.x <= wall.sprite.x  && player.y >= wall.sprite.y && player.y <= wall.sprite.y + wall.sprite.height) {
            isTouchedByWallByRight = true;
            player.x -= speedOfWalls;
        }
        
        if (player.x < wall.sprite.x + wall.sprite.width + speedOfPlayer && player.x >= wall.sprite.x + wall.sprite.width && player.y >= wall.sprite.y && player.y <= wall.sprite.y + wall.sprite.height) {
            isTouchedByWallByLeft = true;
            if(player.x + player.width + speedOfWalls < gameWidth){
                player.x += speedOfWalls;
            }
        }
    }


    

  
    if(wall.wallType === "GHOST") {
        if(wall.sprite.alpha > 0 && !wall.isAlphaIncrementing) {
            wall.sprite.alpha -= 0.02;
        }
        if(wall.sprite.alpha <= 1 && wall.isAlphaIncrementing) {
            wall.sprite.alpha += 0.02;
        }
        if(wall.sprite.alpha<= 0){
            wall.isAlphaIncrementing = true;
        }

        if(wall.sprite.alpha>= 1){
            wall.isAlphaIncrementing = false;
        }
    }

    if(wall.wallType === "ALIEN") {
        if(!wall.isZigZagingToBottomLeft) {
            wall.sprite.y -= speedOfWalls;
        }
        if(wall.isZigZagingToBottomLeft) {
            wall.sprite.y += speedOfWalls;
        }
        if(wall.sprite.y <= 0){
            wall.isZigZagingToBottomLeft = true;
        }

        if(wall.sprite.y + wall.sprite.height >= gameHeight){
            wall.isZigZagingToBottomLeft = false;
        }
    }

    
       
    wall.sprite.x -=speedOfWalls;
    

    playerScore = removeWallFromGame(isGameStarted, wall, playerScore, level);
    });

    return [isTouchedByWallByTop, isTouchedByWallByLeft, isTouchedByWallByBottom, isTouchedByWallByRight, playerScore];

}
