const express = require('express');
const ApiController = require('../contollers/apiController');

const router = express.Router();

router.get('/ping',ApiController.ping);

router.get('/random',ApiController.random);

 router.get('/nome/:nome',ApiController.nome);

router.post('/frases',ApiController.createPhrase);

router.get('/frases',ApiController.listPhrases);

router.get('/frase/aleatoria',ApiController.randomPhrase);

router.get('/frase/:id',ApiController.getPhrases)

router.put('/frase/:id',ApiController.updatePhrase);

router.delete('/frase/:id',ApiController.DeletePhrase);



 module.exports = router;
