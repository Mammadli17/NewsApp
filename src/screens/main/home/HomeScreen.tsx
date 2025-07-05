import React, { useEffect } from 'react';
import {
  View,
  FlatList,
  ActivityIndicator,
  RefreshControl,
  SafeAreaView,
  Text,
  StyleSheet,
  Image,
} from 'react-native';
import NewsCard from '../../../components/newsCard/NewsCard';
import { useNewsStore } from '../../../store/main/useNewsStore';
import SkeletonNewsCard from '../../../components/newsCard/SkeltonNewsCard';

const HomeScreen = () => {
  const { news, fetchNextPage, isLoading, reset, loadSaved, isSavedLoading } = useNewsStore();

  useEffect(() => {
    const initialize = async () => {
      await loadSaved();
      await fetchNextPage();
    };

    initialize();

    return () => reset();
  }, []);

  const handleLoadMore = () => {
    fetchNextPage();
  };



  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.side}>
          <Image source={require('../../../assets/images/oba.jpg')} style={styles.logo} />
        </View>
        <View style={styles.center}>
          <Text style={styles.headerText}>Xəbərlər</Text>
        </View>
        <View style={styles.side} />
      </View>
      {
        isLoading ?
          <SafeAreaView style={[styles.container, styles.center, { marginTop: 230 }]}>
            <SkeletonNewsCard />
            <SkeletonNewsCard />
            <SkeletonNewsCard />
          </SafeAreaView>
          :
          <FlatList
            data={news}
            renderItem={({ item }) => <NewsCard item={item} />}
            keyExtractor={(item) => item.id.toString()}
            onEndReached={handleLoadMore}
            onEndReachedThreshold={0.5}
          />
      }

    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    color: 'rgba(1, 86, 86, 1)',
    fontWeight: '800',
  },
});
