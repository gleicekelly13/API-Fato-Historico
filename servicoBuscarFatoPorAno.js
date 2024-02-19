const {fatosHistoricos} = require('./fatos');

function buscarFatoPorAno(ano) {  //A função aceita um parâmetro chamado `ano`
    /*for(let i = 0; i < fatosHistoricos.length; i++){
        if(fatosHistoricos[i].Ano === ano ) {

            return fatosHistoricos[i].Fato;
        }

    }

    return `Nenhum fato encontrado para o ano ${ano}.`;
    */

    let fatoEncontrado = fatosHistoricos.find(fato => {  //*
        return fato.Ano == ano;
    });

    return fatoEncontrado.Fato;  //Retorna a propriedade `Fato` do objeto encontrado
}

function validaAno(ano) {
    if(isNaN(ano)) {  //O parâmetro ano só será validado se o ano for numérico...
        return false;  //... se não for numérico retornará false
    }
    else {
    
        if(ano >= 1920 && ano <= 2020) {  /* ...Apenas se o ano for numérico, o fato histórico da coleção de dados 
                                            correspondente ao ano deve ser retornado*/
            return true;
        } else {
            return false
        }
    }
}

exports.buscarFatoPorAno = buscarFatoPorAno;
exports.validaAno = validaAno;

/*
* Utiliza o método find() para procurar um elemento no array `fatosHistoricos`. 
O método find() recebe uma função de callback que será executada para cada elemento no array. 
A função de callback compara a propriedade `Ano` de cada elemento com o valor passado como argumento (`ano`). 
Se encontrar um elemento cuja propriedade `Ano` seja igual ao valor fornecido, esse elemento é atribuído à variável `fatoEncontrado`. 

Resumindo, essa função procura por um objeto no array fatosHistoricos onde a propriedade Ano 
seja igual ao ano fornecido como argumento e retorna a propriedade Fato desse objeto.
*/
