# 使用言語：R

# data.csvというCSVファイルを読み込んで、dfに代入します。
df <- read.csv("data.csv", header=T)

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
