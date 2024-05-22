import React from 'react';

import {FlatList} from 'react-native';
import EpisodeItem from '@components/EpisodeItem';
import {Episode} from '@models/Character';

interface EpisodeListProps {
  episodes: Episode[];
}

const EpisodeList: React.FC<EpisodeListProps> = ({episodes}) => {
  return (
    <FlatList
      data={episodes}
      keyExtractor={item => item.id.toString()}
      renderItem={({item}) => <EpisodeItem item={item} />}
    />
  );
};

export default EpisodeList;
