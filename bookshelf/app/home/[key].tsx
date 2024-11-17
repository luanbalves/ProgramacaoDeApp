import { useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Button,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { Book, BookStatus, getIconByStatus } from '@/constants/Book';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { Picker } from '@react-native-picker/picker';
import StarRating, { StarRatingDisplay } from 'react-native-star-rating-widget';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function BookScreen() {
  const { key } = useLocalSearchParams();
  const [book, setBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [summary, setSummary] = useState('');
  const [status, setStatus] = useState<BookStatus>(BookStatus.OnShelf);
  const [rating, setRating] = useState(0);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const bookKey = Array.isArray(key) ? key[0] : key;

    if (bookKey) {
      const fetchBookData = async () => {
        try {
          const doc = await firestore().collection('books').doc(bookKey).get();

          if (doc.exists) {
            const data = doc.data() as Book;
            setBook(data);
            setName(data.name);
            setAuthor(data.author);
            setSummary(data.summary);
            setStatus(data.status);
            setRating(data.rating);
          } else {
            Alert.alert('Livro não encontrado');
          }
        } catch (error) {
          Alert.alert(`Erro ao buscar dados do livro: ${error}`);
        } finally {
          setLoading(false);
        }
      };

      fetchBookData();
    }
  }, [key]);

  const handleSaveChanges = async () => {
    if (book) {
      const bookKey = Array.isArray(key) ? key[0] : key;

      try {
        await firestore().collection('books').doc(bookKey).update({
          name,
          author,
          summary,
          status,
          rating,
        });

        Alert.alert(
          'Livro atualizado',
          'As informações do livro foram atualizadas com sucesso.'
        );

        const updatedBook = await firestore()
          .collection('books')
          .doc(bookKey)
          .get();
        if (updatedBook.exists) {
          const updatedData = updatedBook.data() as Book;
          setBook(updatedData);
        } else {
          Alert.alert(
            'Erro ao atualizar',
            'O livro não foi encontrado após a atualização.'
          );
        }

        setIsEditing(false);
      } catch (error) {
        Alert.alert(`Erro ao atualizar livro: ${error}`);
        console.log(error);
      }
    }
  };

  if (loading) {
    return <ActivityIndicator />; 
  }

  if (!book) {
    return <ThemedText>Livro não encontrado</ThemedText>;
  }

  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>Detalhes do Livro</ThemedText>

      {!isEditing ? (
        <View style={styles.card}>
          <ThemedText style={styles.bookName}>{book.name}</ThemedText>
          <ThemedText style={styles.author}>Autor: {book.author}</ThemedText>

          <View style={styles.row}>
            <ThemedText style={styles.statusLabel}>Status: </ThemedText>
            <MaterialCommunityIcons
              name={getIconByStatus(book.status)}
              size={24}
              color='white'
            />
          </View>

          <ThemedText style={styles.summary}>{book.summary}</ThemedText>

          <StarRatingDisplay rating={book.rating} style={styles.rating} />
        </View>
      ) : (
        <View>
          <ThemedText style={styles.textOnEdit}>Nome:</ThemedText>
          <TextInput
            value={name}
            onChangeText={setName}
            placeholder='Nome do Livro'
            style={styles.input}
          />

          <ThemedText style={styles.textOnEdit}>Autor:</ThemedText>

          <TextInput
            value={author}
            onChangeText={setAuthor}
            placeholder='Autor'
            style={styles.input}
          />

          <ThemedText style={styles.textOnEdit}>Resumo:</ThemedText>

          <TextInput
            value={summary}
            onChangeText={setSummary}
            placeholder='Resumo'
            style={styles.input}
            multiline
          />

          <ThemedText style={styles.textOnEdit}>Status:</ThemedText>

          <Picker
            selectedValue={status}
            onValueChange={(itemValue) => setStatus(itemValue as BookStatus)}
            style={styles.picker}
          >
            <Picker.Item label='Na estante' value={BookStatus.OnShelf} />
            <Picker.Item label='Em progresso' value={BookStatus.InProgress} />
            <Picker.Item label='Lido' value={BookStatus.Completed} />
            <Picker.Item label='Lista de desejo' value={BookStatus.Wishlist} />
          </Picker>

          <StarRating
            rating={rating}
            onChange={setRating}
            style={{ alignSelf: 'center', marginBottom: 7 }}
          />

          <Button title='Salvar Alterações' onPress={handleSaveChanges} />
        </View>
      )}

      {!isEditing ? (
        <Button title='Editar Livro' onPress={() => setIsEditing(true)} />
      ) : (
        <Button title='Cancelar Edição' onPress={() => setIsEditing(false)} />
      )}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  card: {
    padding: 15,
    backgroundColor: '#222',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    marginBottom: 20,
  },
  bookName: {
    fontSize: 26,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  author: {
    fontSize: 18,
    color: 'white',
    marginBottom: 15,
  },
  statusLabel: {
    fontSize: 18,
    color: 'white',
    marginRight: 5,
  },
  summary: {
    fontSize: 16,
    color: 'white',
    marginBottom: 15,
  },
  rating: {
    alignSelf: 'center',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  textOnEdit: {
    fontSize: 16,
    color: 'white',
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#f0f0f0',
    marginBottom: 15,
    padding: 10,
    borderRadius: 8,
    fontSize: 16,
  },
  picker: {
    marginBottom: 15,
  },
});
