import RepositoryItem from '../../components/RepositoryItem';
import { render } from '@testing-library/react-native';

const getProcessedIndex = (index) =>
  index >= 1000 ? `${(index / 1000).toFixed(1)}k` : index.toString();

describe('RepositoryItem', () => {
  it("renders repository's name, description, language, forks count, stargazers count, rating average, and review count correctly", () => {
    const testId = 'repositoryItem';
    const repository = {
      description: 'Build forms in React, without the tears 😭 ',
      forksCount: 2600,
      fullName: 'jaredpalmer/formik',
      id: 'jaredpalmer.formik',
      language: 'TypeScript',
      name: 'formik',
      ownerAvatarUrl: 'https://avatars.githubusercontent.com/u/4060187?v=4',
      ownerName: 'jaredpalmer',
      ratingAverage: 90,
      reviewCount: 5,
      stargazersCount: 31250,
    };
    const { getByTestId, debug } = render(
      <RepositoryItem repository={repository} />
    );

    debug();

    expect(getByTestId(testId)).toHaveTextContent(repository.fullName);
    expect(getByTestId(testId)).toHaveTextContent(repository.description);
    expect(getByTestId(testId)).toHaveTextContent(repository.language);
    expect(getByTestId(testId)).toHaveTextContent(
      getProcessedIndex(repository.forksCount)
    );
    expect(getByTestId(testId)).toHaveTextContent(
      getProcessedIndex(repository.stargazersCount)
    );
    expect(getByTestId(testId)).toHaveTextContent(
      getProcessedIndex(repository.reviewCount)
    );
    expect(getByTestId(testId)).toHaveTextContent(
      getProcessedIndex(repository.ratingAverage)
    );
  });
});
