import React from 'react';
import { View, StyleSheet } from 'react-native';

const MapScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.map}>
        {/* Map integration here */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { flex: 1, backgroundColor: '#e8e8e8' }
});

export default MapScreen;
