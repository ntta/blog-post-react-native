import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import IndexScreen from './src/screens/IndexScreen';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';
import ShowScreen from './src/screens/ShowScreen';

import { Provider as BlogProvider } from './src/context/BlogContext';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Index'
          component={IndexScreen}
          options={{ title: 'Blog List' }}
        />
        <Stack.Screen
          name='Show'
          component={ShowScreen}
          options={{ title: 'Blog Detail' }}
        />
        <Stack.Screen
          name='Create'
          component={CreateScreen}
          options={{ title: 'Create a new blog' }}
        />
        <Stack.Screen
          name='Edit'
          component={EditScreen}
          options={{ title: 'Edit the blog' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default () => {
  return (
    <BlogProvider>
      <App />
    </BlogProvider>
  );
};
