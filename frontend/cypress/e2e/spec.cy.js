describe('Test', () => {
  
it('testing', ()=> {
  cy.visit('http://localhost:5173')
  //cy.visit('http://localhost:5173/auth')
  cy.get("#root > header > nav > ul > li:nth-child(2) > a").contains('AUTHENTICATE').click()
  cy.get("#root > main > div > button").contains('SignUp instead?').click()
  //Singup
  cy.get("#root > main > div > form > div:nth-child(1) > input[type=text]").type('Nimi')
  cy.get("#root > main > div > form > div:nth-child(2) > input[type=email]").type('Nimi@Testi.com')
  cy.get("#root > main > div > form > div:nth-child(3) > input[type=password]").type('1234')
  cy.get("#root > main > div > form > button").contains('SIGNUP').click()
  
  //Add product
  cy.get("#root > header > nav > ul > li:nth-child(3) > a").click()
  cy.get("#product").type('Nimi')
  cy.get("#seller").type('Myyjä')
  cy.get("#price").type('hinta')
  cy.get("#image").type('https://cdn.valio.fi/mediafiles/6a662a97-d8ce-4268-83aa-61055c459fbd/1000x752-recipe-hero/4x3/vaalea-leipa.jpg')
  cy.get("#root > main > form > button").click()
  
})
})
