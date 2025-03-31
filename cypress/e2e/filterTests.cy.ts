import solutionsPage from "./page_objects/solutionsPage";

describe('Navigation Tests', () => {
    beforeEach(() => {
        solutionsPage.visitSolutionsPage();
    });

    it('TC08 Filter Verification on the Solutions Page', () => {
      solutionsPage.openFilterMenu();
      solutionsPage.isFilterMenuVisible().should('be.visible');
      
      solutionsPage.getAllCheckboxItems().each(($el) => {
        solutionsPage.getLabelText($el).then((labelText) => {
          const name = labelText.trim();
      
          solutionsPage.checkCheckbox($el);
          solutionsPage.getCheckboxElement($el).should('be.checked');
      
          solutionsPage.getContentByName(name).should('exist');
      
          solutionsPage.uncheckCheckbox($el);
          solutionsPage.getCheckboxElement($el).should('not.be.checked');
          });
        });
      });
      
    });