var condição = false;

function mudarCor() {
    //alert("Entrei");
    if (condição == false) {
        document.getElementById("botao").style.backgroundColor = 'cadetblue';
        condição = !condição;
    } else {
        document.getElementById("botao").style.backgroundColor = 'darkslategrey';
        condição = !condição;
    }
}