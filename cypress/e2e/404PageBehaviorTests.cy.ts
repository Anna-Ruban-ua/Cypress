import { generateInvalidUrl } from "../support/dataGenerator";
import Error404Page from '../e2e/page_objects/error404Page'

describe('404 Page Behavior', () => {
  const error404Page = new Error404Page();
  
  it('TC09 404 Page Behavior', () => {
 
    error404Page.visitInvalidPage(generateInvalidUrl());

    error404Page.getErrorMessage1().should('be.visible');
    error404Page.getErrorMessage2().should('be.visible');
    error404Page.getBackToHomeButton().should('be.visible');

    error404Page.clickBackToHome();
    
    cy.url().should('eq', Cypress.config('baseUrl') + '/');
  });

});

  