import { useRef, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

function App() {
  const [time, setTime] = useState(0);

  let id = useRef();

  function handleTime() {
    id.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
  }
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.timeContainer}>
        <Text style={styles.time}>{time}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => handleTime()}>
          <FontAwesome name='play-circle' size={30} color='black' />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => clearInterval(id.current)}>
          <FontAwesome name='pause-circle' size={30} color='black' />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            clearInterval(id.current);
            setTime(0);
          }}
        >
          <MaterialIcons name='restart-alt' size={30} color='black' />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default App;

function Header() {
  return <Text style={styles.title}>CronometerApp</Text>;
}

let styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: '#ECDFCC',
    flex: 1,
  },

  title: {
    fontSize: 34,
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
    width: '100%',
    paddingHorizontal: 50,
  },
  timeContainer: {
    backgroundColor: 'black',
    borderRadius: 10,
    paddingVertical: 50,
    marginBottom: 20,
    marginTop: 20,
    width: '50%',
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
  },
  time: {
    color: 'white',
    fontSize: 50,
    textAlign: 'center',
    fontWeight: 'bold'
  },
});
