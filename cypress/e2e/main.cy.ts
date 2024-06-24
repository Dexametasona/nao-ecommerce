describe('e2e Main flow', () => {
  it('it should be create a new user', () => {
    cy.visit('https://reto3nao.netlify.app')
    cy.get('a').click();
    cy.get('input[name="username"]').type('kurosawa');
    cy.get('input[name="email"]').type('kurosawa@gmail.com');
    cy.get('input[name="password"]').type('pruebaA1_');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', 'https://reto3nao.netlify.app/app/dashboard');
    cy.get("h2.text-2xl").should("include.text", "Bienvenido kurosawa");
  })
  it("it should be login user", ()=>{
    cy.visit('https://reto3nao.netlify.app')
    cy.get('input[name="email"]').type('kurosawa@gmail.com');
    cy.get('input[name="password"]').type('pruebaA1_');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', 'https://reto3nao.netlify.app/app/dashboard');
    cy.get("h2.text-2xl").should("include.text", "Bienvenido kurosawa");
  })
  it("it should be have 5 graphics", ()=>{
    cy.visit('https://reto3nao.netlify.app')
    cy.get('input[name="email"]').type('kurosawa@gmail.com');
    cy.get('input[name="password"]').type('pruebaA1_');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', 'https://reto3nao.netlify.app/app/dashboard');
    cy.get("svg").should("have.length", 3)
    cy.get("table").should("have.length", 2)
  })
})