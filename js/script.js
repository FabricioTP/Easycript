const campoTexto = document.querySelector("#campo-texto")

const campoResultado = document.querySelector("#resposta-texto")

let textoAtual=""

let textoNovo=[]

const btnEncrypt = document.querySelectorAll("button")[0]
const btnDcrypt = document.querySelectorAll("button")[1]


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
                case textoAtual[i] == " ":
                        textoNovo.push("OO")
                        break;
                default:
                        textoNovo="Não foi possivel realizar criptografia: caracter invalido."
                }
            }
        let textoArray = textoNovo.toString()
        let textoFormatado = textoArray.replace(/,/g,"")
        campoResultado.value==""
            campoResultado.value=textoFormatado;
            textoNovo=[];
}
//============================================================================



let arrayEnc = [];
let textoEncriptado=[];
let indiceAtual = 0;


function recebeTxtEncriptar(){
        textoAtual = campoResultado.value;
        arrayEnc = textoAtual.split("")
}
function separaEmPares(){
        let numPares= arrayEnc.length/2;
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
        for(let i= 0; i < textoEncriptado.length; i++){
                switch(true){
                case textoEncriptado[i] == "Za":
                        textoEncriptado[i]=("a")
                        break;
                case textoEncriptado[i] == "Yb":
                        textoEncriptado[i]=("b")
                        break;
                case textoEncriptado[i] == "Xc":
                        textoEncriptado[i]=("c")
                        break;
                case textoEncriptado[i] == "Wd":
                        textoEncriptado[i]=("d")
                        break;
                case textoEncriptado[i] == "Ve":
                        textoEncriptado[i]=("e")
                        break;
                case textoEncriptado[i] == "Uf":
                        textoEncriptado[i]=("f")
                        break;
                case textoEncriptado[i] == "Tg":
                        textoEncriptado[i]=("g")
                        break;
                case textoEncriptado[i] == "Sh":
                        textoEncriptado[i]=("h")
                        break;
                case textoEncriptado[i] == "Ri":
                        textoEncriptado[i]=("i")
                        break;
                case textoEncriptado[i] == "Qj":
                        textoEncriptado[i]=("j")
                        break;
                case textoEncriptado[i] == "Pk":
                        textoEncriptado[i]=("k")
                        break;
                case textoEncriptado[i] == "Ol":
                        textoEncriptado[i]=("l")
                        break;
                case textoEncriptado[i] == "Nm":
                        textoEncriptado[i]=("m")
                        break;
                case textoEncriptado[i] == "Mn":
                        textoEncriptado[i]=("n")
                        break;
                case textoEncriptado[i] == "Lo":
                        textoEncriptado[i]=("o")
                        break;
                case textoEncriptado[i] == "Kp":
                        textoEncriptado[i]=("p")
                        break;
                case textoEncriptado[i] == "Jq":
                        textoEncriptado[i]=("q")
                        break;
                case textoEncriptado[i] == "Ir":
                        textoEncriptado[i]=("r")
                        break;
                case textoEncriptado[i] == "Hs":
                        textoEncriptado[i]=("s")
                        break;
                case textoEncriptado[i] == "Gt":
                        textoEncriptado[i]=("t")
                        break;
                case textoEncriptado[i] == "Fu":
                        textoEncriptado[i]=("u")
                        break;
                case textoEncriptado[i] == "Ev":
                        textoEncriptado[i]=("v")
                        break;
                case textoEncriptado[i] == "Dw":
                        textoEncriptado[i]=("w")
                        break;
                case textoEncriptado[i] == "Cx":
                        textoEncriptado[i]=("x")
                        break;
                case textoEncriptado[i] == "By":
                        textoEncriptado[i]=("y")
                        break;
                case textoEncriptado[i] == "Az":
                        textoEncriptado[i]=("z")
                        break;
                case textoEncriptado[i] == "OO":
                        textoEncriptado[i]=(" ")
                         break;
                default:
                        textoEncriptado="-Caracter invalido-";
                }
        }
}
function mostraTextoDesencriptado(){
        let txtDesencriptado = textoEncriptado.toString();
        txtDesencriptado=txtDesencriptado.replace(/,/g,"")
        campoResultado.value= txtDesencriptado.charAt(0).toUpperCase()+txtDesencriptado.slice(1);
}
function resetDesencript(){
        if(campoResultado.value!==""){
                arrayEnc=[];
                textoEncriptado=[];
                indiceAtual=0
        }
}
btnEncrypt.addEventListener("click",encriptar);
btnDcrypt.addEventListener("click", function(func1,func2,func3,func4,func5){
        recebeTxtEncriptar();
        separaEmPares();
        descriptografar();
        mostraTextoDesencriptado();
        resetDesencript();
        
});