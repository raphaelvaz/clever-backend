module.exports = {
    "type": "postgres",
    "url": "postgres://postgres:clever@localhost:5433/clever",
    "entities": [
        "src/infra/orm/entity/**/*.ts"
    ],
    "migrations": [
        "src/infra/orm/migration/**/*.ts"
    ],
    "cli": {
        "migrationsDir": "./src/infra/orm/migrations"
    }
}