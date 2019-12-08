const title = document.querySelector("#title");
let el = document.getElementById("#title");

const CLICKED_CLASS = "clicked";

// if (el.className === 'btn')

function handleClick(){
    // title.classList.toggle(CLICKED_CLASS);
    console.log(title.classList.toggle(CLICKED_CLASS));
}

function init() {
    title.addEventListener("click", handleClick);
}
init();