import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { News } from '../../types/news.types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/navigation.types';
import { Routes } from '../../navigations/routes';
import { SvgImage } from '../svgImage/SvgImage';
import { useNewsStore } from '../../store/main/useNewsStore';
import { useTheme } from '../../context/ThemeContext';

type NewsScreenProp = NativeStackNavigationProp<RootStackParamList, Routes.detail>;

const NewsCard = ({ item }: { item: News }) => {
  const navigation = useNavigation<NewsScreenProp>();
  const toggleSave = useNewsStore(state => state.toggleSave);
  const { theme } = useTheme(); 

  return (
    <TouchableOpacity onPress={() => navigation.navigate(Routes.detail, { item })}>
      <View style={[styles.card]}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: item.image }} style={styles.image} />
          <TouchableOpacity style={[styles.savedIconWrapper, { backgroundColor: theme.colors.background }]} onPress={() => toggleSave(item.id)}>
            <SvgImage
              source={require('../../assets/svg/saved/saved.svg')}
              height={24}
              width={24}
              fill={item.isSaved ? theme.colors.primary : theme.colors.text}
              stroke={theme.colors.primary}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ marginHorizontal: 10 }}>
        <Text style={[styles.title, { color: theme.colors.text }]}>{item.title}</Text>
        <Text style={[styles.description, { color: theme.colors.text }]} numberOfLines={2}>
          {item.description}
        </Text>
        <Text style={[styles.date, { color: theme.colors.text }]}>{item.date}</Text>
        <View style={{ width: '100%', backgroundColor: theme.colors.text + '20', height: 1, marginTop: 12 }} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 10,
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  savedIconWrapper: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 6,
    borderRadius: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  description: {
    fontSize: 14,
  },
  date: {
    fontSize: 12,
    marginTop: 5,
  },
});

export default NewsCard;
