import HomePage from "../pages/HomePage";


const homePage = new HomePage;


describe('Article Page', () => {
    beforeEach(() => {
        cy.loginDefaultUser()
        homePage.open(homePage.path);
    });

    afterEach(() => {
        cy.logout();
    });

    it('Article page has correct URL', () => {
        const articalePage = homePage.header.launchNewArticlePage();
        cy.url().should('be.equal', Cypress.config('baseUrl') + '#/editor/');
    });

    it('All require Article fields have right placeholders', () => {
        const articalePage = homePage.header.launchNewArticlePage();
        articalePage.getArticleTitleField().should('have.attr', 'placeholder', articalePage.titlePlasholder);
        articalePage.getArticleAboutField().should('have.attr', 'placeholder', articalePage.aboutPlaceholder);
        articalePage.getArticleBodyField().should('have.attr', 'placeholder', articalePage.bodyPlaceholder);
    });


    it('Article title field is required to fill', () => {
        const articalePage = homePage.header.launchNewArticlePage()
        articalePage
            .fillArticleAboutField()
            .fillArticleBodyField()
            .publishArticle()
            .getError().invoke('text').should('contain', articalePage.errors.titleError);
    });

    it('Article about field is required to fill', () => {
        const articalePage = homePage.header.launchNewArticlePage();
        articalePage
            .fillArticleTitleField()
            .fillArticleBodyField()
            .publishArticle()
            .getError().invoke('text').should('contain', articalePage.errors.aboutError);

    });

    it('Article body field is required to fill', () => {
        const articalePage = homePage.header.launchNewArticlePage();
        articalePage
            .fillArticleTitleField()
            .fillArticleAboutField()
            .publishArticle()
            .getError().invoke('text').should('contain', articalePage.errors.bodyError);

    });

    it('Create new arcticle', () => {
        const articalePage = homePage.header.launchNewArticlePage();
        articalePage
            .createNewArticle()
            .getArticleMeta().should('be.visible');
        articalePage.deleteArticle();
    });

    it('Edit arcticle', () => {
        const articalePage = homePage.header.launchNewArticlePage();
        articalePage
            .createNewArticle()
            .getArticleMeta().should('be.visible');
        articalePage
            .editArticle(articalePage.newTitle)
            .getArticleTitle().should('contain', articalePage.newTitle);
        articalePage.deleteArticle();
    });


})