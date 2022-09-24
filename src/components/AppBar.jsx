import { View, StyleSheet, ScrollView } from 'react-native';
import AppBarTab from './AppBarTab';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: 70,
    paddingBottom: 15,
    paddingLeft: 15,
    backgroundColor: theme.backgroundColor.black,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab />
      </ScrollView>
    </View>
  );
};

export default AppBar;
