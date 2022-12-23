import { Sequelize, DataTypes } from 'sequelize';

export const dbConfig = {
    HOST     : process.env.DB_HOST,
    USER     : process.env.DB_USER_NAME,
    PASSWORD : process.env.DB_USER_PASSWORD,
    DB       : process.env.DB_NAME,
    dialect  : process.env.dialect,
    pool     : {
        max     : 20,
        min     : 0,
        acquire : 30000,
        idle    : 10000,
    },
}

// connect to db
export const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
}
)

//export default { dbConfig, sequelize };