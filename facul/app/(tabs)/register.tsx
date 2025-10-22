import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Modal, Pressable } from 'react-native';
import { Link } from 'expo-router';

export default function RegisterScreen() {
  const [idade, setIdade] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleSave = () => {
    if (!idade) {
      setModalMessage('Por favor, insira sua idade.');
      setModalVisible(!modalVisible);
      return;
    }

    setModalMessage(`Idade ${idade} salva com sucesso!`);
    setModalVisible(!modalVisible);
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
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalbox}>
            <Text style={styles.modalText}>{modalMessage}</Text>
            <Pressable
              style={styles.modalbutton}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.modalButtonText}>Fechar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
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
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalbox: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 25,
    alignItems: 'center',
    elevation: 5,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center'
  },
  modalbutton: {
    backgroundColor: '#2196F3',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 8,
  },
  modalButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
