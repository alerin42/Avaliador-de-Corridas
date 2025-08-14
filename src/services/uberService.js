
const uberApi = require('../apis/uberApi');

// Função para obter e retornar as corridas
async function obterCorridas() {
  try {
    const corridas = await uberApi.listarCorridas();
    return corridas;
  } catch (error) {
    throw new Error('Erro ao obter corridas: ' + error.message);
  }
}

module.exports = { obterCorridas };
