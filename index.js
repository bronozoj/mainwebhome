const express = require('express');
const path = require('path');
const app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index');
})

app.get("*", (req, res) => {
    res.redirect("/");
})

app.listen(app.get('port'), () => console.log(`Server started on port ${app.get('port')}`));