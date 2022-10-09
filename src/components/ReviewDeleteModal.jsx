import { Modal, View, StyleSheet, TouchableOpacity } from 'react-native';
import Text from './Text';
import ItemSeparator from './ItemSeparator';
import Button from './Button';
import theme from '../theme';
import useDeleteReview from '../hooks/useDeleteReview';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
  },
  innerContainer: {
    flex: 1,
    flexGrow: 0,
    alignItems: 'flex-start',
    minHeight: 150,
    margin: 30,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  actionContainer: {
    flexDirection: 'row',
    flexGrow: 1,
    width: '100%',
    justifyContent: 'flex-end',
  },
  button: {
    backgroundColor: 'white',
    color: theme.colors.primary,
  },
});

const ReviewDeleteModal = ({
  visible,
  closeModal,
  id: { repositoryId, reviewId },
}) => {
  const [deleteReviewById] = useDeleteReview(repositoryId, reviewId);

  const deleteReview = async () => {
    await deleteReviewById();
    closeModal();
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={closeModal}
    >
      <TouchableOpacity style={styles.container} onPressOut={closeModal}>
        <View style={styles.innerContainer}>
          <Text fontWeight="bold" fontSize="subheading">
            Delete review
          </Text>
          <ItemSeparator />
          <Text>
            Are you sure you want to delete this review? {repositoryId} -
            {reviewId}
          </Text>
          <ItemSeparator />
          <View style={styles.actionContainer}>
            <Button
              label="CANCEL"
              onClick={closeModal}
              style={styles.button}
              fontColor="primary"
            />
            <Button
              label="DELETE"
              onClick={deleteReview}
              style={styles.button}
              fontColor="primary"
            />
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default ReviewDeleteModal;
