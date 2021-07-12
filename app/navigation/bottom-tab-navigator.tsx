import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import LoginScreen from "../screens/login-screen/login-screen"
import WhySignUpScreen from "../screens/whysignup-screen/whysignup-screen"
import HomeScreen from "../screens/home-screen/home-screen"

const Tab = createBottomTabNavigator()

function BottomTabNavigator({ navigation }) {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "red",
        inactiveTintColor: "white",
        labelStyle: {
          fontSize: 20,
        },
        style: {
          backgroundColor: "black",
        },
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Login" component={LoginScreen} />
      <Tab.Screen name="Why Sign Up?" component={WhySignUpScreen} />
    </Tab.Navigator>
  )
}

export default BottomTabNavigator
