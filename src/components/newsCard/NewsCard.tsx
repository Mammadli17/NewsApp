import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { News } from '../../types/news.types';

const NewsCard = ({ item }: { item: News }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.date}>{item.date}</Text>
    </View>
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
