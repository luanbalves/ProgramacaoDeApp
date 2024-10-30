import { useEffect, useState } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [inputText, setInputText] = useState('');
  const [notes, setNotes] = useState([]);

  const saveNote = () => {
    if (inputText) {
      const newNotes = [...notes, inputText]
      AsyncStorage.setItem('notes', JSON.stringify(newNotes)).then(() => {
        setNotes(newNotes);
        setInputText('');
      });
      alert('Note saved');
      getNotes();
    } else {
      alert('Please, fill the input');
    }
  };

  const getNotes = () => {
    AsyncStorage.getItem('notes').then((notes) => {
      setNotes(JSON.parse(notes));
    });
  };

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Tarefas</Text>
      <TextInput
        style={styles.textInput}
        placeholder='Add a new task'
        onChangeText={(text) => setInputText(text)}
      ></TextInput>
      <TouchableOpacity style={styles.addButton} onPress={saveNote}>
        <Text style={{ color: 'white', fontWeight: 'bold' }}>
          Adicionar Tarefa
        </Text>
      </TouchableOpacity>

      <FlatList
      style={{marginBottom: 30}}
        data={notes}
        renderItem={({ item }) => (
          <View style={styles.cell}>
            <Text>{item}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 70,
    marginHorizontal: 10,
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 26,
    alignSelf: 'center',
  },
  textInput: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  addButton: {
    alignItems: 'center',
    backgroundColor: 'blue',
    padding: 13,
    borderRadius: 100,
    marginTop: 10,
    marginBottom: 10
  },
  cell: {
    backgroundColor: '#d3d3d3',
    padding: 20,
    marginTop: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.36,
    shadowRadius: 0.37,
    elevation: 11,
  },
});
