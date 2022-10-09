import { useQuery, useApolloClient } from '@apollo/client';
import { GET_CURRENT_USER } from '../graphql/queries';
import { useNavigate } from 'react-router-native';

const useSignOut = (authStorage) => {
  const navigate = useNavigate();
  const apolloClient = useApolloClient();
  const { data } = useQuery(GET_CURRENT_USER, {});

  const signOut = async () => {
    if (data?.me) {
      await authStorage.removeAccessToken();
      apolloClient.resetStore();
      navigate('/');
    }
  };

  return [data?.me, signOut];
};

export default useSignOut;
