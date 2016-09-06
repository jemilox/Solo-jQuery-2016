console.log('sourced');

//globals
var yellow = 0;
var red = 0;
var green = 0;
var blue = 0;

//doc ready
$(document).ready(function(){
  console.log('jquery sourced');
  //create boxes with html buttons
  $('.color-button').on('click', function () {
    console.log($(this).attr('data-color'));
    //store color data
    color = $(this).attr('data-color');
    console.log(color);
    //create a new div on the html and add two css classes based on color
    $('.container').append('<div class="color-cube ' + color + '" data-color=' + color + '></div>')


    //count boxes
    switch (color) {
      case "blue":
        //console.log('meow');
        blue ++;
        $('#blue').html("Total blue: " + blue);
        break;
      case "red":
        //console.log('meow');
        red ++;
        $('#red').html("Total red: " + red);
        break;
      case "yellow":
        //console.log('meow');
        yellow ++;
        $('#yellow').html("Total yellow: " + yellow);
        break;
      case "green":
        //console.log('meow');
        green ++;
        $('#green').html("Total green: " + green);
        break;
      default:

    }

  });//end button click function

  //remove box
  $('.container').on('click', '.color-cube', function () {
    var removedColor = $(this).attr('data-color');
    $(this).remove();

    console.log(removedColor);
    switch (removedColor) {
      case "blue":
        //console.log('meow');
        blue --;
        $('#blue').html("Total blue: " + blue);
        break;
      case "red":
        //console.log('meow');
        red --;
        $('#red').html("Total red: " + red);
        break;
      case "yellow":
        //console.log('meow');
        yellow --;
        $('#yellow').html("Total yellow: " + yellow);
        break;
      case "green":
        //console.log('meow');
        green --;
        $('#green').html("Total green: " + green);
        break;
      default:
    }
  });


});//end doc ready
