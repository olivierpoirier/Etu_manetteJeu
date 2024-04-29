const appId = "TODO";
var currentSession;
const nameSpace1 = "urn:x-cast:testChannel";




function onInitSuccess() {
    console.log('Chromecast init success');
}

function onError(error) {
    console.error('Chromecast initialization error', error);
}

function initializeApiOnly() {

    const sessionRequest = new chrome.cast.SessionRequest(chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID);
    const apiConfig = new chrome.cast.ApiConfig(sessionRequest, sessionListener, receiverListener);
    chrome.cast.initialize(apiConfig, onInitSuccess, onError);
}

document.getElementById("con").addEventListener("click", () => {

    initializeApiOnly();
});




function sessionListener(newSession) {
    currentSession = newSession;

}

function receiverListener(availability) {
}

function sendCommands() {
    let message = {};
    message = JSON.stringify(message);
    currentSession.sendMessage(nameSpace1, message);
}
//document.getElementById("forwardBtn").addEventListener('click', () => {
//    initializeApiOnly();
//});

function getWindowPosition() {
    //console.log(window.screenX)
    //console.log(window.innerWidth/2)
    if(window.screenX - window.innerWidth/2 < window.screen.availWidth*0.10){
        console.log("Sprite goes left");
    } 
    else if(window.screenX + window.innerWidth/2 > window.screen.availWidth*0.40){
        console.log("Sprite goes right");
    } else {
        console.log("Sprite don't move on x");
    } 
    //console.log(window)

    if(window.screenY - window.innerHeight/2 < window.screen.availHeight*0.01){
        console.log("Sprite goes up");
    } 
    else if(window.screenY + window.innerHeight/2 > window.screen.availHeight*0.50){
        console.log("Sprite goes down");
    } else {
        console.log("Sprite don't move on y");
    } 
}

setInterval(getWindowPosition, 100)