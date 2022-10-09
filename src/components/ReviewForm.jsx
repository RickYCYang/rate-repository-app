import { Formik } from 'formik';
import { View, Pressable, StyleSheet } from 'react-native';
import useReview from '../hooks/useReview';
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
  repositoryName: '',
  ownerName: '',
  rating: '',
  text: '',
};

const ReviewForm = () => {
  const [createReview] = useReview();
  const navigate = useNavigate();

  const validationSchema = yup.object().shape({
    repositoryName: yup.string().required('Repository name is required'),
    ownerName: yup.string().required('Repository Owner name is required'),
    rating: yup
      .number()
      .integer()
      .min(0, "Rating's min value 0.")
      .max(100, 'Rating Max value 100.')
      .required('Rating is required'),
    text: yup.string(),
  });

  const onSubmit = async (values) => {
    const { repositoryName, ownerName, rating, text } = values;
    try {
      const { data } = await createReview({
        repositoryName,
        ownerName,
        rating: Number(rating),
        text,
      });
      //console.log('data', data);
      if (data.createReview?.repositoryId) {
        navigate(`/${data.createReview.repositoryId}`);
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
            name="ownerName"
            placeholder="Repository Owner Name"
            style={styles.margin}
          />
          <FormikTextInput
            name="repositoryName"
            placeholder="Repository Name"
            style={styles.margin}
          />
          <FormikTextInput
            name="rating"
            placeholder="Rating"
            style={styles.margin}
            keyboardType="numeric"
          />
          <FormikTextInput
            name="text"
            placeholder="Text"
            style={styles.margin}
            multiline
          />
          <Pressable onPress={handleSubmit}>
            <Button style={styles.button} fontWeight="bold">
              Create a review
            </Button>
          </Pressable>
        </View>
      )}
    </Formik>
  );
};

export default ReviewForm;
