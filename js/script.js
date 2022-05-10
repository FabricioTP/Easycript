const campoTexto = document.querySelector("#campo-texto")

const campoResultado = document.querySelector("#resposta-texto")

let textoAtual=""

let textoNovo=[]

const btnEncrypt = document.querySelectorAll("button")[0]
const btnDcrypt = document.querySelectorAll("button")[1]


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
        campoResultado.value==""
            campoResultado.value=textoFormatado;
            textoNovo=[];
}
/*
A função desencriptar funciona com 3 variaveis pré definidas.

ArrayEnc= array vazio que receberá o valor do textarea "campoResultado";
textoEncriptado= array vazio que receberá o par de caracteres já encriptado;
indiceAtual= valor numerico de 0 representando o indice que será modificado dinamicamente

então partimos para a função propriamente dita, onde a variavel textoAtual recebe
o valor da textArea, para que possamos usar o método split e a variavel arrayEnc á receber

com arrayEnc já possuindo os caracteres em forma de array, no seu indice 0, ele recebe
ele mesmo e o indice 1, logo após essa junção é passada para a variavel textoEncriptado

entao é usado o metodo splice para que seja retirado de arrayEnc o indice 0 e 1
*/
let arrayEnc = [];
let textoEncriptado=[];
let indiceAtual = 0;

function recebeTxtEncriptar(){
        textoAtual = campoResultado.value;
        arrayEnc = textoAtual.split("")
        let numPares= arrayEnc.length;
}
function separaEmPares(){
        for(let i=0; i < numPares; i++){
               if (arrayEnc[0] !== undefined) {
                        textoEncriptado[indiceAtual] = arrayEnc[0];
                        textoEncriptado[indiceAtual] += arrayEnc[1];
                        arrayEnc.shift();
                        arrayEnc.shift();
                        indiceAtual++;
                        }
        }
}
function descriptografar(){
        for(let i= 0; i < arrayEnc.length; i++){
                switch(true){
                case arrayEnc[i] == "Za":
                        arrayEnc[i]=("a")
                        break;
                case arrayEnc[i] == "Yb":
                        arrayEnc[i]=("b")
                        break;
                case arrayEnc[i] == "Xc":
                        arrayEnc[i]=("c")
                        break;
                case arrayEnc[i] == "Wd":
                        arrayEnc[i]=("d")
                        break;
                case arrayEnc[i] == "Ve":
                        arrayEnc[i]=("e")
                        break;
                case arrayEnc[i] == "Uf":
                        arrayEnc[i]=("f")
                        break;
                case arrayEnc[i] == "Tg":
                        arrayEnc[i]=("g")
                        break;
                case arrayEnc[i] == "Sh":
                        arrayEnc[i]=("h")
                        break;
                case arrayEnc[i] == "Ri":
                        arrayEnc[i]=("i")
                        break;
                case arrayEnc[i] == "Qj":
                        arrayEnc[i]=("j")
                        break;
                case arrayEnc[i] == "Pk":
                        arrayEnc[i]=("k")
                        break;
                case arrayEnc[i] == "Ol":
                        arrayEnc[i]=("l")
                        break;
                case arrayEnc[i] == "Nm":
                        arrayEnc[i]=("m")
                        break;
                case arrayEnc[i] == "Mn":
                        arrayEnc[i]=("n")
                        break;
                case arrayEnc[i] == "Lo":
                        arrayEnc[i]=("o")
                        break;
                case arrayEnc[i] == "Kp":
                        arrayEnc[i]=("p")
                        break;
                case arrayEnc[i] == "Jq":
                        arrayEnc[i]=("q")
                        break;
                case arrayEnc[i] == "Ir":
                        arrayEnc[i]=("r")
                        break;
                case arrayEnc[i] == "Hs":
                        arrayEnc[i]=("s")
                        break;
                case arrayEnc[i] == "Gt":
                        arrayEnc[i]=("t")
                        break;
                case arrayEnc[i] == "Fu":
                        arrayEnc[i]=("u")
                        break;
                case arrayEnc[i] == "Ev":
                        arrayEnc[i]=("v")
                        break;
                case arrayEnc[i] == "Dw":
                        arrayEnc[i]=("w")
                        break;
                case arrayEnc[i] == "Cx":
                        arrayEnc[i]=("x")
                        break;
                case arrayEnc[i] == "By":
                        arrayEnc[i]=("y")
                        break;
                case arrayEnc[i] == "Az":
                        arrayEnc[i]=("z")
                        break;
                }
        }
}
function mostraTextoDesencriptado(){
        let txtDesencriptado = arrayEnc.toString();
        txtDesencriptado=txtDesencriptado.replace(/,/g,"")
        campoResultado.value= txtDesencriptado;
}
btnEncrypt.addEventListener("click",encriptar);
btnDcrypt.addEventListener("click", function(func1,func2,func3,func4){
        recebeTxtEncriptar();
        separaEmPares();
        descriptografar();
        mostraTextoDesencriptado();
        console.log(numPares);
});