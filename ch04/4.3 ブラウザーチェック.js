
var jsPsych = initJsPsych({
    use_webaudio: false,
    on_finish: function() {
        jsPsych.data.displayData();
    }
});


// Browser checkのプラグインを使う

var browser = {
    type: jsPsychBrowserCheck,
    inclusion_function: (data) => {
        return data.browser == 'chrome' && data.mobile === false
    },
    exclusion_message: (data) => {
        if (data.mobile) {
            return '<p>この実験はパソコンでしか参加できません。</p>';
        } else if (data.browser !== 'chrome') {
            return '<p>この実験はGoogle Chromeからでしか参加できません。</p>'
        }
    }
};

// 実行する順番に並べます。実行するものは必ず入れてください。

var timeline = [
   browser
];

jsPsych.run(timeline);

