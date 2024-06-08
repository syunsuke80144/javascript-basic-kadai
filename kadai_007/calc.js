// 1-100の間の整数を定義
let num = Math.floor(Math.random()*100) + 1;

// 確認のため、変数を出力
console.log('num = ' + num);

// 以下、条件分岐の処理
if (num % 3 === 0 && num % 5 === 0) {
  console.log('3と5の倍数です');
}

else if (num % 3 === 0) {
  console.log('3の倍数です');
}

else if (num % 5 === 0) {
  console.log('5の倍数です');
}

// すみません。こっちの方が分かりやすいと思ったのでアレンジしました。。。
else {
  console.log('3と5、いずれの倍数でもありません');
  console.log(num);
}