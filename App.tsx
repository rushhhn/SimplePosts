/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';

import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {PostList} from './src/components/PostList';
import {PostItem} from './src/components/PostItem';
import {Provider} from 'react-redux';
import {store} from './src/redux';

export type TStackParamList = {
  PostList: undefined;
  PostItem: {id: number};
};

const Stack = createStackNavigator<TStackParamList>();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'grey',
  },
};

const screenOptions = {
  headerStyle: {
    backgroundColor: 'grey',
    shadowColor: 'white',
  },
  headerTitleStyle: {
    color: 'white',
  },
  headerLeft: () => null,
};

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator screenOptions={screenOptions}>
          <Stack.Screen name="PostList" component={PostList} />
          <Stack.Screen name="PostItem" component={PostItem} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
