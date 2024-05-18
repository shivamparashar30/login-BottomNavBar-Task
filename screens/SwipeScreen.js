import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, FlatList, TextInput, Pressable, Dimensions, Image } from 'react-native';
import Svg, { Text as SvgText, Defs, LinearGradient, Stop } from 'react-native-svg';
import Icon from 'react-native-vector-icons/FontAwesome6'
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Gradient from 'react-native-linear-gradient';
const { width: viewportWidth } = Dimensions.get('window');

const SwipeScreen = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    const carouselItems = [
        {
            src: require('../assets/image1.jpeg'),
            data: [
                { id: "1", Name: "Utkarsh Singh", Age: "21 y.o", occupation: 'UX Designer', distance: '2 Km away' },
            ]
        },
        {
            src: require('../assets/image2.jpeg'),
            data: [
                { id: "2", Name: "Shivam Parashar", Age: "24 y.o", occupation: 'Web Developer', distance: '3 Km away' },
            ]
        },
        {
            src: require('../assets/image3.jpeg'),
            data: [
                { id: "3", Name: "Anirudh Sharma", Age: "23 y.o", occupation: 'App Developer', distance: '4 Km away' },
            ]
        },
    ];
    const renderItem = ({ item }) => {
        return (
            <View style={styles.imageContainer}>
                <Image source={item.src} style={styles.image} />
                <Gradient
                    colors={['rgba(232, 83, 83, 0.4)', 'rgba(255, 213, 153, 0.3)']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    style={styles.linearGradient}
                >

                    <FlatList
                        data={item.data}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <View>
                            <View style={{ width: 200, marginTop: 20 }}>
                                <Text style={{ color: 'white', paddingLeft: 15, paddingTop: 10, fontSize: 20, fontWeight: '700' }}>{item.Name}</Text>
                                <Text style={{ color: 'white', paddingLeft: 15, paddingTop: 5, fontSize: 15, fontWeight: '500' }}>{item.Age}</Text>
                                <Text style={{ color: 'white', paddingLeft: 15, paddingTop: 5, fontSize: 15, fontWeight: '500' }}>{item.occupation}</Text>
                                <Text style={{ color: 'white', paddingLeft: 15, paddingTop: 5, fontSize: 15, fontWeight: '500' }}>{item.distance}</Text>
                            </View>
                            <View style={{borderRadius: 30, backgroundColor: '#FFB54D' , width: 100 , height: 30 , marginTop: -95, marginLeft: 190}}>
                                <Text style={{color:'black' , paddingLeft: 20, paddingTop: 6}}>Kumaoni</Text>
                            </View>
                            <View style={{borderRadius: 30, backgroundColor: '#ffffff' , width: 40 , height: 40, marginLeft: 220, marginTop: 20}}>
                                <Text style={{color:'black' , paddingLeft: 10, paddingTop: 12}}>💙</Text>
                            </View>
                            
                            </View>
                        )}
                    />
                </Gradient>
            </View>
        );
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={styles.textContainer}>
                <Svg height="60" width="300">
                    <Defs>
                        <LinearGradient id="grad" x1="0" y1="0" x2="1" y2="0">
                            <Stop offset="0" stopColor="#FF9500" stopOpacity="1" />
                            <Stop offset="1" stopColor="#E85353" stopOpacity="1" />
                        </LinearGradient>
                    </Defs>
                    <SvgText
                        fill="url(#grad)"
                        fontSize="25"
                        fontWeight="bold"
                        x="0"
                        y="40"
                    >
                        Yo, people around you 🔥
                    </SvgText>
                </Svg>
            </View>

            <View style={styles.textInputView}>
                <View style={{ flexDirection: 'row' }}>
                    <View>
                        <Icon name="location-pin" size={20} color={'orange'} style={{ marginTop: 10, marginLeft: 2 }} />
                    </View>
                    <View>
                        <Text style={{ color: 'darkorange', fontSize: 16, paddingTop: 10, paddingBottom: 5, paddingLeft: 10, fontSize: 18, fontWeight: 'semibold' }}>
                            Dehradun
                        </Text>
                    </View>
                </View>
            </View>

            <Carousel
                data={carouselItems}
                renderItem={renderItem}
                sliderWidth={viewportWidth}
                itemWidth={viewportWidth}
                onSnapToItem={(index) => setActiveSlide(index)}
            />

            <View style={styles.paginationContainer}>
                <Pagination
                    dotsLength={carouselItems.length}
                    activeDotIndex={activeSlide}
                    containerStyle={styles.pagination}
                    dotStyle={styles.dot}
                    inactiveDotStyle={styles.inactiveDot}
                    inactiveDotOpacity={0.4}
                    inactiveDotScale={0.6}
                />
            </View>

            <View style={styles.buttonContainer}>
                <Pressable style={{
                    paddingVertical: 10,
                    paddingHorizontal: 45,
                    borderRadius: 30,
                    borderWidth: 2,
                    borderColor: "darkorange"
                }}>
                    <Text style={{
                        color: 'black',
                        fontSize: 16,
                        fontWeight: 'bold',
                    }}>💔 Pass</Text>
                </Pressable>
                <Pressable style={{
                    paddingVertical: 10,
                    paddingHorizontal: 45,
                    borderRadius: 30,
                    backgroundColor: "#E85353"
                }}>
                    <Text style={{
                        color: 'white',
                        fontSize: 16,
                        fontWeight: 'bold',
                    }}>🧡 Match</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

export default SwipeScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    textContainer: {
        padding: 1,
        borderRadius: 5,
        marginLeft: 20,
    },
    textInputView: {
        borderBottomWidth: 1, // Bottom border width
        borderBottomColor: 'gray', // Bottom border color
        borderStyle: '', // Solid border style for the bottom
        width: 350,
        marginTop: -10,
        marginLeft: 25,
        padding: 1, // Padding for space around the text
        backgroundColor: '#fff', // Background color for contrast
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -150
    },
    image: {
        width: viewportWidth * 0.9,
        height: viewportWidth * 1.2,
        borderRadius: 30,
    },
    paginationContainer: {
        position: 'absolute',
        top: -50,
        right: 10,
    },
    pagination: {
        paddingVertical: 10,
        paddingHorizontal: 300
    },
    dot: {
        marginTop: 200,
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: 'darkorange',
    },
    inactiveDot: {
        backgroundColor: 'orange',
    },
    buttonContainer: {
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'space-around',
        left: 0,
        right: 0,
        bottom: 80,
    },
    button: {
        backgroundColor: 'orange',
        paddingVertical: 10,
        paddingHorizontal: 45,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    linearGradient: {
        position: 'absolute',
        width: '80%',
        height: '20%',
        borderRadius: 30,
        bottom: 180
    },
});
