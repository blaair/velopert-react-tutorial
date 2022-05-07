function selfNumber(){
    let Dn;
    let array = [];
    for(let n = 0; n < 10000; n++){
        if(0 < n && n < 10){ // n 이 한자리 일 때
            Dn = 2*n;
        }else if(10 <= n && n < 100){ // n이 두자리일 때
            Dn =  n + (Math.floor(n / 10)) + (n % 10);
        }else if(100 <= n && n < 1000){ // n이 세자리 일 때
            Dn = n + (Math.floor(n / 100)) + (Math.floor((n % 100) / 10)) + (n % 10);
        }else if(1000 <= n && n < 10000){ // n이 네자리일 때
            Dn = n + (Math.floor(n / 1000)) + (Math.floor((n % 1000) / 100)) + (Math.floor((n % 100) / 10) ) + (n % 10);
        }else{ // n = 10000
            Dn = 10001;
        }
        array.push(Dn);
    }
    for(let i = 1; i <= 10000; i++){
        if(!array.includes(i)){
            console.log(i);
        }
    }
}
selfNumber();