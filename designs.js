document.addEventListener('DOMContentLoaded', function() {
    // Select Size picker
    const sizePicker = document.querySelector('#sizePicker');
    // Select Design canvas table
    const canvas = document.querySelector('#pixelCanvas');
    // Select color input

    // When size is submitted by the user, call makeGrid()
    sizePicker.addEventListener('submit', makeGrid);

    function makeGrid(evt) {
        // Prevent submit default action.
        evt.preventDefault();
        // Clear previous grid table
        canvas.innerHTML = '';
        // Select size input
        const height = sizePicker.querySelector('#inputHeight').value;
        const width = sizePicker.querySelector('#inputWeight').value;
        // For loop to make the grid table
        for (let row = 0; row < height; row++) {
            canvas.appendChild(document.createElement('tr'));
            for (let col = 0; col < width; col++) {
                canvas.lastChild.appendChild(document.createElement('td'));
            }
        }
    }

});
