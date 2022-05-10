const campoResultado = document.querySelector("#resposta-texto")

export default function copiarTexto(){
    navigator.clipboard.writeText(campoResultado.value)
    alert("texto copiado para área de transferência!");
}