// HTML要素をidで取得

const btn = document.getElementById('btn');
const text = document.getElementById('text');

//イベント処理or時間差表示

btn.addEventListener('click' , () => {
    setTimeout(() => {
    text.textContent = "ボタンをクリックしました";
}, 2000);
});

