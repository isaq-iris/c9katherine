// ◆◆◆ ウィンド幅がリサイズされた場合、リロードするためのJavaScript ◆◆◆

// タイマーをリセット
let resizeTimer = false;
// 読み込み時点のウィンドウ幅を取得
let previousWidth = window.innerWidth;

// 現在のファイル名を取得
const currentPageFileName = window.location.pathname.split('/').pop();
// 開始ログ
console.log(`[${currentPageFileName}] のリサイズ検知を開始しました。`);

// 0.2秒後、リサイズを検知すると実行
window.addEventListener('resize', function () {
  console.log(`[${currentPageFileName}] のresizeイベントが発火しました。`); // resizeイベント発火ログ

// タイマーが動いた後
  if (resizeTimer !== false) {
    clearTimeout(resizeTimer);
    // タイマークリアログ
    console.log(`[${currentPageFileName}] の既存のタイマーをクリアしました。`);
  }
  // setTimeoutコールバック関数
  resizeTimer = setTimeout(function () {
    // setTimeout実行ログ
    console.log(`[${currentPageFileName}] のsetTimeoutコールバック関数が実行されました。`);
    // 現在のウィンドウ幅を取得
    const currentWidth = window.innerWidth;
    // 幅の比較情報ログ
    console.log(`[${currentPageFileName}] 現在のウィンドウ幅: ${currentWidth}px, 以前のウィンドウ幅: ${previousWidth}px`);

    if (previousWidth !== currentWidth) {
      // リロード前の警告ログ
      console.log(`[${currentPageFileName}] ウィンドウ幅の変更を検知しました。`);
      // ページをリロード
      location.reload();
      // リロード実施ログ
      console.log(`[${currentPageFileName}] ページのリロードされました。`);
    }
    // 幅の更新
    previousWidth = currentWidth;
    // 基準となる幅の更新ログ
    console.log(`[${currentPageFileName}] previousWidthを${previousWidth}pxに更新しました。`); //
  }, 200); // 200ミリ秒（0.2秒

  // previousWidth更新ログ
  console.log(`[${currentPageFileName}] 新しいsetTimeoutタイマーが設定されました。`); // タイマー設定ログ

});
