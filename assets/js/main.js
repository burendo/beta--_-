const StageApp = Vue.createApp({
  data() {
    return {
      /* 送信ボタン上下に表示されるメッセージ */
      okMessage: '正解！',
      ngMessage: 'そのキーワードは違うようだぞ！？',
      /* 解答 */
      stage1CorrectAnswer: 'あああ',
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
