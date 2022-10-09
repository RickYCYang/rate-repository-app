import {
  Pressable,
  Modal,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Text from './Text';
import { sortPrincipleOfRepository } from '../utils/const';
import ItemSeparator from './ItemSeparator';

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
    minHeight: 200,
    margin: 30,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

const RepositorySortModal = ({
  visible,
  closeModal,
  selectedSortPrinciple,
  setSelectedSortPrinciple,
}) => {
  const itemClickHandler = ({ principle, orderBy, orderDirection }) => {
    setSelectedSortPrinciple({
      principle,
      orderBy,
      orderDirection,
    });
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
          <FlatList
            data={Object.values(sortPrincipleOfRepository)}
            ItemSeparatorComponent={ItemSeparator}
            ListHeaderComponent={
              <>
                <Text fontSize="subheading" color="textSecondary">
                  Select an item...
                </Text>
                <ItemSeparator />
              </>
            }
            renderItem={({ item }) => (
              <Pressable onPress={() => itemClickHandler(item)}>
                <Text
                  fontSize="subheading"
                  fontWeight={
                    selectedSortPrinciple?.principle === item.principle &&
                    'bold'
                  }
                  color={
                    selectedSortPrinciple?.principle === item.principle &&
                    'primary'
                  }
                >
                  {item.principle}
                </Text>
              </Pressable>
            )}
            keyExtractor={(principle) => principle.principle}
          />
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default RepositorySortModal;
