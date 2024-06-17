describe('Роутинг', () => {
	describe('Пользователь авторизован', () => {
		beforeEach(() => {
			cy.onInitUser();
		})
		it('Переходит на страницу фильмов', () => {
			cy.visit('')
			cy.getByTestId('FilmsPage').should('exist')
		});
		it('Переходит на страницу фильма', () => {
			cy.visit('/films/1')
			cy.getByTestId('FilmDetailsPage').should('exist')
		});
		it('Переходит на страницу профиля', () => {
			cy.visit('/profile')
			cy.getByTestId('ProfilePage').should('exist')
		});
		it('Переходит на страницу билетов', () => {
			cy.visit('/orders')
			cy.getByTestId('OrdersPage').should('exist')
		});
		it('Переходит на несуществующую страницу', () => {
			cy.visit('/-1')
			cy.getByTestId('NotFoundPage').should('exist')
		});
	})
	describe('Пользователь НЕ авторизован', () => {
		it('Переходит на страницу фильмов', () => {
			cy.visit('')
			cy.getByTestId('FilmsPage').should('exist')
		});
		it('Переходит на страницу фильма', () => {
			cy.visit('/films/1')
			cy.getByTestId('FilmDetailsPage').should('exist')
		});
		it('Переходит на страницу профиля', () => {
			cy.visit('/profile')
			cy.getByTestId('AuthPage').should('exist')
		});
		it('Переходит на страницу билетов', () => {
			cy.visit('/orders')
			cy.getByTestId('AuthPage').should('exist')
		});
		it('Переходит на страницу авторизации', () => {
			cy.visit('/auth')
			cy.getByTestId('AuthPage').should('exist')
		});
		it('Переходит на несуществующую страницу', () => {
			cy.visit('/-1')
			cy.getByTestId('NotFoundPage').should('exist')
		});
	})
})