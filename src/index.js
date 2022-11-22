import app from "./app";
import { sequelize } from "./database/database";
const fs = require("fs")

// async function main() {
//     try {
//         await sequelize.sync({ force: false });
//         app.listen(3001, () => {
//             console.log("listening on port", 3001);
//         });
//     } catch (error) {
//         console.log("error", error);
//     }
// }

// main();

await sequelize.sync({ force: true }).then(() => {
    app.listen(3001, () => {
      console.log('%s listening at 3001'); // eslint-disable-line no-console
    });
    fs.readFile("foodApi.json", (error, data) => {
      if(error) throw error;
      let json = JSON.parse(data);
      let arr = json.results?.map((e) => {
  
    
  
        return Product.create({
          id: e.id,
          title: e.title,
          description: e.description,
          price: e.price,
          image: e.image,
          categories: e.categories,
        
        })
      })
  
      Promise.all(arr)
    })
  });