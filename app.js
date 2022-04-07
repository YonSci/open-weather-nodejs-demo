const express = require('express')

const app = express()
const port = process.env.PORT || 3000;

// Static Files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))

// Templating Engine
app.set('views', './views')
app.set('view engine', 'ejs')

// Render the index file
app.get('', (req, res) => {
    res.render('index')
})

// Listen on port 3000
app.listen(port, () => {
    console.info(`Listening on port ${port}/`);
})
