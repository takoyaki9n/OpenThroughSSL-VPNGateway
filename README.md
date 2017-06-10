# OpenThroughSSL-VPNGateway
Open Through SSL-VPN Gateway

## インストール
パッケージ化していないので
chromeの「拡張機能」 -> 「パッケージ化されていない拡張機能を読みこむ」
から

## 使い方
右クリック->「このページをSSL-VPN GateWayで開く」

## ブックマークレットとして使う
以下のコードをURLとして、ブックマークを登録してください。
```javascript
javascript:(function(){location.href = "https://gateway.itc.u-tokyo.ac.jp"+location.pathname+",DanaInfo="+location.host+location.search;})();
````
