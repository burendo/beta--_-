const StageApp = Vue.createApp({
  data() {
    return {
      /* 送信ボタン上下に表示されるメッセージ */
      okMessage: '正解！',
      ngMessage: 'そのキーワードは違うようだぞ！？',
      /* 解答 */
      stage101CorrectAnswer: 'まっと',
      stage102CorrectAnswer: 'りかしつ',
      stage201CorrectAnswer: '12',
      stage202CorrectAnswer: 'さんかっけい',
      stage301CorrectAnswer: 'ながれぼし',
      stage302CorrectAnswer: 'どみの',
      stage401CorrectAnswer: 'ももたろう',
      stage402CorrectAnswer: 'がっこう',
      /* stage2 */
      stage101Answer: false, // 正解かどうか
      stage102Answer: false,
      stage101: '',          // インプットエリアの入力の値
      stage102: '',
      stage101Message: '',  // 送信ボタン上下に表示されるメッセージ
      stage102Message: '',
      stage1Clear: false,  // ステージクリア
      /* stage2 */
      stage201Answer: false, // 正解かどうか
      stage202Answer: false,
      stage201: '',          // インプットエリアの入力の値
      stage202: '',
      stage201Message: '',  // 送信ボタン上下に表示されるメッセージ
      stage202Message: '',
      stage2Clear: false,  // ステージクリア
      /* stage3 */
      stage301Answer: false, // 正解かどうか
      stage302Answer: false,
      stage301: '',          // インプットエリアの入力の値
      stage302: '',
      stage301Message: '',  // 送信ボタン上下に表示されるメッセージ
      stage302Message: '',
      stage3Clear: false,  // ステージクリア

      /* stage4 */
      stage401Answer: false, // 正解かどうか
      stage402Answer: false,
      stage401: '',          // インプットエリアの入力の値
      stage402: '',
      stage401Message: '',  // 送信ボタン上下に表示されるメッセージ
      stage402Message: '',
      stage4Clear: false,  // ステージクリア
    }
  },
  methods: {
    /* stage1の入力を判定します */
    stage101AnswerInput(stage101) {
      if(stage101 === this.stage101CorrectAnswer) {
        this.stage101Answer = true;
        this.stage101Message = this.okMessage;
      } else {
        this.stage101Answer = false;
        this.stage101Message = this.ngMessage;
      }
    },

    stage102AnswerInput(stage102) {
      if(stage102 === this.stage102CorrectAnswer) {
        this.stage102Answer = true;
        this.stage102Message = this.okMessage;
      } else {
        this.stage102Answer = false;
        this.stage102Message = this.ngMessage;
      }
    },
    /* stage1のクリア画面の動作を設定します */
    stage1NextStage() {
      this.stage101Answer = false;
      this.stage102Answer = false;
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
    /* stage2のクリア画面の動作を設定します */
    stage2NextStage() {
      this.stage201Answer = false;
      this.stage202Answer = false;
      this.stage2Clear = true;
    },
     /* stage3のクリア画面の動作を設定します */
    stage3NextStage() {
      this.stage3Answer = false;
      this.stage3Clear = true;
    },
    /* stage3の入力を判定します */
    stage301AnswerInput(stage301) {
      if(stage301 === this.stage301CorrectAnswer) {
        this.stage301Answer = true;
        this.stage301Message = this.okMessage;
      } else {
        this.stage301Answer = false;
        this.stage301Message = this.ngMessage;
      }
    },

    stage302AnswerInput(stage302) {
      if(stage302 === this.stage302CorrectAnswer) {
        this.stage302Answer = true;
        this.stage302Message = this.okMessage;
      } else {
        this.stage302Answer = false;
        this.stage302Message = this.ngMessage;
      }
    },
    /* stage3のクリア画面の動作を設定します */
    stage3NextStage() {
      this.stage301Answer = false;
      this.stage302Answer = false;
      this.stage3Clear = true;
    },
    
    /* stage4の入力を判定します */
    stage401AnswerInput(stage401) {
      if(stage401 === this.stage401CorrectAnswer) {
        this.stage401Answer = true;
        this.stage401Message = this.okMessage;
        if (this.stage402Answer == true) {
          window.location.href = 'final.html';
        }
      } else {
        this.stage401Answer = false;
        this.stage401Message = this.ngMessage;
      }
    },

    stage402AnswerInput(stage402) {
      if(stage402 === this.stage402CorrectAnswer) {
        this.stage402Answer = true;
        this.stage402Message = '';
        if (this.stage401Answer == true) {
          window.location.href = 'final.html';
        }
      } else {
        this.stage402Answer = false;
        this.stage402Message = this.ngMessage;
      }
    },
  }
}).mount('#stage')
