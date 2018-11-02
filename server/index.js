let express = require("express");
let bodyParser = require("body-parser");
const cj = require("./controller");
const massive = require("massive");
require("dotenv").config();

const app = express();

const port = 4000;
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then(dbInstance => {
  app.set("db", dbInstance);
});

app.get("/api/inventory", cj.getInventory);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
