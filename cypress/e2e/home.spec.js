import HomePage from '../pages/HomePage';

const homePage = new HomePage;

describe('Home page', () => {
    before(() => {
        cy.loginDefaultUser()
        homePage.open(homePage.path);
    });

    after(() => {
        cy.logout();
    });

    it('Home page has correct URL', () => {
        cy.url().should('be.equal', Cypress.config('baseUrl') + '#/');

    });

    it('Has profile icon', () => {
        homePage.getProfileIcon().should('be.visible');
        homePage.getProfileIcon().should('contain', 'VM');
    });

    it('All header buttons are visible', () => {
        homePage.header.getNewArticleButton().should('be.visible');
        homePage.header.getHomeButton().should('be.visible');
        homePage.header.getNewArticleButton().should('be.visible');
    });


})