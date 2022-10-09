import { useState } from 'react';
import { View } from 'react-native';

import RepositoryListContainer from './RepositoryListContainer';
import useRepositories from '../hooks/useRepositories';
import RepositorySortModal from './RepositorySortModal';

import { sortPrincipleOfRepository, sortPrinciples } from '../utils/const';

const RepositoryList = () => {
  const [selectedSortPrinciple, setSelectedSortPrinciple] = useState(
    sortPrincipleOfRepository[sortPrinciples.LATEST_REPOSITORY]
  );
  const [searchKeyword, setSearchKeyword] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const { repositories, fetchMore } = useRepositories(
    selectedSortPrinciple?.orderBy,
    selectedSortPrinciple?.orderDirection,
    searchKeyword
  );

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  const onEndReach = () => {
    //console.log('You have reached the end of the list');
    fetchMore();
  };

  //console.log('repositories', repositories);

  return (
    <View>
      <RepositoryListContainer
        repositories={repositories}
        openModal={openModal}
        selectedSortPrinciple={selectedSortPrinciple}
        setSearchKeyword={setSearchKeyword}
        onEndReach={onEndReach}
      />
      <RepositorySortModal
        visible={modalVisible}
        openModal={openModal}
        closeModal={closeModal}
        selectedSortPrinciple={selectedSortPrinciple}
        setSelectedSortPrinciple={setSelectedSortPrinciple}
      />
    </View>
  );
};

export default RepositoryList;
