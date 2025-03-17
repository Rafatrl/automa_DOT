describe("RN4-CT1: Finalização de Compra – Sucesso", () => {
    beforeEach(() => {
      cy.suppressXHRLogging(); 
      cy.visit("/");
      cy.get('[data-test="username"]').type("standard_user");
      cy.get('[data-test="password"]').type("secret_sauce");
      cy.get('[data-test="login-button"]').click();
      cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
      cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    });
  
    it("Deve finalizar uma compra com sucesso", () => {
      cy.get('[data-test="shopping-cart-link"]').click();
      cy.get('[data-test="checkout"]').click();
      cy.get('[data-test="firstName"]').clear('N');
      cy.get('[data-test="firstName"]').type('Nome1');
      cy.get('[data-test="lastName"]').clear('N');
      cy.get('[data-test="lastName"]').type('Nome2');
      cy.get('[data-test="postalCode"]').clear('1');
      cy.get('[data-test="postalCode"]').type('12345123');
      cy.get('[data-test="continue"]').click();
      cy.get('[data-test="finish"]').click();
      cy.get('[data-test="complete-header"]').should('have.text', 'Thank you for your order!');
    });
  });