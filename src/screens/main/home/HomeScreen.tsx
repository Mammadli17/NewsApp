import React, { useEffect, useCallback, useRef } from 'react';
import {
  View,
  FlatList,
  SafeAreaView,
  Text,
  StyleSheet,
  Image,
  ListRenderItem,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import NewsCard from '../../../components/newsCard/NewsCard';
import { useNewsStore } from '../../../store/main/useNewsStore';
import SkeletonNewsCard from '../../../components/newsCard/SkeltonNewsCard';
import { useTheme } from '../../../context/ThemeContext';
import { News } from '../../../types/news.types';

const HomeScreen = () => {
  const { news, fetchNextPage, isLoading, loadSaved } = useNewsStore();
  const { theme } = useTheme();

  const scrollOffset = useRef(0);
  const flatListRef = useRef<FlatList<News>>(null);

  useEffect(() => {
    const initialize = async () => {
      await loadSaved();
      await fetchNextPage();
    };
    initialize();
  }, [loadSaved, fetchNextPage]);

  const handleLoadMore = () => {
    if (!isLoading) {
      fetchNextPage();
    }
  };

  const renderItem: ListRenderItem<News> = useCallback(
    ({ item }) => <NewsCard item={item} />,
    []
  );

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    scrollOffset.current = event.nativeEvent.contentOffset.y;
  };

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <View style={styles.header}>
        <View style={styles.side}>
          <Image
            source={require('../../../assets/images/oba.jpg')}
            style={styles.logo}
          />
        </View>
        <View style={styles.center}>
          <Text style={[styles.headerText, { color: theme.colors.text }]}>
            Xəbərlər
          </Text>
        </View>
        <View style={styles.side} />
      </View>

      {isLoading && news.length === 0 ? (
        <View style={[styles.center,]}>
          <SkeletonNewsCard />
          <SkeletonNewsCard />
          <SkeletonNewsCard />
        </View>
      ) : (
        <FlatList
          ref={flatListRef}
          data={news}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.5}
          contentContainerStyle={{ paddingBottom: 24 }}
          showsVerticalScrollIndicator={false}
          initialNumToRender={10}
          maxToRenderPerBatch={10}
          windowSize={7}
          removeClippedSubviews={true}
          onScroll={onScroll}
          scrollEventThrottle={16}
          maintainVisibleContentPosition={{ minIndexForVisible: 0 }}
        />
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: { flex: 1 },
  center: { justifyContent: 'center', alignItems: 'center' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  side: { width: 32, height: 32, justifyContent: 'center', alignItems: 'center' },
  logo: { width: 28, height: 28, borderRadius: 8, resizeMode: 'contain' },
  headerText: { fontSize: 22, fontWeight: '800' },
});
