import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/LoginScreen';
// import HomeScreen from '../screens/HomeScreen';
import HomeNavigation from './HomeNavigation';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="Home" component={HomeNavigation} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );

}