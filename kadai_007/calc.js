//変数numにランダムな整数を代入
let num = Math.floor(Math.random() * 100);

//変数numの値を出力する
console.log(num);

//３の倍数
if ( ( num % 3 ) === 0 && ( num % 5 ) === 0) 
{
    console.log('3と5の倍数です');
} 
else if ( ( num % 3 ) === 0) {
console.log('3の倍数です');
}
else if ( ( num % 5 ) === 0) 
{
    console.log('5の倍数です');
}


