import SolutionsPage from './page_objects/solutionsPage';
import { pickRandomTitle, generateInvalidSearch } from "../support/dataGenerator"

describe('Solutions Search', () => {
    const solutionsPage = new SolutionsPage();

  beforeEach(() => {
    solutionsPage.visitSolutionsPage();
  });

  it('TC11 Valid Search verification on the Solutions Page', () => {
    solutionsPage.getSearchResults().should('have.length.greaterThan', 0).then(($titles) => {
      const randomTitle = pickRandomTitle($titles);
      solutionsPage.typeInSearch(randomTitle);
      solutionsPage.getSearchResultByText(randomTitle).should('be.visible');
    });
  }); 

  it('TC12 Inalid Search verification on the Solutions Page', () => {
    const invalidSearch = generateInvalidSearch();
    solutionsPage.typeInSearch(invalidSearch);
    solutionsPage.getNoResultsMessage().should('be.visible');
  });

});