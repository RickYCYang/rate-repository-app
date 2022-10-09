import { useState } from 'react';
import { View, FlatList } from 'react-native';
import useCurrentUser from '../hooks/useCurrentUser';

import ReviewItem from './ReviewItem';
import ItemSeparator from './ItemSeparator';
import ReviewDeleteModal from './ReviewDeleteModal';

const MyReviews = () => {
  const [visible, setVisible] = useState(false);
  const [id, setId] = useState({});
  const { reviews } = useCurrentUser();

  //console.log('currentUser', currentUser);
  //console.log('reviews', reviews);

  const closeModal = () => setVisible(false);
  const openModal = (repositoryId, reviewId) => {
    setVisible(true);
    setId({ repositoryId, reviewId });
  };

  return (
    <View>
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <ReviewItem
            review={item}
            showUsername={false}
            showFullName
            showActButton
            openModal={openModal}
          />
        )}
        ItemSeparatorComponent={ItemSeparator}
        keyExtractor={({ id }) => id}
      />
      <ReviewDeleteModal visible={visible} closeModal={closeModal} id={id} />
    </View>
  );
};

export default MyReviews;
