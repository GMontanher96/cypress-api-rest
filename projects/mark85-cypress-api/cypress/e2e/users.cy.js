describe('POST /users', () => {

  it('register a new user', () => {

    const user = {
      name: 'teste',
      email: 'gabrielmontanherrr@gmail.com',
      password: "123456"
    }

    cy.request({
      url: '/users',
      method: 'POST',
      body: user
    }).then(response => {
      expect(response.status).to.eq(200)
    })
  })

})