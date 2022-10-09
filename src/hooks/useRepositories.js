import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const pageSize = 8;

const useRepositories = (orderBy, orderDirection, searchKeyword) => {
  const { data, error, loading, fetchMore } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    //fetchPolicy: 'network-only',
    variables: {
      orderBy,
      orderDirection,
      searchKeyword,
      first: pageSize,
      after: '',
    },
  });

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repositories.pageInfo.endCursor,
        first: pageSize,
        orderBy,
        orderDirection,
        searchKeyword,
      },
    });
  };

  return {
    repositories: data?.repositories,
    error,
    loading,
    fetchMore: handleFetchMore,
  };
};

export default useRepositories;
