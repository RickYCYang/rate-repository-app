import { useMutation } from '@apollo/client';
import { CREATE_REVIEW } from '../graphql/mutations';
import { GET_REPOSITORIES } from '../graphql/queries';

const useReview = () => {
  //const apolloClient = useApolloClient();
  const [mutate, result] = useMutation(CREATE_REVIEW, {
    onError: (error) => {
      console.error(error.graphQLErrors[0].message);
    },
    refetchQueries: [{ query: GET_REPOSITORIES }],
  });

  const createReview = async ({ repositoryName, ownerName, rating, text }) => {
    console.log(
      'repositoryName, ownerName, rating, text',
      repositoryName,
      ownerName,
      rating,
      text
    );
    // call the mutate function here with the right arguments
    const data = await mutate({
      variables: { review: { repositoryName, ownerName, rating, text } },
    });
    return data;
  };

  return [createReview, result];
};

export default useReview;
