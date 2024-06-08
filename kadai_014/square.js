
// 引数を二乗する関数を定義
const squareArgument = (num) => {
  return num ** 2;
}

// 戻り値を出力
const argument = Math.floor(Math.random()*101);
console.log(argument + 'を二乗した結果は、' + squareArgument(argument) + 'です');