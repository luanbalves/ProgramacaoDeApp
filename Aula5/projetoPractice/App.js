import { useState } from 'react';
import { View, Text, Image, Button, StyleSheet, TextInput } from 'react-native';

function App() {
  const [name, setName] = useState('');
  const [inputName, setInputName] = useState('');
  const [age, setAge] = useState('');
  const [inputIdade, setInputIdade] = useState('');

  function saveData() {
    if (inputName === '') {
      alert('Please enter a name');
      return;
    }

    if (inputIdade === '') {
      alert('Please enter an age');
      return;
    }

    setName('Nome: ' + inputName);
    setAge('Idade: ' + inputIdade);
  }
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Hello</Text>
      <Text style={[styles.title, styles.subTitle]}>World</Text> */}
      {/* <View style={styles.square}></View>
      <View style={styles.square2}></View>
      <View style={styles.square3}></View> */}
      <TextInput
        style={styles.textInput}
        placeholder='Digite seu nome'
        onChangeText={(text) => setInputName(text)}
      ></TextInput>
      <TextInput
        style={styles.textInput}
        placeholder='Digite sua idade'
        onChangeText={(text) => setInputIdade(text)}
      ></TextInput>
      <Button title='Save' onPress={saveData}></Button>
      <View style={styles.card}>
        <Text style={styles.text}>{name}</Text>
        <Text style={styles.text}>{age}</Text>
      </View>
    </View>
  );
}

export default App;

let styles = StyleSheet.create({
  container: {
    // margin: 50,
    marginTop: 30,
    flex: 1,
    padding: 50,
    // flexDirection: 'row',
    // justifyContent: 'space-evenly',
    // alignItems: 'center'
  },

  textInput: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 100,
    marginTop: 10,
  },
  text: {
    fontSize: 24,
    alignSelf: 'center',
    marginTop: 10,
  },

  card: {
    backgroundColor: 'yellow',
    width: 200,
    height: 130,
    alignSelf: 'center',
    marginTop: 50,
  },
  // square: {
  //   width: 100,
  //   height: 100,
  //   backgroundColor: 'red'
  // },
  // square2: {
  //   width: 100,
  //   height: 100,
  //   backgroundColor: 'green'
  // },
  // square3: {
  //   width: 100,
  //   height: 100,
  //   backgroundColor: 'blue'
  // },

  // title: {
  //   fontSize: 34,
  //   fontWeight: 'bold',
  //   color: 'red',
  //   letterSpacing: 5,
  // },

  // subTitle: {
  //   color: '#334155',
  // },
});
