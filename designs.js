// Select color input
let colorPicker = $('#colorPicker');
console.log(colorPicker);

// Select size input
let pixelCanvas = $('#pixelCanvas');

// When size is submitted by the user, call makeGrid()

$(document).on('submit', '#sizePicker', function(e) {
    e.preventDefault();
    const tableHeight = $('#inputHeight').val();
    const tableWidth = $('#inputWidth').val();
    for(let i = 1; i <= tableHeight; i++){
        pixelCanvas.append(`<tr class="a"></tr>`);
    }
    for(let k = 1; k <= tableWidth; k++){
        $('.a').append(`<td></td>`);
    }

});

$(document).on('click', 'td', function () {
    $(this).css('background-color', colorPicker.val())
});

// function makeGrid() {
//
// // Your code goes here!
//
// }
