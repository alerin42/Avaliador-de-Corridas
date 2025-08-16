const fs = require('fs');
const crypto = require('crypto');

// Carregar a chave pública RSA
const publicKey = fs.readFileSync('keys/public-key.pem', 'utf8'); // Caminho para a chave pública

// Função para validar a assinatura
function verifySignature(data, signature) {
  const verify = crypto.createVerify('RSA-SHA256');
  verify.update(data);  // Dados que foram assinados
  const isValid = verify.verify(publicKey, signature, 'base64');  // Verifica a assinatura com a chave pública
  return isValid;
}

// Testando a validação da assinatura
const data = 'start_latitude=37.7752315&start_longitude=-122.418075&end_latitude=37.7752415&end_longitude=-122.518075';  // Dados originais
const signature = 'YOUR_GENERATED_SIGNATURE';  // Assinatura gerada com a chave privada

const isSignatureValid = verifySignature(data, signature);

console.log('Assinatura válida:', isSignatureValid);  // Deve retornar `true` se a assinatura for válida
