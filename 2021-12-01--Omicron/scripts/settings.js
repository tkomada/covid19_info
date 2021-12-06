var cSettingItems =
{
    volume:  { type: "range",  min:  0, max: 10, defval: 10, rate:  10, opt: "%"},
    speed:   { type: "range",  min:  5, max: 30, defval: 10, rate:  10, opt: "%"},
    interval:{ type: "range",  min:  0, max: 19, defval:  0, rate: 0.5, opt: "秒"},
    font:    { type: "range",  min:  6, max: 40, defval: 12,            opt: "pt"},
    line:    { type: "range",  min: 10, max: 30, defval: 26, rate: 0.1, opt: "" },
    space:   { type: "range",  min:  0, max: 20, defval:  2, rate: 0.1, opt: "" },
    color:   { type: "select", min:  0, max:  4, defval:  0 }
};
var cUserSetting = {volume: 10,font: 12,speed: 10, interval:0, line: 20,space: 2,color: 0, readmode:0  };
var dAreaBottomLimit = 0.95 ; // ハイライトがコンテンツ領域の下端のこの位置に到達したらスクロールする
var dAreaRightLimit  = 0.95 ;
var dAreaScrollPos   = 0.25 ; // ハイライト範囲をスクロールする場合にこの位置まで移動する

// Google Chromeで再生時間に誤差が生じる場合があので、その差を補正するための値
var dGoogleChromeTimeLagCorrection = 0.1 ;

// ソフトスクロールステップ数
// この値は、ハイライトが表示範囲から外れた場合に、スムーズなスクロール
// をするためのステップ数です。
// [スクロースすべき高さ/ステップ数]を10msecおきにスクロールします。
// 数字が大きくなるほどゆっくりスクロールします。)
// この値を0に設定すると、ソフトスクロールはしなくなります。
var nSoftScrollStep = 20 ;

// 画像のハイライト表示で、画像全体にフィルターを適用する
var bEnableImageFilter = false ;

// ステータスバーを表示する
var bStatusArea = false ;
