import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const SkeletonNewsCard = () => {
  return (
    <SafeAreaView style={styles.container}>
      <SkeletonPlaceholder borderRadius={8}>
        <View style={styles.image} />
        <View style={styles.textContainer}>
          <View style={styles.title} />
          <View style={styles.description} />
          <View style={styles.descriptionShort} />
          <View style={styles.date} />
        </View>
      </SkeletonPlaceholder>
      <View style={styles.separator} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    width:"100%"
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  textContainer: {
    marginTop: 10,
  },
  title: {
    width: '70%',
    height: 20,
    marginBottom: 6,
  },
  description: {
    width: '90%',
    height: 14,
    marginBottom: 4,
  },
  descriptionShort: {
    width: '60%',
    height: 14,
    marginBottom: 6,
  },
  date: {
    width: '40%',
    height: 12,
  },
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: '#ccc',
    marginTop: 12,
  },
  
});

export default SkeletonNewsCard;
