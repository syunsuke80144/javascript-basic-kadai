const clickBtn = document.getElementById('btn');

const clickText = document.getElementById('text');

clickBtn.addEventListener('click', () => {

  setTimeout(() => {
    clickText.textContent = 'ボタンをクリックしました';
    clickText.style.color = 'red';
    clickText.style.backgroundColor = 'yellow';
    clickText.style.width = '300px'
  }, 2000);
  
});