import { useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, Text, View } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { Book } from '@/constants/Book';

export default function BookScreen() {
  const { key } = useLocalSearchParams();
  const [book, setBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const bookKey = Array.isArray(key) ? key[0] : key;

    if (bookKey) {

      const fetchBookData = async () => {
        try {
          const doc = await firestore().collection('books').doc(bookKey).get();
          if (doc.exists) {
            setBook(doc.data() as Book);
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

  if (loading) {
    return <ActivityIndicator />;
  }

  if (!book) {
    return <Text>Livro não encontrado</Text>;
  }
  return (
    <View>
      <Text style={{ color: 'white' }}>{book.name}</Text>
      <Text>{book.author}</Text>
      <Text>{book.status}</Text>
    </View>
  );
}
