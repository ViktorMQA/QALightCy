class BasicPage {
  constructor(){}
  open (path) {
      cy.visit(path)
  }
}

export default BasicPage;