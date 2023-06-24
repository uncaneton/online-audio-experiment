var jsPsych = initJsPsych({
    use_webaudio: false,
    on_finish: function() {
        jsPsych.data.displayData();
    }
});

// TODO: timeline_variables は事前に読み込んでいる前提
var list_audio_preload = timeline_variables.map(function(obj) {
    return [obj.a, obj.b, obj.x];
}).flat(1);

var welcome = {
    type: "html-keyboard-response",
    choices: [' '],
    stimulus: `
    <p>　
    次の実験では聞いてもらった音が表記（ひらがな）にどの程度一致しているかを
    1--7段階で評価してもらいます。
    静かな環境で、可能な場合はイヤホンなどの装着をお願いいたします。
    スペースキーを押すと練習課題を2問呈示いたします。
    </p>
    `,
};

var cat_presentation = {
    type: jsPsychAudioKeyboardResponse,
    stimulus: jsPsych.timelineVariable('audio'),
    choices: NO_KEYS",
    trial_ends_after_audio: true,
};

var cat_question = {
    type: jsPsychHtmlButtonResponse,
    stimulus: '<p></p>',
    choices: ['えすぽ', 'えずぼ', 'えくと', 'えぐど', 'えぷそ', 'えぶぞ', 'えつこ', 'えづご'],
    prompt: "<p>どの表記に近いですか？</p>",
    data: {
        task: "cat",
        type: "target",  // filler--target
        item_id: jsPsych.timelineVariable('item_id'),
    },
};

var scale = ["1", "2", "3", "4", "5", "6", "7"];
var rate = {
    type: jsPsychSurveyLikert,
    questions: [{ prompt: "聞いた音声は選んだ表記として適切ですか？<br>1: 全く適切でない<br>7: 極めて適切", labels: scale }],
    data: {
        task: "rate",
        type: "target",  // filler--target
        item_id: jsPsych.timelineVariable('item_id'),
    },
};

var cat_list= jsPsych.randomization.shuffle(timeline_variables);
var cat_trial = {
    timeline: [fixation, cat_presentation, cat_question, rate],
    timeline_variables: cat_list
}


var preload = {
    type: jsPsychPreload,
    audio: list_audio_preload,
}

var goodbye = {
    type: jsPsychHtmlButtonResponse,
    stimulus: '<p>ご回答ありがとうございました。</p>',
    choices: ['確認'],
    response_ends_trial: true,
};

var timeline = [preload, welcome, cat_trial, goodbye];
jsPsych.run(timeline);

