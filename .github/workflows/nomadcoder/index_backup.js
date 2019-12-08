const title = document.querySelector("#title");
// 이벤트는 웹사이트에서 발생하는 것들을 말하는 거야!
const BASE_COLOR = "rgb(230, 126, 34)";
const OTHER_COLOR = "#f39c12";

function handleClick(){
    const currentColor = title.style.color;
    console.log(currentColor);
    if (currentColor === BASE_COLOR){
        title.style.color = OTHER_COLOR;
    }
    else{
        title.style.color = BASE_COLOR;
    }
    // if (title.style.color === "red")
    // {
    //     title.style.color = "#34495e";
    // }
    // else
    // {
    //     title.style.color = "red";
    // }
    
    // console.log("I have been resized");
    // event는 자바스크립트로 부터 온거지
    // Whenever you make a function that will handle an event, 
    // javascript will automatically push the event object into your function
    // so you need to will ready to handle it(그래서 넌 이걸 다룰 준비가 필요하지)
}

function init(){
    title.style.color = BASE_COLOR;
    title.addEventListener("mouseenter", handleClick);
}

init();
// title.addEventListener("click", handleClick);
// 자바스크립트는 이벤트를 받기를 기다리고 있어.

// 자바스크립트는 이벤트에 반응하기 위해서 만들어 졌어

function handleOffline() {
    console.log("bye bye");
}
function handleOnline() {
    console.log("welcome back");
}

window.addEventListener("offline", handleOffline);
window.addEventListener("online", handleOnline);
// // ononline version
// window.ononline = (event) => {
//     console.log("You are now connected to the network.");
//   };
//   // addEventListener version
// window.addEventListener('online', (event) => {
//     console.log("You are now connected to the network.");
// });
// // addEventListener version
// window.addEventListener('offline', (event) => {
//     console.log("The network connection has been lost.");
// });

// // onoffline version
// window.onoffline = (event) => {
//   console.log("The network connection has been lost.");
// };