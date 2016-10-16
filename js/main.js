var range = document.querySelector('.inputRange');
var field = document.getElementById('num1');

range.addEventListener('input', function (event) {
  field.value = event.target.value;
});
field.addEventListener('input', function (event) {
  range.value = event.target.value;
});