import { generateValidEmail, generateInvalidEmail } from "../support/dataGenerator"
import HomePage from "./page_objects/homePage";

describe('Form Validation Tests', () => {
    const homePage = new HomePage;

    beforeEach(() => {
        homePage.visitHomePage();
    });

    it('TC04 Valid "Connect with us" Form', () => {
        homePage.fillContactWithUsForm(generateValidEmail());
        cy.url().should("contain", "/sign-up");
    })

    it('TC05 Invalid "Connect with us" Form', () => {
        homePage.fillContactWithUsForm(generateInvalidEmail());
        homePage.getConnectWithUsInputElement().then(($input) => {
            const validationMessage = ($input[0] as HTMLInputElement).validationMessage;
            expect(validationMessage).to.not.be.empty;
        });
    })

});
