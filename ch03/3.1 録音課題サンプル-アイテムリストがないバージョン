var jsPsych = initJsPsych({
    use_webaudio: false,
    on_finish: function() {
        jsPsych.data.displayData();
    }
});


// 以下、録音に関するセッションです。まず、下の試行はマイクを許可してもらうためのものです。
// これがないと録音課題が実行できないので注意しましょう。

var initialize_mic = {
    type: jsPsychInitializeMicrophone,
    device_select_message: 'これは被験者にマイクを許可してもらうための試行です。メッセージ自体は必須ではありません。',
    button_label: "つぎへ",
};

/* 録音試行セッション：
上と同じくstimulusのところで文字列を入れると実行できますが、
こちらはリストを読み込んでもらって順次に提示する方法です。
レコーディングの最大時間も設定できます。
また、allow_playbackのところをfalseにすると録音を確認する画面を非表示にできます（最後の2行は録音の確認の選択肢です）。
*/

var record01 = {
    type: jsPsychHtmlAudioResponse,
    stimulus: '「柿」を発音してください。',
    recording_duration: 10000,
    allow_playback: true,
    done_button_label: '録音を終わりました',
    accept_button_label: '完成しました。つぎの問題へ',
    record_again_button_label: 'もう1度録音する'
};

var record02 = {
    type: jsPsychHtmlAudioResponse,
    stimulus: '「牡蠣」を発音してください。',
    recording_duration: 10000,
    allow_playback: true,
    done_button_label: '録音を終わりました',
    accept_button_label: '完成しました。つぎの問題へ',
    record_again_button_label: 'もう1度録音する'
};

// 最後のメッセージを入れます（選択）。HtmlButtonResponseで作ります。

var goodbye = {
    type: jsPsychHtmlButtonResponse,
    stimulus: '<p>ご回答ありがとうございました。</p>',
    choices: ['確認'],
    response_ends_trial: true,
};


// 実行する順番に並べます。実行するものは必ず入れてください。

var timeline = [
    initialize_mic,
    record01,
    record02,
    goodbye
];

jsPsych.run(timeline);

