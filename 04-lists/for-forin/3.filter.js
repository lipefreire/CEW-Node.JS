const { obterPessoas } = require('./service')

/*

 const item = {
     nome: 'Erick',
     idade: 12

}

const { nome, idade } = item
console.log(nome, idade)

*/
Array.prototype.meuFilter = function (callback) {
    const lista = []
    for(item in this) {
        const item = this[index]
        const result = callback(item, index, this)
        // 0, "", null ou undefined === false
        if(!result) continue;
        lista.push(item)
    }
    return lista;
}

async function main() {
    try {
        const { results } = await obterPessoas(`a`)

        // const familiaLars = results.filter(function(item) {
        //                 // POR PADRÃO PRECISA RETORNAR UM BOOLEANO
        //                 //PARA INFORMAR SE DEVE MANTER OU REMOVER DA LISTA
        //                 // false > remove da lista
        //                 // true > mantem na lista
        //                 // Não encontrou = -1
        //                 // Se encontrou = posicaoNoArray
        //     const result = item.name.toLowerCase().indexOf(`lars`) !== -1
        //     return result
        // })
        const familiaLars = results.meuFilter((item, index, lista) => {
            console.log(`index: ${index}`, lista.length)
            return item.name.toLowerCase().indexOf('lars') !== -1
        })
        const names = familiaLars.map((pessoa) => pessoa.name)
        console.log(names)
    }
    catch(error) {
        console.error('DEU RUIM', error)
    }
}

main()