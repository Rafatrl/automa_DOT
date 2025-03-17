describe("RN2-CT1: Adicionar produtos ao carrinho", () => {
    beforeEach(() => {
      cy.suppressXHRLogging(); 
      cy.visit("/");
      cy.get('[data-test="username"]').type("standard_user");
      cy.get('[data-test="password"]').type("secret_sauce");
      cy.get('[data-test="login-button"]').click();
    });
  
    it("Deve adicionar um produto ao carrinho", () => {
      cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
      cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
      cy.get('[data-test="shopping-cart-badge"]').should('have.text', '2');
    });
  });