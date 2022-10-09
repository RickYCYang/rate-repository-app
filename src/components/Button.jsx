import { StyleSheet, Text, View, Pressable } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  colorPrimary: {
    backgroundColor: theme.colors.primary,
  },
  colorDanger: {
    backgroundColor: theme.colors.error,
  },
  container: {
    borderRadius: 5,
    padding: 10,
  },
  text: {
    color: theme.colors.light,
    textAlign: 'center',
    fontWeight: theme.fontWeights.bold,
  },
  fontColorPrimary: {
    color: theme.colors.primary,
  },
});

const Button = ({ style, label, onClick, color = 'primary', fontColor }) => {
  const buttonStyle = [
    color === 'primary' && styles.colorPrimary,
    color === 'danger' && styles.colorDanger,
  ];
  const textColor = [fontColor === 'primary' && styles.fontColorPrimary];
  return (
    <View style={[styles.container, buttonStyle, style]}>
      <Pressable onPress={onClick}>
        <Text style={[styles.text, textColor]}>{label}</Text>
      </Pressable>
    </View>
  );
};

export default Button;
