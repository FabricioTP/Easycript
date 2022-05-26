const campoTexto = document.querySelector("#campo-texto")

const campoResultado = document.querySelector("#resposta-texto")

let textoAtual=""

let textoNovo=[]



export default function encriptar(){
    textoAtual = campoTexto.value
    textoAtual = textoAtual.toLowerCase()
        for(let i = 0; i < textoAtual.length; i++){
            switch(true){
                case textoAtual[i] == "a":
                    textoNovo.push("Za")
                    break;
                case textoAtual[i] == "b":
                        textoNovo.push("Yb")
                        break;
                case textoAtual[i] == "c":
                        textoNovo.push("Xc")
                        break;
                case textoAtual[i] == "d":
                        textoNovo.push("Wd")
                        break;
                case textoAtual[i] == "e":
                        textoNovo.push("Ve")
                        break;
                case textoAtual[i] == "f":
                        textoNovo.push("Uf")
                        break;
                case textoAtual[i] == "g":
                    textoNovo.push("Tg")
                    break;
                case textoAtual[i] == "h":
                        textoNovo.push("Sh")
                        break;
                case textoAtual[i] == "i":
                        textoNovo.push("Ri")
                        break;
                case textoAtual[i] == "j":
                        textoNovo.push("Qj")
                        break;
                case textoAtual[i] == "k":
                        textoNovo.push("Pk")
                        break;
                case textoAtual[i] == "l":
                        textoNovo.push("Ol")
                        break;
                case textoAtual[i] == "m":
                    textoNovo.push("Nm")
                    break;
                case textoAtual[i] == "n":
                        textoNovo.push("Mn")
                        break;
                case textoAtual[i] == "o":
                        textoNovo.push("Lo")
                        break;
                case textoAtual[i] == "p":
                        textoNovo.push("Kp")
                        break;
                case textoAtual[i] == "q":
                        textoNovo.push("Jq")
                        break;
                case textoAtual[i] == "r":
                        textoNovo.push("Ir")
                        break;
                case textoAtual[i] == "s":
                    textoNovo.push("Hs")
                    break;
                case textoAtual[i] == "t":
                        textoNovo.push("Gt")
                        break;
                case textoAtual[i] == "u":
                        textoNovo.push("Fu")
                        break;
                case textoAtual[i] == "v":
                        textoNovo.push("Ev")
                        break;
                case textoAtual[i] == "w":
                        textoNovo.push("Dw")
                        break;
                case textoAtual[i] == "x":
                        textoNovo.push("Cx")
                        break;
                case textoAtual[i] == "y":
                        textoNovo.push("By")
                        break;
                case textoAtual[i] == "z":
                        textoNovo.push("Az")
                        break;
                case textoAtual[i] == " ":
                        textoNovo.push("OO")
                        break;
                default:
                        textoNovo="Não foi possivel realizar a criptografia: Caractere invalido."
                }
            }
        let textoArray = textoNovo.toString()
        let textoFormatado = textoArray.replace(/,/g,"")
        campoResultado.value==""
            campoResultado.value=textoFormatado;
            textoNovo=[];
}