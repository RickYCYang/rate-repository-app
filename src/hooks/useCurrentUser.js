import { useQuery } from '@apollo/client';
import { GET_CURRENT_USER } from '../graphql/queries';

const useCurrentUser = () => {
  const { data, loading, error } = useQuery(GET_CURRENT_USER, {
    fetchPolicy: 'cache-and-network',
    variables: {
      includeReviews: true,
    },
  });

  const reviews = data?.me?.reviews?.edges?.map(({ node }) => node);

  return { currentUser: data?.me, reviews };
};

export default useCurrentUser;
