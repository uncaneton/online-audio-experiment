# 使用言語：R

# data.csvというCSVファイルを読み込んで、dfに代入します。
df <- read.csv("data.csv", header=T)

　ここでRの特徴を簡単に紹介します。まず、Rではデフォルトで1行ずつコマンドを実行し、その結果を見ながらコマンドを入力することができます。スクリプト全体を作成し、すべて実行することもRMarkdownを使うことで可能になり、jsPsychのスクリプトのようにコードごとに実行することもできます。つぎに、コメントを書く場合には、JavaScriptでは//を使いますが、Rでは#を使います。さらに、Rでは<-を代入の演算子として一般的に使用しています。たとえば、x <- 1の場合、右側の値を左側の変数に代入できます。
　読み込みが完了したら、データの中身をちょっと確認しましょう。

head(df)
summary(df)

# lme4パッケージのインストール（初回実行するときのみ必要）
install.packages("lme4")

# lme4パッケージの読み込み
library(lme4)

# data.csvというCSVファイルを読み込んで、dfに代入します。
df <- read.csv("data.csv", header=T)

# 一般化線形混合モデルの作成
m1 <- glmer(response ~ factora*factorb+ (1|participant) + (1|item), data = df, family="binomial")

# 一般化線形混合モデルの結果を確認
summary(m1)
