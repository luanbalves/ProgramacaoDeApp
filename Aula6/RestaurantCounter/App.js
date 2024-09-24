import { useState } from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

function App() {
  const [person, setPerson] = useState(0);

  function increment() {
    setPerson(person + 1);
  }

  function decrement() {
    setPerson(person - 1);
  }

  return (
    <View style={styles.container}>
      <Header />
      <Text
        style={{
          fontSize: 24,
          fontWeight: 'bold',
          paddingTop: 30,
          alignSelf: 'center',
        }}
      >
        Number of customers:
      </Text>
      
      <View style={styles.personBackground}>
      <Text style={styles.person}>{person}</Text>
      </View>

        <View style={styles.buttonContainer}>
      <Button title='+' onPress={() => increment()} />
      {person > 0 ? (
        <Button title='-' onPress={() => decrement()}></Button>
      ) : null}
      </View>
    </View>
  );
}

export default App;

function Header() {
  return <Text style={styles.title}>RestaurantCounter</Text>;
}

let styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: '#ECDFCC',
    flex: 1,
  },

  title: {
    fontSize: 32,
    marginTop: 60,
    paddingHorizontal: 60,
    fontWeight: 'bold',
    color: 'black',
    alignSelf: 'center',
  },
  buttonContainer: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 140
  },
  personBackground: {
    backgroundColor: 'black',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
    alignSelf: 'center',
    marginTop: 10,
  },
  person: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold'
  },
});
