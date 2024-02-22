let box = document.getElementsByClassName('box')
let chance = document.querySelector('.chance')
let resetBtn = document.querySelector('#reset-btn')
// console.log(box);

const win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
function gameDisable() {
    for (let i = 0; i < 10; i++) {
        try {
            box[i].disabled = true;
        }
        catch (error) {
            console.log('alredy disabled');


        }


    }
}





let check = true;
let X = 0;
let Y = 0;


function game(e) {
    if (check == true) {

        e.innerText = 'X';
        chance.innerText = '0';
        e.disabled = true;
        check = false;
        X++;
        if (X > 2) {
            win.forEach((e) => {
                // console.log(e);
                if (box[e[0]].innerText === 'X' && box[e[1]].innerText === 'X' && box[e[2]].innerText === 'X') {
                    alert('X is win');
                    gameDisable();

                }
            })
        }
    }


    else {
        e.innerText = '0';
        e.disabled = true;
        check = true;
        chance.innerText = 'X';
        Y++;
        if (X > 2) {
            win.forEach((e) => {
                // console.log(e);
                if (box[e[0]].innerText === '0' && box[e[1]].innerText === '0' && box[e[2]].innerText === '0') {
                    alert('0 is win')
                    gameDisable();


                }
            })
        }
    }
}


function reset() {
    for (let i = 0; i < 10; i++) {
        box[i].innerText = '';
        box[i].disabled = false;
    }
}

resetBtn.addEventListener('click', reset);




