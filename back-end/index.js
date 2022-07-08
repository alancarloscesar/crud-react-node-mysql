const express = require('express')
const mysql = require('mysql')
const cors = require('cors');

const server = express();

//configurando para ser usado 
server.use(cors())
server.use(express.json())

const db = mysql.createPool({//configuração do banco de dados
    host: 'localhost',
    user: 'root',
    password: '',//password
    database: 'gamethugs'
})

server.post('/register',(req, res)=>{
    const {game} = req.body
    const {price} = req.body
    const {category} = req.body

    let SQL = "insert into games (game, price, category) values (?,?,?)"

    db.query(SQL,[game, price, category] ,(error, result)=>{
        console.log(error)
    })
})

server.get('/getDataBD', (req, res)=>{
    let SQL = "select * from games";

    db.query(SQL, (error, result)=>{
        if(error){
            console.log('Errinho ao buscar',error)
            return;
        }else{
            res.send(result)
            return;
        }
    })
})

server.listen(3001, () => {
    console.log('Rodando o servidor na porta 3001')
})