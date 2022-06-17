import ArticlePage from "./ArticlePage";

class HeaderPage {
    constructor(){}

    getHomeButton(){
        const homeButton = cy.xpath('(//ul[@show-authed="true"]/li)[1]/a');
        return homeButton;
    } 

    getNewArticleButton(){
        const newArticleButton = cy.xpath('(//ul[@show-authed="true"]/li)[2]/a');
        return newArticleButton;
    } 

    getSettingsButton(){
        const settingsButton = cy.xpath('(//ul[@show-authed="true"]/li)[3]/a');
        return settingsButton;
    }
    
    getProfileButton(){
        const profileButton = cy.get('.nav-link.ng-binding.active');
        return profileButton;
    }

    launchNewArticlePage (){
        this.getNewArticleButton().click();
        return new ArticlePage
    }
}

export default HeaderPage;