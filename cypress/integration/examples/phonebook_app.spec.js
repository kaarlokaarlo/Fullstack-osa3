
describe('Phonebook app ', function() {

    /*

    ||   IMPORTANT   ||
    make sure you are using the testing environment when running tests because you don't want to use the actual data base,
    i.e make sure your local Node server is started with command: npm run test
    */

    
    beforeEach(function(){

        // clears all contacts from DB
        cy.request('POST','http://localhost:3001/reset')


        cy.visit('http://localhost:3001')
        
        // placing few intitial contacts
        const contact1 = {
            name: "Kaarlo",
            number: "5500555555555",
        }

        const contact2 = {
            name: "Kake",
            number: "888888888888",
        }
        const contact3 = {
            name: "Taco Cat",
            number: "8444444444",
        }

        const contact4 = {
            name: "Eino Leino",
            number: "11111111111",
        }
        cy.request('POST', 'http://localhost:3001/api/persons/', contact1)
        cy.request('POST', 'http://localhost:3001/api/persons/', contact2)
        cy.request('POST', 'http://localhost:3001/api/persons/', contact3)
        cy.request('POST', 'http://localhost:3001/api/persons/', contact4)
    })

    it('Page opens', function() {
      cy.contains('Phonebook')
    })

    it('Info page works', function() {
        cy.visit('http://localhost:3001/info')
        cy.contains('Phonebook has info of 3 people')
        cy.contains('Greenwich Mean Time')
    })

    it('Handles unknown endpoints, i.e. returns 404', function() {
        cy.request({url: '/404', failOnStatusCode: false}).its('status').should('equal', 404)
    })

    describe('Adding new contacts', function() {
        it('New contact can be added with suitable nro and name', function() {

        //bad way of finding the correct input field with indexes of input fields, would be better to use ids for them
        // but I did not want to (nor have the time) to create new build from the frontend of the project
            cy.get('input').eq(1).type("John Doe") 
            cy.get('input').eq(2).type("5655656565")
            cy.contains('add').click()
            cy.wait(200)

            //making sure the contact was properly added (reload also clears the inputs)
            cy.reload()
            cy.contains('John Doe')

        })

        it('New contact cannot be added with number shorter than 8 digits', function() {
            cy.get('input').eq(1).type("John Shortnumber") 
            cy.get('input').eq(2).type("44")
            cy.contains('add').click()

            cy.reload()
            cy.get('html').should('not.contain','John Shortnumber')
        })

        it('New contact can be added with number 8 digits long', function() {
            cy.get('input').eq(1).type("John Eightlong") 
            cy.get('input').eq(2).type("12345678")
            cy.contains('add').click()
            cy.wait(200)

            cy.reload()
            cy.get('html').should('contain','John Eightlong')
        })

        it('New contact cannot be added with too short name', function() {
            cy.get('input').eq(1).type("Jo") 
            cy.get('input').eq(2).type("441212121212")
            cy.contains('add').click()

            cy.reload()
            cy.get('html').should('not.contain','Jo')
        })

        it('New contact can be added with name 3 digits long', function() {
            cy.get('input').eq(1).type("Jox") 
            cy.get('input').eq(2).type("1010101010010")
            cy.contains('add').click()
            cy.wait(200)

            cy.reload()
            cy.get('html').should('contain','Jox')
        })
    })


    describe('Modifying contacts', function() {
        it('You cannot add the same person twice', function() {

            //app asks if you want to modify already existing contact using window.confirm()
            // so we say no - we want to see if we can create new one
            //on default Cypress says yes to all window.confirms
            cy.on('window:confirm', () => {
                return false 
            })
            
            cy.get('input').eq(1).type("Kaarlo") 
            cy.get('input').eq(2).type("7777777777777")
            cy.contains('add').click()

            cy.wait(200)

            cy.reload()
            cy.get('html').should('not.contain','7777777777777')
        })

        it('You can modify existing contacts number', function() {
            cy.reload()
            cy.get('input').eq(1).type("Kaarlo") 
            cy.get('input').eq(2).type("656565656")
            cy.contains('add').click()
            cy.wait(200)

            cy.reload()
            cy.get('html').should('contain','656565656')
        })

        it('You can delete contact', function() {


            cy.get('input').eq(1).type("Gonne Begone") 
            cy.get('input').eq(2).type("111111111111")

            //added delays because Cypress going fullspeed appears to brake the page, function calls, button clicks etc.
            // probably because it is calling the methods faster than the server has time to answer
            cy.wait(200)
            cy.contains('add').click()
            cy.wait(200)

            cy.on('window:confirm', () => {
                return true 
            })

            cy.get('button').last().click()
            cy.wait(200)

            cy.reload()
            cy.wait(200)
            cy.get('html').should('not.contain','Gonna Begone')
        })
    })
    
    describe('Filter', function(){
        it('Filter test', function(){
            cy.reload()
            cy.get('input:first').type('ka')
            cy.contains('Kaarlo')
            cy.contains('Kake')
            cy.get('html').should('not.contain','Taco Cat')
            cy.get('html').should('not.contain','Eino Leino')

        })
    })

    // these will not pass, since functionality is not implemented
    // if you want to run them anyway remove '.skip'
    describe.skip('Tests for functionality not yet implemented (for TDD)', function(){
        it('App prevents inserting value Number in name-field', function(){
            cy.reload()
            cy.get('input').eq(1).type(1234)
            cy.get('input').eq(2).type(555555555)
            cy.contains('add').click()
            cy.wait(200)
            cy.get('html').should('not.contain',1234)
        })
        it('App prevents inserting value String in number-field', function(){
            cy.reload()
            cy.get('input').eq(1).type("Person")
            cy.get('input').eq(2).type("this-is-not-number")
            cy.contains('add').click()
            cy.wait(200)
            cy.get('html').should('not.contain','Person')
        })
    })

  })