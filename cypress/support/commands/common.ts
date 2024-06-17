import { selectByTestId } from '../../helpers/selectByTestId';
import { USER_LOCALSTORAGE_KEY } from '../../../src/shared/consts/localstorage';
import { User } from '../../../src/entities/User';

export const onInitUser = () => {
	cy.intercept('POST', 'https://shift-backend.onrender.com/users/auth', {
		statusCode: 200,
		body: {
			success: true,
    	user: {
        _id: "662627ea56942ffdf8937fda",
        phone: "78888888888",
        city: "Нью Йорк",
        email: "boysergeew@mai.ru",
        firstname: "Логан",
        lastname: "Курт",
        middlename: "Иван"
   	 	},
    	token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZSI6Ijc4ODg4ODg4ODg4IiwiaWF0IjoxNzE4NjU0NjIwfQ.5SDeVS6TGHc4XPalfRhXOWDHyY1GlO99tM64a2pfAD0"
		}
	}).as('authRequest');
	cy.wait('@authRequest').should(({ request, response }) => {
		window.localStorage.setItem(USER_LOCALSTORAGE_KEY, response?.body.token)
	})
};
export const getByTestId = (testId: string) => {
	return cy.get(selectByTestId(testId));
};

declare global {
	namespace Cypress {
		interface Chainable {
			getByTestId(testId: string): Chainable<JQuery<HTMLElement>>;
			onInitUser(): Chainable<User>;
		}
	}
}