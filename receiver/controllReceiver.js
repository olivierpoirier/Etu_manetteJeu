//Chromecast
//const context = cast.framework.CastReceiverContext.getInstance();
//const CHANNEL = 'urn:x-cast:gameChannel';
//let keys = {};
// let keysDiv;

// context.addCustomMessageListener(CHANNEL, function(customEvent) {
// //const pos = customEvent.data.msg.split(',');
// //titleChooseLevel.text = customEvent.data.whereIsGoingPlayerY;
// //level1text.text = customEvent.data.whereIsGoingPlayerX;
// if(player.y >= 0){
//   if(!isTouchedByWallByTop) {
//     if(keys["38"] || customEvent.data.whereIsGoingPlayerY === "Up"){
//       player.y -= speedOfPlayer;
//     }
//   }
// }
// if(player.y < gameHeight - player.height){
//   if(!isTouchedByWallByBottom) {
//     if(keys["40"] || customEvent.data.whereIsGoingPlayerY === "Down"){
//       player.y += speedOfPlayer;
//     }
//   }
// }
// if (!isTouchedByWallByLeft) {
//   if(keys["37"] || customEvent.data.whereIsGoingPlayerX === "Left"){
//     player.x -= speedOfPlayer;
//   }
// }
// if (!isTouchedByWallByRight) {
//   if(keys["39"] || customEvent.data.whereIsGoingPlayerX === "Right"){
//     player.x += speedOfPlayer;
//   }
// }
// if(keys['80']) {
//   console.log('allo')
//   let aud = new Audio("Audio/menu.mp3");
//   aud.play();
// }

// });

// const options = new cast.framework.CastReceiverOptions();

// options.customNamespaces = Object.assign({});
// options.customNamespaces[CHANNEL] = cast.framework.system.MessageType.JSON;
// options.disableIdleTimeout = true;

// context.start(options);