describe('Game E2E', () => {

  const PLAYER_ONE = 'PLAYER ONE';
  const PLAYER_TWO = 'PLAYER TWO';
  const ROUND = (roundNumber) => `Round ${roundNumber}`;
  const PLAYER = (playerNickname) => `Player: ${playerNickname}`

  it('should play complete game', async () => {

    cy.visit('/')

    cy.get('.game-title')
    .should('be.visible')
    .should('contain.text', 'Game of Drones!')

    cy.get('[placeholder="nickname first player"]').type(PLAYER_ONE)
    cy.get('[placeholder="nickname second player"]').type(PLAYER_TWO)

    cy.get('.btn').click()

    // First round

    const firstRound = 1;

    cy.get(':nth-child(1) > .round-title')
    .should('be.visible')
    .should('contain.text', ROUND(firstRound))

    cy.get('.container > :nth-child(1) > :nth-child(1) > :nth-child(2) > .round-title')
    .should('be.visible')
    .should('contain.text', PLAYER(PLAYER_ONE))

    cy.get('#ROCK')
    .should('be.visible').click()

    cy.get('.container > :nth-child(1) > :nth-child(1) > :nth-child(2) > .round-title')
    .should('be.visible')
    .should('contain.text', PLAYER(PLAYER_TWO))

    cy.get('#SCISSORS')
    .should('be.visible').click()

    // Match!
    cy.get('.btn-match').click()

    cy.get('.container > :nth-child(1) > :nth-child(3) > :nth-child(1)')
    .should('be.visible')
    .should('contain.text', firstRound)

    cy.get(':nth-child(3) > .text-align-center')
    .should('be.visible')
    .should('contain.text', PLAYER_ONE)

    // Round 2

    const secondRound = 2;

    cy.get(':nth-child(1) > .round-title')
    .should('be.visible')
    .should('contain.text', ROUND(secondRound))

    cy.get('.container > :nth-child(1) > :nth-child(1) > :nth-child(2) > .round-title')
    .should('be.visible')
    .should('contain.text', PLAYER(PLAYER_ONE))

    cy.get('#PAPER')
    .should('be.visible').click()

    cy.get('.container > :nth-child(1) > :nth-child(1) > :nth-child(2) > .round-title')
    .should('be.visible')
    .should('contain.text', PLAYER(PLAYER_TWO))

    cy.get('#PAPER')
    .should('be.visible').click()

    // Match!
    cy.get('.btn-match')
    .should('be.visible').click()

    cy.get(':nth-child(4) > :nth-child(1)')
    .should('be.visible')
    .should('contain.text', secondRound)

    cy.get(':nth-child(4) > .text-align-center')
    .should('be.visible')
    .should('contain.text', 'TIE')

    // Third round

    const thirdRound = 3;

    cy.get(':nth-child(1) > .round-title')
    .should('be.visible')
    .should('contain.text', ROUND(thirdRound))

    cy.get('.container > :nth-child(1) > :nth-child(1) > :nth-child(2) > .round-title')
    .should('be.visible')
    .should('contain.text', PLAYER(PLAYER_ONE))

    cy.get('#PAPER')
    .should('be.visible').click()

    cy.get('.container > :nth-child(1) > :nth-child(1) > :nth-child(2) > .round-title')
    .should('be.visible')
    .should('contain.text', PLAYER(PLAYER_TWO))

    cy.get('#ROCK')
    .should('be.visible').click()

    // Match!
    cy.get('.btn-match').click()

    cy.get(':nth-child(5) > :nth-child(1)')
    .should('be.visible')
    .should('contain.text', thirdRound)

    cy.get(':nth-child(5) > .text-align-center')
    .should('be.visible')
    .should('contain.text', PLAYER_ONE)

    // Fourth round

    const fourthRound = 4;

    cy.get(':nth-child(1) > .round-title')
    .should('be.visible')
    .should('contain.text', ROUND(fourthRound))

    cy.get('.container > :nth-child(1) > :nth-child(1) > :nth-child(2) > .round-title')
    .should('be.visible')
    .should('contain.text', PLAYER(PLAYER_ONE))

    cy.get('#PAPER')
    .should('be.visible').click()

    cy.get('.container > :nth-child(1) > :nth-child(1) > :nth-child(2) > .round-title')
    .should('be.visible')
    .should('contain.text', PLAYER(PLAYER_TWO))

    cy.get('#SCISSORS')
    .should('be.visible').click()

    // Match!
    cy.get('.btn-match').click()

    cy.get(':nth-child(6) > :nth-child(1)')
    .should('be.visible')
    .should('contain.text', fourthRound)

    cy.get(':nth-child(6) > .text-align-center')
    .should('be.visible')
    .should('contain.text', PLAYER_TWO)

    // fifth

    const fifthRound = 5

    cy.get(':nth-child(1) > .round-title')
    .should('be.visible')
    .should('contain.text', ROUND(fifthRound))

    cy.get('.container > :nth-child(1) > :nth-child(1) > :nth-child(2) > .round-title')
    .should('be.visible')
    .should('contain.text', PLAYER(PLAYER_ONE))

    cy.get('#SCISSORS')
    .should('be.visible').click()

    cy.get('.container > :nth-child(1) > :nth-child(1) > :nth-child(2) > .round-title')
    .should('be.visible')
    .should('contain.text', PLAYER(PLAYER_TWO))

    cy.get('#PAPER')
    .should('be.visible').click()

    // Match!
    cy.get('.btn-match').click()

    cy.get(':nth-child(1) > .game-title')
    .should('be.visible')
    .should('contain.text','We have a WINNER!')

    cy.get('.mt-4 > .game-title')
    .should('be.visible')
    .should('contain.text', `${PLAYER_ONE} is the new EMPEROR!`)

    // Play Again
    cy.get('.btn')
    .should('be.visible').click()

    cy.get('.game-title')
    .should('be.visible')
    .should('contain.text', 'Game of Drones!')

  })
});