import { gql } from '@apollo/client';

export const USER_DETAILS = gql`
  fragment UserDetails on User {
    id
    username
  }
`;

export const PAGE_INFO_DETAILS = gql`
  fragment PageInfoDetails on PageInfo {
    hasPreviousPage
    hasNextPage
    startCursor
    endCursor
  }
`;

export const REVIEW_DETIALS = gql`
  fragment ReviewDetails on Review {
    id
    text
    rating
    createdAt
    user {
      ...UserDetails
    }
  }

  ${USER_DETAILS}
`;

export const REPOSITORY_DETAILS = gql`
  fragment RepositoryDetails on Repository {
    createdAt
    description
    forksCount
    fullName
    id
    language
    name
    ownerAvatarUrl
    ownerName
    ratingAverage
    reviewCount
    stargazersCount
    url
  }
`;
