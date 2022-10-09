const orderByOptions = {
  CREATED_AT: 'CREATED_AT',
  RATING_AVERAGE: 'RATING_AVERAGE',
};

const orderDirectionOptions = {
  ASC: 'ASC',
  DESC: 'DESC',
};

export const sortPrinciples = {
  LATEST_REPOSITORY: 'Latest repositories',
  HIGHEST_RATE: 'Highest rated repositories',
  LOWEST_RATE: 'Lowest rated repositories',
};

export const sortPrincipleOfRepository = {
  [sortPrinciples.LATEST_REPOSITORY]: {
    principle: 'Latest repositories',
    orderBy: orderByOptions.CREATED_AT,
    orderDirection: orderDirectionOptions.DESC,
  },
  [sortPrinciples.HIGHEST_RATE]: {
    principle: 'Highest rated repositories',
    orderBy: orderByOptions.RATING_AVERAGE,
    orderDirection: orderDirectionOptions.DESC,
  },
  [sortPrinciples.LOWEST_RATE]: {
    principle: 'Lowest rated repositories',
    orderBy: orderByOptions.RATING_AVERAGE,
    orderDirection: orderDirectionOptions.ASC,
  },
};
