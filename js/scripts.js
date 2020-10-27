$(document).ready(function(){
  $('#form').submit(function(event) {
  event.preventDefault();

  const userNumber1 = parseInt($('#countTo').val());
  const userNumber2 = parseInt($('#countBy').val());

for (let i = userNumber2; i <= userNumber1; i += userNumber2) {
  alert(i);
  $('#list').append(`<li>${i}</li>`);
}
  });
});