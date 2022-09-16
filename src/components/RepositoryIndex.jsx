import { View, StyleSheet } from 'react-native';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});

const RepositoryIndex = ({ index, caption }) => {
  /** displayed in thousands with precision of one decimal
   * and with a "k" suffix
   * */
  const getProcessedIndex = () =>
    index >= 1000 ? `${(index / 1000).toFixed(1)}k` : index.toString();

  return (
    <View style={styles.container}>
      <Text fontWeight="bold" fontSize="subheading">
        {getProcessedIndex()}
      </Text>
      <Text color="textSecondary" fontSize="subheading">
        {caption}
      </Text>
    </View>
  );
};

export default RepositoryIndex;
