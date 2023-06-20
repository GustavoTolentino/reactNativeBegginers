import { useState } from 'react';
import { View, ScrollView, SafeAreaView, Text } from 'react-native';
import { Stack, useRouter } from 'expo-router';

import { COLORS, icons, images, SIZES } from '../constants';
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome, NextEvents } from '../components';

const Home = () => {
    const router = useRouter();

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite}}>
            <Stack.Screen
                options={{
                headerStyle: { backgroundColor: COLORS.lightWhite },
                headerShadowVisible: false,
                headerLeft: () => (
                    <ScreenHeaderBtn iconUrl={images.profile} dimension='100%' />
                ),
                headerRight: () => (
                    <ScreenHeaderBtn iconUrl={icons.menu} dimension='60%' />
                ),
                headerTitle: "",
                }}
            />

            <ScrollView showsHorizontalScrollIndicator={false}>
                <View style={{flex: 1, padding: SIZES.medium}}>
                    <Welcome />
                    <NextEvents />
                    <Popularjobs />
                    <Nearbyjobs />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;