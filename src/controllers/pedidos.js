const Pedidos = require('../models/pedido')

module.exports = app => {

    app.get('/pedidos', (req,res) => {
        console.log("recebendo o body:")
        console.log(req.body)

        Pedidos.lista(res)
    })

    app.post('/pedidos', (req,res) =>{
        console.log("recebendo o body:")
        console.log(req.body)
        const pedido = req.body

        Pedidos.adiciona(pedido,res)
    })

    app.patch('/pedidos/:id', (req, res) => {
        console.log("recebendo o body para atualizacao...")
        console.log(req.body);
        const id = parseInt(req.params.id);
        const valores = req.body;

        Pedidos.altera(id,valores,res);
    })

    app.get('/pedidos/:id', (req,res) => {
        console.log("Get com parametro");        
        const id = parseInt(req.params.id);
        console.log("Id que chegou: "+id)

        Pedidos.buscaPorId(id, res);

    })

    app.delete('/pedidos/:id', (req,res) => {
        const id = parseInt(req.params.id);

        Pedidos.delete(id, res);
    })

}