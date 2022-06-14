import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Feed, Home, Official, Transaksi, Wishlist } from '../Pages';

const Stack = createNativeStackNavigator();

function Router() {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{
      headerShown: false, animationEnabled: false
    }}>
      <Stack.Screen name="Home" component={Home} options={{
        animationEnabled: false,
      }}
      />
      <Stack.Screen name="Feed" component={Feed} options={{
        animationEnabled: false,
      }}
      />
      <Stack.Screen name="Official" component={Official} options={{
        animationEnabled: false,
      }}
      />
      <Stack.Screen name="Wishlist" component={Wishlist} options={{
        animationEnabled: false,
      }} />
      <Stack.Screen name="Transaksi" component={Transaksi} options={{
        animationEnabled: false,
      }} />
    </Stack.Navigator>
  );
};

export default Router;