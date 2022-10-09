import { gql } from '@apollo/client';
import {
  REPOSITORY_DETAILS,
  PAGE_INFO_DETAILS,
  REVIEW_DETIALS,
} from './fragments';

export const GET_REPOSITORIES = gql`
  query getRepositories(
    $orderBy: AllRepositoriesOrderBy
    $orderDirection: OrderDirection
    $searchKeyword: String
    $first: Int
    $after: String
  ) {
    repositories(
      orderBy: $orderBy
      orderDirection: $orderDirection
      searchKeyword: $searchKeyword
      first: $first
      after: $after
    ) {
      edges {
        node {
          ...RepositoryDetails
        }
        cursor
      }
      pageInfo {
        ...PageInfoDetails
      }
    }
  }

  ${REPOSITORY_DETAILS}
  ${PAGE_INFO_DETAILS}
`;

export const GET_REPOSITORY = gql`
  query getRepository($repositoryId: ID!, $first: Int, $after: String) {
    repository(id: $repositoryId) {
      ...RepositoryDetails
      reviews(first: $first, after: $after) {
        edges {
          node {
            ...ReviewDetails
          }
          cursor
        }
        totalCount
        pageInfo {
          ...PageInfoDetails
        }
      }
    }
  }

  ${REPOSITORY_DETAILS}
  ${PAGE_INFO_DETAILS}
  ${REVIEW_DETIALS}
`;

export const GET_CURRENT_USER = gql`
  query getCurrentUser($includeReviews: Boolean = false) {
    me {
      id
      username
      reviews @include(if: $includeReviews) {
        edges {
          node {
            ...ReviewDetails
            repository {
              id
              fullName
            }
          }
          cursor
        }
        totalCount
        pageInfo {
          ...PageInfoDetails
        }
      }
    }
  }

  ${PAGE_INFO_DETAILS}
  ${REVIEW_DETIALS}
`;
