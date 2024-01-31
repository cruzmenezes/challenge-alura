

let textInput = document.querySelector("#input-msn");
let outInput = document.querySelector("#container-output");

function criptografar() {
    let texto = textInput.value;

    let resultcripto = texto.replace(/e/g, "mudar").replace(/i/g, "ificar").replace(/a/g, "aihihi").replace(/o/g, "oparaopar").replace(/u/g, "ufatufaufafa");

    document.getElementById('container-output').innerHTML = '<p>' + resultcripto + '</p><button class="ntn-copiar" id="copiar" onclick="copiar()">copiar</button>';
}

function descriptografar() {
    let texto = textInput.value;

    let resultdescripto = texto.replace(/mudar/g, "e").replace(/ificar/g, "i").replace(/ihihi/g, "a").replace(/oparaopar/g, "o").replace(/ufatufaufafa/g, "u");

    document.getElementById('container-output').innerHTML = '<p>' + resultdescripto + '</p><button class="ntn-copiar" id="copiar" onclick="copiar()">copiar</button>';
}

function copiar() {
    let textoCop = document.getElementById('input-msn');

    textoCop.select();
    document.execCommand('copy');
    alert('Texto Copiado.');
}
