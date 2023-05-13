describe ('Learn Fixtures', function()
{

    before(function()
    {
        cy.fixture('example').then(function(val)
        {
            this.data = val;
        })
    })
     
    it('test1', () =>
    {
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.get('input[name="name"]:nth-child(2)').type(this.data.name)
        cy.get('#exampleFormControlSelect1').select(this.data.gender)
    })
})