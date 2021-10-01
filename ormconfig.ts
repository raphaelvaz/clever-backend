module.exports = {
    "type": "postgres",
    "url": process.env.DATABASE_URL,
    "entities": [
        "src/infra/orm/models/**/*.ts"
    ],
    "migrations": [
        "src/infra/orm/migrations/**/*.ts"
    ],
    "cli": {
        "migrationsDir": "./src/infra/orm/migrations"
    }
}