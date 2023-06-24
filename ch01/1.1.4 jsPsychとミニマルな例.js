//jsPsychを初期化する
var jsPsych = initJsPsych({
    use_webaudio: false,
    on_finish: function() {
        jsPsych.data.displayData();
    }
});

//プラグインを利用する
var welcome = {
    type: jsPsychHtmlButtonResponse,
    stimulus: '実験に協力していただき、ありがとうございます。',
    choices: ['完了（反応時間などを記録します）'], 
    response_ends_trial: true,
};

//ユーザー定義の時間軸にそって実行する
var timeline = [welcome];
jsPsych.run(timeline);
