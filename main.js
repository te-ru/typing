let text = document.getElementById('text');
let score = document.getElementById('score');
score.textContent = 0;
let point = 0;
const inputList =[
    'console.log' ,
    'function' ,
    'const' ,
    'let' ,
    'document' ,
    'create' ,
    'append' ,
    'alert'

];

let checkText = [];
function createTask() {
    let rnd = Math.floor(Math.random() * inputList.length);
    text.textContent = ''
    checkText = inputList[rnd].split('').map(function(value) {
        let span = document.createElement('span');
        span.textContent = value;
        text.appendChild(span);
        console.log(point);
        return span;
    });
}
createTask();

document.addEventListener('keydown' , keyDown);
function keyDown(input) {
    if(input.key ===　checkText[0].textContent) {
        checkText[0].className = 'inputed-text';
        checkText.shift();

        if(!checkText.length){
            scoreUp();
            createTask();
        }
    }
}

function scoreUp() {
    if(point >= 9) {
        clear();
    }
    score.textContent++;
    point++;
}

function clear() {
    alert('よくできました！');
}