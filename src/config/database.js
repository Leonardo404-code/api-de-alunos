require('dotenv').config();

module.exports = {
  dialect: 'mariadb',
  host: 'Your-database-adress',
  port: 'your-database-port',
  username: 'user',
  password: 'your-password',
  database: 'database-name',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
  dialectOptions: {
    timezone: 'America/Sao_Paulo',
  },
  timezone: 'America/Sao_Paulo',
};
