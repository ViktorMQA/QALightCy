import ErrorsPage from "./ErrorsPage";
import HeaderPage from "./HeaderPage";

const errors = new ErrorsPage;

class ArticlePage {
    constructor() {
        this.errors = errors;
        this.header = new HeaderPage;
    }

    titlePlasholder = 'Article Title';
    aboutPlaceholder = 'What\'s this article about?';
    bodyPlaceholder = 'Write your article (in markdown)';

    newTitle = 'New article title';

    getArticleTitleField() {
        const articleTitleField = cy.xpath('//input[@placeholder="Article Title"]');
        return articleTitleField;
    }

    getArticleAboutField() {
        const articleAboutField = cy.xpath('//input[contains(@placeholder, "this article about?")]');
        return articleAboutField;
    }

    getArticleBodyField() {
        const articleBodyField = cy.xpath('//textarea[contains(@placeholder, "Write your article")]');
        return articleBodyField;
    }

    getPublishArticleButton() {
        const publishButton = cy.xpath('//button');
        return publishButton;
    }

    getArticleMeta() {
        const articleMeta = cy.get('.article-meta')
        return articleMeta;
    }

    getDeleteArticleButton() {
        const deleteArticleButton = cy.xpath('(//button[@class="btn btn-outline-danger btn-sm"])[1]');
        return deleteArticleButton;
    }

    getEditArticleButton() {
        const editArticleButton = cy.xpath('(//a[@class="btn btn-outline-secondary btn-sm"])[1]');
        return editArticleButton;
    }

    getArticleTitle(){
        const articleTitle = cy.xpath('//h1[@ng-bind="::$ctrl.article.title"]');
        return articleTitle;
    }

    editArticle(newTitle) {
        this.getEditArticleButton().click()
        this.getArticleTitleField().clear().type(newTitle);
        this.publishArticle();
        return this;
    }

    deleteArticle() {
        this.getDeleteArticleButton().click();
        return this;
    }

    fillArticleTitleField() {
        this.getArticleTitleField().type(this.titlePlasholder);
        return this;
    }

    fillArticleAboutField() {
        this.getArticleAboutField().type(this.aboutPlaceholder);
        return this;
    }

    fillArticleBodyField() {
        this.getArticleBodyField().type(this.bodyPlaceholder);
        return this;
    }

    publishArticle() {
        this.getPublishArticleButton().click();
        return this;
    }

    createNewArticle() {
        this.fillArticleTitleField()
            .fillArticleAboutField()
            .fillArticleBodyField()
            .publishArticle();
        return this;
    }

    getError() {
        const error = cy.xpath('//li[@ng-repeat="error in errors"]');
        return error;
    }


}

export default ArticlePage;