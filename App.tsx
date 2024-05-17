import React from 'react';
import {Text, View} from 'react-native';
import {globalStyles} from './src/styles/global';

function App(): React.JSX.Element {
  return (
    <View style={globalStyles.screenContainer}>
      <View style={globalStyles.content}>
        <Text style={globalStyles.sectionTitle}>Rick and Morty</Text>
      </View>
    </View>
  );
}

export default App;
