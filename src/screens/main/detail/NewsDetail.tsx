import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../../types/navigation.types';
import { Routes } from '../../../navigations/routes';
import { SvgImage } from '../../../components/svgImage/SvgImage';
import { useTheme } from '../../../context/ThemeContext';

type NewsDetailRouteProp = RouteProp<RootStackParamList, Routes.detail>;

const NewsDetail = () => {
  const { params: { item } } = useRoute<NewsDetailRouteProp>();
  const navigation = useNavigation();
  const { theme } = useTheme();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={styles.header}>
        <TouchableOpacity
          hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
          onPress={() => navigation.goBack()}
        >
          <SvgImage
            source={require('../../../assets/svg/back/back.svg')}
            height={25}
            width={25}
            fill={theme.colors.text}
          />
        </TouchableOpacity>
        <View style={styles.center}>
          <Text style={[styles.headerText, { color: theme.colors.text }]}>Elan detalı</Text>
        </View>
        <View style={styles.side} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 24 }}>
        <Text style={[styles.title, { color: theme.colors.text }]}>{item.title}</Text>
        <Image source={{ uri: item.image }} style={styles.image} />
        <Text style={[styles.description, { color: theme.colors.text }]}>{item.description}</Text>
        {/* Əgər çoxlu description varsa, burada sadəcə bir dəfə göstərmək daha düzgündür */}
        <Text style={[styles.date, { color: theme.colors.text + '99' }]}>{item.date}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  side: {
    width: 28,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  headerText: {
    fontSize: 22,
    fontWeight: '800',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  image: {
    width: '100%',
    height: 280,
    borderRadius: 12,
    resizeMode: 'contain',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
  },
  date: {
    fontSize: 14,
    marginTop: 12,
    alignSelf: 'flex-end',
  },
});

export default NewsDetail;
