import HomePage from "./page_objects/homePage";

describe('Cookie Consent Banner', () => {
    const homePage = new HomePage;

    beforeEach(() => {
        homePage.visitHomePage();
    });

    it('TC05 Accept Cookies', () => {
        homePage.getCookieByName('cookie-consent').should('not.exist');
        homePage.acceptCookies();
        cy.reload();
        homePage.getCookieBanner().should('not.exist');
    });

    it('TC06 Clear Cookies', () => {
        cy.clearCookies();
        cy.reload();
        homePage.getCookieBanner().should('be.visible', { timeout: 8000 });
    })
})
