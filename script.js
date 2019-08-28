"use strict";
//Pass numInput, which represents an integer as an argument
function getDogImage(numInput) {
  if  (numInput > 50) {
      return alert("Please choose a number equal to or less than 50");
  }
  else {
      fetch (`https://dog.ceo/api/breeds/image/random/${numInput}`)
        .then(response => response.json())
        .then(responseJson => console.log(responseJson));
  }
}

function watchUserInput() {
  $("#dog-num-form").submit(e => {
    event.preventDefault();
    let userNumInput = $("#num-dog").val();
    //Pass the number value to getDogImage
    getDogImage(userNumInput);
  });
}

$(function() {
  console.log("App loaded! Waiting for submit!");
  watchUserInput();
});