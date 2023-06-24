// こちらのサンプルスクリプトでは、第3章で紹介された録音課題（リストあり）を例として紹介します。


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


// 
var item_list = [
    {stimulus: '「柿」を発音してください。'},
    {stimulus: '「牡蠣」を発音してください。'},
    {stimulus: '「橋」を発音してください。'},
    {stimulus: '「箸」を発音してください。'},
];


// ランダマイズ
// arrayという配列にある要素をシャッフルし、shuffledArrayに代入する
var shuffledArray = jsPsych.randomization.shuffle(array);

// 録音プラグイン
var record = {
    type: jsPsychHtmlAudioResponse,
    stimulus: jsPsych.timelineVariable('stimulus'),
    recording_duration: 10000,
    allow_playback: true,
    done_button_label: '録音を終わりました',
    accept_button_label: '完成しました。つぎの問題へ',
    record_again_button_label: 'もう1度録音する'
    
};

// シャッフルされたリストを読み込ませる
var record_timeline = {
  timeline: [record],
  timeline_variables: shuffledArray,
};

// 最後のメッセージを入れます（選択）。HtmlButtonResponseで作ります。

var goodbye = {
    type: jsPsychHtmlButtonResponse,
    stimulus: '<p>ご回答ありがとうございました。</p>',
    choices: ['確認'],
    response_ends_trial: true,
};

var timeline = [
  initialize_mic, 
  record_timeline,
  goodbye
];
jsPsych.run(timeline);
