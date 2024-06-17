describe('Пользователь заходит на страницу фильмов', () => {
	beforeEach(() => {
		cy.visit('')
	})

	it('и фильмы отображаются', () => {
		cy.getByTestId('film_list').should('exist')
	})
})