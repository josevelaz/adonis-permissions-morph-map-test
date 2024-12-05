import Document from '#models/document'
import { BaseCommand } from '@adonisjs/core/ace'
import type { CommandOptions } from '@adonisjs/core/types/ace'

export default class Test extends BaseCommand {
  static commandName = 'test'
  static description = ''

  static options: CommandOptions = {}

  async run() {
    await Document.updateOrCreate(
      { name: 'Test' },
      {
        name: 'Test',
      }
    )
  }
}
