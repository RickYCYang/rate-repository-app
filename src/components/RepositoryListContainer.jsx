import { FlatList, Pressable } from 'react-native';
import { useNavigate } from 'react-router-native';
import RepositoryItem from './RepositoryItem';
import ItemSeparator from './ItemSeparator';

import RepositoryListHeader from './RepositoryListHeader';

const RepositoryListContainer = ({
  repositories,
  openModal,
  selectedSortPrinciple,
  setSearchKeyword,
  onEndReach,
}) => {
  const navigate = useNavigate();
  //console.log('repositories', repositories);
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  const linkToRepository = ({ id }) => {
    navigate(`/${id}`, { replace: true });
  };

  return (
    <FlatList
      data={repositoryNodes}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
      ItemSeparatorComponent={ItemSeparator}
      ListHeaderComponent={
        <RepositoryListHeader
          openModal={openModal}
          selectedSortPrinciple={selectedSortPrinciple}
          setSearchKeyword={setSearchKeyword}
        />
      }
      renderItem={({ item }) => (
        <Pressable onPress={() => linkToRepository(item)}>
          <RepositoryItem repository={item} />
        </Pressable>
      )}
      keyExtractor={(repository) => repository.id}
    />
  );
};

export default RepositoryListContainer;
