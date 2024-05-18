import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SwipeScreen from "../screens/SwipeScreen";
import ActivityScreen from "../screens/ActivityScreen";
import PostScreen from "../screens/PostScreen";
import ChatScreen from "../screens/ChatScreen";
import ProfileScreen from "../screens/ProfileScreen";
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import FontAwesome6Icon from 'react-native-vector-icons/FontAwesome6';

const Tab = createBottomTabNavigator();
export default function HomeNavigation() {

    return (

        <Tab.Navigator
            screenOptions={{
                activeTintColor: "white",
                tabBarActiveTintColor: "darkorange",
                tabBarInactiveTintColor: "gray",
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: '#FDEEEE',
                    alignSelf: 'center', // Center the tab bar horizontally
                    position: 'absolute', // If you want to position it differently
                    bottom: 0, // Keep it at the bottom
                  },
                
            }}
        >
            <Tab.Screen
                name="Swipe"
                component={SwipeScreen}
                options={{
                    tabBarLabel: "Swipe",
                    tabBarIcon: ({ color }) => (
                        <MaterialIcon name="library-books" size={25} color={color} />
                    ),
                }}
            />

            <Tab.Screen
                name="Activity"
                component={ActivityScreen}
                options={{
                    tabBarLabel: "Activity",
                    tabBarIcon: ({ color }) => (
                        <FontAwesome5Icon name="globe" size={25} color={color} />
                    ),
                }}
            />

            <Tab.Screen
                name="Post"
                component={PostScreen}
                options={{
                    tabBarLabel: "Post",
                    tabBarIcon: ({ color }) => (
                        <MaterialIcon name="add-box" size={25} color={color} />
                    ),
                }}
            />

            <Tab.Screen
                name="Chat"
                component={ChatScreen}
                options={{
                    tabBarLabel: "Chat",
                    tabBarIcon: ({ color }) => (
                        <MaterialIcon name="mark-unread-chat-alt" size={25} color={color} />
                    ),
                }}
            />

            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarLabel: "Profile",
                    tabBarIcon: ({ color }) => (
                        <FontAwesome6Icon name="circle-user" size={25} color={color} />
                    ),
                }}
            />

        </Tab.Navigator>
    );
}