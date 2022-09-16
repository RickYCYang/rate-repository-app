import { StyleSheet } from 'react-native';
import { useField } from 'formik';

import TextInput from './TextInput';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  errorText: {
    marginBottom: 15,
    color: theme.colors.error,
  },
  TextInput: {
    borderColor: theme.colors.textSecondary,
    borderRadius: 5,
    borderWidth: 1,
    padding: 15,
  },
});

const FormikTextInput = ({ style, name, ...props }) => {
  const [field, meta, helpers] = useField(name);

  // Check if the field is touched and the error message is present
  const showError = meta.touched && meta.error;

  const textInputStyles = [
    styles.TextInput,
    style,
    meta.error && { borderColor: theme.colors.error },
  ];

  return (
    <>
      <TextInput
        onChangeText={(value) => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        style={textInputStyles}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

export default FormikTextInput;
