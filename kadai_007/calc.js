//変数numにランダムな整数を代入
let num = Math.floor(Math.random() * 6);

//変数numの値を出力する
console.log(num);

//３の倍数
if (num=== 3) {
console.log('3の倍数です');
}

//3と5の倍数
if (num=== 5) {
    console.log('5の倍数です');
}

//3と5の倍数
if (num===3 || num===5) {
    console.log('3と5の倍数です')
}