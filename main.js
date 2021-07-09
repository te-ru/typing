let task = document.getElementById('task');
let score = document.getElementById('score');
let miss = document.getElementById('miss');

let point = 0;
let missPoint = 0;
score.textContent = 'score: ' + point;
miss.textContent = 'miss: ' + missPoint;

// 出題される課題
const inputList =[
    'console.log' ,
    'function' ,
    'const' ,
    'let' ,
    'document' ,
    'create' ,
    'append' ,
    'alert' , 
    // '&&' ,
    // '||' ,
    'return' , 
    // '=>' ,
    'while' ,
    'for',
    'continue'

];

let checkTask = [];
const createTask = () => {
    let rnd = Math.floor(Math.random() * inputList.length);
    task.textContent = ''
    checkTask = inputList[rnd].split('').map(function(value) {
        let span = document.createElement('span');
        span.textContent = value;
        task.appendChild(span);
        console.log(point);
        return span;
    });
}

createTask();

document.addEventListener('keydown' , keyDown);
function keyDown(input) {
    if(input.key ===　checkTask[0].textContent) {
        checkTask[0].className = 'inputed-task';
        checkTask.shift();

        if(!checkTask.length){
            scoreUp();
            createTask();
        }
    } else {
        missCount();
    }
}

const scoreUp = () => {
    if(point >= 9) {
        clear();
    }
    point++;
    score.textContent = 'score: ' + point;
}

const missCount = () => {
    missPoint++;
    miss.textContent = 'miss: ' + missPoint;
}


const clear = () => {
    if(missPoint < 10) {
        alert('よくできました！');
        reset();
}　else {
    alert('タイピングミスが多いかも…');
    reset();      
}
}

const reset = () => {
    point = -1;
    missPoint = 0;
    score.textContent = 'score: ' + point;
    miss.textContent = 'miss: ' + missPoint;
}