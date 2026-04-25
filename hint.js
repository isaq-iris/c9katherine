document.addEventListener('DOMContentLoaded', function () {
  const urlParams = new URLSearchParams(window.location.search);
  const sectionId = urlParams.get('section');
  const iframe = document.getElementById('hint-iframe');

  if (!iframe) return;

  if (sectionId) {
    // 1. アンカーなしのURLをセットして読み込み開始
    if (!iframe.src.includes('hint.html')) {
      iframe.src = 'hint.html';
    }

    // 2. iframe の読み込み完了を待ってからアンカー（#）を反映
    iframe.addEventListener('load',
      function() {
        // iframe内部のURLをアンカー付きに書き換える
        // contentWindow.location.replace を使うとブラウザ履歴を汚さず移動可能
        const targetUrl = 'hint.html#' + sectionId;
        iframe.contentWindow.location.replace(targetUrl);

        console.log(`セクション「${sectionId}」へ移動しました。`);
    });

    // 3. 3秒後にアドレスバーを書き換え（iphone対策）
      setTimeout(function() {
    const newUrl = new URL(window.location.href);
    newUrl.searchParams.delete('section');
    window.history.replaceState({}, '', newUrl.pathname);
      }, 2000); // 2秒待機

  } else {
    // アンカーがない場合は通常通り
    if (!iframe.src) iframe.src = 'hint.html';
  }
});