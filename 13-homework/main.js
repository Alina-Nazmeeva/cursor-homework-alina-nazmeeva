function* createIdGenerator(){
    let id = 0;
    while(true){
        yield ++id;
    }
}
const idGenerator = createIdGenerator();
const paragraph = document.getElementById("paragraph");
paragraph.innerText = 'Generated IDs: ';
document.getElementById('id-button').addEventListener('click', () => {
    paragraph.innerText += ` ${idGenerator.next().value} `;
});

function* createFontGenerator(size){
    let fontSize = size;
    while(true){
        change = yield fontSize;
        if(change === "up"){
            fontSize++;
        }
        if(change === "down"){
            fontSize--;
        }
    }
}
const fontGenerator = createFontGenerator(parseInt(getComputedStyle(document.body).fontSize));
console.log(`Start fontSize: ${fontGenerator.next().value}`);
document.getElementById('up-button').addEventListener('click', () => {
    document.body.style.fontSize = (fontGenerator.next("up").value).toString() + 'px';
    console.log(`Current fontSize: ${fontGenerator.next().value}`);
});
document.getElementById('down-button').addEventListener('click', () => {
    document.body.style.fontSize = (fontGenerator.next("down").value).toString() + 'px';
    console.log(`Current fontSize: ${fontGenerator.next().value}`);
});