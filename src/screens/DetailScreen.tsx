import React from 'react';
import {Text, View} from 'react-native';
import {globalStyles} from '@styles/global';

function DetailScreen(): React.JSX.Element {
  return (
    <View style={globalStyles.screenContainer}>
      <View style={globalStyles.content}>
        <Text style={globalStyles.sectionTitle}>DetailScreen</Text>
      </View>
    </View>
  );
}

export default DetailScreen;
