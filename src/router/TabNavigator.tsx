import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack.tsx';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={'HomeStack'} component={HomeStack} options={{headerShown: false}} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
