import { DateTime } from 'luxon'
import { BaseModel, column, hasOne } from '@adonisjs/lucid/orm'
import Module from './module.js'
import type { HasOne } from '@adonisjs/lucid/types/relations'
import { AclModelInterface, ModelIdType } from '@holoyan/adonisjs-permissions/types'
// import { MorphMap } from '@holoyan/adonisjs-permissions'

// @MorphMap('documents')
export default class Document extends BaseModel implements AclModelInterface {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare moduleId: number

  @column()
  declare name: string

  @hasOne(() => Module)
  declare module: HasOne<typeof Module>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  getModelId(): ModelIdType {
    return this.id
  }
}
