const express = require('express');
const fs = require('fs');
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(express.static('public'));

app.get('ask', (req, res) => {
    res.sendFile(path.resolve(__dirname, './public/ask/index.html'));
});

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './public/404/index.html'));
});

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './public/home/index.html'))
});

app.post('/random-question', (req, res) => {

    let data;
    try {
        data = JSON.parse(fs.readFileSync('data.json'));
        console.log(data);
    } catch (err) {
        data = [];
    }
    const randomQuestion = data[Math.floor(Math.random() * data.length) + 1];
    res.send({
        success: 1,
        content: randomQuestion,
    });

    // const data = require('./data.json')
    // const randomQuestion = {
    //     _id: [Math.floor(Math.random() * data.length) + 1],
    //     content: req.body.content,
    //     yes: 0,
    //     no: 0,
    // }
    // const newRandomQuestion = [...data, randomQuestion];
    // fs.writeFileSync('data.json', JSON.stringify(newRandomQuestion))
    // res.send({
    //     success: 1,
    //     data: randomQuestion,
    // }
    // );
});
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

app.listen(8080, (err) => {
    if (err) throw err;
    console.log("Server started");
});