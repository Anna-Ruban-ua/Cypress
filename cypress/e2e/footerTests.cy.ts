import { footerCompanyItems } from "../support/constants";
import HomePage from "./page_objects/homePage";

describe('Navigation Tests', () => {
    const homePage = new HomePage;

    beforeEach(() => {
        homePage.visitHomePage();
    });

    it('TC01 Footer "Company" Links Validation', () => {
        footerCompanyItems.forEach(({ footerName, itemUrl }) => {
            homePage.getFooterItem(footerName).scrollIntoView().should('be.visible');
            homePage.clickFooterItem(footerName);
            homePage.getCurrentUrl().should("contain", itemUrl);
        })
    })
})