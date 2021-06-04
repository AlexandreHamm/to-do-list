let enterButton = document.getElementById('enter');
let clearButton = document.getElementById('clear');
let input = document.getElementById('userInput');
let ul = document.querySelector('ul');
let item = document.getElementsByTagName('li');

function inputLength(){
    return input.value.length;
}

function createListElement(){
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    storage();
    input.value = '';

    function crossOut(){
        li.classList.toggle('done');
        storage();
    }
    li.addEventListener('click', crossOut);
    
    
    let dBtn = document.createElement('button');
    dBtn.appendChild(document.createTextNode('X'));
    li.appendChild(dBtn);
    storage();
    dBtn.addEventListener('click', () => {
        li.remove();
    });
    storage();
    
}

function addListAfterClick(){
    if(inputLength() > 0){
        createListElement();
    } else {
        alert('Le champ est vide.');
    }
}

function addListAfterKeypress(event){
    if(inputLength() > 0 && event.which === 13){
        createListElement();
    }
}

enterButton.addEventListener('click', addListAfterClick);
clearButton.addEventListener('click', () => {
    if(confirm('Êtes-vous sûr de vouloir clear la liste ?')){
        window.localStorage.clear();
        ul.innerHTML = '';
    }
});

input.addEventListener('keypress', addListAfterKeypress);

// stockage
function storage(){
    window.localStorage.todoList = ul.innerHTML;
}
function getValues(){
    let storageContent = window.localStorage.todoList;
    if(!storageContent){
        ul.innerHTML = '';
    }
    else{
        ul.innerHTML = storageContent;
    }
}
getValues();