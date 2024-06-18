import { selectByTestId } from '../../helpers/selectByTestId';
import { USER_LOCALSTORAGE_KEY } from '@/shared/consts/localstorage'

export const onInitUser = () => {
	window.localStorage.setItem(USER_LOCALSTORAGE_KEY, 'dfkjldshgjkfgsfgjkfdlgjkfd')
	cy.intercept({method: 'GET', url: 'https://shift-backend.onrender.com/users/session'}, {statusCode: 200, body: {
		success: true,
		user: {
			phone: "89990009999",
    	firstname: "firstname",
    	middlename: "middlename",
    	lastname: "lastname",
    	email: "email@gmail.com",
    	city: "city"
		}
	}} )
};
export const getByTestId = (testId: string) => {
	return cy.get(selectByTestId(testId));
};

declare global {
	namespace Cypress {
		interface Chainable {
			getByTestId(testId: string): Chainable<JQuery<HTMLElement>>;
			onInitUser(): Chainable;
		}
	}
}