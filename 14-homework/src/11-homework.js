function getPromise(){
    return new Promise((resolve) => {
        setTimeout(() => {
            const time = Date.now();
            const sign = time % 100000;
            // console.log(sign);
            const container = document.getElementById('hmv11-rapper');
            resolve(container.innerHTML += `<span>${String.fromCharCode(sign)}</span>`);
        }, 50);       
    });
}

export function getRandomChinese(length){
    let chain = Promise.resolve();  
    for(let i = 0; i < length; i++){
        chain = chain.then(() => getPromise());
    }
    return chain;
}
// getRandomChinese(4);