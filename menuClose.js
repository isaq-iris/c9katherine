// メニュークリック後に展開した子階層以降を閉じるためのJavaScript

document.addEventListener('click', function(e) {
  // 1. 孫階層クリック検知
  const targetA = e.target.closest('ul li a');
  if (!targetA) return;

  // 2. .side と .gnav の特定
  const sideMenu = document.querySelector('.side');
  const gNav = document.querySelector('.gnav');

  if (sideMenu || gNav) {
    // 現在の状態を退避
    const sideStyles = sideMenu ? { ml: sideMenu.style.marginLeft, tr: sideMenu.style.transition } : null;
    const gNavStyles = gNav ? { ml: gNav.style.marginLeft, tr: gNav.style.transition } : null;

    // 瞬間移動（マウスから物理的に引き離す）
    if (sideMenu) { sideMenu.style.transition = 'none'; sideMenu.style.marginLeft = '1000px'; }
    if (gNav) { gNav.style.transition = 'none'; gNav.style.marginLeft = '1000px'; }

    // 3. 復帰（0.001秒後）
    setTimeout(() => {
      if (sideMenu) { sideMenu.style.marginLeft = sideStyles.ml; sideMenu.style.transition = sideStyles.tr; }
      if (gNav) { gNav.style.marginLeft = gNavStyles.ml; gNav.style.transition = gNavStyles.tr; }

      setTimeout(() => { document.body.style.border = "none"; }, 500);
    }, 100); //100ミリ秒（0.1秒）後
  }
}, true);