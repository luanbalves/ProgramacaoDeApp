import { useState } from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

function App() {
  // let idade = 22;
  // let data = '31/03/2002';
  // let curso = 'Engenharia de Software';

  const [name, setName] = useState('Luan');
  const [age, setAge] = useState(22);
  const [curso, setCurso] = useState('Curso');
  const [semestre, setSemestre] = useState(0);
  function save(name, age, curso, semestre) {
    setName(name);
    setAge(age);
    setCurso(curso);
    setSemestre(semestre);
  }

  return (
    <View style={styles.container}>
      <Header name={'Luan'} idade={22} />
      <LogoImage />
      <SecondImage />
      {/* <Text>{idade}</Text>
      <Text>{data}</Text>
      <Text>{curso}</Text> */}

      <Text style={styles.mainText}>{name}</Text>
      <Text style={styles.mainText}>{age}</Text>
      <Text style={styles.mainText}>{curso}</Text>
      <Text style={styles.mainText}>{semestre}</Text>
      <Button
        title='Save'
        onPress={() => save('Luan Alves', 23, 'Engenharia de Software', 8)}
      />
      <Footer footerText={'Aqui se encontra o footer(rodapé)'} />
    </View>
  );
}

export default App;

function Header({ name, idade }) {
  // Ou usar props

  return (
    <Text style={styles.title}>
      {/* {props.name} */}
      {name} - {idade}
    </Text>
  );
}

function LogoImage() {
  let img =
    'https://quatrorodas.abril.com.br/wp-content/uploads/2023/12/432743_1091814_whatsapp_image_2023_12_14_at_12.59.13__3_.jpeg?quality=70&strip=info&w=720&crop=1';

  return (
    <View style={styles.imageContainer}>
      <Image
        style={styles.img}
        source={{
          uri: img,
        }}
      />
    </View>
  );
}

function SecondImage() {
  let img =
    'https://carwow-uk-wp-3.imgix.net/18015-MC20BluInfinito-scaled-e1707920217641.jpg';

  return (
    <View style={styles.imageContainer}>
      <Image
        style={styles.img}
        source={{
          uri: img,
        }}
      />
    </View>
  );
}

function Footer(props) {
  return <Text style={styles.footer}>{props.footerText}</Text>;
}

let styles = StyleSheet.create({
  container: {
    padding: 12,
  },

  title: {
    fontSize: 34,
    marginTop: 60,
    paddingHorizontal: 60,
    fontWeight: 'bold',
    color: 'green',
    alignSelf: 'center'
  },

  footer: {
    alignSelf: 'center',
    marginTop: 190,
  },

  img: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginTop: 12,
  },

  mainText: {
    fontSize: 27,
  },

  imageContainer: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
  },
});
