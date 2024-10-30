import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Switch, Text, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

export default function App() {
  const [themeSelected, setThemeSelected] = useState(0);
  const [theme, setTheme] = useState([
    { key: 1, name: 'Claro' },
    { key: 2, name: 'Escuro' },
    { key: 3, name: 'Automático' },
  ]);

  let themesItem = theme.map((value, key) => {
    return <Picker.Item key={key} value={key} label={value.name}></Picker.Item>;
  });

  const [valor, setValor] = useState(12);

  const [isOn, setIsOn] = useState(0);

  function reset() {
    setThemeSelected(0);
    setValor(16);
    setIsOn(0);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configurações de preferência</Text>

      <Text style={styles.textConfiguracao}>Selecione seu tema preferido:</Text>
      <Picker
        selectedValue={themeSelected}
        onValueChange={(item) => setThemeSelected(item)}
        style={{ marginHorizontal: 20, marginTop: -60 }}
      >
        {themesItem}
      </Picker>

      <Text style={styles.textConfiguracao}>Tamanho da fonte:</Text>
      <Slider
        minimumValue={12}
        maximumValue={30}
        value={valor}
        onValueChange={(value) => setValor(value)}
        minimumTrackTintColor='green'
        thumbTintColor='green'
        style={{ marginHorizontal: 20 }}
      />

      <Text style={styles.textConfiguracao}>Modo noturno:</Text>
      <Switch
        value={isOn}
        onValueChange={(value) => setIsOn(value)}
        thumbColor={'green'}
        style={{ alignSelf: 'center', marginBottom: 20 }}
      ></Switch>

      <Text style={styles.tipoConfiguracao}>
        {'Tamanho da fonte: ' + valor.toFixed(0)}
      </Text>
      <Text style={styles.tipoConfiguracao}>
        {'Tema: ' + theme[themeSelected].name}
      </Text>

      <Text style={styles.tipoConfiguracao}>
        Modo Noturno: {isOn ? 'Ativado' : 'Desativado'}
      </Text>

      <Button title='Resetar preferências' onPress={() => reset()}></Button>

      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  title: {
    fontSize: 34,
    marginTop: 60,
    paddingHorizontal: 60,
    fontWeight: 'bold',
    color: 'black',
    alignSelf: 'center',
  },
  tipoConfiguracao: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black',
    alignSelf: 'center',
    padding: 10,
  },
  textConfiguracao: {
    fontSize: 17,
    fontWeight: 'semibold',
    color: 'black',
    alignSelf: 'center',
    padding: 10,
  },
});
