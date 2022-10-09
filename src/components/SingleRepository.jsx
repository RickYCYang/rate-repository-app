import { FlatList, View, StyleSheet } from 'react-native';
import { useParams } from 'react-router-native';
import RepositoryItem from './RepositoryItem';
import ReviewItem from './ReviewItem';
import ItemSeparator from './ItemSeparator';

import useRepository from '../hooks/useRepository';

const styles = StyleSheet.create({
  HeaderContainer: {
    marginBottom: 10,
  },
});

const SingleRepository = () => {
  let { id } = useParams();
  const { repository, reviews, fetchMore } = useRepository(id);

  const onEndReach = () => {
    //console.log('You have reached the end of the list');
    fetchMore();
  };

  if (!repository) return null;

  //console.log('repository', repository.reviews.pageInfo);

  return (
    <View>
      <FlatList
        data={reviews}
        onEndReached={onEndReach}
        onEndReachedThreshold={0.5}
        renderItem={({ item }) => <ReviewItem review={item} />}
        ItemSeparatorComponent={ItemSeparator}
        keyExtractor={({ id }) => id}
        ListHeaderComponent={() => (
          <View style={styles.HeaderContainer}>
            <RepositoryItem repository={repository} showOpenUrlButton={true} />
          </View>
        )}
      />
    </View>
  );
};

export default SingleRepository;
