/*
 Some notes:
 - i didn't use a function to mount my grid, im doing this using a event listener.
 - my variables tableHeight and tableWidth were declared as const because their values
 wont change until my document listen another event like this.
 i hope did well!
*/

// Select color input
let colorPicker = $('#colorPicker');

// Select size input
let pixelCanvas = $('#pixelCanvas');

// When size is submitted by the user, call makeGrid()

$(document).on('submit', '#sizePicker', function(e) {
    e.preventDefault();
    if($('td').css("background-color")){
        pixelCanvas.html('');
    }else{
        const tableHeight = $('#inputHeight').val();
        const tableWidth = $('#inputWidth').val();
        for(let i = 1; i <= tableHeight; i++){
            pixelCanvas.append(`<tr class="tr-canvas"></tr>`);
        }
        for(let k = 1; k <= tableWidth; k++){
            $('.tr-canvas').append(`<td></td>`);
        }

    }

});

$(document).on('click', 'td', function () {
    $(this).css('background-color', colorPicker.val())
});

