import { View, StyleSheet } from 'react-native';
import moment from 'moment';
import { useNavigate } from 'react-router-native';

import Text from './Text';
import theme from '../theme';
import ItemSeparator from './ItemSeparator';
import Button from './Button';

const styles = StyleSheet.create({
  outterContainer: {
    padding: 20,
    backgroundColor: theme.backgroundColor.white,
  },
  innerContainer: {
    flexDirection: 'row',
  },
  ratingContainer: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    borderColor: theme.colors.primary,
    borderWidth: 2,
    textAlign: 'center',
    textAlignVertical: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  ratingText: {
    fontSize: 18,
  },
  contentContainer: {
    maxWidth: '90%',
  },
  actionContainer: {
    flexDirection: 'row',
    flexGrow: 1,
    justifyContent: 'space-between',
    marginTop: 10,
  },
  button: {
    width: '48%',
  },
});

const ReviewItem = ({
  review,
  showUsername = true,
  showFullName = false,
  showActButton = false,
  openModal,
}) => {
  //console.log('review', review);
  const navigate = useNavigate();

  const linkToRepository = () => {
    //console.log('review.repository.id', review.repository.id);
    navigate(`/${review.repository.id}`);
  };

  // Single review item
  return (
    <View style={styles.outterContainer}>
      <View style={styles.innerContainer}>
        <View style={styles.ratingContainer}>
          <Text color="primary" fontWeight="bold" style={styles.ratingText}>
            {review.rating}
          </Text>
        </View>
        <View style={styles.contentContainer}>
          {showUsername && (
            <Text fontWeight="bold" fontSize="subheading">
              {review.user.username}
            </Text>
          )}
          {showFullName && (
            <Text fontWeight="bold" fontSize="subheading">
              {review.repository.fullName}
            </Text>
          )}
          <ItemSeparator />
          <Text color="textSecondary" fontWeight="bold" fontSize="subheading">
            {moment(review.createdAt).format('DD.MM.YYYY')}
          </Text>
          <ItemSeparator />
          <Text>{review.text}</Text>
        </View>
      </View>
      {showActButton && (
        <View style={styles.actionContainer}>
          <Button
            label="View repository"
            onClick={linkToRepository}
            style={styles.button}
          />
          <Button
            label="Delete repository"
            color="danger"
            onClick={() => openModal(review.repository.id, review.id)}
            style={styles.button}
          />
        </View>
      )}
    </View>
  );
};

export default ReviewItem;
