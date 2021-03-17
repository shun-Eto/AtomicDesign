# Atomic Design with MUI

AtomicDesign に基づき MaterialUI を利用し構成されたコンポーネント  
※AtomicDesign の解釈は個人に依存します。

---

## Setup

パッケージのインストール `yarn install`

開発環境に接続 `yarn start:client`

---

### フォルダ名に関して

コンポーネントを構成するフォルダに関しては大文字から始める

---

### lint 参考資料

https://dev.classmethod.jp/articles/eslint-configurations-2020/

' ~~~ ' was used before it was defined
https://stackoverflow.com/questions/63818415/react-was-used-before-it-was-defined

---

## NativeApplication に間して

dist/bundle.js をそのまま利用する

---

## WebApplication に関して

動的ホスティングサービスを利用して、ページ Get 時の SEO 対策を行う必要がある
npm run server/bundle.js -> client/bundle.js

---
