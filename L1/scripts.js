var board = document.getElementById('board');
var chars = "ABCDEFGH";
function creatBoard(chess) {
for (var i = 0; i < n; i++){ 
		for (var j = 0; j < n; j++){
        var div = document.createElement("div");
        board.appendChild(div);
        //Нумерация столбцов
           if (j == 0 && i <= 8){
               div.innerHTML = 8 - i;
           continue;
        }
        //Подпись букв
        if (i == 8 && j > 0) {
             div.innerHTML = chars[j - 1];
        continue;
        } 
        div.id = chars[j - 1] + (8 - i);        
        if ((i + j) % 2 == 0){
        		div.className='black';
        } else {
        		div.className='white';
        }
    }
  }
}
var n = 9;
var board = new creatBoard("шахматная доска");