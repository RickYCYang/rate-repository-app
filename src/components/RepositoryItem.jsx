import { View, StyleSheet, Linking } from 'react-native';
import theme from '../theme';
import AuthorProfile from './AuthorProfile';
import RepositoryIndex from './RepositoryIndex';
import Button from './Button';

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
  buttonContainer: {
    marginTop: 10,
  },
});

const openUrl = (url) => {
  Linking.openURL(url);
};

const RepositoryItem = ({ repository, showOpenUrlButton }) => {
  //console.log('repository', repository);
  return (
    <View style={styles.container} testID="repositoryItem">
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
      {showOpenUrlButton && (
        <View style={styles.buttonContainer}>
          <Button
            onClick={() => openUrl(repository.url)}
            label="Open in GitHub"
          />
        </View>
      )}
    </View>
  );
};

export default RepositoryItem;
