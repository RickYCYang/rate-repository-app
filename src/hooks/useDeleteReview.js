import { useMutation } from '@apollo/client';
import { DELETE_REVIEW } from '../graphql/mutations';
import { GET_CURRENT_USER, GET_REPOSITORY } from '../graphql/queries';

const useDeleteReview = (repositoryId, reviewId) => {
  const [mutate, result] = useMutation(DELETE_REVIEW, {
    onError: (error) => {
      console.error(error.graphQLErrors[0].message);
    },
    refetchQueries: [
      { query: GET_REPOSITORY, variables: { id: repositoryId } },
      {
        query: GET_CURRENT_USER,
        variables: {
          includeReviews: true,
        },
      },
    ],
  });

  const deleteReviewById = async () => {
    // call the mutate function here with the right arguments
    // console.log('deleteReviewId', reviewId);
    // console.log('repositoryId', repositoryId);
    const { data } = await mutate({
      variables: { deleteReviewId: reviewId },
    });
    // console.log('data', data);
    return data;
  };

  return [deleteReviewById, result];
};

export default useDeleteReview;
