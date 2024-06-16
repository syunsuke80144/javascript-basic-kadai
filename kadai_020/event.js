// btnというidを持つHTML要素を取得し、定数に代入する
const changeBtn = document.getElementById('btn');

// textというidを持つHTML要素を取得し、定数に代入する
const changeText = document.getElementById('text');

// ボタンがクリックされたときにイベント処理を実行する
changeBtn.addEventListener('click', () => {

  // 要素の文字列を変更
  changeText.textContent = 'ボタンをクリックしました'

});