//Cypress - Spec
import HomePage from "../../PageObject/homePage";

describe('Herocuapp Test', function()
{

    it('homePageTest', function() 
    {
        const homePage = new HomePage()
        homePage.visitHomePageUrl()

        homePage.getHomePageHeading().then(($homePageHeading) =>
        {
            const title = $homePageHeading.text()
            expect(title).contains('Welcome')
        })
        //ALTERNATE APPROACH

        // homePage.getHomePageHeading().invoke('text').then(($homePageHeading) =>
        // {
        //     expect($homePageHeading).contains('Welcome')
        // })

        if(homePage.getABTestingHyperText()) { cy.log('AB Testing hyper text does exist in Home Page') }
        else { cy.log('AB Testing hyper text doesn\'t exist') }

        if(homePage.getWYSIWYGEditorHyperText()) { cy.log('WYSIWYG Editor hyper text does exist in Home Page') }
        else { cy.log('WYSIWYG Editor hyper text doesn\'t exist') }

    })
})