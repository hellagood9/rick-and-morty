import React from 'react';
import {Button, Text, View} from 'react-native';
import {globalStyles} from '@styles/global';
import {useAppNavigation} from '@navigation/useAppNavigation';

function HomeScreen(): React.JSX.Element {
  const navigation = useAppNavigation();

  return (
    <View style={globalStyles.screenContainer}>
      <View style={globalStyles.content}>
        <Text style={globalStyles.sectionTitle}>Rick and Morty</Text>

        <Button
          title="Go to Detail"
          onPress={() => navigation.navigate('Detail')}
        />
      </View>
    </View>
  );
}

export default HomeScreen;