import {View, Text, Button} from 'react-native'
import { useRoute } from '@react-navigation/native';

const About = ({ navigation }) => {
  const route = useRoute();
  return (
    <View>
      <Text>About Screen</Text>
      <Button title='Go to Home' onPress={() => navigation.goBack()}></Button>
      <Button
        title="Go to Details"
        onPress={() => navigation.popTo('Details')}
      />
      <Text>Name: {route.params.name}</Text>
      <Text>Email: {route.params.email}</Text>

    </View>
  );
};

export default About;
