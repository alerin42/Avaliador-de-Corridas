import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';

export default function App() {
  const [corridas, setCorridas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [valorMotorista, setValorMotorista] = useState('');
  const [duracaoCorrida, setDuracaoCorrida] = useState('');
  const [pedagio, setPedagio] = useState('');
  const [distanciaCorrida, setDistanciaCorrida] = useState('');
  const [bonus, setBonus] = useState('');

  useEffect(() => {
    carregarCorridas();
  }, []);

  const carregarCorridas = async () => {
    setLoading(true);

    // Dados de autenticação da API da Uber
    const accessToken = 'bNzZeB-ThayHvUXs_n2V4uozMMAgp0U8FY9HWq6B'; // Substitua pelo seu token de acesso da Uber

    // Realizar a requisição à API da Uber
    try {
      const response = await axios.get('https://api.uber.com/v1.2/estimates/price', {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
        params: {
          start_latitude: 37.7752315,
          start_longitude: -122.418075,
          end_latitude: 37.7752415,
          end_longitude: -122.518075,
        }
      });

      // Preencher os campos com os dados obtidos
      setValorMotorista(response.data.fare.estimate);
      setDuracaoCorrida(response.data.duration);
      setPedagio(response.data.fare.tolls || 0);
      setDistanciaCorrida(response.data.distance / 1000); // em km
      setBonus(response.data.fare.surcharges || 0);
      setLoading(false);
    } catch (error) {
      console.error('Erro ao obter corridas:', error);
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Avaliar Corridas</Text>
      <Button title="Carregar Corridas" onPress={carregarCorridas} />

      {loading ? (
        <Text>Carregando...</Text>
      ) : (
        <View>
          <Text>Valor mostrado ao motorista: {valorMotorista}</Text>
          <Text>Duração da corrida: {duracaoCorrida} minutos</Text>
          <Text>Pedágio: {pedagio}</Text>
          <Text>Distância da corrida: {distanciaCorrida} km</Text>
          <Text>Bônus/Promoções: {bonus}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});
