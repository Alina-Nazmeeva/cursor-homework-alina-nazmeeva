// for(let i = 0; i < 8; i++){
//     if(i%2 === 0){
//         console.log("# # # # ");
//     } else {
//         console.log(" # # # #");
//     }
//     document.write('<br>');
// }

let chess = "";

for(let i = 0; i < 8; i++){
    if(i%2 === 0){
        chess += "# # # # \n"
    } else {
        chess += " # # # #\n";
    }       
}
console.log(chess);