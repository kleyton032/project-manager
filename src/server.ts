import express from 'express'
import './database';

const app = express()

app.use(express.json())
app.get('/', (req, res) => {
    return res.json({ message: "Api rodando..." });
})

app.listen(3333)