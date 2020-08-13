const generateRandomColor = () => Array.from({length: 3}).map(() => Math.round(Math.random()*255));

function generateBlocks(){
    const blocks = document.querySelectorAll('.squares');
    blocks.forEach(block => {
        block.style.backgroundColor = `rgb(${generateRandomColor()})`;
        block.style.border = "3px solid black";
    });
}

function generateBlocksInterval(){
    window.setInterval(generateBlocks, 1000);
}
generateBlocksInterval();
