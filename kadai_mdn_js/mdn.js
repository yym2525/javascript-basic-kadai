const today = new Date();

const year = today.getFullYear();
const month = today.getMonth() + 1;  // 月は0から始まるので+1
const day = today.getDate();

const formatted = `${year}年${month}月${day}日`;
console.log(formatted);  // 例: 2025年7月15日