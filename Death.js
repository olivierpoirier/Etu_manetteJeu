
import { app, gameWidth, gameHeight, player } from "./constants.js";

function JoueurHorsGame() {
    const positionJoueur = player.getBounds();
    return (
        positionJoueur.x < 0 || // Position hori
        positionJoueur.x + positionJoueur.width > gameWidth ||
        positionJoueur.y < 0 ||
        positionJoueur.y + positionJoueur.height > gameHeight
    );
}

export function MortJoueur() {
    if (JoueurHorsGame()) {
        app.stage.removeChild(player);
        alert("JOUEUR MORT !")
    }
}