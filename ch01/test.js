/* ダイアログに入力された2 つ数字の積をメッセージボッ
クスに出力する。*/
function myFunctionRev() {
var n1 = window.prompt('n1 の値を入力してください。');
var n2 = window.prompt('n2 の値を入力してください。');
return n1 * n2;
}
/* 引数の値でid がproduct である要素を書き換える関数
を定義する。*/
function rewrite(answer) {
var result = document.getElementById（'product'）;
//id がproduct の中身を取得する。
esult.textContent = answer; /* 引数のanswer で
product 中身を書き換える。*/
}
var ans = myFunctionRev(); /* 計算結果をans に代入しておく。*/
