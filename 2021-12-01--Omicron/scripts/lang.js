// Lastupdate 2019.08.24
var strNoSupport = "このコンテンツは、このブラウザで表示することが出来ません。<br><a href='http://windows.microsoft.com/ja-jp/internet-explorer/download-ie'>IE9</a>以上/<a href='http://www.google.com/intl/ja/chrome/'>Google Crome</a>/<a href='http://www.apple.com/jp/safari/'>Safari</a>でご覧ください。" ;
var strLoadMessage = "<span style='font-size:150%;'>「$TITLE$」</span><br>読み込み中...<br/>しばらくお待ちください"
var strLayoutEditModeSaveMessage = "レイアウトが変更されています。保存しますか？" ;
var strLayoutEditModeCaption     = "レイアウト編集モード" ;
var strLayoutEditModeAllClear    = "レイアウト編集を全てクリアーしますか？" ;
var strLayoutEditSectionPrompt   = "セクション単位でページ区切りを挿入します。\n現在のページ区切りは削除されます。" ;
var strLayoutEditNewPageError    = "セルの中にページ区切りを挿入することは出来ません。" ;
var strLayoutEditInfoText		 = "<span style='font-size:12px;white-space:nowrap;'>[ESC]:編集終了&emsp;[CTRL]+[S]:保存&emsp;[SPACE]:空白挿入&emsp;[ENTER]:改行挿入&emsp;[CTRL]+[ENTER]:改ページ&emsp;[L]:左寄せ&emsp;[C]:中央&emsp;[R]:右寄せ&emsp;[BS]:削除</span>" ;
//var strLayoutEditModeCaption = "View Area Edit Mode" ;

var strHelpUrl = "http://www.sciaccess.net/chattybook/help.html?lang=ja" ;

var sAudioErrors = Array(
	"No Error",
	"ユーザーは、ビデオ再生を中断しました。 ",
	"ネットワークエラー（ストリームを読み取ることができませんでした） ",
	"デコードエラーが発生しました。オーディオファイルが壊れているか、コーデックの問題が有ります。 ",
	"このブラウザは、$TYPE$オーディオ形式をサポートしていません。\n別のブラウザソフトウェアでこの文書をお試しください。"
) ;

var sControlCaptions =
{
    speedA:             { normal:"標準再生",		easy:"ふつうのスピード",	description:"普通の速度で再生します。\n[２]キーで倍速に変更できます。"},
    speedB:             { normal:"倍速再生",		easy:"２ばいのスピード",    description:"２倍の速度で再生します。\n[１]キーで普通に変更できます。"},
//  stop:				{ normal:"停止",			easy:"とめる",				description:"再生を停止して、先頭の見出しを表示します。"},
    play:				{ normal:"再生",			easy:"かいし",				description:"再生を開始します。"},
    pause:				{ normal:"一時停止",		easy:"いったんていし",		description:"再生を一時停止しします。再生ボタンで再開できます。"},
    prev:				{ normal:"前へ",			easy:"もどる",				description:"ハイライトを前の部分へ移動します"},
    next:				{ normal:"次へ",			easy:"つぎへ",				description:"ハイライトを次の部分へ移動します。"},
    up:					{ normal:"前項",			easy:"まえのこうもく",		description:"前の目次項目へ移動します。"},
    down:				{ normal:"次項",			easy:"つぎのこうもく",		description:"次の目次項目へ移動します。"},
    index:				{ normal:"目次",			easy:"もくじ",				description:"目次を表示します。"},
    page:				{ normal:"ページ",			easy:"ページ",				description:"ページ番号の一覧を表示します。"},
    bibinfo:			{ normal:"情報",			easy:"じょうほう",			description:"このコンテンツの情報を表示します。"},
    help:				{ normal:"ヘルプ",			easy:"せつめい",			description:"説明画面を表示します。"},
    setting:			{ normal:"設定",			easy:"せってい",			description:"設定画面を表示します。"},
    font1:				{ normal:"縮小",			easy:"ちいさく",			description:"文字のサイズを小さくします。"},
    font2:				{ normal:"標準",			easy:"ふつう",				description:"文字のサイズを普通のサイズに戻します。"},
    font3:				{ normal:"拡大",			easy:"おおきく",			description:"文字のサイズを大きくします。"},
	speed1:				{ normal:"遅く",			easy:"おそく",				description:"音声の再生速度を遅くします。"},
	speed2:				{ normal:"普通",			easy:"ふつう",				description:"音声の再生速度を普通に戻します。"},
	speed3:				{ normal:"速く",			easy:"はやく",				description:"音声の再生速度を速くします。"},
    //---------------------------
    waka_on:			{normal:"分かち書き表示",	easy:"わかちがきオン",		description:"分かち書き(全角スペース)を表示します。"},
    waka_off:			{normal:"分かち書き非表示",	easy:"わかちがきオフ",		description:"分かち書き(全角スペース)を表示しません。"},
    //---------------------------
    colorCh:			{ normal:"色変更",			easy:"いろをかえる",		  description:"コンテンツの表示色を変更します。"},
	markerPen:			{ normal:"マーカーペン",	easy:"まーかー",			  description:"ナーカーペンを使ってコンテンツに印をつけます。"},
	linemode1:			{ normal:"連続読み上げ",	easy:"つづけてよむ",		  description:"音声を段落で区切らずに続けて最後まで読み上げます。"},
	linemode2:			{ normal:"段落読み上げ",	easy:"だんらくだけよむ",	  description:"音声を段落単位で一時停止します。再生ボタンかスペースキーで再開できます。"},
	linemode3:			{ normal:"フレーズ読み上げ",easy:"１かしょだけよむ",	  description:"音声をフレーズ単位で一時停止します。再生ボタンかスペースキーで再開できます。"},
	rubylevel:          { normal:"ルビ表示設定",	easy:"るびのせってい",        description:"ルビの表示レベルを設定します。"},
    rubymode:           { normal:"ルビ表示設定",	easy:"るびのせってい",        description:"ルビの表示レベルを設定します。"},
    rubylevelA:         { normal:"全て表示",        easy:"すべてひょうじ",        description:"全てのルビを表示します"},
    rubylevel1:         { normal:"小学１年生レベル",easy:"１ねんせい",            description:"小学１年生以上の学習漢字にルビを付けます。"},
    rubylevel2:         { normal:"小学２年生レベル",easy:"２ねんせい",            description:"小学２年生以上の学習漢字にルビを付けます。"},
    rubylevel3:         { normal:"小学３年生レベル",easy:"３ねんせい",            description:"小学３年生以上の学習漢字にルビを付けます。"},
    rubylevel4:         { normal:"小学４年生レベル",easy:"４ねんせい",            description:"小学４年生以上の学習漢字にルビを付けます。"},
    rubylevel5:         { normal:"小学５年生レベル",easy:"５ねんせい",            description:"小学５年生以上の学習漢字にルビを付けます。"},
    rubylevel6:         { normal:"小学６年生レベル",easy:"６ねんせい",            description:"小学６年生以上の学習漢字にルビを付けます。"},
    rubylevel7:         { normal:"中学生レベル",	easy:"ちゅうがくせい",        description:"中学生以上の漢字にルビを付けます。"},
	rubylevel0:         { normal:"原本の通りに表示",easy:"もとのとおりにひょうじ",description:"コンテンツの原本通りのルビを表示します。"},
    rubylevelN:         { normal:"ルビなし",		easy:"るびなし",              description:"全てのルビを表示しません。"},
    layoutedit:			{ normal:"レイアウト編集",	easy:"レイアウトへんしゅう",  description:"再生を停止して、レイアウト編集画面表示に切り替えます。"},
    //---------------------------
    easyCaption: { normal: "簡単説明", easy: "かんたんせつめい", description: "ツールボタンの説明を簡単な説明に切り替えます。" },
    //---------------------------
	scrollMode:			{ normal:"スクロールで音声停止",	easy:"スクロールモード",	description:"スクロールしたときの音声の動作を設定します。"},
	scrollMode1:		{ normal:"する",	description:"スクロールしたときに音声を停止します。"},
	scrollMode2:		{ normal:"しない",	description:"スクロールしたときに音声を停止しません。"},
    //---------------------------
	resumeMode:			{ normal:"前回の場所から読み上げを再開する",	easy:"読み上げ再開モード",	description:"前回コンテンツを閉じた場所から読み上げを再開します。"},
	resumeMode1:		{ normal:"する",	description:"前回の場所から読み上げを再開します。"},
	resumeMode2:		{ normal:"しない",	description:"最初のページを表示して、読み上げは開始しません。"},

	dispMode:			{ normal:"表示モード",		easy:"ひょうじのきりかえ",	description:"表示モードをパソコン用⇔タブレット用に切り替えます。"},
	dispModePC:			{ normal:"ＰＣ表示",		easy:"ＰＣひょうじ",		description:"表示モードをパソコン用に切り替えます。"},
	dispModeTablet:		{ normal:"タブレット表示",	easy:"タブレットひょうじ",	description:"表示モードをタブレット用に切り替えます。"},
	dispModeAuto:		{ normal:"自動判定",	    easy:"じどうひょうじ",		description:"表示モードをデバイスにより自動で切り替えます。"},

	dispMode1:			{ normal:"ＰＣ表示",		easy:"ＰＣひょうじ",		description:"表示モードをパソコン用に切り替えます。"},
	dispMode2:		    { normal:"タブレット表示",	easy:"タブレットひょうじ",	description:"表示モードをタブレット用に切り替えます。"},
	dispMode3:		    { normal:"自動判定",	    easy:"じどうひょうじ",		description:"表示モードをデバイスにより自動で切り替えます。"},

	dirHorz:		    { normal:"横書表示",	    easy:"こよがき",		    description:"コンテンツの表示を横書き表示します。"},
	dirVert:		    { normal:"縦書表示",	    easy:"たてがき",		    description:"コンテンツの表示を縦書き表示します。"},
	vertohorz:		    { normal:"縦書/縦書",	    easy:"たてがき/こよがき",   description:"コンテンツの表示を縦書や横書に切り替えます。"},
	//---------------------------
    ae_exit :			{ normal:"編集終了"},
    ae_save :			{ normal:"保存"},
    ae_moveleft:		{ normal:"カーソル移動：左"},
    ae_moveright:		{ normal:"カーソル移動：右"},
    ae_moveup:			{ normal:"カーソル移動：上"},
    ae_movedown:		{ normal:"カーソル移動：下"},
    ae_insert_space:	{ normal:"空白を挿入"},
    ae_insert_breakline:{ normal:"改行を挿入"},
    ae_insert_newpage:  { normal:"改ページを挿入"},
	ae_split_section:	{ normal:"セクション単位\nでページを分割"},
    ae_align_left  :	{ normal:"左寄せ"},
    ae_align_center:	{ normal:"中央寄せ"},
    ae_align_right :	{ normal:"右寄せ"},
    ae_item_delete:		{ normal:"削除"},
    ae_all_delete:		{ normal:"全て削除"},
	//---------------------------
	markerType1:		{ normal:"塗り", description:"選択範囲を塗りつぶすマーカーです。"},
	markerType2:		{ normal:"下線", description:"選択範囲に下線を引くマーカーです。"},
	markerApply:		{ normal:"開始", description:"選択中の色を使ってマーカーペンを実行します。"},
	markerCancel:		{ normal:"終了", description:"マーカーモードを終了して再生モードに移行します。"},
	//---------------------------
    none:""
} ;

var ShortcutKeys =
{
    stop:		{ key:"Space", ctrl:true },
    play:		{ key:"Space"},
    pause:		{ key:"Space"},
    prev:		{ key:"←", ctrl:true },
    next:		{ key:"→", ctrl:true },
    up:			{ key:"↑", ctrl:true },
    down:		{ key:"↓", ctrl:true },
    font1:		{ key:"↓", shift:true },
    font3:		{ key:"↑", shift:true },
	speed1:		{ key:"←", shift:true },
	speed3:		{ key:"→", shift:true },
    colorCh:	{ key:"C" },
    bibinfo:	{ key:"I" },
    help:		{ key:"H" },
    setting:	{ key:"S" },
    layoutedit:	{ key:"E" },
	waka_on:	{ key:"W" },
	waka_off:	{ key:"W" },
	linemode1:	{ key:"L" },
	linemode2:	{ key:"L" },
	linemode3:	{ key:"L" },
	vertohorz:	{ key:"V" , ctrl:true },
    none:""
} ;

var sBibItems = {
     title            :{ caption:"タイトル"}
    ,author           :{ caption:"原本著者"}
    ,source_publisher :{ caption:"原本出版社"}
    ,publication_date :{ caption:"原本出版日"}
    ,isbn             :{ caption:"ISBN"}
    ,publisher        :{ caption:"発行者"}
    ,producer         :{ caption:"製作者"}
    ,generator        :{ caption:"作成ソフト"}
    ,narrator         :{ caption:"ナレーター"}
    ,create_date      :{ caption:"作成日", option:"yyyy年mm月dd日"}
    ,total_time       :{ caption:"再生時間", option:"hh時間mm分ss秒"}
    ,smil_count       :{ caption:"ハイライト",option:"ヶ所"}
    //,uuid             :{ caption:"UUID"}
} ;

var sSeparatorText = "────────" ;
var sShortcutLabel = "ショートカット：" ;

var sPanelHeaders =
{
    setting: "設定",
    bibinfo: "書誌情報",
    help:    "ヘルプ",
    index:   "目次",
    control: "操作パネル",
    marker:  "マーカー"
} ;
var sPanelFooters = 
{
    desktop:"周りをクリックするか[ESC]でこの画面を閉じます。",
    mobile: "周りをタップするとこの画面を閉じます。"
} ;

var sSettinInfo = "<div style='font-size:70%;text-align:left;line-height:1em;margin-left:30px;'>【キー操作】<br/>[↑][↓]キーで項目を選択して、[←][→]キーで値を調整します。<br/><span id='setting_reset_comment'>[Enter]でリセット(初期設定)になります。</span><br/></div>" ;

var sSettingLabels =
{
    caption:"設定画面",
    volume:"音&ensp;量",
    speed: "速&ensp;度",
    interval: "間&ensp;隔",
    font:  "文&ensp;字",
    line:  "行&ensp;間",
    space: "文字間",
    color: "表示色",
    reset: "リセット",
    left:"－",
    right:"＋",
    sample_text:"サンプル ハイライト テキスト"
} ;
