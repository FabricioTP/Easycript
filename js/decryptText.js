export {recebeTxtEncriptar, separaEmPares, descriptografar,mostraTextoDesencriptado,resetDesencript}

const campoTexto = document.querySelector("#campo-texto")
const campoResultado = document.querySelector("#resposta-texto")
let textoAtual=""
let textoNovo=[]
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
                    textoEncriptado="Não foi possivel realizar a descriptografia: Caractere invalido.";
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