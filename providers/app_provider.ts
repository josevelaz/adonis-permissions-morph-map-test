import type { ApplicationService } from '@adonisjs/core/types'
import User from '#models/user'
import Module from '#models/module'
import Document from '#models/document'

export default class AppProvider {
  constructor(protected app: ApplicationService) {}

  /**
   * Register bindings to the container
   */
  register() {}

  /**
   * The container bindings have booted
   */
  async boot() {
    const morhpManager = await this.app.container.make('morphMap')
    morhpManager.set('users', User)
    morhpManager.set('modules', Module)
    morhpManager.set('documents', Document)
    // morhpManager.set('account', Account) // or whatever it is
  }

  /**
   * The application has been booted
   */
  async start() {}

  /**
   * The process has been started
   */
  async ready() {}

  /**
   * Preparing to shutdown the app
   */
  async shutdown() {}
}
