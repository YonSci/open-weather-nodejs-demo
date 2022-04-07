const express = require('express')

const app = express()

const hostname = '127.0.0.1';
const port = 3000;

app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))

app.set('views', './views')
app.set('view engine', 'ejs')

app.get('', (req, res) => {
    res.render('index', { text: 'from ejs' })
})

app.listen(port, hostname, () => {
    console.info(`Server running at http://${hostname}:${port}/`);
})
