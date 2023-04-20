import React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Header } from 'react-native-elements';
import MessScreen from "../screens/MessScreen";
import MessInit from "../Messagerie/MessInit";

const MessStackScreen = () => {
  const MessStack = createNativeStackNavigator();
  return (
    <MessStack.Navigator
     screenOptions={{
        header: (props) => <Header {...props} />,
      }}
      >
      <MessStack.Screen
        name="Messagerie"
        component={MessScreen}
        options={{
          title: '',
          headerShown: false,
        }}
      />
      <MessStack.Screen
        name="Message"
        component={MessInit}
        options={{
          title: '',
        }}
      />
    </MessStack.Navigator>
  );
};

export default MessStackScreen;