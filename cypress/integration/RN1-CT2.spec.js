describe("RN1-CT2: Login com usuário inválido", () => {
    beforeEach(() => {
        cy.suppressXHRLogging(); 
        cy.visit("/");
    });
    
    it("Deve exibir erro ao inserir credenciais inválidas", () => {
        cy.get('[data-test="username"]').type("invalid_user");
        cy.get('[data-test="password"]').type("secret_sauce");
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="error"]').should("contain", "Username and password do not match");
        });
});