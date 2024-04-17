
function spawnWall(wallSprites) {
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