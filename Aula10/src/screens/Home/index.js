import { Button, View } from 'react-native';
import React from 'react';

const Home = ({ navigation }) => {
  return (
    <View>
      <Button
        title='Go to About'
        onPress={() =>
          navigation.navigate('About', {
            name: 'Luan',
            email: 'Luan@gmail.com',
          })
        }
      />
    </View>
  );
};

export default Home;
