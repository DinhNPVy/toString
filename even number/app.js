let num = prompt("Nhập vào 1 chuỗi số bất kì:");

const str = num.toString();

const res = [str[0]];

for(let i = 1; i < str.length; i++){
    if((str[i - 1] % 2 === 0) && (str[i] % 2 === 0)){
        res.push('-', str[i]);
    }else{
        res.push(str[i]);
    }
}

console.log(res.join(''));