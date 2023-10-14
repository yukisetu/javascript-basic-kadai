// HTMLの代入
const btn = document.getElementById('btn');
const text = document.getElementById('text');

// イベント処理の実行
btn.addEventListener('click', () => {
  text.textContent = 'ボタンをクリックしました';
});