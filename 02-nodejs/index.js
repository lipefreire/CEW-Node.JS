/*
1 - Obter um usuário
2 - Obter o número de telefone de um usuário a partir do seu ID
3 - Obter o endereço do usuário pelo ID
*/
// Importamos o módulo interno do node.js
const util = require('util')
const obterEnderecoAsync = util.promisify(obterEndereco)


function obterUsuario() {
    //Quando algum problema acontecer -> reject(ERRO)
    //Quando sucess -> RESOLVE
    return new Promise(function resolvePromise(resolve, reject) {
        setTimeout(function () {
            // return reject(new Error('DEU RUIM DE VERDADE!'))

            return resolve({
                id: 1,
                nome: 'Felipe',
                dataNascimento: new Date()
            })
        }, 1000) 
    })
}

function obterTelefone(idUsuario) {
    return new Promise(function resolverPromise(resolve, reject) {
        setTimeout(() => {
            return resolve({
                telefone: '1199002',
                ddd: 11
            })
        }, 2000)
    })
}

function obterEndereco(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            rua: 'Rui Barbosa',
            numero: 0
        })
    }, 2000)
}

//1º passo - adicionar a palavra async -> automaticamente ela retornará uma promise
main()
async function main() {
    try {
        console.time('medida-promise')
        const usuario = await obterUsuario()
        // const telefone = await obterTelefone(usuario.id)
        //const endereco = await obterEnderecoAsync(usuario.id)
        const resultado = await Promise.all([
            obterTelefone(usuario.id), 
            obterEnderecoAsync(usuario.id)
        ])
        const endereco = resultado[1]
        const telefone = resultado[0]

        console.log(`
            Nome: ${usuario.nome}
            Telefone: (${telefone.ddd}) ${telefone.telefone}
            Endereco: ${endereco.rua} Nº ${endereco.numero}
        `)
        console.timeEnd('medida-promise')
    }
    catch(error) {
        console.error('DEU RUIM', error)
    }
}

// const usuarioPromise = obterUsuario()
// // Para manipular o sucesso, usamos a função .then
// // Para manipular erros, usamos o .catch
// // usuario -> telefone -> telefone
// usuarioPromise
//     .then(function (usuario) {
//         return obterTelefone(usuario.id)
//             .then(function resolverTelefone(result) {
//                 return {
//                     usuario: {
//                         nome: usuario.nome,
//                         id: usuario.id
//                     },
//                     telefone: result
//                 }
//             })
//     })

//     .then(function (resultado) {
//         const endereco = obterEnderecoAsync(resultado.usuario.id)
//         return endereco.then(function resolverEndereco(result) {
//             return {
//                 usuario: resultado.usuario,
//                 telefone: resultado.telefone,
//                 endereco: result
//             }
//         })
//     })

//     .then(function (resultado) {
//         console.log(`
//             Nome: ${resultado.usuario.nome}
//             Endereco: ${resultado.endereco.rua}, Nº ${resultado.endereco.numero}
//             Telefone: (${resultado.telefone.ddd}) ${resultado.telefone.telefone}
//         `)
//     })

//     .catch(function (error) {
//         console.error('DEU RUIM', error)
//     })

// obterUsuario(function resolverUsuario(error, usuario) {
//     // null || "" || 0 == false
//     if(error) {
//         console.error('DEU RUIM EM USUÁRIO', erro)
//         return;
//     }
//     obterTelefone(usuario.id, function resolverTelefone(error1, telefone) {
//         if (error) {
//             console.error('DEU RUIM EM TELEFONE', error1)
//             return; 
//         }
//         obterEndereco(usuario.id, function resolverEndereco(error2, endereco) {
//             if (error) {
//                 console.error('DEU RUIM EM ENDEREÇO', error2)
//                 return;
//             }

//             console.log(`
//              Nome: ${usuario.nome},
//              Endereco: ${endereco.rua}, ${endereco.numero}
//              Telefone: (${telefone.ddd})${telefone.telefone}
//             `)
//         })
//     })
// })
// const telefone = obterTelefone(usuario.id)

// console.log('telefone', telefone)