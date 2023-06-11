const express = require("express");
const router = express.Router();

const articleController = require("../controllers/article.controller");
router.get("/findall", articleController.findAll);
router.get("findone/:title", articleController.findOne);
router("/create", articleController.create);
router("update", articleController.update);
router.delete("/delete/:title", articleController.delete);

module.exports = router;
