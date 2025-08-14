import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';

export default function App() {
  const [corridas, setCorridas] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Carregar corridas quando o app é iniciado
    carregarCorridas();
  }, []);

  const carregarCorridas = async () => {
    setLoading(true);

    const token = 'bNzZeB-ThayHvUXs_n2V4uozMMAgp0U8FY9HWq6B';  // Substitua pelo seu token da Uber
    const url = 'https://api.uber.com/v1.2/estimates/price';

    try {
      const response = await axios.get(url, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        params: {
          start_latitude: 37.7752315,
          start_longitude: -122.418075,
          end_latitude: 37.7752415,
          end_longitude: -122.518075,
        },
      });
      
      setCorridas(response.data.prices);
    } catch (error) {
      console.error('Erro ao obter corridas:', error);
    } finally {
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
        <FlatList
          data={corridas}
          keyExtractor={(item) => item.product_id}
          renderItem={({ item }) => (
            <View style={styles.corridaContainer}>
              <Text style={styles.corridaName}>{item.display_name}</Text>
              <Text>{`Estimativa: ${item.low_estimate} - ${item.high_estimate} ${item.currency_code}`}</Text>
            </View>
          )}
        />
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
  corridaContainer: {
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    width: '100%',
  },
  corridaName: {
    fontWeight: 'bold',
  },
});
