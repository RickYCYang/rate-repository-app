import { useMutation, useApolloClient } from '@apollo/client';
import { SIGNIN } from '../graphql/mutations';

const useSignIn = (authStorage) => {
  const apolloClient = useApolloClient();
  const [mutate, result] = useMutation(SIGNIN, {
    onError: (error) => {
      console.error(error.graphQLErrors[0].message);
    },
  });

  const signIn = async ({ username, password }) => {
    // call the mutate function here with the right arguments
    const { data } = await mutate({
      variables: { credentials: { username, password } },
    });
    if (data.authenticate?.accessToken) {
      await authStorage.setAccessToken(data.authenticate?.accessToken);
      apolloClient.resetStore();
    }
    return data;
  };

  return [signIn, result];
};

export default useSignIn;
