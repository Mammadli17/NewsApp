import React from 'react';
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
import { useTheme } from '../../../context/ThemeContext';

const SavedScreen = () => {
    const { saved } = useNewsStore();
    const { theme } = useTheme();

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
            <View style={styles.header}>
                <View style={styles.side}>
                    <Image source={require('../../../assets/images/oba.jpg')} style={styles.logo} />
                </View>
                <View style={styles.center}>
                    <Text style={[styles.headerText, { color: theme.colors.text }]}>Yadda saxlanılanlar</Text>
                </View>
                <View style={styles.side} />
            </View>

            {saved.length > 0 ? (
                <FlatList
                    data={saved}
                    renderItem={({ item }) => <NewsCard item={item} />}
                    keyExtractor={(item) => item.id.toString()}
                    onEndReachedThreshold={0.5}
                    showsVerticalScrollIndicator={false}
                />
            ) : (
                <View style={styles.emptyContainer}>
                    <Text style={[styles.emptyText, { color: theme.colors.text + '99' }]}>
                        Hələ yadda saxlanılmış xəbər yoxdur.
                    </Text>
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
        textAlign: 'center',
        lineHeight: 24,
    },
});
