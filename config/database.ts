import app from '@adonisjs/core/services/app'
import { defineConfig } from '@adonisjs/lucid'

const dbConfig = defineConfig({
  connection: 'libsql',
  connections: {
    libsql: {
      client: 'libsql',
      connection: {
        filename: `file:${app.tmpPath('libsql.db')}`
      },
      useNullAsDefault: true,
      migrations: {
        naturalSort: true,
        paths: ['database/migrations'],
      },
    },
  },
})

export default dbConfig