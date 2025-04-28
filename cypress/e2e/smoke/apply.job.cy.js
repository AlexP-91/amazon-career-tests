import homePage from "../../page_objects/home.page";
import jobDetailsPage from "../../page_objects/job.details.page";
import jobsListPage from "../../page_objects/jobs.list.page";
import loginPage from "../../page_objects/login.page";
import uiTexts from "../../fixtures/uiTexts.json"
import testData from "../../fixtures/testData.json"

describe('Apply Now Flow', () => {
    it('Should click Apply Now, open and fill application form', () => {
        cy.visit('/');
        homePage.serchInpt.type(testData.searchingRole);
        homePage.searchBtn.click();
        jobsListPage.jobTitles.first().click();
        jobDetailsPage.applyBtn.click();

        cy.url().should('include', '/login');
        loginPage.loginWithTitle.should('include.text', uiTexts.loginTitle)
    });
});