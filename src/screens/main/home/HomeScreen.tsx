import React, { useEffect } from 'react';
import { View, FlatList, ActivityIndicator, RefreshControl, SafeAreaView, Text, StyleSheet, Image } from 'react-native';
import NewsCard from '../../../components/newsCard/NewsCard';
import { useNewsStore } from '../../../store/main/useNewsStore';

const HomeScreen = () => {
  const { news, fetchNextPage, isLoading, reset } = useNewsStore();

  useEffect(() => {
    fetchNextPage();
    return () => reset();
  }, []);

  const handleLoadMore = () => {
    fetchNextPage();
  };

  const renderFooter = () => isLoading ? (
    <ActivityIndicator style={{ margin: 10 }} />
  ) : null;

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
      <FlatList
        data={news}
        renderItem={({ item }) => <NewsCard item={item} />}
        keyExtractor={(item) => item.id.toString()}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={renderFooter}
        refreshControl={
          <RefreshControl refreshing={false} onRefresh={() => {
            reset();
            fetchNextPage();
          }} />
        }
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  center: {
    flex: 1,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 22,
    color: 'rgba(1, 86, 86, 1)',
    fontWeight: '800',
  },
});
