const moment = require('moment')
const conexao = require('../infraestrutura/conexao')

class Pedido{

    adiciona(pedido, res){

        const dataAtual = moment().format('YYYY-MM-DD HH:MM:SS')
        const dataPedido = moment(pedido.dataPedido, 'DD-MM-YYYY').format('YYYY-MM-DD HH:MM:SS')
                
        console.log("Data Atual: "+dataAtual)

        console.log("Data pedido: "+dataPedido)

        const dataEhValida = moment(dataPedido).isSameOrAfter(dataAtual)
        const tituloEhvalido = pedido.titulo.length >= 4;
        console.log("Data valida: "+dataEhValida)
        console.log("Titulo valido: "+tituloEhvalido)
        const validacoes = [
            {
                nome: 'data',
                valido: dataEhValida,
                mensagem: 'Data deve ser maior ou igual a data atual'
            },
            {
                nome:'titulo',
                valido: tituloEhvalido,
                mensagem: 'Necessario preencher o titulo'

            }
        ]

        const erros = validacoes.filter( campo => !campo.valido)
        const existemErros = erros.length
        console.log("Existe erros? "+existemErros)
        if(existemErros != 0){
            res.status(400).json(erros)
        }else{
            console.log("Entrou no sucesso para processar tudo!!!")
            const pedidoDatado = {...pedido, dataPedido }

            console.log("objeto Pedido datado: ")
            console.log(pedidoDatado)

            const sql = 'INSERT INTO pedidos SET ?'

            conexao.query(sql, pedidoDatado, (erro, result) => {

                if(erro){
                    console.log(erro)
                }else{
                    console.log("Gravando...")
                    console.log(result)
                    res.status(201).json({pedido})
                }
                
            })
            
        }
    }
        
    lista(res){
        const sql = ' SELECT * FROM pedidos'

        conexao.query(sql, (erro, resultados) => {
            if(erro){
                console.log("Exception call to Get")
                res.status(400).json(erro)
            }else{
                console.log("Chamando a lista de pedidos...")
                console.log(resultados)
                res.status(200).json(resultados)
            }
        })

    }

    buscaPorId(id, res){
        console.log("O id que chegou: "+id)
        const sql = `SELECT * FROM pedidos WHERE id = ${id}`

        conexao.query(sql, (erro, result) =>{
            if(erro){
                res.status(400).json(erro);
            }else{
                res.status(200).json(result)
            }
        });

    }

    altera(id, pedido, res){
        const sql = 'update pedidos SET ? WHERE id = ?'

        if(pedido.dataPedido){
            pedido.dataPedido = moment(pedido.dataPedido, 'DD-MM-YYYY').format('YYYY-MM-DD HH:MM:SS')
        }

        conexao.query(sql, [pedido, id], (erro, result ) =>{
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json({...pedido, id})
            }
        })

    }
        
    delete(id, res){
     const sql = 'DELETE FROM pedidos WHERE id = ?';

        conexao.query(sql, id, (erro, result) => {

            if(erro){
                res.status(400).json(erro);
            }else{
                console.log(result)
                res.status(200).json({id})
            }

        });

    }


}

module.exports = new Pedido()