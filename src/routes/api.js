const express = require('express');

const router = express.Router();


router.get('/ping',(req,res) =>{
    res.json({pong:true});

});

router.get('/random',(req,res)=>{

    let nRand = Math.floor(Math.random() * 10);
    res.json({number: nRand});
});

 router.get('/nome/:nome', (req,res) =>{
    let nome = req.params.nome;
    res.json({nome});
 });
 


// const ApiController = require('../controllers/apiController');

// //const AP = require('../contollers/apiController');

// router.get('/ping', ApiController.ping);
// router.get('/random', ApiController.random);
// router.get('/nome/:nome', ApiController.nome);

// router.post('/frases',ApiController.createPrhase);

// router.get('/ping',AP.ping);

 module.exports = router;
