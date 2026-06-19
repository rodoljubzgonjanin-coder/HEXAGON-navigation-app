import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ActivityIndicator } from 'react-native';

const MainScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [mapType, setMapType] = useState('standard');

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#6366f1" />
        <Text style={styles.loadingText}>Loading Navigation...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>🧭 HEXAGON Nav</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
          <Text style={styles.settingsIcon}>⚙️</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.mapContainer}>
        <Text style={styles.mapText}>Map View - Google Maps Integration</Text>
      </View>

      <View style={styles.controlPanel}>
        <TouchableOpacity style={[styles.button, mapType === 'standard' && styles.activeButton]} onPress={() => setMapType('standard')}>
          <Text style={styles.buttonText}>Map</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, mapType === 'satellite' && styles.activeButton]} onPress={() => setMapType('satellite')}>
          <Text style={styles.buttonText}>Satellite</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, mapType === 'terrain' && styles.activeButton]} onPress={() => setMapType('terrain')}>
          <Text style={styles.buttonText}>Terrain</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 15, backgroundColor: '#6366f1' },
  title: { fontSize: 24, fontWeight: 'bold', color: '#fff' },
  settingsIcon: { fontSize: 24 },
  mapContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#e8e8e8' },
  mapText: { fontSize: 16, color: '#666' },
  loaderContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  loadingText: { marginTop: 10, fontSize: 16, color: '#6366f1' },
  controlPanel: { flexDirection: 'row', justifyContent: 'space-around', padding: 15, backgroundColor: '#f5f5f5' },
  button: { paddingVertical: 10, paddingHorizontal: 20, borderRadius: 8, backgroundColor: '#e0e0e0' },
  activeButton: { backgroundColor: '#6366f1' },
  buttonText: { fontSize: 14, fontWeight: '600', color: '#333' }
});

export default MainScreen;
