const campoResultado = document.querySelector("#resposta-texto")

export default function copiarTexto(){
    navigator.clipboard.writeText(campoResultado.value)
    alert("Texto copiado para área de transferência!");
}