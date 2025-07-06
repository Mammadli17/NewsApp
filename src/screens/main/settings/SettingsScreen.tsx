import React from 'react';
import { View, Text, Switch, StyleSheet, Platform, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../../context/ThemeContext';

const SettingsScreen = () => {
  const { theme, mode, toggleTheme } = useTheme();
  const isDark = mode === 'dark';

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={styles.header}>
        <View style={styles.side}>
          <Image source={require('../../../assets/images/oba.jpg')} style={styles.logo} />
        </View>
        <View style={styles.center}>
          <Text style={[styles.headerText, { color: theme.colors.text }]}>Ayarlar</Text>
        </View>
        <View style={styles.side} />
      </View>
      <View style={[styles.card, { backgroundColor: isDark ? '#1E1E1E' : '#F4F4F4' }]}>
        <View style={styles.row}>
          <Text style={[styles.label, { color: theme.colors.text }]}>Qaranlıq Rejim</Text>
          <Switch
            value={isDark}
            onValueChange={toggleTheme}
            thumbColor={Platform.OS === 'android' ? (isDark ? 'rgba(1, 86, 86, 1)' : '#fff') : undefined}
            trackColor={{ false: '#bbb', true: 'rgba(1, 86, 86, 1)' }}
          />
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

  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  side: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 28,
    height: 28,
    borderRadius: 8,
    resizeMode: 'contain',
  },
  headerText: {
    fontSize: 22,
    fontWeight: '800',
  },
});
