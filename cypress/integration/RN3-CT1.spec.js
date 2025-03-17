describe("RN3-CT1: Remover produtos do carrinho", () => {
    beforeEach(() => {
      cy.suppressXHRLogging(); 
      cy.visit("/");
      cy.get('[data-test="username"]').type("standard_user");
      cy.get('[data-test="password"]').type("secret_sauce");
      cy.get('[data-test="login-button"]').click();
      cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
      cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
      cy.get('[data-test="shopping-cart-badge"]').should('have.text', '2');
    });
  
    it("Deve remover os produtos do carrinho", () => {
      cy.get('[data-test="remove-sauce-labs-backpack"]').click();
      cy.get('[data-test="remove-sauce-labs-bike-light"]').click();
      cy.get('[data-test="shopping-cart-badge"]').should('not.to.exist');
    });
  });
  