export class Wall {
    constructor(pathOfImage, isAlphaIncrementing, isZigZagingToBottomLeft, wallType) {
        this.sprite = PIXI.Sprite.from(pathOfImage);
        this.isAlphaIncrementing = isAlphaIncrementing;
        this.isZigZagingToBottomLeft = isZigZagingToBottomLeft;
        this.wallType = wallType;
    }

}

