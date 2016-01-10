module.exports = {
  development: {
    username: 'root',
    password: null,
    database: 'doujinDB_development',
    host: '127.0.0.1',
    dialect: 'mysql'
  },
  test: {
    username: 'root',
    password: null,
    database: 'doujinDB_test',
    host: '127.0.0.1',
    dialect: 'mysql',
    logging:() => {}
  },
  production: {
    username: 'root',
    password: null,
    database: 'database_production',
    host: '127.0.0.1',
    dialect: 'mysql'
  }
};
