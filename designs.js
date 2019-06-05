/*
Pixel Art Maker Logic:
  This script is responsible for creating the grid based on input from user
  and painting grid cells based on colors as input from user.
*/
$(document).ready(function () {
  // when user clicks submit, create the grid based on user input
  $('#sizePicker').submit(function makeGrid(grid) {
    // remove any existing grid by removing rows
    $('table tr').remove();
    
     // start creating new grid

     // rows number based on user input
    var rows = $('#inputHeight').val();
     // columns number based on user input
    var cols = $('#inputWidth').val();
    
    // creating the grid as HTML Table object
    for (var row = 1; row <= rows; ++row) { 
      // create row by row
      $('table').append("<tr></tr>");
      
      for (var col = 1; col <= cols; ++col) {
        // creating cells by creating columns
        $('tr:last').append("<td></td>");
        // give each cell a class 'pixel' so we can add event listner on it
        // this event listner will change background of the cell based on user input
        $('td').attr("class", 'pixel')
      }
    }
    
    // prevent default action of submit button
    grid.preventDefault();
  
    // when any cell is clecked run the function that is responsible of changing background
    $('.pixel').click(function (event) {
    // color value as input from user
      var paint = $('#colorPicker').val();
      // change cell color

      $(event.target).css('background-color', paint);

    });
  });
});

