export const onGetOrders = () => {
	cy.intercept({method: 'GET', url: 'https://shift-backend.onrender.com/cinema/orders'}, {statusCode: 200, body: {
		success: true,
		orders: [
			{
				filmName: "string",
				orderNumber: 0,
				tickets: [
					{
						filmId: "string",
						row: 1,
						column: 1,
						seance: {
						date: "19.06.23",
						time: "21:50"
						},
						phone: "89990009999"
					}
				],
				phone: "89990009999",
				status: "PAYED"
			}
		]
	}} )
};


declare global {
	namespace Cypress {
		interface Chainable {
			onGetOrders(): Chainable;
		}
	}
}