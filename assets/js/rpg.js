'use strict';

const CHRHEIGHT = 9;
const CHRWIDTH = 8;
const FONT = "12px monospace";
const FONTSTYLE = "#fff";
const HEIGHT = 120;
const WIDTH = 128;
const INTERVAL = 33;
const MAP_WIDTH = 32;
const MAP_HEIGHT = 32;
const SCR_WIDTH = 8;
const SCR_HEIGHT = 8;
const SCROLL = 4;
const SMOOTH = 0;
const START_X = 15;
const START_Y = 17;
const TILECOLUMN = 4;
const TILEROW = 4;
const TILESIZE = 8;
const WNDSTYLE = "rgba(0, 0, 0, 0.75)";

const gKey = new Uint8Array(0x100);

let gAngle = 0;
let gScreen;
let gFrame = 0;
let gWidth;
let gHeight;
let gMassage1 = null;
let gMassage2 = null;
let gMoveX = 0;
let gMoveY = 0;
let gImgMap;
let gImgPlayer;
let gPlayerX = START_X * TILESIZE + TILESIZE / 2;
let gPlayerY = START_Y * TILESIZE;

const gFileMap    = "img/map.png";
const gFilePlayer = "img/player.png";

const gMap = [
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,4,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,4,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,4,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,4,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,4,4,4,0,0,0,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,2,2,2,3,3,3,3,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,2,2,2,3,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,2,2,2,0,0,0,1,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,2,2,2,3,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,2,2,2,3,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,2,2,2,3,3,3,3,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
];

function DrawMain() 
{
    const  g = gScreen.getContext("2d");             //2D描画コンテキスト取得

    let mx = Math.floor(gPlayerX / TILESIZE);
    let my = Math.floor(gPlayerY / TILESIZE);

    for(let dy = -SCR_HEIGHT; dy <= SCR_HEIGHT; dy++) {
        let ty = my + dy;
        let py = (ty + MAP_HEIGHT) % MAP_HEIGHT;
        for(let dx = -SCR_WIDTH; dx <= SCR_WIDTH; dx++) {
            let tx = mx + dx;
            let px = (tx + MAP_WIDTH) % MAP_WIDTH;
            DrawTile(g,
                     tx * TILESIZE + WIDTH  / 2 - gPlayerX,
                     ty * TILESIZE + HEIGHT / 2 - gPlayerY,
                     gMap[py * MAP_WIDTH + px]);
        }
    }

    //プレイヤー
    g.drawImage(gImgPlayer, 
                (gFrame >> 4 & 1) * CHRWIDTH, gAngle * CHRHEIGHT, CHRWIDTH, CHRWIDTH,
                WIDTH / 2 - CHRWIDTH / 2, HEIGHT / 2 - CHRHEIGHT + TILESIZE / 2,CHRWIDTH ,CHRHEIGHT);

    DrawMessage(g);

    g.fillStyle = WNDSTYLE;                       //ウィンドウの色
    g.fillRect(20, 3, 105, 15);                   //矩形描画

    g.font = FONT;                                //文字フォントを設定
    g.fillStyle = FONTSTYLE;                      //文字色
    g.fillText("x=" + gPlayerX + "y=" + gPlayerY + "m=" + gMap[my * MAP_WIDTH + mx], 25, 15);
}

//メッセージ描画
function DrawMessage(g) 
{
    if(!gMassage1) {
        return;
    }

    g.fillStyle = WNDSTYLE;                       //ウィンドウの色
    g.fillRect(4, 84, 130, 30); 
     
    g.font = FONT;                                //文字フォントを設定
    g.fillStyle = FONTSTYLE;                      //矩形描画

    g.fillText(gMassage1, 6, 96);
    if(gMassage2) {
        g.fillText(gMassage2, 6, 110);
    }
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

function SetMessage(v1, v2)
{
    gMassage1 = v1;
    gMassage2 = v2;
}

//IE対応
function Sign(val) {
    if(val == 0) {
        return(0);
    }
    if(val < 0){
        return(-1);
    }
    return(1);
}

//フィールド処理進行
function TickField() 
{
    if(gMoveX != 0 || gMoveY != 0) {}    //移動中の場合
    else if(gKey[37]) {gAngle = 1; gMoveX = -TILESIZE;}   //左
    else if(gKey[38]) {gAngle = 3; gMoveY = -TILESIZE;}   //上
    else if(gKey[39]) {gAngle = 2; gMoveX =  TILESIZE;}   //右
    else if(gKey[40]) {gAngle = 0; gMoveY =  TILESIZE;}   //下

    //移動後のタイトル座標判定
    let mx = Math.floor((gPlayerX + gMoveX) / TILESIZE);
    let my = Math.floor((gPlayerY + gMoveY) / TILESIZE);
    mx += MAP_WIDTH;
    mx %= MAP_WIDTH;
    my += MAP_HEIGHT;
    my %= MAP_HEIGHT;
    let m = gMap[my * MAP_WIDTH + mx];
    if(m == 3 || m == 4) {
        gMoveX = 0;
        gMoveY = 0;
    }

    if(m == 1) {
        SetMessage("鍵を探して",null);
    }

    if(m == 4) {
        SetMessage("","");
    }

    if(m == 6) {
        SetMessage("","");
    }

    if(m == 9) {
        SetMessage("",null);
    }

    if(m == 15) {
        SetMessage("","");
    }

    gPlayerX += Sign(gMoveX) * SCROLL;
    gPlayerY += Sign(gMoveY) * SCROLL;
    gMoveX   -= Sign(gMoveX) * SCROLL;
    gMoveY   -= Sign(gMoveY) * SCROLL;

    //マップループ処理
    gPlayerX += (MAP_WIDTH * TILESIZE);
    gPlayerX %= (MAP_WIDTH * TILESIZE);
    gPlayerY += (MAP_HEIGHT * TILESIZE);
    gPlayerY %= (MAP_HEIGHT * TILESIZE);
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
    TickField();
    Wmpaint();
}

//キー入力
window.onkeydown = function(ev)
{
    let c = ev.keyCode;

    gKey[c] = 1;

    gMassage1 = null;
    gMassage2 = null;
}

window.onkeyup = function(ev)
{
    gKey[ev.keyCode] = 0;
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
    setInterval(function() {WmTimer()}, INTERVAL);
}
