const express = require('express');
const app = express();
const ejs = require('ejs');
const path = require('node:path');

app.use(express.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, "views"));
app.set('view engine', 'ejs');

const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
  ];
  

app.get('/', (req, res) => {
    return res.render('index', { title: "Mini Messageboard", messages: messages });
});

app.get('/new', (req, res) => {
    return res.render('new');
});

app.post('/new', (req, res) => {
    console.log(req.body);
    messages.push({
        text: req.body.text,
        user: req.body.user,
        added: new Date()
      });
    return res.redirect('/');
});
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});