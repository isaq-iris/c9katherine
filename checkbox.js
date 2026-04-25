// ◆◆◆ チェックボックスの「レ」色を変化させるためのJavaScript ◆◆◆

// preparations.htm用

document.addEventListener('DOMContentLoaded', function () {
  // 開いているファイル名を取得
  const currentPageFileName = window.location.pathname.split('/').pop();

   // 実行開始ログ
  console.log(`${currentPageFileName}で「チェックボックスの「レ」色を変化させる機能」JavaScriptを実行しました。`);

  // ページ内にあるチェックボックスを取得
  const checkboxes = document.querySelectorAll('.checkbox');

  // checkbox 全部に対して処理 --------------------------------------
  checkboxes.forEach(checkbox => {
    // checkboxに変更があった場合のイベントリスナー -----------------
    checkbox.addEventListener('change', function () {
      // チェックされた時に処理を実行
      if (this.checked) {
        // 既存のアニメーションクラスをクリア
        this.classList.remove('highlight-red');

        // 直後に赤色にするクラスを追加
        // requestAnimationFrameを使用することで、ブラウザの描画タイミングに合わせてスタイル変更
        requestAnimationFrame(() => {
          this.classList.add('highlight-red');
        });

        // 3秒後に赤色クラスを削除（黒色に戻す）
        setTimeout(() => {
          this.classList.remove('highlight-red');
        }, 3000); // 3000ミリ秒 = 3秒後
      } // チェックされた時の処理完了--------------------------------

    }); // checkboxに変更があった場合のイベントリスナーの終わり------

  }); // checkbox 全部に対して処理完了 ------------------------------

});