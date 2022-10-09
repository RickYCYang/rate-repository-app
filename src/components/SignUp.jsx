import { Formik } from 'formik';
import { View, Pressable, StyleSheet } from 'react-native';
import useSignUp from '../hooks/useSignUp';
import useSignIn from '../hooks/useSignIn';
import useAuthStorage from '../hooks/useAuthStorage';
import * as yup from 'yup';
import { useNavigate } from 'react-router-native';

import FormikTextInput from './FormikTextInput';
import Button from './Chip';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.backgroundColor.white,
    padding: 10,
  },
  margin: {
    marginBottom: 15,
  },
  button: {
    padding: 15,
    textAlign: 'center',
    fontWeight: '900',
  },
});

const initialValues = {
  username: '',
  password: '',
  confirmedPassword: '',
};

const SignUp = () => {
  const authStorage = useAuthStorage();
  const [signUp] = useSignUp();
  const [signIn] = useSignIn(authStorage);
  const navigate = useNavigate();

  const validationSchema = yup.object().shape({
    username: yup.string().min(1).max(30).required('Username is required'),
    password: yup.string().min(5).max(50).required('Password is required'),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Password confirmation is not same')
      .required('Password confirmation is required'),
  });

  const onSubmit = async (values) => {
    const { username, password } = values;
    try {
      const signUpResult = await signUp({
        username,
        password,
      });
      console.log('signUpResult', signUpResult);
      if (signUpResult.createUser?.id) {
        const signInResult = await signIn({ username, password });
        if (signInResult.authenticate?.accessToken) {
          navigate('/');
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => (
        <View style={styles.container}>
          <FormikTextInput
            name="username"
            placeholder="Username"
            style={styles.margin}
          />
          <FormikTextInput
            name="password"
            placeholder="Password"
            style={styles.margin}
            secureTextEntry
          />
          <FormikTextInput
            name="passwordConfirm"
            placeholder="Password confirmation"
            style={styles.margin}
            secureTextEntry
          />
          <Pressable onPress={handleSubmit}>
            <Button style={styles.button} fontWeight="bold">
              Sign up
            </Button>
          </Pressable>
        </View>
      )}
    </Formik>
  );
};

export default SignUp;
