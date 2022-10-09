import { gql } from '@apollo/client';

/** 
 * "credentials": {
    "username": "rick",
    "password": "password"
  }
*/
export const SIGNIN = gql`
  mutation signIn($credentials: AuthenticateInput) {
    authenticate(credentials: $credentials) {
      accessToken
    }
  }
`;

/**
 * "review": {
    "repositoryName": "rails",
    "ownerName": "rails",
    "rating": 50,
    "text": "RICK TEST"
  }
 */
export const CREATE_REVIEW = gql`
  mutation createReview($review: CreateReviewInput) {
    createReview(review: $review) {
      id
      repositoryId
    }
  }
`;

/**
 * "user": {
    "username": "rick",
    "password": "password"
  }
 */
export const SIGNUP = gql`
  mutation createUser($user: CreateUserInput) {
    createUser(user: $user) {
      id
      username
      createdAt
    }
  }
`;

export const DELETE_REVIEW = gql`
  mutation deleteReview($deleteReviewId: ID!) {
    deleteReview(id: $deleteReviewId)
  }
`;
