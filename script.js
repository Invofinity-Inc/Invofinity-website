//below lines change the color of let's talk button
var button=document.querySelector(".lets-talk-button");
button.addEventListener("mouseover",() => {
    button.style.backgroundColor='#05386b';
    button.style.color='#ffffff'
})
button.addEventListener("mouseleave",() => {
    button.style.backgroundColor='#5cdb95';
    button.style.color='#05386b'
})