const fs = require('fs');
const crypto = require('crypto');
const axios = require('axios');

// Carregar a chave privada RSA
const privateKey = fs.readFileSync('path/to/your/private-key.pem', 'utf8'); // Substitua com o caminho correto da sua chave privada

// Função para assinar os dados (geralmente os parâmetros ou o corpo da requisição)
function signRequest(data) {
  const sign = crypto.createSign('RSA-SHA256');
  sign.update(data);  // Dados a serem assinados
  const signature = sign.sign(privateKey, 'base64');  // Retorna a assinatura em base64
  return signature;
}

// Função para fazer a requisição à API da Uber
async function callUberAPI() {
  const token = 'Bearer YOUR_ACCESS_TOKEN';  // Substitua pelo seu token de acesso (OAuth)
  const url = 'https://api.uber.com/v1.2/estimates/price';

  // Dados que serão passados para a API (parâmetros da requisição)
  const data = 'start_latitude=37.7752315&start_longitude=-122.418075&end_latitude=37.7752415&end_longitude=-122.518075';

  const signature = signRequest(data);  // Assina os dados da requisição

  // Fazer a requisição para a Uber
  try {
    const response = await axios.get(url, {
      headers: {
        'Authorization': token,      // Adiciona o token no cabeçalho
        'X-Signature': signature,    // Adiciona a assinatura no cabeçalho
      },
      params: {
        start_latitude: 37.7752315,
        start_longitude: -122.418075,
        end_latitude: 37.7752415,
        end_longitude: -122.518075,
      },
    });

    console.log('Resposta da Uber:', response.data);  // Exibe os dados da corrida
  } catch (error) {
    console.error('Erro ao chamar a API da Uber:', error);
  }
}

// Chame a função para testar
callUberAPI();
