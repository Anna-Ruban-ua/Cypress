import { endpoints } from "../../support/endpoints";
import { solutionsTexts } from "../../support/texts";
import BasePage from "./basePage";

class SolutionsPage extends BasePage {
    public filterButton = `button:contains("${solutionsTexts.filterButton}")`;
    public filterMenu = '[role="menu"]';
    public menuItemCheckboxes = '[role="menuitemcheckbox"]';
    public checkboxSelector = 'input[type="checkbox"]';
    public labelSelector = 'span';

    public searchInput = '#search';
    public searchResultTitles = 'h3.c-PJLV.c-rMlRu.c-PJLV-cHtIMp-dark-false';

    visitSolutionsPage() {
        this.visit(endpoints.solutions);
    }

    openFilterMenu() {
        this.getElement(this.filterButton).scrollIntoView().click();
      }

    getFilterMenu() {
        return this.getElement(this.filterMenu);
    }
    
    getAllCheckboxItems() {
        return this.getElement(this.menuItemCheckboxes);
    }

    getCheckbox(el: JQuery<HTMLElement>) {
        return this.wrap(el).find(this.checkboxSelector);
    }
    
    getLabel(el: JQuery<HTMLElement>) {
        return this.wrap(el).find(this.labelSelector);
    }

    typeInSearch(text: string) {
        this.typeText(this.searchInput, `${text}{enter}`);
    }
    
    getSearchResults() {
        return this.getElement(this.searchResultTitles);
    }
    
    getSearchResultByText(text: string) {
        return this.getElementByText(this.searchResultTitles, text);
    }

    getNoResultsMessage() {
        return this.containsText(solutionsTexts.noResults);
    }
    
    isFilterMenuVisible() {
        return this.getFilterMenu();
    }
      
    checkCheckbox(el: JQuery<HTMLElement>) {
        this.getCheckbox(el).check({ force: true });
    }
      
    uncheckCheckbox(el: JQuery<HTMLElement>) {
        this.getCheckbox(el).uncheck({ force: true });
    }
      
    getCheckboxElement(el: JQuery<HTMLElement>) {
        return this.getCheckbox(el);
    }
      
    getLabelText(el: JQuery<HTMLElement>) {
        return this.getLabel(el).invoke('text');
    }
      
    getContentByName(name: string) {
        return cy.contains(name, { matchCase: false });
    }
}

export default new SolutionsPage();