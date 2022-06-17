import SiginPage from '../pages/SignInPage';
import HomePage from '../pages/HomePage';

const signInPage = new SiginPage;
const homePage = new HomePage;

const cred = {
    email: 'viktor.muzika.tester@gmail.com',
    pass: 'viktor1'
}

describe('login page', () => {
    before(() => {
        signInPage.open(signInPage.path);
    });

    after(() => {
        cy.logout();
    });

    it('Login page has correct URL', () => {
        cy.url().should('be.equal', Cypress.config('baseUrl') + '#/login');
    });
    
    it('Has sign in header', () => {
        signInPage.getSignInHeader().should('contain', 'Sign in');
    });

    it('Has emeil, pass fields and signIn button', () => {
        signInPage.getEmailField().should('be.visible');
        signInPage.getPassField().should('be.visible');
        signInPage.getSignInButton().should('be.visible');
    });

    it('login to with credentials', () => {
        signInPage.logIn(cred.email, cred.pass)
    });

    it('Home page is opened', () => {
        homePage.getProfileIcon().should('be.visible')
    })
});

