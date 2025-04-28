import CommonComponents  from "./common.components";

class OtpConfirmationPage extends CommonComponents {
    get codeInpt() {return cy.get('#verificationFormCodeInputField')}
}

export default new OtpConfirmationPage();