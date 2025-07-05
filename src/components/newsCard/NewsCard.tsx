import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { News } from '../../types/news.types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/navigation.types';
import { Routes } from '../../navigations/routes';

type NewsScreenProp = NativeStackNavigationProp<RootStackParamList, Routes.detail>;

const NewsCard = ({ item }: { item: News }) => {
  const navigation = useNavigation<NewsScreenProp>();

  return (
    <TouchableOpacity onPress={() => navigation.navigate(Routes.detail, { item })}>
      <View style={styles.card}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description} numberOfLines={2}>{item.description}</Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: { padding: 10, borderBottomWidth: 1, borderColor: '#ccc' },
  image: { width: '100%', height: 200, borderRadius: 8 },
  title: { fontSize: 18, fontWeight: 'bold', marginVertical: 5 },
  description: { fontSize: 14, color: '#444' },
  date: { fontSize: 12, color: '#999', marginTop: 5 },
});

export default NewsCard;
