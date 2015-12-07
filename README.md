#read.me


CSSの設計です。
SMACSSに基づいた設計手法を取り入れています。

#なぜSMACSSの設計手法を採用したか？

1.〇〇の設計手法がSMACSSにもとづいていて、構造に共通性を持たせることができる。
2.BEMよりも命名規則のルールに柔軟性があり、導入のための学習コストもBEMと比較すると少ない。
  命名規則に柔軟性があるということは、長期の運用においてはCSSの破綻の一因となる可能性があるため、
  別途、スタイルガイドを用意することで、この欠点に対応することにする。


#SMACSSの特徴

1.柔軟性のある命名規則
2.Sassの実装に基づいた、ディレクトリ構造の設計
3.CSSのカテゴライズ(Base,Layout,Module,State,Theme)

#ディレクトリ構造

・_setting/
カラーコードや、フォントサイズなど、全体で使う共通パーツを変数化したものを記述(val)

・tool/
mixinや、keyframeなどの、SASSメソッドを記述(method)

・base/
リセットCSSを格納

・layput
1.レイアウトに関するCSSを書く。拡張子は、l-から始める。（SMACSSでは、IDによる指定、あるいはl-などのプレフィックスをつけることが推奨されている）
（例）l-header,l-section,l-footer

2.共通パーツごとにSASSファイルを分けて書く。
（例）_l-header.scss,l-footer.scss

・module
モジュール（ボタン、アイコン、フォームなど）に関するSASSを記述する。
モジュールの構造（ストラクチャー）に当たる部分を"BASE-MODULE"、見た目に当たる部分（スキン）を"SUB-MODULE"と呼ぶ。


スキンのCLASS名は、ストラクチャーのCLASS名を引き継がせる。

(EX).button（ストラクチャー）　→ .button-primary（スキン）

<html>

<div class="button button-primary"></div>

<SASS>
	
	//buttonの構造に関する記述

	.button{
		width:100px;
		height:40px;
		text-align:center

		//buttonのレイアウトに関する記述

		&.button-primary{
			background:red;
		}
	}

//SUB-MODULEのいい名前がなかなか思いつかない・・・


.state/
JSの制御によって、Moduleや、Layoutの見た目を変えるCSS。
stateに当たるclassには、is- というプレフィックスをつける

(EX)is-fix,is-error,is-hidden

・Theme/
あるテーマにそって、Webページ全体、または一部の見た目を変えるCSS。TOPの背景など？


・master.scss

すべてのファイルをmaster.scssにインクルードして、一つのCSSにコンパイルする。









----------------------
<HTML>

	CSSによるインクルード


<Gulp>


sass,css-minify
