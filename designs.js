// Select color input
// Select size input
let pixelCanvas = $('#pixelCanvas');

// When size is submitted by the user, call makeGrid()

$(document).on('submit', '#sizePicker', function(e) {
    e.preventDefault();
    const tableHeight = $('#inputHeight').val();
    const tableWidth = $('#inputWidth').val();
    console.log(tableHeight);
    console.log(tableWidth);
    for(let i = 1; i <= tableHeight; i++){
        pixelCanvas.append(`<tr class="a"></tr>`);
    }
    for(let k = 1; k <= tableWidth; k++){
        $('.a').append(`<td></td>`);
    }

});

// function makeGrid() {
//
// // Your code goes here!
//
// }
