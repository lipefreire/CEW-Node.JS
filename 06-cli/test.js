const {deepEqual, ok} = require('assert')

const database = require('./database')
const DEFAULT_ITEM_CADASTRAR = { 
    nome: 'Flash',
    poder: 'Speed',
    id: 1
}

describe('Suite de manipulação de Herois', () => {
    it('Deve pesquisar um heroi usando arquivos', async() => {
        const expected = DEFAULT_ITEM_CADASTRAR
        // O RESULTADO ENTRE [] TRÁS A POSIÇÃO 1 DO RESULTADO
        const [resultado] = await database.listar(expected.id)

        deepEqual(resultado, expected)
    })
    // it('Deve cadastrar um heroi, usando arquivos', async () => {
    //     const expected = DEFAULT_ITEM_CADASTRAR
    //     // 
    //     ok(null, expected)
    // })
})