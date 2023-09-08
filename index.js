const express = require('express')
const exphbs = require('express-handlebars')
const PORT = 3333
//Importar o módulo conn para as operações com o banco

const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

//Middleware para arquivos estáticos
app.use(express.static('public'))

app.get('/', (req, res)=>{
  return res.render('home')
})

app.get('/cadastro', (req, res)=>{
  const sql = `SELECT * FROM books `

  pool.query(sql, (err, date)=>{
    if(err){
      console.log(err)
      return
    }
  })

  const cadastro = date
  console.log(cadastro)
  return res.render('cadastro',  {cadastro})

})


app.get('/cadastro/:id', (req, res)=>{
  const {id} = req.params.id

  const sql = `SELECT * FROM cadastro WHERE ?? = ? `

  pool.query(sql, (err,date)=>{
    if(err){
      console.log(err)
      return
    }

    const atualizar = data[0]
    console.log(atualizar)
    return res.render('atualizar', {atualizar})

  })
  return res.render(atualizar)
})


app.post('/atualizar/', (req, res)=>{
  const {id, name, categoria, descricao, preco} = req.body

  const sql = `UPDATE FROM book SET nome = Harry Potter, cate = 1, WHERE nome = A Bela e a Fera`

  pool.query(sql, (err)=>{
    if(err){
      console.log(err)
      return
    }

    return res.redirect('/cadastro')

  })
})


app.post('/', (req, res)=>{
  const {id} = req.params.id

  const sql = `DELETE book FROM  WHERE id`
  const data = ('id', id) 

  pool.query(sql,data, (err)=>{
    if(err){
      console.log(err)
      return
    }

  return res.redirect('/atualizar', {atualizar})

  }) 
})

app.get('/', (req, res)=>{
  const user = req.params.id

  const sql = `INSERT INTO books (id, nome, categoria, descricao, preco) VALUES `

  const pool = sql.createPool({
    name: 'Harry Potter',
    categoria: 1,
    descricao: 'Eu amo esse curso',
    preco: 20,
  })

  return res.redirect('/cadastro')

})

app.listen(PORT, ()=>{
  console.log(`Servidor rodando na porta ${PORT}`)
})

