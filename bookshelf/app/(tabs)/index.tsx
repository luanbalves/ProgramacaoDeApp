import {
  StyleSheet,
  Button,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import firestore from '@react-native-firebase/firestore';
import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { Book } from '@/constants/Book';
import { SearchBar } from 'react-native-elements';

export default function HomeScreen() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const colorScheme = useColorScheme()
  const listBackgroundColor = colorScheme === 'dark' ? '#333' : '#fff'
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const subscriber = firestore()
      .collection('books')
      .onSnapshot((querySnapshot) => {
        const books: Book[] = [];

        querySnapshot.forEach((documentSnapshot) => {
          books.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });
        setBooks(books);
        setLoading(false);
      });
  });

  if (loading) {
    return <ActivityIndicator />;
  }

  return (
    <ThemedView style={styles.container}>
      <Button title='+' onPress={() => router.push('/home/addBook')} />

      <SearchBar
          placeholder='Pesquisar'
          value={searchText}
          onChangeText={setSearchText}
          containerStyle={styles.searchBarContainer}
          inputContainerStyle={styles.searchBarInput}
          round
        />
      <FlatList
        data={books}
        renderItem={({ item }) => (
          <TouchableOpacity style={[styles.listContainer, {backgroundColor: listBackgroundColor}]}>
            <ThemedText>{item.name}</ThemedText>
            <ThemedText>{item.author}</ThemedText>
          </TouchableOpacity>
        )}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
  listContainer: {
    alignItems: 'center',
    borderRadius: 12,
    padding: 7,
    marginVertical: 5
  },
  searchBarContainer: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  searchBarInput: {
    backgroundColor: '#333',
  },
});
