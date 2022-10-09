import { useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { IconComponentProvider, Icon } from '@react-native-material/core';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Searchbar } from 'react-native-paper';
import { useDebouncedCallback } from 'use-debounce';

import Text from './Text';

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  sortContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});

const RepositoryListHeader = ({
  openModal,
  selectedSortPrinciple,
  setSearchKeyword,
}) => {
  const [nonDebounceSearch, setNonDebounceSearch] = useState('');
  const onChangeSearch = (query) => {
    setNonDebounceSearch(query);
    debounced(query);
  };
  const debounced = useDebouncedCallback(
    (query) => {
      setSearchKeyword(query);
    },
    // delay in ms
    1000
  );

  return (
    <IconComponentProvider IconComponent={MaterialCommunityIcons}>
      <View style={styles.container}>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={nonDebounceSearch}
        />
        <View style={styles.sortContainer}>
          <Text fontSize="subheading">{selectedSortPrinciple.principle}</Text>
          <Pressable onPress={openModal}>
            <Icon name="menu" size={24} />
          </Pressable>
        </View>
      </View>
    </IconComponentProvider>
  );
};

export default RepositoryListHeader;
