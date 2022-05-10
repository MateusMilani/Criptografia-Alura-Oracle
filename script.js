const inputTexto = document.querySelector("#input");

const mensagem = document.querySelector("#mensagem");

function btnEcriptar() {
    const textoEncriptado = encriptar(inputTexto.value)
    mensagem.value = textoEncriptado
    mensagem.style.backgroundImage="none"
}


function encriptar(stringEncriptada) {

    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
        return stringEncriptada;
}
function btnDescript() {
    const textoDescripter = descriptar(inputTexto.value)
    mensagem.value = textoDescripter
    mensagem.style.backgroundImage="none"
}

function descriptar(stringDescriptada) {
    let matrizCodigod = [["ai", "a"],["enter", "e"],["imes", "i"],["ober", "o"],["ufat", "u"]];
    stringDescriptada = stringDescriptada.toLowerCase();

    for(let i=0; i < matrizCodigod.length; i++) {
        if(stringDescriptada.includes(matrizCodigod[i][0])) {
            stringDescriptada = stringDescriptada.replaceAll(matrizCodigod[i][0], matrizCodigod[i][1])
        }
    }
        return stringDescriptada;

}
document.getElementById('copResult').addEventListener('click', copResult);
async function clipboardCopy() {
  let text = document.querySelector("#mensagem").value;
  await navigator.clipboard.writeText(text);
  
}
   