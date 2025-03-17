describe("RN5-CT1: Ordenação de Produtos", () => {
    beforeEach(() => {
      cy.suppressXHRLogging(); 
      cy.visit("/");
      cy.get('[data-test="username"]').type("standard_user");
      cy.get('[data-test="password"]').type("secret_sauce");
      cy.get('[data-test="login-button"]').click();
      cy.url().should("include", "/inventory.html");
    });

    it("Deve ordenar os produtos com preço maior para menor", () => {
      cy.get('[data-test="product-sort-container"]').select('hilo');

      // Validando a ordem dos preços
      cy.get('.inventory_item_price')
        .then(($prices) => {
          const extractedPrices = [...$prices].map(price => 
            parseFloat(price.innerText.replace("$", ""))
          );
          const sortedPrices = [...extractedPrices].sort((a, b) => b - a);
          expect(extractedPrices).to.deep.equal(sortedPrices);
        });
    });
});
