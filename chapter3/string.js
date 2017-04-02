var str1 = 'にわにはにわにわとりがいる';
console.log(str1.indexOf('にわ'));    // 0 (先頭から検索)
console.log(str1.lastIndexOf('にわ'));    // 6 (末尾から検索)
console.log(str1.indexOf('にわ', 3));   // 4 (4文字目から、右方向検索)
console.log(str1.lastIndexOf('わ', 5));  // 5 (6文字目から左方向に検索)
console.log(str1.indexOf('ガーデン'));    // -1 (不一致)
console.log(str1.startsWith('にわ'));   // true
console.log(str1.endsWith('にわ'));   // false
console.log(str1.includes('にわ'));   // true

var str2 = 'Wingsプロジェクト';
var str3 = '叱られて';
var str4 = ' wings ';

console.log(str2.charAt(4));    // s (5文字目を抽出)
console.log(str2.slice(5,8));   // プロジ (6 ~ 8文字目を抽出)
console.log(str2.substring(5,8));   // プロジ (6 ~ 8文字目を抽出)
console.log(str2.substr(5, 3));   // プロジ (6文字めから、3文字抽出)
console.log(str2.split('s'));   // ["Wing", "プロジェクト"]
console.log(str1.split('わ', 3));    // ["に", "にはに", "に"] (3つに分割)
console.log(str1.split('わ'));    // ["に", "にはに", "に", "とりがいる"]
console.log(str2.charCodeAt(0));    // 87
console.log(String.fromCharCode(87, 105, 110, 103));    // Wing
console.log(str3.codePointAt(0));   // 21489
console.log(String.fromCharCode(21489));   // 叱
console.log(str2.concat('有限会社'));   // Wingsプロジェクト有限会社
console.log(str2.repeat(2));    // WingsプロジェクトWingsプロジェクト
console.log(str4.trim());   // wings
console.log(str2.length);   // 11 (日本語も1文字と換算)
