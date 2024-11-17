import { StyleSheet, ActivityIndicator, View } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import firestore from '@react-native-firebase/firestore';
import { useEffect, useState } from 'react';
import { BookStatus } from '@/constants/Book';

type BookStatusCounts = {
  completed: number;
  onShelf: number;
  inProgress: number;
  wishlist: number;
};

export default function BookStatusScreen() {
  const [bookCounts, setBookCounts] = useState<BookStatusCounts>({
    completed: 0,
    onShelf: 0,
    inProgress: 0,
    wishlist: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const subscriber = firestore()
      .collection('books')
      .onSnapshot((querySnapshot) => {
        const counts: BookStatusCounts = {
          completed: 0,
          onShelf: 0,
          inProgress: 0,
          wishlist: 0,
        };

        querySnapshot.forEach((documentSnapshot) => {
          const data = documentSnapshot.data();
          if (data.status === BookStatus.Completed) counts.completed++;
          if (data.status === BookStatus.OnShelf) counts.onShelf++;
          if (data.status === BookStatus.InProgress) counts.inProgress++;
          if (data.status === BookStatus.Wishlist) counts.wishlist++;
        });

        setBookCounts(counts);
        setLoading(false);
      });

    return () => subscriber();
  }, []);

  if (loading) {
    return <ActivityIndicator />;
  }

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.statusContainer}>
        <ThemedText type="title" style={styles.title}>
          Status dos Livros
        </ThemedText>
        <ThemedText>Livros concluídos: {bookCounts.completed}</ThemedText>
        <ThemedText>Livros na estante: {bookCounts.onShelf}</ThemedText>
        <ThemedText>Livros em progresso: {bookCounts.inProgress}</ThemedText>
        <ThemedText>Livros na lista de desejos: {bookCounts.wishlist}</ThemedText>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 70
  },
  statusContainer: {
    marginVertical: 16,
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#777',
  },
  title: {
    marginBottom: 16,
    fontWeight: 'bold',
    fontSize: 18,
  },
});
