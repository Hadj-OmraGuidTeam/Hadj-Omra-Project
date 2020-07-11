// function urlBase64ToUint8Array(base64String) {
//   const padding = '='.repeat((4 - base64String.length % 4) % 4);
//   const base64 = (base64String + padding)
//     .replace(/-/g, '+')
//     .replace(/_/g, '/');
//
//   const rawData = window.atob(base64);
//   const outputArray = new Uint8Array(rawData.length);
//
//   for (let i = 0; i < rawData.length; ++i) {
//     outputArray[i] = rawData.charCodeAt(i);
//   }
//   return outputArray;
// }
//
// async function triggerPushNotification() {
//   console.log("In function ");
// if ('serviceWorker' in navigator) {
//   console.log("Registering service worker ...");
//       const register = await navigator.serviceWorker.register('/sw.js', {
//         scope: '/Push'
//       });
//   console.log('Registering push ...');
//       const subscription = await register.pushManager.subscribe({
//         userVisibleOnly: true,
//         applicationServerKey: urlBase64ToUint8Array('BMlgeIM_4qZksqFbMwJ4hc3rxe90-NQvxzD_0Wdq5nD-Uk3joWyiSxOpWG6HM5c_7fI8veW6Bcw8XBjJsLS7XgQ'),
//       });
//   console.log('Sending Push');
//       await fetch('/subscribe', {
//         method: 'POST',
//         body: JSON.stringify(subscription),
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });
//       console.log("Push Sent");
//     } else {
//       console.error('Service workers are not supported in this browser');
//     }
//   }
//   async function questionNotification() {
//     console.log("In function ");
//   if ('serviceWorker' in navigator) {
//     console.log("Registering service worker ...");
//         const register = await navigator.serviceWorker.register('/sw2.js', {
//           scope: '/question/question'
//         });
//     console.log('Registering push ...');
//         const subscription = await register.pushManager.subscribe({
//           userVisibleOnly: true,
//           applicationServerKey: urlBase64ToUint8Array('BMlgeIM_4qZksqFbMwJ4hc3rxe90-NQvxzD_0Wdq5nD-Uk3joWyiSxOpWG6HM5c_7fI8veW6Bcw8XBjJsLS7XgQ'),
//         });
//     console.log('Sending Push');
//         await fetch('/subscribe', {
//           method: 'POST',
//           body: JSON.stringify(subscription),
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         });
//         console.log("Push Sent");
//       } else {
//         console.error('Service workers are not supported in this browser');
//       }
//     }
//
// const trigger = document.querySelector('.trigger-push');
//
// if(trigger){
//   trigger.addEventListener('click', () => {
//     console.log('event listener');
//     triggerPushNotification().catch(error => console.error(error));
//   });
// }
//


// Creating io instance
// var socket = io("http://localhost:8080");

// function sendMessage(){
//   //Get User Name
//   var name = document.getElementById("QstUserName").value;
//   console.log("User Name 1----------> : ",name);
//   //Send it to server
//   socket.emit("user_connected",name);
//
//   socket.emit("messageSent",{
//     "Name" : "Ismail ",
//     "Subject" : "New question ",
//     "Message"  : "I had a new question here"
//   })
// }
//
// socket.on("user_connected",function(username){
//   console.log("User Name 2----------> : ",username);
// })
//
// socket.on ("messageSent", function(message) {
//     console.log(message);
//     $.notify("New Message\n" + message.Message + "\n\nFrom  :" + message.Name,{
//       autoHide :false,
//       className : "success"
//     });
//   })
