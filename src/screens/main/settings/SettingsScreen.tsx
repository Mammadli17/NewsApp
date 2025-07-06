import React from 'react';
import { View, Text, Switch, StyleSheet, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../../context/ThemeContext';

const SettingsScreen = () => {
  const { theme, mode, toggleTheme } = useTheme();
  const isDark = mode === 'dark';

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: theme.colors.background }]}>
      <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
        <Text style={[styles.title, { color: theme.colors.text }]}>Ayarlar</Text>

        <View style={[styles.card, { backgroundColor: isDark ? '#1E1E1E' : '#F4F4F4' }]}>
          <View style={styles.row}>
            <Text style={[styles.label, { color: theme.colors.text }]}>🌙 Dark Mode</Text>
            <Switch
              value={isDark}
              onValueChange={toggleTheme}
              thumbColor={Platform.OS === 'android' ? (isDark ? '#fff' : '#fff') : undefined}
              trackColor={{ false: '#bbb', true: '#6C63FF' }}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 24,
  },
  card: {
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 4,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    fontWeight: '500',
  },
});
