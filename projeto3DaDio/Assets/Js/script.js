// variaveis iniciais
let order = [];
let clickOrder = [];
let score = 0;

//variaveis das cores
const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.gree');
const yello = document.querySelector('.yello');

// pontuação
let shuflerOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickOrder = [];

    for(let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) +1)
    }
}

let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() =>{
            element.classList.add('select');
    }, number - 250);
    setTimeout(() => {
            element.classList.remove('select');
    })
}

let checkOrder = () => {
    for(let i in clickOrder) {
        if(clickOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }

    if(clickOrder.length == order.length) {
            alert(`pontuou ${score}\nVoce acertou!!` );
            nextLevel();
    }
}

//click

let click = (color) => {
    clickOrder[clickOrder.length] = color;
    createColorElement(color).classList.add('select');

    setTimeout(()=> {
       createColorElement(color).classList.remove('select');
       checkOrder();
    },250);
}


let createColorElement = (color) => {
    if (color == 0) {
        return green;
    } else if( color == 1) {
        return red;
    } else if(color == 2) {
        return yello;
    } else if (color == 3) {
        return blue;
    }
}

let nextLevel = () => {
    score++;
    shuflerOrder();
}

let gameOver = () => {
    alert(`pontuação é:  ${score}`);
    order = [];
    clickOrder = [];

    playGame();
}

let playGame = () => {
    alert('Bem vindo ao Genius')
    score = 0;

    nextLevel();
}

green.onclick = () => click(0);
red.onclick = () => click(1);
blue.onclick = () => click(3);
yello.onclick = () => click(2);



playGame();