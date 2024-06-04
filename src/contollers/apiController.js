//const { Request, Response } = require('express');
const express = require('express');
const Phrase = require('../models/Phrase');

const ping = (req, res) => {
  res.json({ pong: true });
};

const random = (req, res) => {
  let nRand = Math.floor(Math.random() * 10);
  res.json({ number: nRand });
};

const nome = (req, res) => {
  let nome = req.params.nome;
  res.json({ nome: `Você enviou o nome ${nome}` });
};

const createPrhase = (req,res) =>{
    res.json({corpo:req.body});
}

module.exports = {
  ping,
  random,
  nome,
  createPrhase
};
