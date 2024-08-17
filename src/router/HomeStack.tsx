import React from 'react';
import {Home, ProductDetail} from '@screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator<HomeStackParamList>();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{contentStyle: {backgroundColor: 'white'}}}>
      <Stack.Screen name={'Home'} component={Home} options={{headerShadowVisible: false}} />

      <Stack.Screen
        name={'ProductDetail'}
        component={ProductDetail}
        options={{
          headerTransparent: true,
          title: '',
          headerBackTitleVisible: false,
          headerTintColor: 'black',
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
