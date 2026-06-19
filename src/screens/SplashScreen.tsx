import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Login');
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>🧭</Text>
      <Text style={styles.title}>HEXAGON NAV</Text>
      <Text style={styles.subtitle}>Navigate with Precision</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#6366f1' },
  logo: { fontSize: 120, marginBottom: 20 },
  title: { fontSize: 32, fontWeight: 'bold', color: '#fff', marginBottom: 10 },
  subtitle: { fontSize: 16, color: '#e0e7ff' }
});

export default SplashScreen;
