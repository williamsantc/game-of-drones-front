describe('Game Errors E2E', () => {

  const PLAYER = 'player';
  const ERROR_NICK_NAME_REQUIRED = 'An error occurred: The nickname of the user is required';
  const EQUALS_NICKNAMES = 'The nicknames provided are equals';

  it('should show error when second player nickname is empty', () => {

    cy.visit('/')
    cy.get('[placeholder="nickname first player"]').type(PLAYER)

    cy.get('.btn').click()

    cy.get('.error-msg').should('be.visible').should('contain.text',
        ERROR_NICK_NAME_REQUIRED)

  });

  it('should show error when first player nickname is empty', () => {

    cy.visit('/')
    cy.get('[placeholder="nickname second player"]').type(PLAYER)

    cy.get('.btn').click()

    cy.get('.error-msg').should('be.visible').should('contain.text',
        ERROR_NICK_NAME_REQUIRED)

  });

  it('should show error when players nickname are equals', () => {

    cy.visit('/')
    cy.get('[placeholder="nickname first player"]').type(PLAYER);
    cy.get('[placeholder="nickname second player"]').type(PLAYER);

    cy.get('.btn').click()

    cy.get('.error-msg').should('be.visible').should('contain.text',
        EQUALS_NICKNAMES)

  });
});