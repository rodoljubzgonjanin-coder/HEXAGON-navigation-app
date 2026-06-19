import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Switch, TouchableOpacity } from 'react-native';

const SettingsScreen = ({ navigation }) => {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [locationTracking, setLocationTracking] = useState(true);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Settings</Text>
        <View style={{ width: 50 }} />
      </View>
      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Notifications</Text>
          <View style={styles.settingItem}>
            <Text style={styles.settingLabel}>Enable Notifications</Text>
            <Switch value={notifications} onValueChange={setNotifications} />
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Display</Text>
          <View style={styles.settingItem}>
            <Text style={styles.settingLabel}>Dark Mode</Text>
            <Switch value={darkMode} onValueChange={setDarkMode} />
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Privacy</Text>
          <View style={styles.settingItem}>
            <Text style={styles.settingLabel}>Location Tracking</Text>
            <Switch value={locationTracking} onValueChange={setLocationTracking} />
          </View>
          <View style={styles.settingItem}>
            <Text style={styles.settingLabel}>Analytics</Text>
            <Switch value={analyticsEnabled} onValueChange={setAnalyticsEnabled} />
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About</Text>
          <View style={styles.aboutItem}>
            <Text style={styles.aboutLabel}>Version</Text>
            <Text style={styles.aboutValue}>1.0.0</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 15, backgroundColor: '#6366f1' },
  backButton: { fontSize: 18, color: '#fff', fontWeight: 'bold' },
  title: { fontSize: 22, fontWeight: 'bold', color: '#fff' },
  content: { flex: 1, padding: 15 },
  section: { marginBottom: 25, backgroundColor: '#fff', borderRadius: 12, paddingVertical: 10, paddingHorizontal: 15 },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', color: '#333', marginBottom: 15 },
  settingItem: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: '#f0f0f0' },
  settingLabel: { fontSize: 16, color: '#333' },
  aboutItem: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 10 },
  aboutLabel: { fontSize: 14, color: '#666' },
  aboutValue: { fontSize: 14, fontWeight: '600', color: '#333' }
});

export default SettingsScreen;
