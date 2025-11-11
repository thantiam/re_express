const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.get('/items', (req, res) => {
    res.json({msg : "express get..."});
});


app.get('/items/:id', (req, res) => {
        const id = req.params.id;
    res.status(200).json({msg : `express get ...${id}`});
});


app.post('/items', (req, res) => {
        const name = req.body?.name;
            if(!name) { res.status(400).json({msg: "name required..."}) };
    res.status(201).json({msg : `express post by ... ${name}`});
});

app.delete('/items/:id', (req, res) => {
        const id = req.params.id;
    res.status(200).json({msg : `express remove ...${id}`});
});

app.listen(6000, () => { console.log("express runs @ 6000...") });