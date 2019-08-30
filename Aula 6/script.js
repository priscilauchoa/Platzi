var canvas = document.getElementById("meu-canvas");
var papel = canvas.getContext("2d");

var x = 50;
var y = 50;

var botao = document.getElementById("botao");
botao.addEventListener("click", desenhaLinhaVermelha);


function desenhaLinhaVermelha(){
    desenha("red", x, y, 200, 200);
}

desenha("green", x+150, y, 200, 200)

function desenha(cor, xInicial, yInicial, xFinal, yFinal){
    papel.beginPath();
    papel.strokeStyle = cor;
    papel.lineWidht = 3;
    papel.moveTo(xInicial, yInicial);
    papel.lineTo(xFinal, yFinal);
    papel.stroke();
    papel.closePath();
}


