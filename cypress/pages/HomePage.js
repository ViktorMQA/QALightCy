import BasicPage from "./BasicPage";
import HeaderPage from "./HeaderPage";


class HomePage extends BasicPage {
    constructor(){
        super();
        this.path = '/#/';
        this.header = new HeaderPage;
    }

    getProfileIcon(){
        const profileIcon = cy.xpath('//a[@class = "nav-link ng-binding"]');
        return profileIcon;
    }
}

export default HomePage;