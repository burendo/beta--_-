let blackbox = document.getElementById("blackbox");

const scrollEvent = function () {
    window.addEventListener("scroll", function () {

        // スクロール量の取得
        let scrollValue = window.pageYOffset;

        blackbox.style.opacity = scrollValue / 800;

        // if (scrollValue > 1000) {blackbox.style.opacity = 0;}
    });
};

scrollEvent();