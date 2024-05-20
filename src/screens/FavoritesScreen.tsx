import React from 'react';
import {Text, View} from '@components/common';

import {globalStyles} from '@styles/global';

function FavoritesScreen(): React.JSX.Element {
  return (
    <View style={globalStyles.screenContainer}>
      <View style={globalStyles.content}>
        <Text style={globalStyles.sectionTitle}>FavoritesScreen</Text>
      </View>
    </View>
  );
}

export default FavoritesScreen;
