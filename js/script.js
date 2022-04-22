const campoTexto = document.querySelector("#campo-texto")

const campoResultado = document.querySelector("#resposta-texto")

let textoAtual=""

let textoNovo=[]

const btnEncrypt = document.querySelectorAll("button")[0]


/*A função abaixo recebe o valor do primeiro textarea e a armazena na 
variavel "textoAtual" e recebe a string passada pelo usuario em caixa baixa.
Logo após é iniciado um loop de for, onde dentro do mesmo existe um switch
para trocar cada caractere que o usuario escreveu para o codigo encriptado;
após isso, a função formata o texto e passa o texto formatado como valor do
segundo textarea*/

function encriptar(){
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
                }
            }
        let textoArray = textoNovo.toString()
        let textoFormatado = textoArray.replace(/,/g,"")
        if(campoResultado.value==""){
            campoResultado.value=textoFormatado;
        }else{
            textoFormatado=""
            campoResultado.value=textoFormatado
        }
}

btnEncrypt.addEventListener("click",encriptar)