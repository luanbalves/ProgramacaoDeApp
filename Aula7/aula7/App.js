import Slider from '@react-native-community/slider';
import { Picker } from '@react-native-picker/picker';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';

export default function App() {
  // const [produtosSelected, setProdutosSelected] = useState(0);
  // const [produtos, setProdutos] = useState([
  //   { key: 1, name: 'Arroz', preco: 40.0 },
  //   { key: 2, name: 'Feijão', preco: 12.0 },
  //   { key: 3, name: 'Sabão', preco: 10.0 },
  //   { key: 4, name: 'Alface', preco: 7.0 },
  //   { key: 5, name: 'Macarrão', preco: 15.0 },

  // ]);

  // let produtosItem = produtos.map((value, key) => {
  //   return <Picker.Item key={key} value={key} label={value.name}></Picker.Item>;
  // });




  // const [valor, setValor] = useState(0)


  const [isOn, setIsOn] = useState(0)

  return (
    <View style={styles.container}>

      {/* <Picker
        selectedValue={produtosSelected}
        onValueChange={(item) => setProdutosSelected(item)}
      >
        {produtosItem}
      </Picker>
      <Text>{'Produto: ' + produtos[produtosSelected].name}</Text>
      <Text>{'Preço: ' + produtos[produtosSelected].preco.toFixed(2)}</Text> */}


        {/* <Slider
          minimumValue={0}
          maximumValue={100}
          value={valor}
          onValueChange={(value) => setValor(value)}
          minimumTrackTintColor='pink'
          thumbTintColor='red'
        />

        <Text>{valor.toFixed(3)}</Text> */}




          <Switch value={isOn} onValueChange={(value) => setIsOn(value)} thumbColor={'green'}></Switch>
          <Text>Status: {isOn ? 'Ligado' : 'Desligado'}</Text>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    margin: 50,
  },
});
