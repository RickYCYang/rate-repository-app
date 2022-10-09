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
    marginRight: 15,
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
        <>
          <Link to="/signin" style={styles.item}>
            <Text color="textLight" fontWeight="bold" fontSize="subheading">
              Sign in
            </Text>
          </Link>
          <Link to="/signup">
            <Text color="textLight" fontWeight="bold" fontSize="subheading">
              Sign up
            </Text>
          </Link>
        </>
      ) : (
        <>
          <Link to="/create-review" style={styles.item}>
            <Text color="textLight" fontWeight="bold" fontSize="subheading">
              Create a review
            </Text>
          </Link>
          <Link to="/myReview" style={styles.item}>
            <Text color="textLight" fontWeight="bold" fontSize="subheading">
              My reviews
            </Text>
          </Link>
          <Pressable onPress={signOut}>
            <Text color="textLight" fontWeight="bold" fontSize="subheading">
              Sign out
            </Text>
          </Pressable>
        </>
      )}
    </View>
  );
};

export default AppBarTab;
