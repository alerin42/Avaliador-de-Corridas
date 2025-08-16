// Instalar Axios para requisições
const axios = require('axios');

// Configuração do token de acesso da Uber
const accessToken = 'YOUR_ACCESS_TOKEN'; // Substitua com o seu token de acesso da Uber

// Função para obter os dados da corrida da Uber
async function obterDadosCorrida() {
  try {
    // Endpoint para estimativas de preço
    const response = await axios.get('https://api.uber.com/v1.2/estimates/price', {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      },
      params: {
        start_latitude: 37.7752315,  // Exemplo de coordenada de início
        start_longitude: -122.418075, 
        end_latitude: 37.7752415,  // Exemplo de coordenada de destino
        end_longitude: -122.518075,
      }
    });

    // Dados retornados pela API da Uber
    const dados = response.data;
    console.log(dados); // Para depuração
    return dados;
  } catch (error) {
    console.error('Erro ao obter dados da Uber:', error);
    throw error;
  }
}

// Chama a função e obtém os dados
obterDadosCorrida();
