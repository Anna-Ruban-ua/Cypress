import { generateValidEmail, generateInvalidEmail } from "../support/dataGenerator"
import { endpoints } from "../support/endpoints";
import homePage from "./page_objects/homePage";

describe('Form Validation Tests', () => {
    beforeEach(() => {
        homePage.visitHomePage();
    });

    it('TC02 Valid "Connect with us" Form', () => {
        homePage.fillContactWithUsForm(generateValidEmail());
        cy.url().should("contain", endpoints.signUp);
    })

    it('TC03 Invalid "Connect with us" Form', () => {
        homePage.fillContactWithUsForm(generateInvalidEmail());
        homePage.getConnectWithUsInputElement().then(($input) => {
            const validationMessage = ($input[0] as HTMLInputElement).validationMessage;
            expect(validationMessage).to.not.be.empty;
        cy.url().should('not.include', endpoints.signUp);
        });
    })

});
