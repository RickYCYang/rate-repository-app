import { StyleSheet, View, Image } from 'react-native';
import Text from './Text';
import Chip from './Chip';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  authorIntroContainer: {
    alignItems: 'baseline',
    maxWidth: '95%',
  },
  textMargin: {
    marginBottom: 5,
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 10,
    marginRight: 10,
  },
});

const AuthorProfile = ({ ownerAvatarUrl, fullName, description, language }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: ownerAvatarUrl }} style={styles.avatar} />
      <View style={styles.authorIntroContainer}>
        <Text fontWeight="bold" fontSize="subheading" style={styles.textMargin}>
          {fullName}
        </Text>
        <Text color="textSecondary" style={styles.textMargin}>
          {description}
        </Text>
        <Chip>{language}</Chip>
      </View>
    </View>
  );
};

export default AuthorProfile;
