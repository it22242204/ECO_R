import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AccountScreen from './screens/AccountScreen';
import AdminProductsScreen from './screens/ProductsScreen';
import Collection from './screens/Collection';
import UpdateCardScreen from './screens/UpdateCard';
import Payments from './screens/Payments';
import LocationTracker from './screens/LocationTracker';
import Security from './screens/Security';
import NewProduct from './screens/NewProduct';
import CollectionConfirmation from './screens/CollectionConfirmation';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import InsertCard from './screens/InsertCard';
import Signin_Signup from './screens/Signin_Signup';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Signin_Signup"
        screenOptions={{ headerShown: false }} // Hides the default header for all screens
      >
        <Stack.Screen name="Signin_Signup" component={Signin_Signup} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="AccountScreen" component={AccountScreen} />
        <Stack.Screen name="AdminProductsScreen" component={AdminProductsScreen} />
        <Stack.Screen name="Collection" component={Collection} />
        <Stack.Screen name="UpdateCardScreen" component={UpdateCardScreen} />
        <Stack.Screen name="Payment" component={Payments} />
        <Stack.Screen name="LocationTracker" component={LocationTracker} />
        <Stack.Screen name="Security" component={Security} />
        <Stack.Screen name="NewProduct" component={NewProduct} />
        <Stack.Screen name="CollectionConfirmation" component={CollectionConfirmation} />
        <Stack.Screen name="InsertCard" component={InsertCard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
