const express = require('express');
const fs = require('fs');
const app = express();
const path = require('path');
const getRandomQuestion = (request, response) => {
    const data = JSON.parse(
        fs.readFileSync(path.resolve(__dirname, "./data.json"))
    )
    const id = Math.floor(Math.random() * data.length) + 1;
    const randomQuestion = data[id]
    response.send({
        success: true,
        data: randomQuestion,
    })
}
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(express.static('public'));

app.get('ask', (req, res) => {
    res.sendFile(path.resolve(__dirname, './public/ask/index.html'));
});

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './public/home/index.html'))
});

app.get('/random-question', getRandomQuestion);
app.post('/create-question', (req, res) => {
    const data = require('./data.json');
    const newQuestion = {
        _id: data.length + 1,
        content: req.body.content,
        yes: 0,
        no: 0,
    };
    const newData = [...data, newQuestion];
    fs.writeFileSync('data.json', JSON.stringify(newData));
    res.send({
        success: 1,
        data: newQuestion
    });
});

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './public/404/index.html'));
});

app.listen(8080, (err) => {
    if (err) throw err;
    console.log("Server started");
});