// 今日の日付を取得
const today = new Date();

// 年月日の情報を抽出（月日はゼロパディング. getMonthは0-11なので1追加.）
const YYYY = today.getFullYear();
const MM = ("0" + (today.getMonth() + 1)).slice(-2);
const DD = ('0' + today.getDate()).slice(-2);

// YYYY年MM月DD日の形式で出力
console.log(YYYY + '年' + MM + '月' + DD + '日');