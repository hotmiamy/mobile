import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function RegisterScreen() {
  const [idade, setIdade] = useState('');

  const handleSave = () => {
    if (!idade) {
      alert('Por favor, insira sua idade.');
      return;
    }

    alert(`Sua idade é ${idade} anos.`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Digite sua idade:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Ex: 25"
        value={idade}
        onChangeText={setIdade}
      />
      <View style={{ marginBottom: 10 }}>
        <Button title="Salvar" onPress={handleSave} />
      </View>
      <Link href="/" asChild>
        <Button title="Voltar Para Home"/>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#bbbbbbff',
    width: '10%',
    padding: 10,
    borderRadius: 8,
    textAlign: 'left',
    marginBottom: 20,
  }
});
