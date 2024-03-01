const cors = require ("cors");
const bodyParser = require ("body-parser");
const express = require("express");

const routes = require("./src/routes/routes");

const app = express();
app.use(routes);
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, () => {
    console.log("Back-end respondendo na porta 3000");
});