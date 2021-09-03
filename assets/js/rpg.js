'use strict';

const CHRHEIGHT = 9;
const CHRWIDTH = 8;
const FONT = "12px monospace";
const FONTSTYLE = "#fff";
const HEIGHT = 120;
const WIDTH = 128;
const MAP_WIDTH = 32;
const MAP_HEIGHT = 32;
const SMOOTH = 0;
const START_X = 15;
const START_Y = 17;
const TILECOLUMN = 4;
const TILEROW = 4;
const TILESIZE = 8;
const WNDSTYLE = "rgba(0, 0, 0, 0.75)";

let gScreen;
let gFrame = 0;
let gWidth;
let gHeight;
let gImgMap;
let gImgPlayer;
let gPlayerX = START_X * TILESIZE;
let gPlayerY = START_Y * TILESIZE;

const gFileMap    = "img/map.png";
const gFilePlayer = "img/player.png";

const gMap = [
    1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,2,0,0,0,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,3,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,12,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,5,0,0,5,0,0,0,0,0,0,0,0,1,0,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
];

function DrawMain() 
{
    const  g = gScreen.getContext("2d");             //2D描画コンテキスト取得

    let mx = Math.floor(gPlayerX / TILESIZE);
    let my = Math.floor(gPlayerY / TILESIZE);

    for(let dy = -7; dy <= 7; dy++) {
        let y = dy + 7;
        let ty = my + dy;
        let py = (ty + MAP_HEIGHT) % MAP_HEIGHT;
        for(let dx = -8; dx <= 8; dx++) {
            let x = dx + 8;
            let tx = mx + dx;
            let px = (tx + MAP_WIDTH) % MAP_WIDTH;
            DrawTile(g,
                     x * TILESIZE - TILESIZE / 2 ,y * TILESIZE ,
                     gMap[py * MAP_WIDTH + px]);
        }
    }

    g.fillStyle = "#ff0000";
    g.fillRect(0, HEIGHT / 2 - 1, WIDTH, 2);
    g.fillRect(WIDTH / 2 - 1, 0, 2, HEIGHT);

    g.drawImage(gImgPlayer, 
                CHRWIDTH, 0, CHRWIDTH, CHRWIDTH,
                WIDTH / 2 - CHRWIDTH / 2, HEIGHT / 2 - CHRHEIGHT + TILESIZE / 2,CHRWIDTH ,CHRHEIGHT);

    g.fillStyle = WNDSTYLE;
    g.fillRect(20, 103, 105, 15);

    g.font = FONT;
    g.fillStyle = FONTSTYLE;
    g.fillText("x=" + gPlayerX + "y=" + gPlayerY + "m=" + gMap[my * MAP_WIDTH + mx], 25, 115);
}

function DrawTile(g, x, y, idx) {
    const ix = (idx % TILECOLUMN) * TILESIZE;
    const iy = Math.floor(idx / TILECOLUMN) * TILESIZE;;
    g.drawImage(gImgMap, ix, iy, TILESIZE, TILESIZE, x, y, TILESIZE, TILESIZE);
}

function LoadImage()
{
    gImgMap = new Image();    gImgMap.src    = gFileMap;
    gImgPlayer = new Image(); gImgPlayer.src = gFilePlayer;
}

function Wmpaint()
{
    DrawMain();

    const ca = document.getElementById('main'); //mainキャンバスの要素取得
    const  g = ca.getContext("2d");             //2D描画コンテキスト取得
    g.drawImage(gScreen, 0, 0, gScreen.width, gScreen.height, 0, 0, gWidth, gHeight);
}

function WmSize() {
    const ca = document.getElementById('main'); //mainキャンバスの要素取得
    ca.width = window.innerWidth;              //キャンバスの幅
    ca.height = window.innerHeight;

    const  g = ca.getContext("2d");  
    g.imageSmoothigEnabled = g.imageSmoothigEnabled = SMOOTH;

    gWidth = ca.width;
    gHeight = ca.height;

    if(gWidth / WIDTH < gHeight / HEIGHT) {
        gHeight = gWidth * HEIGHT / WIDTH;
    }else {
        gWidth = gHeight * WIDTH / HEIGHT;
    }
}

//タイマーイベント発生時
function WmTimer()
{
    gFrame++;
    Wmpaint();
}

//キー入力
window.onkeydown = function(ev)
{
    let c = ev.keyCode;

    if(c == 37) gPlayerX--;
    if(c == 38) gPlayerY--;
    if(c == 39) gPlayerX++;
    if(c == 40) gPlayerY++;

    gPlayerX += (MAP_WIDTH * TILESIZE);
    gPlayerX %= (MAP_WIDTH * TILESIZE);
    gPlayerY += (MAP_HEIGHT * TILESIZE);
    gPlayerY %= (MAP_HEIGHT * TILESIZE);
}

// ブラウザ起動イベント
window.onload = function()
{
    LoadImage();

    gScreen = document.createElement("canvas");  //仮想画面
    gScreen.width = WIDTH;
    gScreen.height = HEIGHT;

    WmSize();
    window.addEventListener("resize", function() {WmSize()});
    setInterval(function() {WmTimer()}, 33);
}