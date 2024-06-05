//const { Request, Response } = require('express');
const express = require('express');
const Phrase = require('../models/Phrase');
const sequelize = require('sequelize');

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

const createPhrase = async (req, res) => {
    let {author,txt} = req.body;
     
    let newPhrase =await Phrase.create({author,txt});
    res.status(201);
    res.json({id: newPhrase.id,author,txt});
     
};

const listPhrases = async (req,res) => {
 let list = await Phrase.findAll();
  res.json({list});
}
 
const getPhrases = async(req, res) => {
  let {id} = req.params;
  let phrase = await Phrase.findByPk(id); 
  if(phrase){
    res.json({phrase});
  }else {
    res.json({error:'Frase não encontrada'});
  }
}

const updatePhrase = async(req,res) => {
  
  let {id} = req.params;
  let {author, txt} = req.body;

  let phrase = await Phrase.findByPk(id);
  if(phrase){
    phrase.author = author;
    phrase.txt =txt;
    await phrase.save();

    res.json({phrase});
  }else{
    res.json({error: 'Frase não encontrada'});
  }
  
}
const DeletePhrase = async(req,res) => {
let{id}= req.params;
await Phrase.destroy({where:{id}});
res.json({});
}

const randomPhrase = async(req, res) =>{

  let phrase = await Phrase.findOne({
    order : [
      sequelize.fn('RAND')
    ]
  });
  if(phrase){
    res.json({phrase});
  }else {
    res.json({error: 'Não há frase cadastradas.'})
  }


}
module.exports = {
  ping,
  random,
  nome,
  createPhrase,
  listPhrases,
  getPhrases,
  updatePhrase,
  DeletePhrase,
  randomPhrase
}