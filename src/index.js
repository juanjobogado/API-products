import app from "./app";
import { sequelize } from "./database/database";
const fs = require("fs")

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

await sequelize.sync({ force: true }).then(() => {
    app.listen(3001, () => {
      console.log('%s listening at 3001'); // eslint-disable-line no-console
    });
    fs.readFile("foodApi.json", (error, data) => {
      if(error) throw error;
      let dietsSet = new Set();
      let json = JSON.parse(data);
      let arr = json.results?.map((e) => {
  
        e.diets?.forEach( diet => dietsSet.add(diet))
       
  
        return Recipe.create({
          id: e.id,
          title: e.title,
          summary: e.summary,
          healthScore: e.healthScore,
          image: e.image,
          steps: e.analyzedInstructions[0]?.steps.map((a)=>{
            return {
              number: a.number,
              step: a.step
            }
          }),
        
        })
      })
  
      let counter = 0
      let diets = [...dietsSet].map(diet => Type.create({id: counter++, name:diet}))
      Promise.all(arr)
      Promise.all(diets)
    })
  });