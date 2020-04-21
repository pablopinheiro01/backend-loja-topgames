const customExpress = require('./src/config/customExpress')
const con = require('./src/infraestrutura/conexao')
const TabelaPedido = require('./src/infraestrutura/tabelas/pedidos')


con.connect((erro) => {

    if(erro){
        console.log('Problema para conectar')
        console.log(erro)
    }else{
        console.log('connection success...')
        TabelaPedido.init(con)
        const app = customExpress()
        app.listen(3000, () => console.log('Servidor rodando na porta 3000'))
    }
    
})
