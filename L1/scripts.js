var boardElement = document.getElementById('board');
var char = "ABCDEFGH";
function ChessBoard(element) {
  this.element = element;
  for (var i = 0; i < 9; i++) { 
		for (var j = 0; j < 9; j++) {
      var div = document.createElement('div');
      div.className = 'red';
      boardElement.appendChild(div);
  if ((i + j) % 2 == 0){
  if (i < 8 && j > 0){
    div.className = 'black';
  }
  }
  else {
  if (j > 0 && i < 8){
    div.className = 'white';
  }
  }
  if (i <8 && j == 0){
  div.innerHTML = 8 - i;
  continue;
  }
  if (i ==8 && j > 0){
  div.innerHTML = char [j - 1];
  continue;
  }
  div.id = char [j - 1] + (8 - i); //для проставления фигур по id
  div.addEventListener('click', pasteElement);
 
}
}
}
var board = new ChessBoard(boardElement);

function pasteElement(){
console.log(this);
switch (this){
case A1:
this.innerHTML = '\u2656';
break;
case B1:
this.innerHTML = '\u2657';
break;
case C1:
this.innerHTML = '\u2658';
break;
case D1:
this.innerHTML = '\u2655';
break;
case E1:
this.innerHTML = '\u2654';
break;
case F1:
this.innerHTML = '\u2657';
break;
case G1:
this.innerHTML = '\u2658';
break;
case H1:
this.innerHTML = '\u2656';
break;
case A2:
this.innerHTML = '\u2659';
break;
case B2:
this.innerHTML = '\u2659';
break;
case C2:
this.innerHTML = '\u2659';
break;
case D2:
this.innerHTML = '\u2659';
break;
case E2:
this.innerHTML = '\u2659';
break;
case F2:
this.innerHTML = '\u2659';
break;
case G2:
this.innerHTML = '\u2659';
break;
case H2:
this.innerHTML = '\u2659';
break;case A8:
this.innerHTML = '\u265C';
break;
case B8:
this.innerHTML = '\u265E';
break;
case C8:
this.innerHTML = '\u265D';
break;
case D8:
this.innerHTML = '\u265B';
break;
case E8:
this.innerHTML = '\u265A';
break;
case F8:
this.innerHTML = '\u265D';
break;
case G8:
this.innerHTML = '\u265E';
break;
case H8:
this.innerHTML = '\u265C';
break;
case A7:
this.innerHTML = '\u265F';
break;
case B7:
this.innerHTML = '\u265F';
break;
case C7:
this.innerHTML = '\u265F';
break;
case D7:
this.innerHTML = '\u265F';
break;
case E7:
this.innerHTML = '\u265F';
break;
case F7:
this.innerHTML = '\u265F';
break;
case G7:
this.innerHTML = '\u265F';
break;
case H7:
this.innerHTML = '\u265F';
break;
}
}