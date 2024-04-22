import {height, width} from "./FullScreen"


export const app = new PIXI.Application();
export const gameWidth = 1000;
export const gameHeight = 500;

export const speedOfPlayer = 3;
export const playerWidth = 15;
export const playerHeight = 15;


export const textStyle = new PIXI.TextStyle({
    fontFamily: "Verdana",
    fontSize: 36,
    fill: "#ffffff"
});

export const scoretext = new PIXI.Text({
    text:`Score : 0`,
    style: textStyle

});