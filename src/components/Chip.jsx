import { StyleSheet, Text, View } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    padding: 5,
  },
  text: {
    color: theme.colors.light,
    textAlign: 'center',
    fontWeight: theme.fontWeights.bold,
  },
});

const Chip = ({ style, ...props }) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.text} {...props} />
    </View>
  );
};

export default Chip;
