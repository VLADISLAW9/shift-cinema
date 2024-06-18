import * as commonCommands from './commands/common'
import * as ordersCommands from './commands/orders'

Cypress.Commands.addAll(commonCommands)
Cypress.Commands.addAll(ordersCommands)