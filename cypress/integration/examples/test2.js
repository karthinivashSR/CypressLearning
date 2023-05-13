describe
('My First test suite', function()
{
    it('Learning', function()
    {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('input.search-keyword').type('ca')
        cy.get('button.search-button').click()
        cy.wait(1000)
        cy.get('.product:visible').should('have.length',4)
        //Parent child Chaining
        cy.get('.products').find('.product').should('have.length',4)
        //Get the second product from the array of products
        cy.get('.products').find('.product').eq(1)
        //Get the specific button of the specific product
        cy.get('.products').find('.product').eq(1).contains('ADD TO CART')
        //Click on the specific prodict's button
        cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click()
        //Using each to get the product from the array
        cy.get('.products').find('.product').each(($element1,index,$listLength) => 
        {
            const elementName = $element1.find('h4.product-name').text()
            if (elementName.includes('Capsicum'))
            {
                cy.wrap($element1).find('button').click()
            }
        })
        //resolving promise 
        //here text() is not a cypress command/function
        // cy.log(cy.get('div.brand.greenlogo').text())  //<- ERR code
        //Promise resolved using then()
        cy.get('div.brand.greenlogo').then(function($ExpectedText)
        {
            cy.log($ExpectedText.text())
        })
        //CANNOT assign to a variable without resolving 
        // const logo = cy.get('div.brand.greenlogo')  //<- ERR code
        // cy.log(logo.text())
        cy.get('div.brand.greenlogo').then(function($logo)
        {
            const logo = $logo.text()
            cy.log(logo)
        })
        //assert if text is matching or not
        cy.get('div.brand.greenlogo').should('have.text','GREENKART')
        cy.get('a.cart-icon').click()
        cy.contains('PROCEED TO CHECK').click()
        cy.contains('Place Order').click()
        //Select from Drop down
        cy.get('select').select('Indonesia').invoke('val').should('eq','Indonesia')
        // cy.log('Lenght of select : ' + cy.get('.wrapperTwo').find('.selectProduct').find('select').its('length').should('eq',70))
        // cy.get('.products').find('select').each(($element1,index,$list) =>
        // {
        //     cy.log('Each')
        //     if($element1.text() === 'India')
        //     {
        //         cy.log('If')
        //         $element1.click()
        //     }
        // })

        //Check checkbox and check whether it is checked or not
        cy.get('input.chkagree').check().should('be.checked')
        //Uncheck checkbox and check whether it is unchecked or not
        cy.get('input.chkagree').uncheck().should('not.be.checked')
        cy.get('input.chkagree').check().should('be.checked')
        //Check Multiple checkbox
        // cy.get('input[type="checkbox"]').check(['.chkagree',''])
        cy.contains('Proceed').click()

    })

    it('test1', () =>
    {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        //assert if text is matching or not
        cy.get('div.brand.greenlogo').should('have.text','GREENKART')
    })

})