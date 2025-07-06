import React, { useEffect } from 'react';
import {
  View,
  FlatList,
  SafeAreaView,
  Text,
  StyleSheet,
  Image,
} from 'react-native';
import NewsCard from '../../../components/newsCard/NewsCard';
import { useNewsStore } from '../../../store/main/useNewsStore';
import SkeletonNewsCard from '../../../components/newsCard/SkeltonNewsCard';
import { useTheme } from '../../../context/ThemeContext';

const HomeScreen = () => {
  const { news, fetchNextPage, isLoading, reset, loadSaved } = useNewsStore();
  const { theme } = useTheme(); 

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
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={styles.header}>
        <View style={styles.side}>
          <Image source={require('../../../assets/images/oba.jpg')} style={styles.logo} />
        </View>
        <View style={styles.center}>
          <Text style={[styles.headerText, { color: theme.colors.text }]}>Xəbərlər</Text>
        </View>
        <View style={styles.side} />
      </View>

      {isLoading ? (
        <View style={[styles.center, { marginTop: 230 }]}>
          <SkeletonNewsCard />
          <SkeletonNewsCard />
          <SkeletonNewsCard />
        </View>
      ) : (
        <FlatList
          data={news}
          renderItem={({ item }) => <NewsCard item={item} />}
          keyExtractor={(item) => item.id.toString()}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.5}
          contentContainerStyle={{ paddingBottom: 24 }}
          showsVerticalScrollIndicator={false}
        />
      )}
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
    fontWeight: '800',
  },
});
