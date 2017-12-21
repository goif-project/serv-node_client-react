# サーバーnode.js クライアントreactのアプリケーション

## 概要

db接続するための(仮)ベース<br>
今はカウントアップを行うだけ<br>
(node_modulesはファイル内に格納済み)

## 実行

```
heroku local web --port 10080
```
を行ったら<br>
`http://localhost:10080/`にアクセス

## db

使用しているデータベースはmysql<br>
設定はindex.js5行目から11行目<br>
簡単なsql文は21行目に記述してある。<br>
(とりあえず動かすならmysqlの適当なデータベースとsql文でOK!!!)


## 参考url

[Node.js (Server API) と React + Flux (Client) でカウントアップアプリ作成](https://www.saintsouth.net/blog/tutorial-nodejs-react-flux/)
