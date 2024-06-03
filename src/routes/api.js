const express = require('express');
const { Router } = require('express');

const router = Router();

router.get('/ping', (req, res) => {
    res.json({ pong: true });
});

router.get('/random', (req, res) => {
    let nRand = Math.floor(Math.random() * 10);
    res.json({ random: nRand });
});

router.get('/nome/:nome', (req, res) => {
    let nome = req.params.nome;
    res.json({ nome: `Você enviou o nome ${nome}` });
});

module.exports = router;
