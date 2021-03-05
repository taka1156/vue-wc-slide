const PLACEHOLDER_MARKDOWN = `
# サンプルテキスト
(プレースホルダーなので入力時は消えます)

---
## markdown-it-container

::: info
  *tips: infoホゲホゲ*
:::

::: success
  *tips: successホゲホゲ*
:::

::: warning
  *tips: warningホゲホゲ*
:::

::: danger
  *tips: dangerホゲホゲ*
:::

\`\`\`
::: info
  *tips: ホゲホゲ*
:::

::: success
  *tips: ホゲホゲ*
:::

::: warning
  *tips: ホゲホゲ*
:::

::: danger
  *tips: ホゲホゲ*
:::
\`\`\`

---
## 見出しタグ

# これはH1タグです
## これはH2タグです
### これはH3タグです
#### これはH4タグです
##### これはH5タグです
###### これはH6タグです

\`\`\`markdown
# これはH1タグです
## これはH2タグです
### これはH3タグです
#### これはH4タグです
##### これはH5タグです
###### これはH6タグです
\`\`\`

---
## 強調(bold, italic)

*hoge*
_hoge_
**hoge**
__hoge__

\`\`\`markdown
*hoge*
_hoge_
**hoge**
__hoge__
\`\`\`

---
## 打ち消し

~~hoge~~

\`\`\`~~ hoge ~~\`\`\`
---
## Disc型

文頭に「*」「+」「-」をいれるとDisc型になる
* hoge
    * hoge
* hoge
+ hoge
    + hoge
+ hoge
- hoge
    - hoge
- hoge
\`\`\`markdown
* hoge
    * hoge
* hoge
+ hoge
    + hoge
+ hoge
- hoge
    - hoge
- hoge
\`\`\`

---
## Decimal型

1. hoge
    1. hoge
        1. hoge
        1. hoge
    1. hoge
        1. hoge
        1. hoge
1. hoge
    1. hoge
        1. hoge
        1. hoge
    1. hoge
        1. hoge
        1. hoge

\`\`\`markdown
1. hoge
    1. hoge
        1. hoge
        1. hoge
    1. hoge
        1. hoge
        1. hoge
1. hoge
    1. hoge
        1. hoge
        1. hoge
    1. hoge
        1. hoge
        1. hoge
\`\`\`

---
## Definition型

<dl>
<dt>javascript</dt>
<dd>とても<strong>楽しい</strong>言語</dd>
</dl>

\`\`\`markdown
<dl>
<dt>javascript</dt>
<dd>とても<strong>楽しい</strong>言語</dd>
</dl>
\`\`\`

---
## チェックボックス

- [ ] タスク1
- [x] タスク2

\`\`\`markdown
[ ] タスク1
[x] タスク2
\`\`\`

---
## 引用

> hogehogehoge
> ネストされた引用です。
> hogehogehoge

\`\`\`markdown
> hogehogehoge
> ネストされた引用です。
> hogehogehoge
\`\`\`

---
## リンク

[ポートフォリオサイト](https://portfoliosite-dev.netlify.com)

\`\`\`markdown
[ポートフォリオサイト](https://portfoliosite-dev.netlify.com)
\`\`\`

---
## 画像

![markdown](//images.ctfassets.net/ygk38bhnxik1/vj9J9UsQnmBqWi9NGJNqM/5990f9b230aff5138dbf22908045ca1b/markdown.svg "markdown")

\`\`\`markdown
![markdown](//images.ctfassets.net/ygk38bhnxik1/vj9J9UsQnmBqWi9NGJNqM/5990f9b230aff5138dbf22908045ca1b/markdown.svg "markdownロゴ")
\`\`\`
---
## テーブル記法

| コンパイル言語 | スクリプト言語| 
|:-------------:|:-------------:|
| C/C++         | Ruby          |
| Java          | PHP           |
| scala         | Python        |
| C#            | JavaScript    |
| Swift         | TypeScript    |

\`\`\`markdown
| コンパイル言語 | スクリプト言語| 
|:-------------:|:-------------:|
| C/C++         | Ruby          |
| Java          | PHP           |
| scala         | Python        |
| C#            | JavaScript    |
| Swift         | TypeScript    |
\`\`\`

---
## その他

### Java
\`\`\`java
public class Hello{
  public static void main(String[] args){
    // java
    System.out.println("Hello Java World");
  }
}
\`\`\`

---
### C++

\`\`\`cpp
 #include <iostream>
using namespace std;
int main(void){
   // c++
  cout << "Hello C++ world." << endl;
  return 0;
}
\`\`\`

---
### PHP

\`\`\`php
// php
print "Hello PHP World";
\`\`\`

---
### Python

\`\`\`python
# python
print ("Hello PHP World")
\`\`\`

---
### Ruby

\`\`\`ruby
# ruby
puts 'Hello Ruby World'
\`\`\`

---
### JavaScript

\`\`\`javascript
// javascript
console.log("Hello JavaScript World");
\`\`\`
`;

const TEST_MARKDOWN = "## ElectronとVueとの連携について\nelectronというフロントエンド技術で、デスクトップアプリを作れるフレームワークがあり、有名なサービスとしては、Atom、VScode、SlackとDiscordのデスクトップ版などで使われているそうです。\n\n今回は、それをvueで記述してビルドできるようにしてくれるプラグイン[vue-cli-plugin-electron-builder](https://nklayman.github.io/vue-cli-plugin-electron-builder/)を使って、Vueで作成してみました。\n\nでは、これから簡単な手順や実際に作ってみたオーディオプレイヤーについて紹介します。\n\n---\n## 環境\n- Mac Book Pro (Catalina)\n- Node.js(v14.15.1)\n- vue-cli(v4.5.8)\n\n  [ドキュメント: vue-cli-plugin-electron-builder](https://nklayman.github.io/vue-cli-plugin-electron-builder/)\n  [ドキュメント: electron](https://www.electronjs.org)\n\n## プロジェクトの作り方\n1. `vue create プロジェクト名`\n\n1. `yarn install`\n\n1. `vue add electron-builder`\n\n1. `electron:serve`でローカルで実行\n\n1. `electron:build`でビルド\n\n---\n## AudioPlayerについて\n**完成品**\n![image](https://images.microcms-assets.io/protected/ap-northeast-1:7cf4e012-34b8-42e4-9878-9730fb0adfdc/service/imagestore/media/audio-player-play-moz.png?h=300&w=200)![image](https://images.microcms-assets.io/protected/ap-northeast-1:7cf4e012-34b8-42e4-9878-9730fb0adfdc/service/imagestore/media/audio-plyer-visializer.png?h=300&w=200)![image](https://images.microcms-assets.io/protected/ap-northeast-1:7cf4e012-34b8-42e4-9878-9730fb0adfdc/service/imagestore/media/audio-player-list-moz.png?h=300&w=200)\n\n---\n## 使用したモジュール\n- [howler.js](https://howlerjs.com/)\n   HTML 5 Audio機能を用いた音楽再生管理のためのライブラリ\n- [music-metadata-browser](https://github.com/Borewit/music-metadata-browser)\n    MP3、M4Aなどの音楽ファイルに含まれているID3情報を読み出すためのものです\n- [electron-browser-storage](https://github.com/jerry1100/electron-browser-storage)\n   メインプロセスでWebStrageを使うためのもの\n\n---\n## 仕様など\n\n- 基本的には、howler.jsを利用して曲の再生、停止を制御しています。\n\n- アーティストや曲のアートワークは、[music-metadata-browser](https://github.com/Borewit/music-metadata-browser)というもの\nを利用して、初回に全てのID3情報を取り出しています。\n\n---\n## 詰まった点\n### windowの情報を設定として保存したい(WebStrage)\nelectronはmainとrendererでプロセスが分かれており、ウィンドウ関連はメインプロセスになっています。\nそのため、ウィンドウの色や大きさを、設定し読み込みたい場合、メインプロセスで適用させてやらないと反映されませんが、通常の方法では、メインプロセスでWebStrageが使えません。\n\nその時活躍するのが[electron-browser-storage](https://github.com/jerry1100/electron-browser-storage)です。\nまた、設定に関する操作はレンダラープロセスのGUIを通して行うのでプロセス間通信を行いメインに定義されたイベントを発火する必要があります。\n\nプロセス間通信についてはこちらを参考にしました 。\n[[Electron] IPC には新しい ipcRenderer.invoke() メソッドを使ったほうが便利 (v7+) - Qiita](https://qiita.com/jrsyo/items/abe19dff2d950132d9cd#新しい-renderer--main-プロセス間通信-ipc)\n   \n### Howler.jsで曲を変更する時にいちいちオブジェクトごと作り替えるのがめんどくさい。\n自分なりにHowlerのソースコードを読み込んで、このようにしたら、音量、ループ状態の設定を維持したまま変更できると考え実装しました。\n\n(一応、issueコメント残してみました)\n[goldfire/howler.js - github](https://github.com/goldfire/howler.js/issues/825#issuecomment-703250406)\n\n```javascript\nHowl.prototype.changeMusic = function(o) {\n  var self = this;\n  self.unload(true);\n  self._duration = 0;\n  self._sprite = {};\n  self._src = typeof o.data !== 'string' ? o.data : [o.data];\n  self._format = typeof o.format !== 'string' ? o.format : [o.format];\n};\n```\n\n### WindowsとMacでUIが違いすぎる\nWebKitのベンダープレフィックスで頑張って合わせましょう。\n自分の場合は、Mac寄りのシンプルなデザインになるように調節しました。\n\nレンジ入力(シークバー)\n```css\ninput[type='range'] {\n  appearance: none;\n  height: 3px;\n  width: 70%;\n  background-color: gray;\n  cursor: pointer;\n  border-radius: 8px;\n  outline: none;\n}\n\ninput[type='range']::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  background-color: white;\n}\n```\n\nプレイリストのスクロールバー\n```css\n.play-list::-webkit-scrollbar {\n  width: 5px;\n}\n\n.play-list::-webkit-scrollbar-track {\n  display: none;\n}\n\n.play-list::-webkit-scrollbar-thumb {\n  width: 100%;\n  background-color: gray;\n  border-radius: 5px;\n}\n```\n\n### MacとWindowsで表示サイズが同じにならない\nウィンドウ自体のサイズはcssで解決できない問題で、デフォルトだとタイトルバーがウィンドウサイズの計算に入っており、MacとWindowsで表示サイズが違うという状態になってしまいます。\n\nこれは`useContentSize`をtrueにすれば解決できます。\n[Electron ドキュメント - new BrowserWindow([options])](https://www.electronjs.org/docs/api/browser-window#new-browserwindowoptions)\n```javascript\nfunction createWindow(setting) {\n  win = new BrowserWindow({\n    width: 310,\n    height: 520,\n    x: 100,\n    y: 100,\n    resizable: true,\n    alwaysOnTop: setting.alwaysOnTop,\n    backgroundColor: setting.backgroundColor,\n    autoHideMenuBar: true,\n    useContentSize: true,\n    webPreferences: {\n      nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION\n    }\n  });\n\n  // 略...\n}\n```\n\n---\n## 反省\nウィンドウ縮小化状態の再生状態が稀に狂うことがあったり、まだまだ改善の余地がありますが、\nそれぞれのドキュメントを行ったり来たりしながら、自分なりに動けたところは、良かったかなと思っています。\n    "
export { PLACEHOLDER_MARKDOWN, TEST_MARKDOWN };
