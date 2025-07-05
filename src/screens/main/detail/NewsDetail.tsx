import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../../types/navigation.types';
import { Routes } from '../../../navigations/routes';
import { SvgImage } from '../../../components/svgImage/SvgImage';

type NewsDetailRouteProp = RouteProp<RootStackParamList, Routes.detail>;

const NewsDetail = () => {
    const { params: { item } } = useRoute<NewsDetailRouteProp>();
    const navigation = useNavigation()
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
                    onPress={() => navigation.goBack()}
                >
                    <SvgImage
                        source={require('../../../assets/svg/back/back.svg')}
                        height={25}
                        width={25}
                        fill="#000000"
                    />
                </TouchableOpacity>
                <View style={styles.center}>
                    <Text style={styles.headerText}>Elan detalı</Text>
                </View>
                <View style={styles.side} />

            </View>
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
    title: { fontSize: 20, fontWeight: 'bold', marginVertical: 10 },
    date: { fontSize: 14, color: '#888', marginBottom: 10, alignSelf: 'flex-end', marginTop: 12, right: 6 },
    description: { fontSize: 16, lineHeight: 24, color: '#333' },

    headerText: {
        fontSize: 22,
        color: "rgba(1, 86, 86, 1)",
        fontWeight: "800"
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 12,
        paddingTop: 10,
    },
    side: {
        width: 28
    },
    logo: {
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default NewsDetail;
