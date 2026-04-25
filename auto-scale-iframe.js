// iframe-wrap内の幅100%に iframeコンテンツを縮小するjavaScript

// すべてのiframeに適用
const iframes = document.querySelectorAll('iframe');

iframes.forEach(iframe => {
    // 読み込み完了イベントの中で全ての処理を行う
    iframe.onload = function() {
        try {
            const win = iframe.contentWindow;
            const doc = win.document;
            const docEl = doc.documentElement;
            const wrapper = iframe.parentElement;

            if (!docEl || !wrapper) return;

            // 1. 内部ページの余白をゼロにする（同一ドメイン前提）
            doc.body.style.margin = '0';
            doc.body.style.padding = '0';

            // 2. 各サイズを取得（高さに5px足す）
            const contentWidth = docEl.scrollWidth + 1;
            const contentHeight = docEl.scrollHeight + 1;
            const wrapperWidth = wrapper.clientWidth;

            // 3. 異常値の場合は処理中止（0で除算禁止）
            if (contentWidth === 0 || wrapperWidth === 0) return;

            // 4. 縮小率を計算
            const scale = wrapperWidth / contentWidth;

            // 5. iframe本体にサイズとスケールを適用
            iframe.style.width = contentWidth + 'px';
            iframe.style.height = contentHeight + 'px';
            iframe.style.transform = `scale(${scale})`;

            // 6. 親要素の高さを縮小後のサイズに合わせる
            const scaledHeight = contentHeight * scale;
            wrapper.style.height = scaledHeight + 'px';

            // 7. 計算が終わったので表示させる（CSSで .is-loaded { opacity: 1; } が必要）
            wrapper.classList.add('is-loaded');

            // 動作確認用ログ（計算が終わった「中」で出力する）
            console.log("Iframe scaling completed:", {
                "URL": iframe.src,
                "iframe元の幅": contentWidth + 'px',
                "iframe元の高さ": contentHeight + 'px',
                "親要素の幅": wrapperWidth + 'px',
                "親要素の最終高さ": scaledHeight + 'px',
                "計算された倍率": scale.toFixed(3) + '倍'
            });

        } catch (e) {
            console.warn("Could not scale iframe (cross-origin?):", e);
            // エラー時も真っ白を避けるため強制表示
            iframe.parentElement.style.opacity = '1';
        }
    };
});