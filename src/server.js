const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const apiRoutes = require('./routes/api');
const cors = require('cors');
dotenv.config();

const server = express();
server.use(cors());

// Servir arquivos estáticos da pasta 'public'
server.use(express.static(path.join(__dirname, '../public')));

// Parsear dados do corpo da requisição (URL-encoded)
server.use(express.urlencoded({ extended: true }));

// Usar as rotas de API
server.use(apiRoutes);

// Middleware para lidar com rotas não encontradas
server.use((req, res) => {
    res.status(404);
    res.json({ error: 'Endpoint não encontrado.' });
});

// Iniciar o servidor na porta especificada no arquivo .env
server.listen(process.env.PORT, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT}`);
});
