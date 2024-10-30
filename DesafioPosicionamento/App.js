import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <View style={styles.iconPlaceholder} />
        <View style={styles.iconPlaceholder} />
        <View style={styles.iconPlaceholder} />
        <View style={styles.iconPlaceholder} />
        <View style={styles.iconPlaceholder} />
      </View>

      <View style={styles.cardContainer}>
        <View style={[styles.roundedRectangle, styles.topLeft]} />
        <View style={[styles.roundedRectangle, styles.topRight]} />
        <View style={[styles.roundedRectangle, styles.bottomRight]} />
        
        <View style={styles.circularSection}>
          <View style={styles.outerCircle}>
            <View style={styles.innerCircle} />
          </View>
        </View>
      </View>

      <View style={styles.designSection}>
        <View style={styles.verticalCard}/>
        <View style={styles.verticalCard}/>
        <View style={styles.verticalCard}/>
      </View>

      <View style={styles.bottomRow}>
        <TouchableOpacity style={styles.bottomButton} />
        <TouchableOpacity style={styles.bottomButton} />
        <TouchableOpacity style={styles.bottomButton} />
        <TouchableOpacity style={styles.bottomButton} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginTop: 40,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginTop: 20,
  },
  iconPlaceholder: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ccc',
  },
  cardContainer: {
    borderWidth: 2,
    borderColor: '#000',
    marginVertical: 20,
    padding: 30,
    borderRadius: 10,
    position: 'relative',
  },
  circularSection: {
    alignItems: 'center',
  },
  outerCircle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#000',
  },
  roundedRectangle: {
    position: 'absolute',
    width: 80,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#ddd',
    margin: 5

  },
  topLeft: {
    top: 0,
    left: 0,
  },
  topRight: {
    top: 0,
    right: 0,
  },
  bottomRight: {
    bottom: 0,
    right: 0,
  },
  designSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  verticalCard: {
    width: 115,
    height: 200,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  bottomButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#ccc',
  },
});

export default App;
