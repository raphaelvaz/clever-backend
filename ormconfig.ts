module.exports = {
    "type": "postgres",
    "url": "postgres://postgres:1234@localhost:5433/clever",
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