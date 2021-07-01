let text = document.getElementById('text');

const inputList =[
    'hello world'
];

let checkText = [];
function createTask() {
    text.textContent = ''
    checkText = inputList[0].split('').map(function(value) {
        let span = document.createElement('span');
        span.textContent = value;
        text.appendChild(span);
        return span;
    });
}
createTask();


// text.textContent = inputList[0];

document.addEventListener('keydown' , keyDown);
function keyDown(input) {
    if(input.key ===　checkText[0].textContent) {
        checkText[0].className = 'inputed-text';
        checkText.shift();

        if(!checkText.length){
            createTask();
        }
    }
}

