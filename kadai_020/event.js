
// イベント対象の要素を取得
const btn = document.getElementById('btn');
const heading = document.getElementById('text');

// ボタンがクリックされたときの処理
btn.addEventListener('click', function() {
  heading.textContent = 'ボタンをクリックしました'
  console.log('ボタンをクリックしました')
});