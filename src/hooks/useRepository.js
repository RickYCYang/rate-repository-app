import { useQuery } from '@apollo/client';
import { GET_REPOSITORY } from '../graphql/queries';

const pageSize = 5;

const useRepository = (id) => {
  const { data, error, loading, fetchMore } = useQuery(GET_REPOSITORY, {
    fetchPolicy: 'cache-and-network',
    variables: {
      repositoryId: id,
      first: pageSize,
      after: '',
    },
  });

  const handleFetchMore = () => {
    const canFetchMore =
      !loading && data?.repository.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data?.repository.reviews.pageInfo.endCursor,
        first: pageSize,
        repositoryId: id,
      },
    });
  };

  return {
    repository: data?.repository,
    reviews: data?.repository?.reviews?.edges?.map(({ node }) => node) || [],
    error,
    loading,
    fetchMore: handleFetchMore,
  };
};

export default useRepository;
