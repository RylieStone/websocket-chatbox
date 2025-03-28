const sharedConfig = {
  client: 'sqlite3',
  useNullAsDefault: true,
  migrations: { 
    directory: './data/migrations',
    extension: 'cjs'
  },
  pool: { afterCreate: (conn, done) => conn.run('PRAGMA foreign_keys = ON', done) },
}

module.exports = {
  development: {
    ...sharedConfig,
    connection: { filename: './data/chat.db3' },
    seeds: { directory: './data/seeds' },
  },
  testing: {
    ...sharedConfig,
    connection: { filename: './data/test.db3' },
  },
};
