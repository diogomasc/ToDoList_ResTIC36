import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  FlatList,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert,
} from "react-native";
import Home from "./src/screens/Home";
import Details from "./src/screens/Details";
import TaskProvider from "./src/context/TaskContextProps";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <TaskProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Details" component={Details} />
          </Stack.Navigator>
        </NavigationContainer>
        <StatusBar style="auto" />
      </TaskProvider>
    </>
  );
}
