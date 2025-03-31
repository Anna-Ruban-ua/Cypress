import { generateInvalidUrl } from "../support/dataGenerator";
import error404Page from '../e2e/page_objects/error404Page';
import { endpoints } from '../support/endpoints';
import { error404Texts } from '../support/texts';

describe('404 Page Behavior', () => {  
  it('TC07 404 Page Behavior', () => {
 
    error404Page.visitInvalidPage(generateInvalidUrl());

    error404Page.getError().should('contain.text', error404Texts.message1, error404Texts.message2);
    error404Page.getBackToHomeButton().should('be.visible');

    error404Page.clickBackToHome();
    
    cy.url().should('eq', Cypress.config('baseUrl') + endpoints.home);
  });

});

  