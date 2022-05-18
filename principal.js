//Entidades gerais

const textoDigitado = document.getElementById("text-area-esquerdo");
const mostraTexto= document.getElementById("text-area-direto");
var arrayVerificacao = [["a","ai"],["e","enter"],["i","imes"],["o","ober"],["u","ufat"]];
var sumiuImagem = document.getElementById("imagem");
var sumiuTexto = document.getElementById("pDireito");
var btCopiar = document.getElementById("copiar");


//Ação ligada aos botões

var btnCriptografar = document.getElementById("btcriptografar");
btnCriptografar.addEventListener("click", encriptar);

var btnDescriptografar = document.getElementById("btdescriptografar");
btnDescriptografar.addEventListener("click", descriptografar);

btCopiar.addEventListener("click", copiarConteudo);

function copiarConteudo(){
    mostraTexto.select();
    document.execCommand('copy')
};

//Função de encriptar

function encriptar(){

    var textoRecebido = textoDigitado.value;
    var arrayTexto = textoRecebido.split([],textoRecebido.length);
    
        for (var i = 0; i < arrayTexto.length; i++){

            for (var x = 0; x < arrayVerificacao.length; x++){

                if (arrayTexto[i] == arrayVerificacao[x][0]){
                    arrayTexto[i] = arrayVerificacao[x][1]
                };
            };
        };

        if (arrayTexto != 0){
            mostraTexto.value = arrayTexto.join(""); 
            sumiuImagem.classList.replace("imagem", "imagemSumiu");
            sumiuTexto.classList.replace("p", "pSumiu");
            mostraTexto.classList.replace("text-area-direto", "text-area-direto2");
            btCopiar.classList.replace("copiar", "copiar2")

        }else{
            sumiuImagem.classList.replace( "imagemSumiu","imagem");
            sumiuTexto.classList.replace("pSumiu", "p");
            mostraTexto.classList.replace("text-area-direto2", "text-area-direto");
            mostraTexto.value = "";
            btCopiar.classList.replace("copiar2", "copiar")

        };
   

};

//Função de descriptografar

function descriptografar(){
    
    var textoRecebido = textoDigitado.value;


        for (var i = 0; i < arrayVerificacao.length; i++){

                if (textoRecebido.includes(arrayVerificacao[i][1])){

                    textoRecebido = textoRecebido.replaceAll(arrayVerificacao[i][1], arrayVerificacao[i][0]);
                };
            mostraTexto.value = textoRecebido; 
        };

        if (textoRecebido != 0){
            sumiuImagem.classList.replace("imagem", "imagemSumiu");
            sumiuTexto.classList.replace("p", "pSumiu");
            mostraTexto.classList.replace("text-area-direto", "text-area-direto2");
            btCopiar.classList.replace("copiar", "copiar2")

        }else{
            sumiuImagem.classList.replace( "imagemSumiu","imagem");
            sumiuTexto.classList.replace("pSumiu", "p");
            mostraTexto.classList.replace("text-area-direto2", "text-area-direto");
            mostraTexto.value = "";
            btCopiar.classList.replace("copiar2", "copiar")

        };
        
    };
