alert("#ABCDEF".match(/#([0-9A-Z]{6})*/g));

var str = "1.5 0 12. 123.4.";
var regexp = str.match(/\d+(\.\d+)*/g);
alert(regexp);

var str = "09:00 21-30 25:61";
var regexp = str.match(/([0-2]\d){1,2}[:-]([0-5]\d){1,2}/g);
alert(regexp);

var cor = "A6";
var regexp = cor.match(/[A-H][0-8]/i);
alert(regexp);


var form = document.getElementById('form');

form.addEventListener('click', function(){

function CheckInput(inputId, messageId, length){
  var input = document.getElementById('phone').value;
  this.id = inputId;
  this.messId = messageId;
  this.text = '';
  this.reg = '';
  this.length = length;
  this.input = document.getElementById(this.id).value;
  this.action = function() {
    if (this.reg.test(this.input) && this.input.length <= this.length) {
      document.getElementById(this.messId).innerHTML = '✓';
      document.getElementById(this.messId).style.color = "green";
  }
    else {
      event.preventDefault();
      document.getElementById(this.messId).innerHTML = this.text;
      document.getElementById(this.messId).style.color = "red";
  }
};

}
var phone = new CheckInput('phone', 'phoneMessage', 16);
phone.text = "неверный номер";
phone.reg = /\+7\(\d{3}\)\d{3}-\d{2}-\d{2}/;
phone.action();

var email = new CheckInput('email', 'eMailMessage', 100);
email.reg = /\w+\@\w+\.\w{2,4}/i;
email.text = 'неверный email';
email.action();

var serial = new CheckInput('serial', 'serialMessage', 4);
serial.reg = /\d{4}/;
serial.text = 'Серия паспорта может состоять только из четырех цифр';
serial.action();

var number = new CheckInput('number', 'numberMessage', 6);
number.reg = /\d{6}/;
number.text = 'Номер паспорта может состоять только из 6 цифр';
number.action();

});

document.getElementById('button').onsubmit = function(){
document.getElementById('succeded').innerHTML = 'Форма отправлена!';
}