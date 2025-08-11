# Avaliador de Corridas

Aplicativo web (PWA) para motoristas de aplicativo avaliarem rapidamente se uma corrida é viável ou não, com base em regras personalizadas como valor, distância, duração e distância até o ponto de embarque.

Inclui também um **painel de sessão** que calcula horas trabalhadas, faturamento líquido e média R$/h durante o turno.

---

## 🚀 Funcionalidades

- **Cálculo rápido** de viabilidade da corrida
- **Regras personalizadas**: R$/km, R$/h, tarifa mínima, pickup máximo, duração mínima
- **Presets** para diferentes cenários: Normal, Pico, Madrugada, Chuva, Aeroporto, Centro/Bairro
- **Score ponderado**: pesos ajustáveis para R$/h, R$/km, pickup e duração
- **Painel de sessão**:
  - Cronômetro de horas trabalhadas
  - Faturamento líquido acumulado
  - Total de corridas
  - Média R$/h em tempo real
- **PWA**: funciona offline e pode ser instalado no iPhone/Android como aplicativo
- **Armazenamento local** das configurações e da sessão (não perde dados ao fechar o app)

---

## 🛠 Tecnologias Utilizadas

- **HTML5** → Estrutura do app
- **CSS3** → Estilização e layout responsivo
- **JavaScript (Vanilla JS)** → Lógica, cálculos, presets, cronômetro, armazenamento local
- **PWA (Progressive Web App)** → Instalação no dispositivo e funcionamento offline
- **Service Worker** → Cache dos arquivos para uso sem internet
- **Manifest Web** → Configuração do ícone, nome e comportamento como app

---



