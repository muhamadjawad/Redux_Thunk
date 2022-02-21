import {View, Text} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import store from './Source/Redux/store';
import Home from './Source/Screens/Home';

export default function App() {
  const fetchData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await res.json();
    await console.log('Data', data);
  };

  return (
    <Provider store={store}>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <Text>APPP</Text>

        <Home />
      </View>
    </Provider>
  );
}
