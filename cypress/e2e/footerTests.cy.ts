import { footerCompanyItems, footerCompareTelnixItems, footerLegalItems } from "../support/constants";
import HomePage from "./page_objects/homePage";

describe('Navigation Tests', () => {
    const homePage = new HomePage;

    beforeEach(() => {
        homePage.visitHomePage();
    });

    it('TC01 Footer "Company" Links Validation', () => {
        footerCompanyItems.forEach(({ footerName, itemUrl }) => {
            homePage.clickFooterItem(footerName);
            homePage.getCurrentUrl().should("contain", itemUrl);
        })
    });

    it.skip('TC02 Footer "Legal" Links Validation', () => {
        footerLegalItems.forEach(({ footerName, itemUrl }) => {
            cy.wait(60000);
            homePage.clickFooterItem(footerName);
            homePage.getCurrentUrl().should("contain", itemUrl);
        })
    });

    it('TC03 Footer "Compare Telnyx" Links Validation', () => {
        footerCompareTelnixItems.forEach(({ footerName, itemUrl }) => {
            homePage.clickFooterItem(footerName);
            homePage.getCurrentUrl().should("contain", itemUrl);
        })
    });

})