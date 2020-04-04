function mudaFoto(foto) {
    document.getElementById("icone").src = foto;
}

function calc_total() {
    var qnt = parseInt(document.getElementById("qntdId").value);
    tot = qnt * 1500    /* 1500 é o valor de cada GGlass */
    document.getElementById("totalId").value = tot
}