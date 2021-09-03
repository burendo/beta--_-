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

const StageApp = Vue.createApp({
  data() {
    return {
      /* 送信ボタン上下に表示されるメッセージ */
      okMessage: '正解！',
      ngMessage: 'そのキーワードは違うようだぞ！？',
      /* 解答 */
      stage1CorrectAnswer: '鳥',
      stage201CorrectAnswer: 'いいい',
      stage202CorrectAnswer: 'ううう',
      stage203CorrectAnswer: 'えええ',
      stage204CorrectAnswer: 'おおお',
      stage301CorrectAnswer: 'かかか',
      stage302CorrectAnswer: 'ききき',
      stage303CorrectAnswer: 'くくく',
      stage304CorrectAnswer: 'けけけ',
      stage305CorrectAnswer: 'こここ',
      stage306CorrectAnswer: 'さささ',
      /* stage1 */
      stage1Answer: false, // 正解かどうか
      stage1: '',          // インプットエリアの入力の値
      stage1Message: '',   // 送信ボタン上下に表示されるメッセージ
      stage1Clear: false,  // ステージクリア
      /* stage2 */
      stage201Answer: false, // 正解かどうか
      stage202Answer: false,
      stage203Answer: false,
      stage204Answer: false,
      stage201: '',          // インプットエリアの入力の値
      stage202: '',
      stage203: '',
      stage204: '',
      stage201Message: '',  // 送信ボタン上下に表示されるメッセージ
      stage202Message: '',
      stage203Message: '',
      stage204Message: '',
      stage2Clear: false,  // ステージクリア
      /* stage3 */
      stage3Answer: false, // 正解かどうか
      stage301: '',        // インプットエリアの入力の値
      stage302: '',
      stage303: '',
      stage304: '',
      stage305: '',
      stage306: '',
      stage3Message: '',  // 送信ボタン上下に表示されるメッセージ
      stage3Clear: false, // ステージクリア
    }
  },
  methods: {
    /* stage1の入力を判定します */
    stage1AnswerInput(stage1) {
      if(stage1 === this.stage1CorrectAnswer) {
        this.stage1Answer = true;
        this.stage1Message = '';
      } else {
        this.stage1Answer = false;
        this.stage1Message = this.ngMessage; 
      }
    },
    /* stage1のクリア画面の動作を設定します */
    stage1NextStage() {
      this.stage1Answer = false;
      this.stage1Clear = true;
    },
    /* stage2の入力を判定します */
    stage201AnswerInput(stage201) {
      if(stage201 === this.stage201CorrectAnswer) {
        this.stage201Answer = true;
        this.stage201Message = this.okMessage;
      } else {
        this.stage201Answer = false;
        this.stage201Message = this.ngMessage;
      }
    },
    stage202AnswerInput(stage202) {
      if(stage202 === this.stage202CorrectAnswer) {
        this.stage202Answer = true;
        this.stage202Message = this.okMessage;
      } else {
        this.stage202Answer = false;
        this.stage202Message = this.ngMessage;
      }
    },
    stage203AnswerInput(stage203) {
      if(stage203 === this.stage203CorrectAnswer) {
        this.stage203Answer = true;
        this.stage203Message = this.okMessage;
      } else {
        this.stage203Answer = false;
        this.stage203Message = this.ngMessage;
      }
    },
    stage204AnswerInput(stage204) {
      if(stage204 === this.stage204CorrectAnswer) {
        this.stage204Answer = true;
        this.stage204Message = this.okMessage;
      } else {
        this.stage204Answer = false;
        this.stage204Message = this.ngMessage;
      }
    },
    /* stage2のクリア画面の動作を設定します */
    stage2NextStage() {
      this.stage201Answer = false;
      this.stage202Answer = false;
      this.stage203Answer = false;
      this.stage204Answer = false;
      this.stage2Clear = true;
    },
    /* stage3の入力を判定します */
    stage3AnswerInput(stage301, stage302, stage303, stage304, stage305, stage306) {
      if(stage301 === this.stage301CorrectAnswer
        && stage302 === this.stage302CorrectAnswer
        && stage303 === this.stage303CorrectAnswer
        && stage304 === this.stage304CorrectAnswer
        && stage305 === this.stage305CorrectAnswer
        && stage306 === this.stage306CorrectAnswer
        ) {
        this.stage3Answer = true;
        this.stage3Message = '';
        window.location.href = 'final.html';
      } else {
        this.stage3Answer = false;
        this.stage3Message = this.ngMessage;
      }
    },
  }
}).mount('#stage')
