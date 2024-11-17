import TextInputDefault from '@/components/TextInputDefault';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Book, BookStatus } from '@/constants/Book';
import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { Alert, Button, StyleSheet, TextInput } from 'react-native';
import StarRating from 'react-native-star-rating-widget';
import firestore from '@react-native-firebase/firestore';
import { router } from 'expo-router';

export default function addBook() {
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [rating, setRating] = useState(0);
  const [summary, setSummary] = useState('');
  const [status, setStatus] = useState(BookStatus.OnShelf);

  const addBook = async () => {
    if (!name || !author || !rating || !summary || !status) {
      Alert.alert('Todos os campos devem ser preenchidos')
      return;
    }

    const book: Book = {
      name,
      author,
      summary,
      status,
      rating,
    }

    try {
      await firestore().collection('books').add(book)
      Alert.alert(
        'Sucesso',
        'Livro Adicionado com sucesso!',
        [
          {
            text: 'Ok',
            onPress: () => {
              router.back()
            }
          }
        ]
      )
    } catch(error) {
      Alert.alert(`Erro ao adicionar livro: ${error}`)
    }
  }

  return (
    <ThemedView style={styles.container}>
      <TextInputDefault
        value={name}
        onChangeText={setName}
        placeholder='Digite o nome'
        text='Nome do livro'
      />

      <TextInputDefault
        value={author}
        onChangeText={setAuthor}
        placeholder='Digite o autor'
        text='Autor do livro'
      />

      <TextInputDefault
        value={summary}
        onChangeText={setSummary}
        placeholder='Digite um resumo'
        text='Resumo do livro'
      />

      <ThemedText style={styles.text}>Status</ThemedText>
      <Picker
        selectedValue={status}
        onValueChange={(itemValue) => setStatus(itemValue as BookStatus)}
        style={styles.picker}
      >
        <Picker.Item label='Na estante' value={BookStatus.OnShelf}/>
        <Picker.Item label='Em progresso' value={BookStatus.InProgress} />
        <Picker.Item label='Lido' value={BookStatus.Completed} />
        <Picker.Item label='Lista de desejo' value={BookStatus.Wishlist} />
      </Picker>

      <ThemedText style={styles.text}>Avaliação</ThemedText>

      <ThemedView style={{ alignSelf: 'center' }}>
        <StarRating rating={rating} onChange={setRating} />
      </ThemedView>

      <Button title='Adicionar Livro' onPress={addBook}></Button>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  picker: {
    paddingHorizontal: 60,
    marginTop: -40
  },
  text: {
    fontSize: 16,
  },
});
