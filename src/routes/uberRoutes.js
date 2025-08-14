
const express = require('express');
const router = express.Router();
const uberService = require('../services/uberService');

// Definir a rota para obter as corridas da Uber
router.get('/corridas', async (req, res) => {
  try {
    const corridas = await uberService.obterCorridas();
    res.json(corridas);
  } catch (error) {
    res.status(500).send('Erro ao obter corridas: ' + error.message);
  }
});

module.exports = router;
