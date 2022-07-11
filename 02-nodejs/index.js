/*
1 - Obter um usuário
2 - Obter o número de telefone de um usuário a partir do seu ID
3 - Obter o endereço do usuário pelo ID
*/

function obterUsuario(callback) {
    setTimeout(function () {
        return callback(null, {
            id: 1,
            nome: 'Felipe',
            dataNascimento: new Date()
        })
    }, 1000) 
}

function obterTelefone(idUsuario, callback) {
    setTimeout(() => {
        return callback( null, {
            telefone: '1199002',
            ddd: 11
        })
    }, 2000)
}

function obterEndereco(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            rua: 'Rui Barbosa',
            numero: 0
        })
    }, 2000)
}

function resolverUsuario(erro, usuario) {
    console.log('usuario', usuario)
}

obterUsuario(function resolverUsuario(error, usuario) {
    // null || "" || 0 == false
    if(error) {
        console.error('DEU RUIM EM USUÁRIO', erro)
        return;
    }
    obterTelefone(usuario.id, function resolverTelefone(error1, telefone) {
        if (error) {
            console.error('DEU RUIM EM TELEFONE', error1)
            return; 
        }
        obterEndereco(usuario.id, function resolverEndereco(error2, endereco) {
            if (error) {
                console.error('DEU RUIM EM ENDEREÇO', error2)
                return;
            }

            console.log(`
             Nome: ${usuario.nome},
             Endereco: ${endereco.rua}, ${endereco.numero}
             Telefone: (${telefone.ddd})${telefone.telefone}
            `)
        })
    })
})
// const telefone = obterTelefone(usuario.id)

// console.log('telefone', telefone)