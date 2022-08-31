module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', 'web-worrel.info.ufrn.br'),
      port: env.int('DATABASE_PORT', 8085),
      database: env('DATABASE_NAME', 'proad'),
      user: env('DATABASE_USERNAME', 'webproad'),
      password: env('DATABASE_PASSWORD', 'proad2022-b4EOpSB071'),
      ssl: env.bool('DATABASE_SSL', false),
    },
    acquireConnectionTimeout: 1000000,
    options: {
      debug: false,
      pool: {
        min: 2,
        max: 10,
        createTimeoutMillis: 30000,
        acquireTimeoutMillis: 30000,
        idleTimeoutMillis: 30000,
        reapIntervalMillis: 30000,
        createRetryIntervalMillis: 30000,
        propagateCreateError: false,
      },
    },
    
  },
});
