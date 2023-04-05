// task 1a(i);
let n=11;
let remainder=n%2;
if(remainder==1){
    n++
    console.log(n)
}
// (ii)
let x=21;
if(x%2==0){
    console.log("Divisible bye 2");
}
else if(x%3==0){
    console.log("Divisible by 3")
}
else if(x%6==0){
    console.log("Divisible by 6")
}

let size=6;
let str="";
for(let i=1; i<=size; i++){
    if(i%2==1){
        str=str+"j"
    }
    else{
        str=str+"k"
    }
}
console.log(str);

let z=21;
let count=0;
for(i=2; i<=z; i++){
    if(z%2==0){
        count++
    }
}
if(count==0){
    console.log('prime')
}
else{
    console.log("composite")
}






