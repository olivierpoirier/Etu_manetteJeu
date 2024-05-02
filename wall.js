export class Wall {

    constructor(pathOfImage, isAlphaIncrementing, isZigZagingToBottomLeft, wallType) {
        try {
            this.sprite = PIXI.Sprite.from(pathOfImage);
            this.isAlphaIncrementing = isAlphaIncrementing;
            this.isZigZagingToBottomLeft = isZigZagingToBottomLeft;
            this.wallType = wallType;
        } catch(e) {
            console.error(e);
        }

    }

}

