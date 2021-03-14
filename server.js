const express = require('express');
const fs = require('fs');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const flashcardModel = require('./models/flashcard');

mongoose.connect(
    'mongodb://localhost:27017/flashcard',
    { useNewUrlParser: true },
    (err) => {
        if (err) return console.log(err);
        console.log('MongoDB Server connected');
    }
);


app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(express.static('public'));

app.listen(8000);

app.get('/create', (req, res) => {
    res.sendFile(path.resolve(__dirname, './public/create/index.html'));
});

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './public/home/index.html'));
})

app.get('/random-flashcard', async (req, res) => {
    try {
        const flashcards = await flashcardModel.find();
        const randomFlashcard = _.sample(flashcards);
        if (!randomFlashcard) {
            alert(error);
        }
        res.send({
            success: 1,
            data: randomFlashcard
        })
    } catch (err) {
        res.send({
            success:0,
            data:null
        })
    }
})

app.post('/create-flashcard', async (req, res) => {
    try {
        console.log(req.body);
        const newFlashcard = {
            frontside: req.body.frontval,
            backside: req.body.backval,
            category: req.body.categoryval
        };
        const saveFlashcard = await flashcardModel.create(newFlashcard);
        res.send({
            success: 1,
            data: saveFlashcard
        })
    } catch (err) {
        console.log(err);
    }
})
