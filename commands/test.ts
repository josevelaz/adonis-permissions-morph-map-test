import Document from '#models/document'
import { BaseCommand } from '@adonisjs/core/ace'
import type { CommandOptions } from '@adonisjs/core/types/ace'
import { Acl } from '@holoyan/adonisjs-permissions'
import User from '#models/user'

export default class Test extends BaseCommand {
  static commandName = 'test:roles'
  static description = ''

  static options: CommandOptions = {
    startApp: true,
  }

  async run() {
    const document = await Document.firstOrCreate(
      { name: 'Test' },
      {
        name: 'Test',
      }
    )

    const user = await User.firstOrCreate(
      {
        email: 'test@email.com',
      },
      {
        email: 'test@email.com',
        password: 'secret',
      }
    )

    await Acl.role().create({
      slug: 'admin',
    })

    await Acl.model(user).assign('admin')
    await Acl.model(user).allow('edit', document)

    const hasRole = await Acl.model(user).hasRole('admin')
    const hasWrongRole = await Acl.model(user).hasRole('test')
    const canEdit = await Acl.model(user).can('edit', document)
    console.log({
      hasRole,
      hasWrongRole,
      canEdit,
    })
  }
}
