import { Sequelize } from "sequelize";
class Database {
    static instance;
    constructor() { }
    static getInstance() {
        if (!Database.instance) {
            Database.instance = new Sequelize("feedback project", "postgres", "root", {
                host: "localhost",
                dialect: "postgres",
            });
        }
        return Database.instance;
    }
}
export let sequelize = Database.getInstance();
export default async function connectDb() {
    try {
        await sequelize.authenticate();
        console.log("Database connection has been started");
    }
    catch (error) {
        console.error("Unable to connect to the database:", error);
    }
}
