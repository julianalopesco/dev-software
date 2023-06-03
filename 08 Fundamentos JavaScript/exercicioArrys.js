
var matriz = [];


for (var i = 0; i < 4; i++) {
    matriz[i] = [];

    for (var j = 0; j < 5; j++) {
        var numero = (i + 2) * (j + 1);
        matriz[i][j] = numero;
    }
    }


    for (var i = 0; i < 4; i++) {
    var linha = "";
    for (var j = 0; j < 5; j++) {
        linha += matriz[i][j] + " ";
    }
    console.log(linha);
    }

