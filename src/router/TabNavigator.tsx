import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack.tsx';
import {Cart} from '@screens';
import {useSelector} from 'react-redux';
import {getCartItems} from '@store';
import {Icon} from '@components';

const Tab = createBottomTabNavigator<TabParamList>();

const TabNavigator = () => {
  const cartItems = useSelector(getCartItems);

  return (
    <Tab.Navigator>
      <Tab.Screen
        name={'HomeStack'}
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          headerShown: false,
          tabBarIcon: ({color, size}) => <Icon name={'home'} color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name={'Cart'}
        component={Cart}
        options={{
          tabBarBadge: cartItems.length > 0 ? cartItems.length : undefined,
          tabBarIcon: ({color, size}) => <Icon name={'cart'} color={color} size={size} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
