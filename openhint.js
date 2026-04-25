// ◆◆◆ 別ページからアンカー付きでヒント集を開くためのJavaScript ◆◆◆

function openhint(childUrlWithParam) {
  // 1. 新しいウィンドウを開く
  const newWindow = window.open(childUrlWithParam, '_blank');

  if (newWindow) {
    // 2. 新しいウィンドウにフォーカス
    newWindow.focus();

    // 3. 遅延させてから親を閉じる（確実にパラメータを飛ばすため）
    setTimeout(() => {
      window.open('', '_self').close();
    }, 100); // 100ミリ秒（0.1秒後）に親ウィンドウを削除
  } else {
    // ブロックされた場合、現在の画面で開く（バックアップ策）
    if (confirm("ポップアップがブロックされました。この画面で開きますか？")) {
      window.location.href = childUrlWithParam;
    }
  }
}