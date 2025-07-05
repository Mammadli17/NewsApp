import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { News } from '../../types/news.types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/navigation.types';
import { Routes } from '../../navigations/routes';
import { SvgImage } from '../svgImage/SvgImage';
import { useNewsStore } from '../../store/main/useNewsStore';

type NewsScreenProp = NativeStackNavigationProp<RootStackParamList, Routes.detail>;

const NewsCard = ({ item }: { item: News }) => {
  const navigation = useNavigation<NewsScreenProp>();
  const toggleSave = useNewsStore(state => state.toggleSave);

  return (
    <TouchableOpacity onPress={() => navigation.navigate(Routes.detail, { item })}>
      <View style={styles.card}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: item.image }} style={styles.image} />
          <TouchableOpacity style={styles.savedIconWrapper} onPress={() => toggleSave(item.id)}>
            <SvgImage
              source={require('../../assets/svg/saved/saved.svg')}
              height={24}
              width={24}
              fill={item.isSaved ? 'black' : 'white'}
              stroke={'black'}

            />
          </TouchableOpacity>

        </View>
      </View>
      <View style={{ marginHorizontal: 10 }}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description} numberOfLines={2}>{item.description}</Text>
        <Text style={styles.date}>{item.date}</Text>
        <View style={{ width: "100%", backgroundColor: "#ccc", height: 1, marginTop: 12 }} />
      </View>
    </TouchableOpacity >
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
    backgroundColor: 'white',
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
    color: '#444',
  },
  date: {
    fontSize: 12,
    color: '#999',
    marginTop: 5,
  },
});

export default NewsCard;
