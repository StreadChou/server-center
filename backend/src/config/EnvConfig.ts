import * as dotenv from 'dotenv'

dotenv.config()

export const EnvConfig = {
    PORT: process.env.APP_PORT ?? 3000,
    db_host: process.env.DB_HOST ?? "localhost",
    db_port: parseInt(process.env.DB_PORT) ?? 3000,
    db_username: process.env.DB_USER ?? 'root',
    db_password: process.env.DB_PASSWORD ?? 'root',
    db_database: process.env.DB_DATABASE ?? 'root',
}
