
const defaultSize = 16

makeSquares(defaultSize)

function makeSquares(num) {
    const canvas = document.querySelector('.canvas');
    for (let i = 0; i < num; i++) {
        const row = document.createElement('div');
        row.classList.add(`row${i}`);
        canvas.appendChild(row);
        for (let j = 0; j < num; j++) {
            const row = document.querySelector(`.row${i}`);
            let column = document.createElement('div');
            column.classList.add('column');
            column.classList.add('grid-square')
            row.appendChild(column);
        }
    };
    mouseoverChange();
};

function mouseoverChange() {
    let column = document.querySelectorAll(".column");
    for (let i = 0; i < column.length; i++) {
        column[i].addEventListener('mouseover', function() {
            column[i].classList.add('active')
        })
    }
};

function newSize() {
        //remove existing grid
    const canvas = document.querySelector('.canvas');
    let input = document.getElementById('square-input').value;
    canvas.innerHTML = '';
        //check if input is less then 100
    if (input > 100) {
        alert('sorry input to high choose a smaller number')
        makeSquares(defaultSize)
        return;
    }
        //if less make new grid
    makeSquares(input);
};

//function to check if div is empty


