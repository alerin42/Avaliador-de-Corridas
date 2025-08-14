const axios = require('axios');

// Função para obter corridas da API da Uber
async function listarCorridas() {
  try {
    // Substitua a chave de token abaixo por uma variável de ambiente ou obtenha ela dinamicamente
    const token = process.env.UBER_API_TOKEN;  // Supondo que o token seja configurado como variável de ambiente

    const response = await axios.get('https://api.uber.com/v1.2/estimates/price', {
      headers: {
        'Authorization': `Bearer ${token}`,  // Usando o token no cabeçalho da requisição
      },
      params: {
        start_latitude: 37.7752315,
        start_longitude: -122.418075,
        end_latitude: 37.7752415,
        end_longitude: -122.518075,
      }
    });

    return response.data;
  } catch (error) {
    console.error('Erro ao buscar corridas:', error);
    throw error;
  }
}

module.exports = { listarCorridas };