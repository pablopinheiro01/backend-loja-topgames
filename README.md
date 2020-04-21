# backend-loja-topgames
Serviço backend em node.js para a loja de games top games.

Este serviço utiliza node na versão v10.16.3

A ideia é apenas para exemplo de consumo de uma base de dados no caso mysql.

Alguns comandos importantes para você:

// remove o repositorio remoto da origin
git remote rm origin

//associar corretamente o repositorio
git remote add origin git@github.com:{username}/{reponame}.git

//mostra o repositorio associado
git remote -v 

#flow para comitar
git add *
git commit -m "mensagem aqui dentro"
git push 

A base de dados que estou utilizando:

mysql> desc pedidos
    -> ;
+------------+---------------+------+-----+---------+----------------+
| Field      | Type          | Null | Key | Default | Extra          |
+------------+---------------+------+-----+---------+----------------+
| id         | int(11)       | NO   | PRI | NULL    | auto_increment |
| valor      | decimal(10,2) | NO   |     | NULL    |                |
| titulo     | varchar(20)   | NO   |     | NULL    |                |
| dataPedido | date          | NO   |     | NULL    |                |
| descricao  | text          | YES  |     | NULL    |                |
+------------+---------------+------+-----+---------+----------------+
5 rows in set (0.03 sec)

CREATE DATABASE lojatopgames;

CREATE TABLE pedidos ( id int(11) NOT NULL AUTO_INCREMENT, valor decimal(10,2) NOT NULL,  titulo varchar(20) NOT NULL, dataPedido DATE NOT NULL, descricao text, PRIMARY KEY (id) );
