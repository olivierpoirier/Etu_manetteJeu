const appId = "TODO";
var currentSession;
const nameSpace1 = "urn:x-cast:testChannel";

document.getElementById('connectBtn').addEventListener('click', () => {
    initializeApiOnly();
});

function initializeApiOnly() {

    const sessionRequest = new chrome.cast.SessionRequest(chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID);
    const apiConfig = new chrome.cast.ApiConfig(sessionRequest, sessionListener, receiverListener);
    chrome.cast.initialize(apiConfig, onInitSuccess, onError);
}

function onInitSuccess() {
    console.log('Chromecast init success');
}

function onError(error) {
    console.error('Chromecast initialization error', error);
}
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
document.getElementById("forwardBtn").addEventListener('click', () => {
    initializeApiOnly();
});