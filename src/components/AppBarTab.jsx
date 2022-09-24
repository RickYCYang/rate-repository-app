import { View, StyleSheet, Pressable } from 'react-native';
import { Link } from 'react-router-native';

import Text from './Text';

import useAuthStorage from '../hooks/useAuthStorage';
import useSignOut from '../hooks/useSignOut';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  item: {
    marginRight: 10,
  },
});

const AppBarTab = () => {
  const authStorage = useAuthStorage();
  const [me, signOut] = useSignOut(authStorage);

  return (
    <View style={styles.container}>
      <Link to="/" style={styles.item}>
        <Text color="textLight" fontWeight="bold" fontSize="subheading">
          Repositories
        </Text>
      </Link>
      {!me ? (
        <Link to="/signin" style={styles.item}>
          <Text color="textLight" fontWeight="bold" fontSize="subheading">
            Signin
          </Text>
        </Link>
      ) : (
        <Pressable onPress={signOut}>
          <Text color="textLight" fontWeight="bold" fontSize="subheading">
            Sign out
          </Text>
        </Pressable>
      )}
    </View>
  );
};

export default AppBarTab;
