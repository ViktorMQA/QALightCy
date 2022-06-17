import BasicPage from './BasicPage';


class SiginPage extends BasicPage{
    constructor(){
        super();
        this.path = '/#/login'
    }

    getSignInHeader(){
        const signInHeader = cy.xpath('//h1');
        return signInHeader;
    }

    getEmailField(){
        const emailField = cy.xpath('//input[@type="email"]');
        return emailField;
    }

    getPassField(){
        const passField = cy.xpath('//input[@type="password"]');
        return passField;
    }


    getSignInButton(){
        const signInButton = cy.xpath('//button[@type = "submit"]');
        return signInButton;
    }
    

    fillEmail(email){
      this.getEmailField().clear();
      this.getEmailField().type(email)
      return this;

    }

    fillPass(pass){
        this.getPassField().clear();
        this.getPassField().type(pass)
        return this;
    }

    clickSignInButton(){
        this.getSignInButton().click();
        return this;
    }
    
    logIn(email, pass){
        this.fillEmail(email)
        .fillPass(pass)
        .clickSignInButton()
        return this;
    }

}

export default SiginPage;