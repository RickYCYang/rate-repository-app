import { useQuery, useApolloClient } from '@apollo/client';
import { ME } from '../graphql/queries';

const useSignOut = (authStorage) => {
  const apolloClient = useApolloClient();
  const me = useQuery(ME, {});

  const signOut = async () => {
    if (me.data?.me) {
      await authStorage.removeAccessToken();
      apolloClient.resetStore();
    }
  };

  return [me.data?.me, signOut];
};

export default useSignOut;
