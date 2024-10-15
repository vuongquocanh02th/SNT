let soluong=parseInt(prompt("Nhap so luong SNT"));
let count=0;
let num=2;
while (count<soluong){
    let isPrime=true;
    for(let i=2;i*i<=num;i++){
        if(num%i===0){
            isPrime=false;
            break;
        }
    }
    if(isPrime){
        document.write("<pre>"+num+"</pre>");
        count++;
    }
    num++;
}