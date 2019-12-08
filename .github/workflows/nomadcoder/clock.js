const clockContainer = document.querySelector(".js-clock");
clockTitle = clockContainer.querySelector("h1");

function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    // clockTitle.innerText = `${hours}:${minutes}:${seconds < 10 ? "0"+seconds : "**"+seconds}`;
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
        minutes < 10 ? `0${minutes}` : minutes
}:${seconds < 10 ? `0${seconds}` : `${seconds}`}`;
    // if (seconds < 10)
    // {
    //     clockTitle.innerText = `${hours}:${minutes}:0${seconds}`;
    // }
    // else
    // {
    //     clockTitle.innerText = `${hours}:${minutes}:${seconds}`;
    // }
    // seconds < 10 ? clockTitle.innerText = `${hours}:${minutes}:0${seconds}`:clockTitle.innerText = `${hours}:${minutes}:${seconds}`;
    
    
}
function init(){
    getTime();
    setInterval(getTime, 1000);
}

init();
