import { useMutation } from '@apollo/client';
import { SIGNUP } from '../graphql/mutations';

const useSignUp = () => {
  const [mutate, result] = useMutation(SIGNUP, {
    onError: (error) => {
      console.error(error.graphQLErrors[0].message);
    },
  });

  const signUp = async ({ username, password }) => {
    // call the mutate function here with the right arguments
    console.log('username, password', username, password);
    const { data } = await mutate({
      variables: { user: { username, password } },
    });
    console.log('data', data);
    return data;
  };

  return [signUp, result];
};

export default useSignUp;
