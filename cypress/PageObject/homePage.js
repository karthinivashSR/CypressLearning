class HomePage 
{
    visitHomePageUrl() 
    {
        return cy.visit('https://the-internet.herokuapp.com/')
    }
    getHomePageHeading()
    {
        return cy.get('h1.heading')
    }
    getABTestingHyperText()
    {
        return cy.get("a[href='/abtest']")
    }
    
    getWYSIWYGEditorHyperText()
    {
        return cy.get("a[href='/tinymce']")
    }
}

export default HomePage