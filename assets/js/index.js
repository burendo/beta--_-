let blackbox = document.getElementById("blackbox");
let haikei = document.getElementById("white-ha");
let movstart = document.getElementById("start-mov");
let movstartmo = document.getElementById("start-mov-mo");

const scrollEvent = function () {
    window.addEventListener("scroll", function () {

        // スクロール量の取得
        let scrollValue = window.pageYOffset;

        blackbox.style.opacity = scrollValue / 500;

        if (scrollValue > 1000) {blackbox.style.opacity = 0;}
    });
};

window.addEventListener("load", function () {
    if (!movstart.classList.contains('start-mov')) {
        setTimeout(function(){
            haikei.classList.add('ani-haikei');
        },2500)
        setTimeout(function(){
            movstart.classList.add('ani-start');
        },100)
        setTimeout(function(){
            movstartmo.classList.add('ani-start-mo');
        },100)
        setTimeout(function(){
            document.body.style.overflowY = 'scroll';
        },5000)
    }
});

scrollEvent();