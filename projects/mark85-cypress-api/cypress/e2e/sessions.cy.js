describe('POST /sessions', ()=> {

    it('user session', () => {

        const userData = {
            name: 'montanher',
            email: "gabrielmontanherr@gmail.com",
            password: "123456"
        }

        cy.postSession(userData)
            .then(response => {

                const {user, token} = response.body

                expect(response.status).to.eq(200)
                expect(user.name).to.eq(userData.name)
                expect(user.email).to.eq(userData.email)
                expect(token).not.to.be.empty

            })
    })

    it('invalid password', () => {
        const user = {
            email: 'gabrielmontanherr@gmail.com',
            password: '123'
           }
    
           cy.postSession(user)
            .then(response => {
                expect(response.status).to.eq(401)
            })
    })

    it('email not found', () => {
       const user = {
        email: '4042@yahoo.com',
        password: '1234567'
       }

       cy.postSession(user)
        .then(response => {
            expect(response.status).to.eq(401)
        })
    })
})

Cypress.Commands.add('postSession', (user) => {
    cy.api({
        url: '/sessions',
        method: 'POST',
        body: { email: user.email, password: user.password },
        failOnStatusCode: false
    }).then(response => { return response })
})