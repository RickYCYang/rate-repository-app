import { View, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';

import Text from './Text';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  item: {
    marginRight: 10,
  },
});

const AppBarTab = () => {
  return (
    <View style={styles.container}>
      <Link to="/" style={styles.item}>
        <Text color="textLight" fontWeight="bold" fontSize="subheading">
          Repositories
        </Text>
      </Link>
      <Link to="/signin" style={styles.item}>
        <Text color="textLight" fontWeight="bold" fontSize="subheading">
          Signin
        </Text>
      </Link>
    </View>
  );
};

export default AppBarTab;
