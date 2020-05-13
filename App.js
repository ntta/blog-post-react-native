import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IndexScreen from './src/screens/IndexScreen';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';
import ShowScreen from './src/screens/ShowScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Index'
          component={ShowScreen}
          options={{ title: 'Index' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
