let enterN = prompt("Enter first number:");
let N = parseInt(enterN);

while(isNaN(N) || (N != enterN)){
    alert("Please, enter only NUMBERS!");
    enterN = prompt("Enter first number:");
    N = parseInt(enterN); 
}
console.log("N = " + N);

let enterM = prompt("Enter second number:");
let M = parseInt(enterM);

while(isNaN(M) || (M != enterM)){
    alert("Please, enter only NUMBERS!");
    enterM = prompt("Enter second number:");
    M = parseInt(enterM); 
}
console.log("M = " + M);

const skipEven = confirm("Do you want to skip even numbers?");
console.log("Skip even numbers? " + skipEven);

let i = 0;
let j = 0;
let result = 0;

if(N < M){
    i = N;
    j = M;
} else if (N > M){
    i = M;
    j = N;
}

for(; i <= j; i++){
    if(!skipEven){
        result += i;
    } else if(i%2 === 1){
        result += i;
        
    }   
}
console.log("Result: " + result);