import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { initializeStore } from './src/store';
import { CartIcon, LogoIcon } from './src/components';
import { ProductDescriptionScreen, HomeScreen, CartScreen } from './src/pages';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={initializeStore()}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerStyle: { backgroundColor: '#E24E26' },
              headerTitle: () => <LogoIcon />,
              headerRight: () => <CartIcon />,
            }}
          />
          <Stack.Screen
            name="Cart"
            component={CartScreen}
            options={{
              headerStyle: { backgroundColor: '#E24E26' },
              headerTintColor: '#fff',
              headerTitle: () => <LogoIcon />,
            }}
          />
          <Stack.Screen
            name="Description"
            component={ProductDescriptionScreen}
            options={{
              headerStyle: { backgroundColor: '#E24E26' },
              headerTintColor: '#fff',
              headerTitle: () => <LogoIcon />,
              headerRight: () => <CartIcon />,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
