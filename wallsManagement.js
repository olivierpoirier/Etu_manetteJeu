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
const ghostWallType = "GHOST";
const alienWallType = "ALIEN";

export function increaseDifficultyOfWalls() {
    try {
        if(comptorHowManyWallsDied >= 100) {
            timeUntilWallSpawn -= 15;
            speedOfWalls += 1;
            comptorHowManyWallsDied = 0;
        }
    } catch(e) {
        console.error(e);
    }

}

function spawnGhostWall(wallSprite) {
    const minImage = 1;
    const maxImage = 3;
    const randomInt = Math.floor(Math.random() * (maxImage - minImage + 1)) + minImage;

    try {
        if(randomInt === 1) {
            wallSprite = new Wall('Images/Ghost.png', false, false, ghostWallType);
        } else if(randomInt === 2) {
            wallSprite = new Wall('Images/Ghost2.png', false, false, ghostWallType);
        } else if(randomInt === 3) {
            wallSprite = new Wall('Images/Ghost3.png', false, false, ghostWallType);
        }else {
            console.error("Error when spawning Ghost");
        }
        wallSprite.alpha = Math.random().toFixed(2);
        wallSprite.isAlphaIncrementing = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
    } catch(e) {
        console.error(e);
    }

    return wallSprite;
} 

function spawnAlienWall() {
    const minImage = 1
    const maxImage = 8
    const randomInt = Math.floor(Math.random() * (maxImage - minImage + 1)) + minImage
    
    let wallSprite;

    try {
        if(randomInt === 1) {
            wallSprite = new Wall('Images/Alien1.png', false, false, alienWallType);
        } else if(randomInt === 2) {
            wallSprite = new Wall('Images/Alien2.png', false, false, alienWallType);
        } else if(randomInt === 3) {
            wallSprite = new Wall('Images/Alien3.png', false, false, alienWallType);
        } else if(randomInt === 4) {
            wallSprite = new Wall('Images/Alien4.png', false, false, alienWallType);
        } else if(randomInt === 5) {
            wallSprite = new Wall('Images/Alien5.png', false, false, alienWallType);
        } else if(randomInt === 6) {
            wallSprite = new Wall('Images/Alien6.png', false, false, alienWallType);
        } else if(randomInt === 7) {
            wallSprite = new Wall('Images/Alien7.png', false, false, alienWallType);
        } else if(randomInt === 8) {
            wallSprite = new Wall('Images/Alien8.png', false, false, alienWallType);
        }else {
            console.error("Error when spawning alien");
        }
        wallSprite.isZigZagingToBottomLeft = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
    } catch(e) {
        console.error(e);
    }
    return wallSprite;
} 

function spawnChangingNumber() {
    const textStyle = new PIXI.TextStyle({
        fontFamily: "Verdana",
        fontSize: 36,
        fill: "#ffffff"
    });

    const scoretext = new PIXI.Text({
        text:`Score : 0`,
        style: textStyle
    
    });

    scoretext.position.x = gameWidth*0.70;
    scoretext.position.y = gameHeight*0.05;
    scoretext.visible = false;
}

function spawnWall(level) {
    try {
        
        let wallSprite;
        if (level === 3) {
            wallSprite = spawnGhostWall();
            console.log("Spawn Ghost");
        } else if (level === 4){
            wallSprite = spawnAlienWall();
   
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
    
        
        wallSprite.sprite.width = 50;
        wallSprite.sprite.height = 50;
        wallSprite.sprite.x = gameWidth;
        wallSprite.sprite.y = Math.floor(Math.random() * (gameHeight-wallSprite.sprite.height));
    
        underLayer.addChild(wallSprite.sprite);
        wallSprites.push(wallSprite);
        isWallSpawning = false;
    } catch(e) {
        console.error(e);
    }

}


export function timerBeforeSpawningWall(isGameStarted, level) {
    try {
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
    } catch(e) {
        console.error(e);
    }

}

export function removeWallFromGame(isGameStarted, wall, playerScore, level) {
    try {
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
    } catch(e) {
        console.error(e);
    }
    return playerScore
}

export function wallsManagement(isGameStarted, isTouchedByWallByTop, isTouchedByWallByLeft, isTouchedByWallByBottom, isTouchedByWallByRight, playerScore, level) {

    try {
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
        
    } catch(e) {
        console.error(e);
    }
    
    return [isTouchedByWallByTop, isTouchedByWallByLeft, isTouchedByWallByBottom, isTouchedByWallByRight, playerScore];

}
