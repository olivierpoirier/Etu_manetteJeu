import { app } from "./constants.js";


export const underLayer = new PIXI.Container();
export const middleLayer = new PIXI.Container();
export const topLayer = new PIXI.Container();


app.stage.addChild(underLayer);
app.stage.addChild(middleLayer);
app.stage.addChild(topLayer);
