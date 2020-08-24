// render UI
import $ from 'jQuery';

export function renderForm() {
  $('#root').html('<h1> My App</h1><br>');
  $('#root').append('<button id="button">Click Me</button>');
  $('#button').click(function (){
    console.log("You clicked me"); 
});

  //$("#button").click(()=>{console.log("You clicked me") }
}

/*
export const renderForm = function() {

}
*/