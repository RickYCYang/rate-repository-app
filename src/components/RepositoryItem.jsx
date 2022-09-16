import { View, StyleSheet } from 'react-native';
import theme from '../theme';
import AuthorProfile from './AuthorProfile';
import RepositoryIndex from './RepositoryIndex';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: theme.backgroundColor.white,
  },
  authorContainer: {
    marginBottom: 15,
  },
  indexContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

const RepositoryItem = ({ repository }) => {
  return (
    <View style={styles.container}>
      <View style={styles.authorContainer}>
        <AuthorProfile
          ownerAvatarUrl={repository.ownerAvatarUrl}
          fullName={repository.fullName}
          description={repository.description}
          language={repository.language}
        />
      </View>
      <View style={styles.indexContainer}>
        <RepositoryIndex index={repository.stargazersCount} caption="Starts" />
        <RepositoryIndex index={repository.forksCount} caption="Forks" />
        <RepositoryIndex index={repository.reviewCount} caption="Reviews" />
        <RepositoryIndex index={repository.ratingAverage} caption="Rating" />
      </View>
    </View>
  );
};

export default RepositoryItem;
