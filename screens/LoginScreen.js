import React , {useState} from 'react';
import { SafeAreaView, StyleSheet, View, Text, TextInput, Pressable } from 'react-native';
import Svg, { Text as SvgText, Defs, LinearGradient, Stop } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
    const [phoneNumber, setPhoneNumber] = useState();
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
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
                        fontSize="35"
                        fontWeight="bold"
                        x="0"
                        y="40"
                    >
                        Log in
                    </SvgText>
                </Svg>
            </View>

            <View style={styles.textInputView}>
                <Text style={{ color: 'gray', fontSize: 16, padding: 3, fontSize: 18, fontWeight: 'semibold'}}>
                    Enter your mobile number
                </Text>
            </View>

            <View style={{borderWidth: 2 , borderColor: '#FFB54D' , width: 350 , height: 60, marginTop:50 , marginLeft: 25, borderRadius: 20}}>
            <TextInput
                    style={{color: 'black', flex: 1, paddingLeft: 12, fontSize: 16}}
                    placeholder='Phone Number'
                    placeholderTextColor='gray'
                    multiline={false} // Set to false for single line input
                    textAlignVertical='top'
                    numberOfLines={1}
                    value={phoneNumber} // Value is controlled by mobileNumber state
                    onChangeText={setPhoneNumber} // Update mobileNumber state when input changes
                    keyboardType="numeric" // Set keyboard type to numeric for mobile number input
                    maxLength={10} // Set maximum length to 10 digits
                />
            </View>

            <View style={{marginTop: 150, width: 300, height: 70, marginLeft: 40}}>
                <View style={{flexDirection: 'row'}}>
                    <View>
                <Text style={{color: 'gray', fontWeight: 'bold' , paddingLeft : 50, fontSize: 18 }}>Or login using</Text>
                </View>
                <View>
                <Text style={{color: 'blue', fontWeight: 'bold' , fontSize: 18, paddingLeft: 5}}>Facebook</Text>
                </View>
                </View>

                <View style={{flexDirection: 'row'}}>
                    <View>
                <Text style={{color: 'gray', fontWeight: 'bold' , paddingLeft : 5, fontSize: 18 }}>Don't have an account?</Text>
                </View>
                <View>
                <Text style={{color: '#FFB54D', fontWeight: 'bold' , fontSize: 18, paddingLeft: 5}}>Create one.</Text>
                </View>
                </View>
            </View>
            <Pressable onPress={()=> navigation.navigate("Home")}>
            <View style={{ backgroundColor: '#E85353', width: 350 , height: 60 , marginLeft: 20, borderRadius: 20}}>
                <Text style={{color: 'white', fontWeight: 'semibold', fontSize: 25, marginLeft: 145, paddingTop: 12}}>Log in</Text>
            </View>
            </Pressable>
        </SafeAreaView>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    textContainer: {
        padding: 15,
        borderRadius: 5,
        marginTop: 20,
        marginLeft: 10,
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

});
