const express = require ("express");
const router = express.Router();

const Item = require("../controllers/item");

const teste = (req, res) => {
    res.send("Back-end respondendo");
}

router.get("/", teste);
router.post("/item", Item.create);
router.get("/item", Item.read);
router.put("/item/:id", Item.update);
router.delete("/item/:id", Item.del);


module.exports = router;