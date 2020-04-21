class Pedidos{
    init(conexao){
        console.log("Tabela de Pedidos")
        this.conexao = conexao
        this.criarTabelaPedidos()
    }

    criarTabelaPedidos(){
        const sql = 'CREATE TABLE IF NOT EXISTS pedidos ( id int(11) NOT NULL AUTO_INCREMENT, valor decimal(10,2) NOT NULL,  titulo varchar(20) NOT NULL, dataPedido DATE NOT NULL, descricao text, PRIMARY KEY (id) )'

        this.conexao.query(sql , erro =>{
            if(erro){
                console.log(erro)
            }else{
                console.log('Tabela de pedidos criada com sucesso.')
            }
        })
    }
}

module.exports = new Pedidos()