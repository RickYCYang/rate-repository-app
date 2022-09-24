import { Formik } from 'formik';
import { View, Pressable, StyleSheet } from 'react-native';
import * as yup from 'yup';
import { useNavigate } from 'react-router-native';

import FormikTextInput from './FormikTextInput';
import Button from './Chip';
import theme from '../theme';

import useSignIn from '../hooks/useSignIn';
import useAuthStorage from '../hooks/useAuthStorage';

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
};

const SignIn = () => {
  const navigate = useNavigate();
  const authStorage = useAuthStorage();
  const [signIn] = useSignIn(authStorage);
  const validationSchema = yup.object().shape({
    username: yup.string().required('Username is required'),
    password: yup.string().required('Password is required'),
  });

  const onSubmit = async (values) => {
    const { username, password } = values;
    try {
      const data = await signIn({ username, password });
      //console.log(await authStorage.getAccessToken());
      if (data.authenticate?.accessToken) {
        navigate('/');
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
          <Pressable onPress={handleSubmit}>
            <Button style={styles.button} fontWeight="bold">
              Sign in
            </Button>
          </Pressable>
        </View>
      )}
    </Formik>
  );
};

export default SignIn;
