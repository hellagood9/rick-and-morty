import React from 'react';
import spacing from '@constants/spacing';
import {Episode} from '@models/Character';

import {FlatList, StyleSheet, Dimensions} from 'react-native';
import {View, Text} from '@components/common';

interface EpisodeListProps {
  episodes: Episode[];
}

const EpisodeList: React.FC<EpisodeListProps> = ({episodes}) => {
  const {width} = Dimensions.get('window');

  return (
    <FlatList
      data={episodes}
      keyExtractor={item => item.id.toString()}
      style={{width: width - spacing.xLarge}}
      renderItem={({item}) => (
        <View style={styles.episodeContainer}>
          <Text style={styles.episodeName}>{item.name}</Text>
          <Text>Air Date: {item.air_date}</Text>
          <Text>Episode: {item.episode}</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  episodeContainer: {
    marginVertical: 8,
    padding: 16,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
  },
  episodeName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
});

export default EpisodeList;
