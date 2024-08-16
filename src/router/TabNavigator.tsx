import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack.tsx';
import {Cart} from '@screens';
import {useSelector} from 'react-redux';
import {getCartItems} from '@store';

const Tab = createBottomTabNavigator<TabParamList>();

const TabNavigator = () => {
  const cartItems = useSelector(getCartItems);

  return (
    <Tab.Navigator>
      <Tab.Screen name={'HomeStack'} component={HomeStack} options={{headerShown: false}} />
      <Tab.Screen name={'Cart'} component={Cart} options={{tabBarBadge: cartItems.length}} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
