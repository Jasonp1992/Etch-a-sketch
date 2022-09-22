
const defaultSize = 16

makeSquares(defaultSize)
setHeightWidth(defaultSize)

function makeSquares(num) {
    const canvas = document.querySelector('.canvas');
    for (let i = 0; i < num; i++) {
        const row = document.createElement('div');
        row.classList.add(`row${i}`);
        // row.classList.add('grid-square')
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
        alert('Sorry input to high. Try a smaller number')
        makeSquares(defaultSize)
        return;
    } else if (input < 0) {
        alert('Sorry that numbers to small. Try a bigger Number')
        makeSquares(defaultSize)
        return;
    };
        //if less make new grid
    makeSquares(input);
    setHeightWidth(input);
};

function setHeightWidth(num) {
    let gridSquare = document.querySelectorAll('.grid-square');
    for (let i = 0; i < gridSquare.length; i++) {
        gridSquare[i].style.width = `${35/num}rem`;
        gridSquare[i].style.height = `${35/num}rem`;
    }
}

    const button = document.querySelector('.clear-button');
    button.addEventListener('click', function() {
        const canvas = document.querySelector('.canvas');
        canvas.innerHTML = '';
        makeSquares(defaultSize);
        setHeightWidth(defaultSize);
    })
