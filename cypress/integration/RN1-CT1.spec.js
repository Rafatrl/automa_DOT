describe("RN1-CT1: Login com usuário válido", () => {
    beforeEach(() => {
      cy.suppressXHRLogging(); 
      cy.visit("/");
    });
  
    it("Deve logar com sucesso", () => {
      cy.get('[data-test="username"]').type("standard_user");
      cy.get('[data-test="password"]').type("secret_sauce");
      cy.get('[data-test="login-button"]').click();
      cy.url().should("include", "/inventory.html");
    });
});
  