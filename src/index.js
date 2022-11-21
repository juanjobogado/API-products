import app from "./app";
import { sequelize } from "./database/database";

async function main() {
    try {
        await sequelize.sync({ force: false });
        app.listen(3001, () => {
            console.log("listening on port", 3001);
        });
    } catch (error) {
        console.log("error", error);
    }
}

main();
