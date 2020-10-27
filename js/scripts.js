function checkNumbers(numberTo, numberBy) {
  if (numberBy > numberTo || numberTo < 0 || numberBy < 0) {
    return false;
  }
  else {
    return true;
  }
}

$(document).ready(function(){
  $('#form').submit(function(event) {
  event.preventDefault();

  const userNumber1 = parseInt($('#countTo').val());
  const userNumber2 = parseInt($('#countBy').val());

  if (checkNumbers(userNumber1, userNumber2)) {
    for (let i = userNumber2; i <= userNumber1; i += userNumber2) {
      $('#list').append(`<li>${i}</li>`);
    }
  }
  else {
    alert("Your number(s) are either negative or in the wrong order. Try again");
  }

  });
});