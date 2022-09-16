
makeSquares(16)

function makeSquares(num) {
    const canvas = document.querySelector('.canvas');
    for (let i = 0; i < num; i++) {
        let row = document.createElement('div');
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
};