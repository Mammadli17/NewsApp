import React, { useEffect } from 'react';
import { View, FlatList, ActivityIndicator, RefreshControl, SafeAreaView, Text, StyleSheet } from 'react-native';
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
        <Text style={styles.headerText}>Xəbərlər</Text>

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


export default HomeScreen
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
     alignItems:"center",
     marginBottom:12
  },
  headerText:{
    fontSize:22,
    color:"rgba(1, 86, 86, 1)",
    fontWeight:"800"
  }
});