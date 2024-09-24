import { useState } from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

function App() {
  const [isBroken, setIsBroken] = useState(false);
  const [message, setMessage] = useState('');
  const phrases = [
    'Do not be afraid of competition.',
    'An exciting opportunity lies ahead of you.',
    'You love peace.',
    'Get your mind set…confidence will lead you on.',
    'You will always be surrounded by true friends.',
    'Sell your ideas-they have exceptional merit.',
    'You should be able to undertake and complete anything.',
    'You are kind and friendly.',
    'You are wise beyond your years.',
    'Your ability to juggle many tasks will take you far.',
    'A routine task will turn into an enchanting adventure.',
    'Beware of all enterprises that require new clothes.',
    'Be true to your work, your word, and your friend.',
    'Goodness is the only investment that never fails.',
    'A journey of a thousand miles begins with a single step.',
    'Forget injuries; never forget kindnesses.',
    'Respect yourself and others will respect you.',
    'A man cannot be comfortable without his own approval.',
    'Always do right. This will gratify some people and astonish the rest.',
    'It is easier to stay out than to get out.',
    'Sing everyday and chase the mean blues away.',
    'You will receive money from an unexpected source.',
    'Attitude is a little thing that makes a big difference.',
    'Plan for many pleasures ahead.',
    'Experience is the best teacher.',
    'You will be happy with your spouse.',
    'Expect the unexpected.',
    'Stay healthy. Walk a mile.',
    'The family that plays together stays together.',
  ];

  function broke() {
    setIsBroken(true);
    setMessage(phrases[Math.floor(Math.random() * phrases.length)]);
  }
  function restart() {
    setIsBroken(false);
    setMessage('');
  }

  return (
    <View style={styles.container}>
      <Header />
      {!isBroken ? (
        <CookieImage></CookieImage>
      ) : (
        <BrokenCookieImage></BrokenCookieImage>
      )}
      <Text
        style={{
          fontSize: 24,
          fontWeight: 'bold',
          paddingTop: 30,
          alignSelf: 'center',
        }}
      >
        Your lucky phrase is:
      </Text>
      {message ? <FortuneCookiePhrase message={message} /> : null}
      {!isBroken ? (
        <Button title='Broke' onPress={() => broke()} />
      ) : (
        <Button title='Restart' onPress={() => restart()}></Button>
      )}
    </View>
  );
}

export default App;

function Header() {
  return <Text style={styles.title}>FortuneCookie</Text>;
}

function CookieImage() {
  let img =
    'https://static.vecteezy.com/system/resources/previews/006/684/998/original/chinese-fortune-cookies-on-a-white-background-in-cartoon-style-illustration-free-vector.jpg';

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

function BrokenCookieImage() {
  let img =
    'https://img.freepik.com/premium-vector/chinese-fortune-cookie-with-empty-blank-paper-inside-prediction-words-cracked-bakery-with-desire-asian-new-year-celebration-surprise-isolated-white-background-cartoon-vector-illustration_87771-16318.jpg?w=360';

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

function FortuneCookiePhrase({ message }) {
  return (
    <View
      style={{ alignItems: 'center', justifyContent: 'center', padding: 20 }}
    >
      <View style={styles.phraseBackground}>
        <Text style={styles.phrase}>{message}</Text>
      </View>
    </View>
  );
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

  img: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginTop: 12,
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
  phraseBackground: {
    backgroundColor: 'black',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  phrase: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});
