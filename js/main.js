const campoTexto = document.querySelector("#campo-texto")

const campoResultado = document.querySelector("#resposta-texto")

let textoAtual=""

let textoNovo=[]

const btnEncrypt = document.querySelectorAll("button")[0]
const btnDcrypt = document.querySelectorAll("button")[1]
const btnCopy = document.querySelector("#copy-btn")

import encriptar from "./encrypt.js";
import {recebeTxtEncriptar, separaEmPares, descriptografar,mostraTextoDesencriptado,resetDesencript} from "./decryptText.js";
import copiarTexto from "./copiaTexto.js";

btnEncrypt.addEventListener("click",encriptar);
btnDcrypt.addEventListener("click", function(func1,func2,func3,func4,func5){
        recebeTxtEncriptar();
        separaEmPares();
        descriptografar();
        mostraTextoDesencriptado();
        resetDesencript();
        
});
btnCopy.addEventListener("click", copiarTexto)