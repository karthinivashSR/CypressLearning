describe('Automation test practice', function() 
{
    it('Cypress learning', () =>
    {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        // cy.get('')
        cy.get('input.radioButton[value="radio2"]').click()
        cy.get('#autocomplete').type('ar')
        cy.get('.ui-menu-item').each(($country,index,$list) =>
        {
            if ($country.text() === 'Argentina')
            {
                $country.click()
            }
        })
        //validate value in drop down
        cy.get('#autocomplete').should('have.value','Argentina')
        cy.get('select').select('option3').invoke('val').should('eq','option3')
        //Check a checkbox
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
        //Uncheck a checkbox
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked').and('have.value','option1')
        //Check multiple check box
        cy.get('input[type="checkbox"]').check(['option3','option2'])
        //validate button
        //check for visibility
        cy.get('#displayed-text').should('be.visible')
        cy.get('#displayed-text').type('Nivash')
        cy.get('#hide-textbox').click()
        //check for not visible
        cy.get('#displayed-text').should('not.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')

    })
})