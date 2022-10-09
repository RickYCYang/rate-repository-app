import RepositoryListContainer from '../../components/RepositoryListContainer';
import { render } from '@testing-library/react-native';

const getProcessedIndex = (index) =>
  index >= 1000 ? `${(index / 1000).toFixed(1)}k` : index.toString();

describe('RepositoryList', () => {
  describe('RepositoryListContainer', () => {
    it('renders repository information correctly', () => {
      const repositories = {
        repositories: {
          totalCount: 8,
          pageInfo: {
            hasNextPage: true,
            endCursor:
              'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
            startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
          },
          edges: [
            {
              node: {
                id: 'jaredpalmer.formik',
                fullName: 'jaredpalmer/formik',
                description: 'Build forms in React, without the tears',
                language: 'TypeScript',
                forksCount: 1619,
                stargazersCount: 21856,
                ratingAverage: 88,
                reviewCount: 3,
                ownerAvatarUrl:
                  'https://avatars2.githubusercontent.com/u/4060187?v=4',
              },
              cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
            },
            {
              node: {
                id: 'async-library.react-async',
                fullName: 'async-library/react-async',
                description: 'Flexible promise-based React data loader',
                language: 'JavaScript',
                forksCount: 69,
                stargazersCount: 1760,
                ratingAverage: 72,
                reviewCount: 3,
                ownerAvatarUrl:
                  'https://avatars1.githubusercontent.com/u/54310907?v=4',
              },
              cursor:
                'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
            },
          ],
        },
      };
      const { debug, getAllByTestId } = render(
        <RepositoryListContainer repositories={repositories} />
      );
      debug();

      const repositoryItems = getAllByTestId('repositoryItem');
      const [firstRepositoryItem, secondRepositoryItem] = repositoryItems;
      /** check 1st repository */
      expect(firstRepositoryItem).toHaveTextContent(
        repositories.repositories.edges[0].node.fullName
      );
      expect(firstRepositoryItem).toHaveTextContent(
        repositories.repositories.edges[0].node.description
      );
      expect(firstRepositoryItem).toHaveTextContent(
        repositories.repositories.edges[0].node.language
      );
      expect(firstRepositoryItem).toHaveTextContent(
        getProcessedIndex(repositories.repositories.edges[0].node.forksCount)
      );
      expect(firstRepositoryItem).toHaveTextContent(
        getProcessedIndex(
          repositories.repositories.edges[0].node.stargazersCount
        )
      );
      expect(firstRepositoryItem).toHaveTextContent(
        getProcessedIndex(repositories.repositories.edges[0].node.reviewCount)
      );
      expect(firstRepositoryItem).toHaveTextContent(
        getProcessedIndex(repositories.repositories.edges[0].node.ratingAverage)
      );

      /** check 2nd repository */
      expect(secondRepositoryItem).toHaveTextContent(
        repositories.repositories.edges[1].node.fullName
      );
      expect(secondRepositoryItem).toHaveTextContent(
        repositories.repositories.edges[1].node.fullName
      );
      expect(secondRepositoryItem).toHaveTextContent(
        repositories.repositories.edges[1].node.description
      );
      expect(secondRepositoryItem).toHaveTextContent(
        repositories.repositories.edges[1].node.language
      );
      expect(secondRepositoryItem).toHaveTextContent(
        getProcessedIndex(repositories.repositories.edges[1].node.forksCount)
      );
      expect(secondRepositoryItem).toHaveTextContent(
        getProcessedIndex(
          repositories.repositories.edges[1].node.stargazersCount
        )
      );
      expect(secondRepositoryItem).toHaveTextContent(
        getProcessedIndex(repositories.repositories.edges[1].node.reviewCount)
      );
      expect(secondRepositoryItem).toHaveTextContent(
        getProcessedIndex(repositories.repositories.edges[1].node.ratingAverage)
      );
    });
  });
});
