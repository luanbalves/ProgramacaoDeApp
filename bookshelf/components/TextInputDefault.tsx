import React from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
  TextStyle,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';

interface TextInputDefaultProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  text?: string;
  style?: TextStyle; 
}

const TextInputDefault: React.FC<TextInputDefaultProps> = ({
  value,
  onChangeText,
  placeholder,
  text,
  style,
}) => {
  const handleClear = () => {
    onChangeText('');
  };

  return (
    <ThemedView>
      <ThemedText
        style={{
          paddingLeft: 3,
          marginBottom: 5,
          fontSize: 16,
        }}
      >
        {text}
      </ThemedText>
      <ThemedView style={styles.container}>
        <TextInput
          style={[styles.textInput, style, value ? styles.textInputWithClear : {}]} 
          onChangeText={onChangeText}
          value={value}
          placeholder={placeholder}
          placeholderTextColor="gray"
        />
        {value ? (
          <TouchableOpacity onPress={handleClear} style={styles.iconRight}>
            <Icon name="times" size={20} color="white" />
          </TouchableOpacity>
        ) : null}
      </ThemedView>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    marginBottom: 10,
  },
  textInput: {
    flex: 1,
    borderWidth: 1,
    padding: 7,
    borderRadius: 7,
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    width: '100%'
  },
  iconRight: {
    position: 'absolute',
    right: 10,
    padding: 10,
  },
  textInputWithClear: {
    paddingRight: 40,
  }
});

export default TextInputDefault;
