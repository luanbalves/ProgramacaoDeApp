import {
  StyleSheet,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  useColorScheme,
  View,
  Alert,
} from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import firestore from '@react-native-firebase/firestore';
import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { Book, getIconByStatus } from '@/constants/Book';
import { SearchBar } from 'react-native-elements';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function HomeScreen() {
  const [books, setBooks] = useState<Book[]>([]);
  const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState('');

  const colorScheme = useColorScheme();
  const listBackgroundColor = colorScheme === 'dark' ? '#333' : '#777';

  useEffect(() => {
    const subscriber = firestore()
      .collection('books')
      .onSnapshot((querySnapshot) => {
        const booksData: Book[] = [];

        querySnapshot.forEach((documentSnapshot) => {
          const data = documentSnapshot.data();

          const book: Book = {
            name: data.name,
            author: data.author,
            summary: data.summary,
            status: data.status,
            rating: data.rating,
            key: documentSnapshot.id,
          };
          booksData.push(book);
        });

        setBooks(booksData);
        setFilteredBooks(booksData);
        setLoading(false);
      });

    return () => subscriber();
  }, []);

  const filterBooks = (query: string) => {
    if (!query) {
      setFilteredBooks(books);
    } else {
      const filtered = books.filter(
        (book) =>
          book.name.toLowerCase().includes(query.toLowerCase()) ||
          book.author.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredBooks(filtered);
    }
  };

  useEffect(() => {
    filterBooks(searchText);
  }, [searchText, books]);

  const handleCancel = (key: string) => {
    Alert.alert(
      'Confirmar exclusão',
      'Você tem certeza que deseja excluir este livro?',
      [
        {
          text: 'Cancelar',
        },
        {
          text: 'Excluir',
          style: 'cancel',
          onPress: () => {
            firestore()
              .collection('books')
              .doc(key)
              .delete()
              .then(() => {
                Alert.alert(
                  'Livro excluído',
                  'O livro foi excluído com sucesso.'
                );
              })
              .catch((error) => {
                Alert.alert('Erro ao excluir', error.message);
              });
          },
        },
      ],
      { cancelable: false }
    );
  };

  if (loading) {
    return <ActivityIndicator />;
  }

  return (
    <ThemedView style={styles.container}>
      <TouchableOpacity
        onPress={() => router.push('/home/addBook')}
        style={styles.addBook}
      >
        <MaterialCommunityIcons name='book-plus' size={32} color= {colorScheme === 'dark' ? '#fff' : '#000'} />
      </TouchableOpacity>

      <SearchBar
        placeholder='Pesquisar'
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
        containerStyle={styles.searchBarContainer}
        inputContainerStyle={styles.searchBarInput}
        round
      />
      <FlatList
        data={filteredBooks}
        keyExtractor={(item) => item.key ?? ''}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.listContainer,
              { backgroundColor: listBackgroundColor },
            ]}
            onPress={() => router.push(`/home/${item.key}`)}
          >
            <View style={styles.contentContainer}>
              <MaterialCommunityIcons
                name={getIconByStatus(item.status)}
                size={32}
                color='white'
              />
              <View style={styles.textContainer}>
                <ThemedText>{item.name}</ThemedText>
                <ThemedText>{item.author}</ThemedText>
              </View>
              <TouchableOpacity onPress={() => handleCancel(item.key ?? '')}>
                <MaterialCommunityIcons
                  name='trash-can'
                  size={24}
                  color='white'
                />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
  },
  listContainer: {
    padding: 10,
    borderRadius: 8,
    marginVertical: 5,
    alignItems: 'flex-start',
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 7,
  },
  searchBarContainer: {
    backgroundColor: 'transparent',
  },
  searchBarInput: {
    backgroundColor: '#333',
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
  },
  addBook: {
    alignSelf: 'flex-end',
    marginRight: 10,
    marginBottom: 10,
  },
});
