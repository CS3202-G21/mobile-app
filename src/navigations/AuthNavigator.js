import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SIGNIN, SIGNUP, SPLASH } from '../constants/routeNames';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import Splash from '../screens/Splash';

const AuthNavigator = () => {
  const AuthStack = createStackNavigator();
  return (
    <AuthStack.Navigator initialRouteName={SignIn}>
      <AuthStack.Screen
        name={SIGNIN}
        component={SignIn}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen name={SIGNUP} component={SignUp} />
      <AuthStack.Screen name={SPLASH} component={Splash} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
