import { app, gameWidth, gameHeight} from "./constants.js";

const menuLeftCoordinateX = gameWidth*0.20;
const menuRightCoordinateX = gameWidth*0.80;
const menuTopCoordinateY = gameHeight*0.20;
const menuBottomCoordinateY = gameHeight*0.80;
const menuMaxWidth = gameWidth*0.60;
const menuMinWidth = gameWidth*0.01;
const menuMaxHeight = gameHeight*0.60;
const menuMinHeight = gameHeight*0.01;

export const menuFirstLevelSquareLeftCoordinateX = gameWidth*0.30;
export const menuFirstLevelSquareRightCoordinateX = gameWidth*0.40;
export const menuFirstLevelSquareTopCoordinateY = gameHeight*0.30;
export const menuFirstLevelSquareBottomCoordinateY = gameHeight*0.50;

export const levelMaxWidth = gameWidth*0.10;
const levelMinWidth = gameWidth*0.01;
export const levelMaxHeight = gameWidth*0.10;
const levelMinHeight = gameWidth*0.01;

export const textStyle = new PIXI.TextStyle({
    fontFamily: "Verdana",
    fontSize: 36,
    fill: "#ffffff"
});

export const scoretext = new PIXI.Text({
    text:`Score : 0`,
    style: textStyle

});

scoretext.position.x = gameWidth*0.70;
scoretext.position.y = gameHeight*0.05;

export const menuBackground = new PIXI.Graphics()
    .rect(menuLeftCoordinateX, menuTopCoordinateY, menuMaxWidth, menuMaxHeight)
    .fill(0xff0000);

export const menuLineLeft = new PIXI.Graphics()
    .rect(menuLeftCoordinateX, menuTopCoordinateY, menuMinWidth, menuMaxHeight)
    .fill(0xffffff);

export const menuLineBottom = new PIXI.Graphics()
    .rect(menuLeftCoordinateX, menuBottomCoordinateY - menuMinHeight, menuMaxWidth, menuMinHeight)
    .fill(0xffffff);

export const menuLineRight = new PIXI.Graphics()
    .rect(menuRightCoordinateX, menuTopCoordinateY, menuMinWidth, menuMaxHeight)
    .fill(0xffffff);

export const menuLineTop = new PIXI.Graphics()
    .rect(menuLeftCoordinateX, menuTopCoordinateY, menuMaxWidth, menuMinHeight)
    .fill(0xffffff);



export const firstLevelSquareLineLeft = new PIXI.Graphics()
    .rect(menuFirstLevelSquareLeftCoordinateX, menuFirstLevelSquareTopCoordinateY, levelMinWidth, levelMaxHeight)
    .fill(0xffffff);

export const firstLevelSquareLineBottom = new PIXI.Graphics()
    .rect(menuFirstLevelSquareLeftCoordinateX, menuFirstLevelSquareBottomCoordinateY - levelMinHeight, levelMaxWidth, levelMinHeight)
    .fill(0xffffff);

export const firstLevelSquareLineRight = new PIXI.Graphics()
    .rect(menuFirstLevelSquareRightCoordinateX, menuFirstLevelSquareTopCoordinateY, levelMinWidth, levelMaxHeight)
    .fill(0xffffff);

export const firstLevelSquareLineTop = new PIXI.Graphics()
    .rect(menuFirstLevelSquareLeftCoordinateX, menuFirstLevelSquareTopCoordinateY, levelMaxWidth, levelMinHeight)
    .fill(0xffffff);


scoretext.visible = false;
app.stage.addChild(scoretext);
app.stage.addChild(menuBackground);
app.stage.addChild(menuLineLeft);
app.stage.addChild(menuLineRight);
app.stage.addChild(menuLineTop);
app.stage.addChild(menuLineBottom);
app.stage.addChild(firstLevelSquareLineLeft);
app.stage.addChild(firstLevelSquareLineBottom);
app.stage.addChild(firstLevelSquareLineRight);
app.stage.addChild(firstLevelSquareLineTop);
