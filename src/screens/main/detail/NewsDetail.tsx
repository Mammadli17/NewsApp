import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../../types/navigation.types';
import { Routes } from '../../../navigations/routes';

type NewsDetailRouteProp = RouteProp<RootStackParamList, Routes.detail>;

const NewsDetail = () => {
    const { params: { item } } = useRoute<NewsDetailRouteProp>();

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>{item.title}</Text>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.date}>{item.date}</Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: { padding: 16, gap: 8, marginHorizontal: 12 },
    image: { width: '100%', height: 280, borderRadius: 12, resizeMode: "contain" },
    title: { fontSize: 24, fontWeight: 'bold', marginVertical: 10 },
    date: { fontSize: 14, color: '#888', marginBottom: 10, alignSelf: 'flex-end', marginTop: 12, right: 6 },
    description: { fontSize: 16, lineHeight: 24, color: '#333' },
    header: {
        alignItems: "center",
        marginBottom: 12
    },
    headerText: {
        fontSize: 22,
        color: "rgba(1, 86, 86, 1)",
        fontWeight: "800"
    }
});

export default NewsDetail;
