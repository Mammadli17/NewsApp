import React, { useEffect } from 'react';
import { View, FlatList, ActivityIndicator, RefreshControl, SafeAreaView, Text, StyleSheet, Image } from 'react-native';
import NewsCard from '../../../components/newsCard/NewsCard';
import { useNewsStore } from '../../../store/main/useNewsStore';

const SavedScreen = () => {
    const { saved, fetchNextPage, isLoading, reset } = useNewsStore();


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <View style={styles.side}>
                    <Image source={require('../../../assets/images/oba.jpg')} style={styles.logo} />
                </View>
                <View style={styles.center}>
                    <Text style={styles.headerText}>Yadda saxlanılanlar</Text>
                </View>
                <View style={styles.side} />
            </View>

            {saved.length > 0 ? (
                <FlatList
                    data={saved}
                    renderItem={({ item }) => <NewsCard item={item} />}
                    keyExtractor={(item) => item.id.toString()}
                    onEndReachedThreshold={0.5}
                />
            ) : (
                <View style={styles.emptyContainer}>
                    <Text style={styles.emptyText}>Hələ yadda saxlanılmış xəbər yoxdur.</Text>
                </View>
            )}
        </SafeAreaView>
    );
};


export default SavedScreen;

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
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    emptyText: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
        lineHeight: 24,
    },

});
