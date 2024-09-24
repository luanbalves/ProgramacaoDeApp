import { useState } from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

function App() {
  const [quotes, setQuotes] = useState([]);
  const authorImages = {
    'Walter White':
      'https://newr7-r7-prod.web.arc-cdn.net/resizer/v2/ZLD7PMGH6JJ6XPHBG3POWUONMI.jpg?auth=46df933e5d79f052ef13f82fe5fe727ac5ac6d95faf6f71418b6139ee10f528a&width=700&height=525',
    'Jesse Pinkman':
      'https://static.wikia.nocookie.net/breakingbad/images/0/05/Season_2_-_Jesse.jpg/revision/latest/scale-to-width/360?cb=20090617154632',
    'Saul Goodman':
      'https://upload.wikimedia.org/wikipedia/en/3/34/Jimmy_McGill_BCS_S3.png',
    'Hank Schrader':
      'https://upload.wikimedia.org/wikipedia/en/thumb/d/db/Hank_Schrader_S5B.png/220px-Hank_Schrader_S5B.png',
    'Badger':
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR93aaaoRmo-TTGBNAg451v0pHZLS_8nZd4gw&s',
    'Skyler White':
      'https://static.wikia.nocookie.net/breakingbad/images/0/07/SkylerS5.jpg/revision/latest?cb=20120620012707',
    'Mike Ehrmantraut':
      'https://static.wikia.nocookie.net/breakingbad/images/9/9f/Season_4_-_Mike.jpg/revision/latest/scale-to-width/360?cb=20110620221523',
    'Gale Boetticher':
      'https://oyster.ignimgs.com/mediawiki/apis.ign.com/breaking-bad/0/0f/Gale_Boetticher.jpg',
    'Tuco Salamanca':
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF1rWGDOSl2ZvpDpCwPqqg3X_CUaxtangL4A&s',
    'Gustavo Fring':
      'https://boo-prod.b-cdn.net/database/profiles/1688874231263e8e11c8b4e9b3691a6daa16ce7024212.jpg?class=sm',
  };
  const fetchQuotes = async () => {
    try {
      const response = await fetch(
        'https://api.breakingbadquotes.xyz/v1/quotes'
      );
      const data = await response.json();
      setQuotes(data);
    } catch (error) {
      print(error);
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      {quotes.map((quote) => (
        <View>
          <View style={styles.imageContainer}>
            <Image
              style={styles.img}
              source={{ uri: authorImages[quote.author] }}
            ></Image>
          </View>

          <View style={styles.quoteContainer}>
            <Text style={styles.quote}>{quote.quote}</Text>
            <Text style={styles.quoteAuthor}>- {quote.author}</Text>
          </View>
        </View>
      ))}
      <Button title='Generate Quote' onPress={fetchQuotes}></Button>
    </View>
  );
}

export default App;

function Header() {
  return <Text style={styles.title}>QuotesApp</Text>;
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
    height: 500,
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
  quoteContainer: {
    backgroundColor: 'black',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
    borderWidth: 3,
    borderColor: 'yellow',
    borderRadius: 7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
  },
  quote: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
  quoteAuthor: {
    color: '#EAE4DD',
    fontSize: 18,
  },
});
