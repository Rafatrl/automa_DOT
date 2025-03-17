describe("RN4-CT2: Finalização de Compra – Erro", () => {
    beforeEach(() => {
      cy.suppressXHRLogging(); 
      cy.visit("/");
      cy.get('[data-test="username"]').type("standard_user");
      cy.get('[data-test="password"]').type("secret_sauce");
      cy.get('[data-test="login-button"]').click();
      cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
      cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    });
  
    it("Deve falhar no checkout", () => {
      cy.get('[data-test="shopping-cart-link"]').click();
      cy.get('[data-test="checkout"]').click();
      cy.get('[data-test="continue"]').click();
      cy.get('[data-test="error"]').should('have.text', 'Error: First Name is required');
    });
  });